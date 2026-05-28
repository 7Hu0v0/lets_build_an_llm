const DATA = window.LLM_FRESHER_DATA || { questions: [], batchSize: 10 };
const STORAGE_KEY = "llm-learning-fresher-progress-v1";
const BATCH_SIZE = DATA.batchSize || 10;

const state = {
  batchIndex: 0,
  query: "",
  stage: "all",
  wrongOnly: false,
  shuffle: false,
  order: [],
  progress: loadProgress(),
};

const els = {
  search: document.querySelector("#searchInput"),
  stageFilter: document.querySelector("#stageFilter"),
  wrongOnly: document.querySelector("#wrongOnly"),
  shuffleMode: document.querySelector("#shuffleMode"),
  doneCount: document.querySelector("#doneCount"),
  rightCount: document.querySelector("#rightCount"),
  accuracy: document.querySelector("#accuracy"),
  learningPercent: document.querySelector("#learningPercent"),
  learningBar: document.querySelector("#learningBar"),
  learningText: document.querySelector("#learningText"),
  stageRadarList: document.querySelector("#stageRadarList"),
  exportWrong: document.querySelector("#exportWrong"),
  resetProgress: document.querySelector("#resetProgress"),
  missionMeta: document.querySelector("#missionMeta"),
  missionTitle: document.querySelector("#missionTitle"),
  pageText: document.querySelector("#pageText"),
  prev: document.querySelector("#prevBatch"),
  next: document.querySelector("#nextBatch"),
  batchTag: document.querySelector("#batchTag"),
  batchHint: document.querySelector("#batchHint"),
  batchAnswered: document.querySelector("#batchAnswered"),
  questionGrid: document.querySelector("#questionGrid"),
  batchResult: document.querySelector("#batchResult"),
  revealBatch: document.querySelector("#revealBatch"),
  submitBatch: document.querySelector("#submitBatch"),
  nextAfterBatch: document.querySelector("#nextAfterBatch"),
};

init();

function init() {
  fillStages();
  rebuildOrder();
  bindEvents();
  renderAll();
}

function bindEvents() {
  els.search.addEventListener("input", () => {
    state.query = els.search.value.trim().toLowerCase();
    state.batchIndex = 0;
    rebuildOrder();
    renderAll();
  });

  els.stageFilter.addEventListener("change", () => {
    state.stage = els.stageFilter.value;
    state.batchIndex = 0;
    rebuildOrder();
    renderAll();
  });

  els.wrongOnly.addEventListener("change", () => {
    state.wrongOnly = els.wrongOnly.checked;
    state.batchIndex = 0;
    rebuildOrder();
    renderAll();
  });

  els.shuffleMode.addEventListener("change", () => {
    state.shuffle = els.shuffleMode.checked;
    state.batchIndex = 0;
    rebuildOrder();
    renderAll();
  });

  els.prev.addEventListener("click", () => moveBatch(-1));
  els.next.addEventListener("click", () => moveBatch(1));
  els.nextAfterBatch.addEventListener("click", () => moveBatch(1));
  els.submitBatch.addEventListener("click", submitBatch);
  els.revealBatch.addEventListener("click", revealBatch);
  els.exportWrong.addEventListener("click", exportWrong);
  els.resetProgress.addEventListener("click", resetProgress);
  window.addEventListener("keydown", handleKeys);
}

function fillStages() {
  const stages = [...new Set(DATA.questions.map((question) => question.stage))].sort();
  stages.forEach((stage) => {
    const option = document.createElement("option");
    option.value = stage;
    option.textContent = stage;
    els.stageFilter.append(option);
  });
}

function rebuildOrder() {
  const questions = filteredQuestions();
  state.order = questions.map((question) => question.id);
  if (state.shuffle) {
    state.order.sort((a, b) => seededSort(a) - seededSort(b));
  }
  clampBatchIndex();
}

function filteredQuestions() {
  return DATA.questions.filter((question) => {
    const progress = state.progress[question.id] || {};
    const text = [
      question.stage,
      question.type,
      question.stem,
      question.explanation,
      question.recruiting_translation,
      question.options.map((option) => option.text).join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return (
      (state.stage === "all" || question.stage === state.stage) &&
      (!state.wrongOnly || progress.correct === false) &&
      (!state.query || text.includes(state.query))
    );
  });
}

function seededSort(value) {
  let hash = 7;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 37 + value.charCodeAt(index)) % 10007;
  }
  return hash;
}

function batchCount() {
  return Math.max(1, Math.ceil(state.order.length / BATCH_SIZE));
}

function clampBatchIndex() {
  state.batchIndex = Math.min(Math.max(state.batchIndex, 0), batchCount() - 1);
}

function currentBatch() {
  const start = state.batchIndex * BATCH_SIZE;
  return state.order
    .slice(start, start + BATCH_SIZE)
    .map((id) => DATA.questions.find((question) => question.id === id))
    .filter(Boolean);
}

