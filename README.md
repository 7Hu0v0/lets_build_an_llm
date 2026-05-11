# 🧠 LM Wiki: Let's Build an LLM

🤔 一个Non-Tech背景的Recruiter，正试图认真搞懂：  
**大模型到底是怎么被 build 出来的？**
> 这里不是论文搬运站，也不是模型新闻收藏夹。
>
> 它更像一个会生长的 **LLM 知识收纳箱**：把我在学习、工作和候选人沟通中遇到的真实卡点收进来，再按照 LLM 工业链路整理成清晰、结构化、可复用的 Wiki。
> 目标不是建一座知识博物馆，而是让每一次学习都能被保存、被检索、被复用，并最终变成一个可以辅助我持续学习和判断技术与经验稀缺性的 Skill。

**我的收纳原则包括：**
>  Core Principle == **"如无必要，勿增实体"**;
> 
> Principle I   == Reject("够用就行");
>
> Principle II  == Reject("建一个博物馆");
>
> Principle III == Reject("最近很火的");


我们会沿着这条主线走：

> GPU 集群 → 数据 → 架构 → 训练 → 后训练 → 评测 → 推理部署 → Agent → 线上反馈 🚀

这个 Wiki 主要服务三个目标：
> 1. 🧭 帮助我沉淀自己的 AI 技术认知。
>
> 2. 🧱 帮助其他非技术背景的人理解 LLM。
>
> 3. 🎯 做成SKill，让学习变成可沉淀的、长期的事情。


最终，希望这个 Wiki 不只是给人读，也能被 AI Agent 调用，成为一个陪我们持续学习、复盘和判断技术人才的知识底座。✨

---

## 📚 Wiki Directory

本项目采用 `SKILL.md + references/` 的结构：

- `SKILL.md`：给 AI Agent 使用的说明书  
- `README.md`：项目入口与阅读说明  
- `references/`：真正的知识库内容  
- `SKILL.json`：Skill 元信息配置

---

### 00 Index：总索引

- [00 Index](./references/00_index.md)

---

### 01 Core Pipeline：大模型工业链路

这部分按照 LLM 从构建到部署的主流程组织。

- [01a Compute](./references/01_core_pipeline/01a_compute.md)：算力、GPU 集群与训练资源入口
- [01b Data](./references/01_core_pipeline/01b_data.md)：数据来源、清洗、配比与数据工程
- [01c Architecture](./references/01_core_pipeline/01c_architecture.md)：模型架构与能力边界
- [01d Training Infrastructure](./references/01_core_pipeline/01d_training_infra.md)：训练系统、分布式训练与工程基础设施
- [01e Pretraining](./references/01_core_pipeline/01e_pretraining.md)：训练目标、优化、schedule、数据课程表、稳定性与 base eval
- [01f Mid-training](./references/01_core_pipeline/01f_mid_training.md)：中训练与能力专项增强
- [01g Post-training](./references/01_core_pipeline/01g_post_training.md)：从指令对齐到 Agentic 能力构建
- [01h Evaluation](./references/01_core_pipeline/01h_evaluation.md)：评测体系、能力验证与回归测试
- [01i Deployment & Inference](./references/01_core_pipeline/01i_deployment_and_inference.md)：serving runtime、vLLM、SGLang 与推理部署成本效率
- [01j Agent Harness](./references/01_core_pipeline/01j_agent_harness.md)：工具调用、任务执行与 Agent 工作流
- [01k Online Feedback](./references/01_core_pipeline/01k_online_feedback.md)：Online RL、rollout-driven post-training 与训推一体闭环

---

### 02 Core Concept：核心概念

这部分解释 LLM 学习过程中反复出现的关键术语。

- [02a Category](./references/02_core_concept/02a_category.md)：训练信号、学习率等基础概念条目入口

---

### 03 Models：模型家族

这部分整理主流模型家族和 AI Lab 的技术路线。

- [GPT](./references/03_models/gpt.md)
- [Claude](./references/03_models/claude.md)
- [Gemini](./references/03_models/gemini.md)
- [DeepSeek](./references/03_models/deepseek.md)
- [Qwen](./references/03_models/qwen.md)
- [Llama](./references/03_models/llama.md)
- [Hunyuan](./references/03_models/hunyuan.md)

