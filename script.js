const DATA = window.LLM_FRESHER_DATA || { questions: [], batchSize: 10 };
const STORAGE_KEY = "llm-learning-fresher-progress-v1";
const BATCH_SIZE = DATA.batchSize || 10;

const state = {
  batchIndex: 0,
  query: "",
  stage: "all",
  type: "all",
  wrongOnly: false,
  shuffle: false,
  order: [],
  progress: loadProgress(),
};

const els = {
  search: document.querySelector("#searchInput"),
  stageFilter: document.querySelector("#stageFilter"),
  typeFilter: document.querySelector("#typeFilter"),
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

  els.typeFilter.addEventListener("change", () => {
    state.type = els.typeFilter.value;
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
      (state.type === "all" || question.type === state.type) &&
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
  els.learningText.textContent = `完成 ${answers.length} / ${DATA.questions.length} 题`;
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
    els.missionMeta.textContent = "NO MATCH";
    els.missionTitle.textContent = "没有匹配题目";
    els.batchTag.textContent = "EMPTY";
    els.batchHint.textContent = "调整筛选条件后再试。";
    els.batchAnswered.textContent = "0 / 0";
    els.questionGrid.innerHTML = `<div class="empty-state">没有匹配的题目</div>`;
    els.batchResult.hidden = true;
    els.submitBatch.disabled = true;
    els.revealBatch.disabled = true;
    return;
  }

  const start = state.batchIndex * BATCH_SIZE + 1;
  const end = start + batch.length - 1;
  els.missionMeta.textContent = `${DATA.source} · 第 ${start}-${end} 题`;
  els.missionTitle.textContent = state.stage === "all" ? "10 题一组练习" : `${state.stage} 专项练习`;
  els.batchTag.textContent = `BATCH ${String(state.batchIndex + 1).padStart(2, "0")}`;
  els.batchHint.textContent = submitted ? "本组已评分，可复盘解析。" : "答完本组后统一评分。";
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
      <span>${escapeHTML(typeLabel(question.type))} · ${escapeHTML(sourceLabel(question.source))}</span>
    </div>
    <h3>${displayNumber}. ${escapeHTML(question.stem)}</h3>
    <div class="options"></div>
    <div class="feedback" ${showAnswer ? "" : "hidden"}>
      <strong>${escapeHTML(answerLine(question, progress))}</strong>
      <p>${escapeHTML(question.explanation)}</p>
      <p class="translation">${escapeHTML(question.recruiting_translation)}</p>
      <a href="./${encodeURI(question.source)}" target="_blank" rel="noreferrer">打开 reference</a>
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
    window.alert(`还有 ${unanswered.length} 题未作答。`);
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
    <strong>${right} / ${batch.length} · ${score}%</strong>
    <p>${missionReview(score, uniqueWrongStages)}</p>
  `;
}

function missionReview(score, wrongStages) {
  if (score >= 90) return "很稳。可以进入下一组，继续保持对场景判断题的敏感度。";
  if (score >= 70) return `主线理解基本稳定。建议复盘 ${wrongStages.join("、") || "错题知识点"} 后再继续。`;
  return `这一组需要回炉。先重读 ${wrongStages.join("、") || "对应 reference"}，再重新刷一遍。`;
}

function answerLine(question, progress) {
  const choice = (progress.choice || []).join(", ") || "未选择";
  return `你的答案：${choice} · 正确答案：${question.answer.join(", ")}`;
}

function sameAnswer(left, right) {
  return [...left].sort().join("|") === [...right].sort().join("|");
}

function exportWrong() {
  const wrong = DATA.questions.filter((question) => (state.progress[question.id] || {}).correct === false);
  if (!wrong.length) {
    window.alert("目前还没有错题。");
    return;
  }

  const text = wrong
    .map((question, index) => {
      const progress = state.progress[question.id] || {};
      return [
        `${index + 1}. [${question.stage}] ${question.stem}`,
        `你的答案：${(progress.choice || []).join(", ") || "未选择"}`,
        `正确答案：${question.answer.join(", ")}`,
        `解析：${question.explanation}`,
        `Reference: ${question.source}`,
      ].join("\n");
    })
    .join("\n\n");

  navigator.clipboard
    .writeText(text)
    .then(() => window.alert("错题已复制到剪贴板。"))
    .catch(() => window.prompt("复制错题：", text));
}

function resetProgress() {
  if (!window.confirm("确定重置本地答题进度吗？")) return;
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

function typeLabel(type) {
  return {
    single_choice: "单选题",
    multi_choice: "多选题",
    true_false: "判断题",
  }[type] || type;
}

function sourceLabel(source) {
  if (source.includes("/03_models/")) return "模型家族";
  if (source.includes("/04_benchmarks/")) return "评测基准";
  if (source.includes("/05_recruiting/")) return "招聘判断";
  if (source.includes("/01_core_pipeline/")) return "工业链路";
  if (source.includes("/02_core_concept/")) return "核心概念";
  return "总索引";
}