function moveBatch(direction) {
  state.batchIndex += direction;
  clampBatchIndex();
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAll() {
  renderStats();
  renderRadar();
  renderQuiz();
}

function renderStats() {
  const answers = Object.values(state.progress).filter((item) => item.answered);
  const right = answers.filter((item) => item.correct).length;
  const percent = DATA.questions.length ? Math.round((answers.length / DATA.questions.length) * 100) : 0;

  els.doneCount.textContent = answers.length;
  els.rightCount.textContent = right;
  els.accuracy.textContent = answers.length ? `${Math.round((right / answers.length) * 100)}%` : "0%";
  els.learningPercent.textContent = `${percent}%`;
  els.learningBar.style.width = `${percent}%`;
  els.learningText.textContent = `${answers.length} / ${DATA.questions.length} signals calibrated`;
}

function renderRadar() {
  const stages = [...new Set(DATA.questions.map((question) => question.stage))].sort();
  els.stageRadarList.innerHTML = "";

  stages.forEach((stage) => {
    const stageQuestions = DATA.questions.filter((question) => question.stage === stage);
    const answered = stageQuestions.filter((question) => (state.progress[question.id] || {}).answered);
    const wrong = answered.filter((question) => (state.progress[question.id] || {}).correct === false);
    const mastery = answered.length ? Math.round(((answered.length - wrong.length) / answered.length) * 100) : 0;
    const row = document.createElement("button");
    row.className = "radar-row";
    row.type = "button";
    row.innerHTML = `
      <span>${escapeHTML(stage)}</span>
      <strong>${mastery}%</strong>
      <i style="--mastery:${mastery}%"></i>
    `;
    row.addEventListener("click", () => {
      state.stage = stage;
      els.stageFilter.value = stage;
      state.batchIndex = 0;
      rebuildOrder();
      renderAll();
    });
    els.stageRadarList.append(row);
  });
}

function renderQuiz() {
  const batch = currentBatch();
  const totalBatches = batchCount();
  const submitted = isBatchSubmitted(batch);
  const answered = batch.filter((question) => selectedAnswers(question).length).length;

  els.pageText.textContent = `${state.order.length ? state.batchIndex + 1 : 0} / ${totalBatches}`;
  els.prev.disabled = state.batchIndex <= 0;
  els.next.disabled = state.batchIndex >= totalBatches - 1;
  els.nextAfterBatch.disabled = state.batchIndex >= totalBatches - 1;
  els.nextAfterBatch.hidden = !submitted;

  if (!batch.length) {
    els.missionMeta.textContent = "No matching signal";
    els.missionTitle.textContent = "Adjust filters";
    els.batchTag.textContent = "Empty";
    els.batchHint.textContent = "No questions match the current mission filter.";
    els.batchAnswered.textContent = "0 / 0";
    els.questionGrid.innerHTML = `<div class="empty-state">No matching questions.</div>`;
    els.batchResult.hidden = true;
    els.submitBatch.disabled = true;
    els.revealBatch.disabled = true;
    return;
  }

  const start = state.batchIndex * BATCH_SIZE + 1;
  const end = start + batch.length - 1;
  els.missionMeta.textContent = `${DATA.source} · Signal ${start}-${end}`;
  els.missionTitle.textContent = state.stage === "all" ? "10-Signal Fresher Drill" : `${state.stage} Drill`;
  els.batchTag.textContent = `Batch ${String(state.batchIndex + 1).padStart(2, "0")}`;
  els.batchHint.textContent = submitted ? "Batch scored. Review signals before continuing." : "Complete the batch before submitting.";
  els.batchAnswered.textContent = `${answered} / ${batch.length}`;
  els.submitBatch.disabled = submitted || answered < batch.length;
  els.revealBatch.disabled = submitted;
  els.questionGrid.innerHTML = "";

  batch.forEach((question, index) => {
    els.questionGrid.append(renderQuestion(question, start + index, submitted));
  });

  renderBatchResult(batch, submitted);
}

function renderQuestion(question, displayNumber, submitted) {
  const progress = state.progress[question.id] || {};
  const showAnswer = submitted || progress.revealed;
  const article = document.createElement("article");
  article.className = "question-card";
  article.innerHTML = `
    <div class="question-head">
      <span class="tag">${escapeHTML(question.stage)}</span>
      <span>${escapeHTML(question.type)}</span>
    </div>
    <h3>${displayNumber}. ${escapeHTML(question.stem)}</h3>
    <div class="options"></div>
    <div class="feedback" ${showAnswer ? "" : "hidden"}>
      <strong>${escapeHTML(answerLine(question, progress))}</strong>
      <p>${escapeHTML(question.explanation)}</p>
      <p class="translation">${escapeHTML(question.recruiting_translation)}</p>
      <a href="./${encodeURI(question.source)}" target="_blank" rel="noreferrer">Open reference</a>
    </div>
  `;

  const options = article.querySelector(".options");
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.innerHTML = `
      <span class="letter">${escapeHTML(option.label)}</span>
      <span class="option-text">${escapeHTML(option.text)}</span>
    `;
    decorateOption(button, question, option.label, showAnswer);
    button.addEventListener("click", () => chooseOption(question, option.label));
    options.append(button);
  });

  return article;
}

