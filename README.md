# 🧠 LM Wiki: Let's Build an LLM

一个非算法背景的 AI Recruiter，试图认真搞懂：  
**大模型到底是怎么被 build 出来的？**

这里不是论文搬运站，也不是模型新闻收藏夹。  
它是一套面向非技术人员的 **LLM 工业系统 Wiki**，用尽量清楚、结构化、可复用的方式，拆解一个现代大模型从哪里来、怎么训练、怎么部署、怎么变聪明。

我们会沿着这条主线走：

> GPU 集群 → 数据 → 架构 → 训练 → 后训练 → 评测 → 推理部署 → Agent → 线上反馈 🚀

这个 Wiki 主要服务三个目标：

1. 🧭 帮助我沉淀自己的 AI 技术认知；
2. 🧱 帮助其他非技术背景的人理解 LLM；
3. 🎯 做成SKill，让学习变成可沉淀的、长期的事情。

核心原则很简单：

> **如无必要，勿增实体。**

每个词条只解决一个问题。  
每个概念都要放回 LLM 工业链路里理解。  
每篇内容都尽量做到：看得懂、找得到、用得上。

最终，希望这个 Wiki 不只是给人读，也能被 AI Agent 调用，成为一个陪我持续学习、复盘和判断技术人才的知识底座。✨


---

## 📚 Wiki Directory

本项目采用 `SKILL.md + references/` 的结构：

- `SKILL.md`：给 AI Agent 使用的说明书  
- `README.md`：项目入口与阅读说明  
- `references/`：真正的知识库内容  

---

### 00 Index：总索引

- [00 Index](./references/00_index.md)

---

### 01 Pipeline：大模型工业链路

这部分按照 LLM 从构建到部署的主流程组织。

- [Compute](./references/01_pipeline/compute.md)
- [Data](./references/01_pipeline/data.md)
- [Architecture](./references/01_pipeline/architecture.md)
- [Training Infrastructure](./references/01_pipeline/training_infra.md)
- [Pretraining](./references/01_pipeline/pretraining.md)
- [Mid-training](./references/01_pipeline/mid_training.md)
- [Post-training](./references/01_pipeline/post_training.md)
- [Evaluation](./references/01_pipeline/evaluation.md)
- [Inference](./references/01_pipeline/inference.md)
- [Agent](./references/01_pipeline/agent.md)
- [Online Feedback](./references/01_pipeline/online_feedback.md)

---

### 02 Concepts：核心概念

这部分解释 LLM 学习过程中反复出现的关键术语。

- [Transformer](./references/02_concepts/transformer.md)
- [Attention](./references/02_concepts/attention.md)
- [MoE](./references/02_concepts/moe.md)
- [Tokenizer](./references/02_concepts/tokenizer.md)
- [SFT](./references/02_concepts/sft.md)
- [RLHF](./references/02_concepts/rlhf.md)
- [RLVR](./references/02_concepts/rlvr.md)
- [KV Cache](./references/02_concepts/kv_cache.md)
- [Tool Calling](./references/02_concepts/tool_calling.md)

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

### 05 Recruiting：招聘与人才判断

这部分把技术知识转化为 AI Talent Mapping、候选人 pre-talk 和技术招聘判断。

- [Role Mapping](./references/05_recruiting/role_mapping.md)
- [Candidate Signals](./references/05_recruiting/candidate_signals.md)
- [Pre-talk Questions](./references/05_recruiting/pre_talk_questions.md)
- [Lab Org Mapping](./references/05_recruiting/lab_org_mapping.md)