---

### 04 Benchmarks：评测基准

这部分解释模型能力通常如何被评估。

- [MMLU](./references/04_benchmarks/mmlu.md)
- [GPQA](./references/04_benchmarks/gpqa.md)
- [SWE-bench](./references/04_benchmarks/swe_bench.md)
- [Terminal-Bench](./references/04_benchmarks/terminal_bench.md)
- [BrowseComp](./references/04_benchmarks/browsecomp.md)

---

### 05 So What? For Recruiters

这部分把技术知识转化为 AI Talent Mapping、候选人 pre-talk 和技术招聘判断。

- [Role Mapping](./references/05_recruiting/role_mapping.md)
- [Candidate Signals](./references/05_recruiting/candidate_signals.md)
- [Pre-talk Questions](./references/05_recruiting/pre_talk_questions.md)
- [Lab Org Mapping](./references/05_recruiting/lab_org_mapping.md)

---

### Current Status

#### 2026-05-11 15:03 +0800 - Deployment-first inference rewrite

- Commit: `7346654`
- Scope: pipeline / deployment and inference
- Files: `references/01_core_pipeline/01i_deployment_and_inference.md`
- Change: 将 Deployment & Inference 主文档从 inference-first 重构为 deployment-first，先讲生产控制面，再下钻到 vLLM、SGLang、KV cache、prefill/decode 等 runtime 细节。
- Why it matters: 更贴近工业界真实模型服务链路，有助于区分 deployment/platform engineer、inference runtime engineer、GPU systems engineer 和 agent infra engineer 的职责边界。
- Next: 继续补充 deployment operations 的具体案例，例如 canary、rollback、autoscaling、model registry 和 observability。

#### 2026-05-11 10:47 +0800 - Pretraining workstreams note

- Commit: `e8411dd`
- Scope: pipeline / pretraining
- Files: `README.md`, `references/00_index.md`, `references/01_core_pipeline/01e_pretraining.md`
- Change: 新增 Pretraining 主章节，按 training objective、optimization、training schedule、data curriculum、training infra algorithm、stability tricks、checkpoint & base eval 七类工作流组织。
- Why it matters: 把 pretraining 从“喂很多数据”提升为完整工业系统视角，并用 DeepSeek-V4 作为 case study 连接 objective、optimizer、schedule、infra、stability 和 eval。
- Next: 后续可继续扩展 optimizer、data curriculum、MoE stability 和 base eval 的专项页面。

#### 2026-05-07 17:58 +0800 - Online RL feedback note

- Commit: `43bd156`
- Scope: pipeline / online feedback
- Files: `references/00_index.md`, `references/01_core_pipeline/01k_online_feedback.md`
- Change: 新增 Online Feedback 主章节，把重点放在 Online RL、inference rollout、reward/verifier、RL training 和 policy update 形成的训推一体闭环。
- Why it matters: 这把 Online Feedback 从“线上日志收集”推进到 frontier-lab-aware 的 post-training infrastructure 视角，更适合判断 Online RL / agent RL / RL infra 候选人。
- Next: 继续补齐 `01j_agent_harness.md`，让 agent harness 和 train-inference integration 的上下游链路更完整。

#### 2026-04-30 10:41 +0800 - DeepSeek V4 analysis

- Commit: `f1c4d22`
- Scope: model
- Files: `references/03_models/deepseek.md`
- Change: 扩写 DeepSeek 模型家族笔记，新增 DeepSeek-V4 Preview 分析、目录、Sources 和页面级 Update Log。
- Why it matters: 为 MoE、long context、reasoning、agentic coding 和 open-weight strategy 提供一个可持续更新的模型家族案例。

#### Current Baseline

- `01g_post_training.md` 已经展开为较完整的正文。
- 其他 `01_core_pipeline` 文件目前已建好路径，后续可继续按同一模板补充内容。
- `02_core_concept/`、`03_models/`、`04_benchmarks/`、`05_recruiting/` 已开始搭建 Wiki 骨架。