function decorateOption(node, question, label, showAnswer) {
  const selected = selectedAnswers(question).includes(label);
  const correct = question.answer.includes(label);
  node.classList.toggle("selected", selected);
  if (showAnswer) {
    node.classList.toggle("correct", correct);
    node.classList.toggle("incorrect", selected && !correct);
  }
}

function selectedAnswers(question) {
  return (state.progress[question.id] || {}).choice || [];
}

function chooseOption(question, label) {
  const progress = state.progress[question.id] || {};
  if (progress.answered) return;

  let choice = selectedAnswers(question);
  if (question.type === "multi_choice") {
    choice = choice.includes(label) ? choice.filter((item) => item !== label) : [...choice, label].sort();
  } else {
    choice = [label];
  }

  state.progress[question.id] = {
    ...progress,
    choice,
    answered: false,
    revealed: false,
  };
  saveProgress();
  renderAll();
}

function submitBatch() {
  const batch = currentBatch();
  const unanswered = batch.filter((question) => !selectedAnswers(question).length);
  if (unanswered.length) {
    window.alert(`Still waiting for ${unanswered.length} signal(s).`);
    return;
  }

  batch.forEach((question) => {
    const choice = selectedAnswers(question);
    state.progress[question.id] = {
      ...state.progress[question.id],
      choice,
      answered: true,
      revealed: true,
      correct: sameAnswer(choice, question.answer),
    };
  });
  saveProgress();
  renderAll();
}

function revealBatch() {
  currentBatch().forEach((question) => {
    const choice = selectedAnswers(question);
    state.progress[question.id] = {
      ...state.progress[question.id],
      choice,
      revealed: true,
    };
  });
  saveProgress();
  renderAll();
}

function isBatchSubmitted(batch) {
  return batch.length > 0 && batch.every((question) => (state.progress[question.id] || {}).answered);
}

function renderBatchResult(batch, submitted) {
  if (!submitted) {
    els.batchResult.hidden = true;
    els.batchResult.innerHTML = "";
    return;
  }

  const right = batch.filter((question) => (state.progress[question.id] || {}).correct).length;
  const wrongStages = batch
    .filter((question) => (state.progress[question.id] || {}).correct === false)
    .map((question) => question.stage);
  const uniqueWrongStages = [...new Set(wrongStages)];
  const score = Math.round((right / batch.length) * 100);

  els.batchResult.hidden = false;
  els.batchResult.innerHTML = `
    <strong>${right} / ${batch.length} · ${score}% calibrated</strong>
    <p>${missionReview(score, uniqueWrongStages)}</p>
  `;
}

function missionReview(score, wrongStages) {
  if (score >= 90) return "Mission clean. Move to the next batch and keep pressure on scenario judgment.";
  if (score >= 70) return `Core signal stable. Review ${wrongStages.join(", ") || "the missed items"} before the next run.`;
  return `Calibration needed. Re-read ${wrongStages.join(", ") || "the linked references"} and retry the batch.`;
}

function answerLine(question, progress) {
  const choice = (progress.choice || []).join(", ") || "Not selected";
  return `Your signal: ${choice} · Correct: ${question.answer.join(", ")}`;
}

function sameAnswer(left, right) {
  return [...left].sort().join("|") === [...right].sort().join("|");
}

function exportWrong() {
  const wrong = DATA.questions.filter((question) => (state.progress[question.id] || {}).correct === false);
  if (!wrong.length) {
    window.alert("No wrong signals yet.");
    return;
  }

  const text = wrong
    .map((question, index) => {
      const progress = state.progress[question.id] || {};
      return [
        `${index + 1}. [${question.stage}] ${question.stem}`,
        `Your signal: ${(progress.choice || []).join(", ") || "Not selected"}`,
        `Correct: ${question.answer.join(", ")}`,
        `Review: ${question.explanation}`,
        `Reference: ${question.source}`,
      ].join("\n");
    })
    .join("\n\n");

  navigator.clipboard
    .writeText(text)
    .then(() => window.alert("Wrong-signal deck copied."))
    .catch(() => window.prompt("Copy wrong-signal deck:", text));
}

function resetProgress() {
  if (!window.confirm("Reset local Learning Fresher progress?")) return;
  state.progress = {};
  saveProgress();
  rebuildOrder();
  renderAll();
}

function handleKeys(event) {
  if (event.key === "ArrowLeft") moveBatch(-1);
  if (event.key === "ArrowRight") moveBatch(1);
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
