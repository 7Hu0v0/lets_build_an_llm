# 00 Index

这是 `references/` 知识库的总索引页，用于导航整个 LM Wiki。

LM Wiki 有三个目标：

1. 🧭 帮助我沉淀自己的 AI 技术认知；
2. 🧱 帮助其他非技术背景的人理解 LLM；
3. 🎯 做成 Skill，让学习变成可沉淀、可复用、可长期迭代的事情。

本知识库围绕 LLM Industrial Pipeline 组织：

> Compute → Data → Architecture → Training Infrastructure → Pretraining → Mid-training → Post-training → Evaluation → Inference → Agent → Online Feedback

---

## 01 Pipeline：大模型工业链路

这一部分解释一个现代 LLM 如何被构建、训练、评测、部署，并通过线上反馈持续迭代。

- `references/01_pipeline/compute.md`  
  解释算力资源、GPU 集群、网络、存储、调度系统，以及为什么 Compute 是 LLM 训练的物理底座。

- `references/01_pipeline/data.md`  
  解释数据来源、清洗、过滤、去重、数据配比，以及 pretraining、mid-training、post-training、eval、online feedback 中不同数据集的作用。

- `references/01_pipeline/architecture.md`  
  解释 Transformer、Attention、MoE、长上下文、多模态架构，以及模型设计中的核心 trade-off。

- `references/01_pipeline/training_infra.md`  
  解释分布式训练基础设施、并行策略、通信、checkpoint、容错和训练稳定性。

- `references/01_pipeline/pretraining.md`  
  解释 base model 如何通过 next-token prediction 学习语言、知识、代码、数学和基础推理能力。

- `references/01_pipeline/mid_training.md`  
  解释模型在 pretraining 之后如何通过定向继续训练，强化代码、数学、长上下文、领域知识、工具使用或多模态能力。

- `references/01_pipeline/post_training.md`  
  解释 base model 如何通过 SFT、preference optimization、RLHF、RLVR、reasoning training 和 safety alignment 变成可用助手。

- `references/01_pipeline/evaluation.md`  
  解释 base eval、instruct eval、reasoning eval、coding eval、agent eval、long-context eval、人类偏好评测和业务评测。

- `references/01_pipeline/inference.md`  
  解释模型服务、KV cache、batching、quantization、speculative decoding、latency、throughput 和部署成本。

- `references/01_pipeline/agent.md`  
  解释 tool calling、browser use、terminal use、planning、memory、workflow orchestration 和 agent task completion。

- `references/01_pipeline/online_feedback.md`  
  解释线上数据收集、失败案例挖掘、用户反馈、A/B testing 和 continuous post-training 闭环。

---

## 02 Concepts：核心概念

这一部分解释 LLM 工业系统中的可复用技术概念。每个文件只回答一个核心问题。

- `references/02_concepts/transformer.md`  
  解释 Transformer 架构，以及为什么它成为现代 LLM 的基础。

- `references/02_concepts/attention.md`  
  解释 self-attention、Q/K/V、attention variants，以及 attention 为什么是上下文理解的核心。

- `references/02_concepts/moe.md`  
  解释 Mixture-of-Experts、expert routing、activated parameters、total parameters，以及 MoE 的系统 trade-off。

- `references/02_concepts/tokenizer.md`  
  解释 tokenization、vocabulary、special tokens，以及 tokenizer 设计如何影响训练和推理效率。

- `references/02_concepts/sft.md`  
  解释 Supervised Fine-tuning，以及它如何把 base model 变成 instruction-following model。

- `references/02_concepts/rlhf.md`  
  解释 Reinforcement Learning from Human Feedback，以及基于人类偏好的对齐训练。

- `references/02_concepts/rlvr.md`  
  解释 Reinforcement Learning with Verifiable Rewards，尤其是它在数学、代码和 agent 任务中的作用。

- `references/02_concepts/kv_cache.md`  
  解释 KV cache，以及它为什么对高效推理和长上下文服务很重要。

- `references/02_concepts/tool_calling.md`  
  解释模型如何调用工具、API、浏览器、终端和结构化外部动作。

---

## 03 Models：模型家族

这一部分跟踪主流模型家族和 AI Lab 的技术路线。

- `references/03_models/gpt.md`  
  跟踪 OpenAI GPT 系列在 chat、reasoning、coding、agent 和 multimodal 能力上的演进。

- `references/03_models/claude.md`  
  跟踪 Anthropic Claude 系列、Constitutional AI、RLHF/RLAIF、extended thinking、tool use 和 agentic workflows。

- `references/03_models/gemini.md`  
  跟踪 Google DeepMind Gemini 系列、native multimodal、long context、reasoning 和 agent 能力。

- `references/03_models/deepseek.md`  
  跟踪 DeepSeek 系列的 MoE 架构、long-context 设计、RL、reasoning 和开源模型策略。

- `references/03_models/qwen.md`  
  跟踪 Alibaba Qwen 系列的开源生态、reasoning、coding、multimodal 和 agent 能力。

- `references/03_models/llama.md`  
  跟踪 Meta Llama 系列的 open-weight 策略、多模态扩展和生态定位。

- `references/03_models/hunyuan.md`  
  跟踪 Tencent Hunyuan 系列的架构、预训练、后训练、评测、部署和产品集成。

---

## 04 Benchmarks：评测基准

这一部分解释模型能力通常如何被评估。

- `references/04_benchmarks/mmlu.md`  
  解释 MMLU，以及它如何评估模型的广泛学科知识和世界知识。

- `references/04_benchmarks/gpqa.md`  
  解释 GPQA，以及它如何评估研究生级别的科学推理能力。

- `references/04_benchmarks/swe_bench.md`  
  解释 SWE-bench，以及它如何评估真实软件工程任务完成能力。

- `references/04_benchmarks/terminal_bench.md`  
  解释 Terminal-Bench，以及它如何评估命令行和终端环境下的 agent 任务能力。

- `references/04_benchmarks/browsecomp.md`  
  解释 BrowseComp，以及它如何评估网页浏览和搜索 agent 能力。

---

## 05 Recruiting：招聘与人才判断

这一部分将技术理解转化为 AI Talent Mapping、候选人 pre-talk 和技术招聘判断。

- `references/05_recruiting/role_mapping.md`  
  将 LLM pipeline 中的不同阶段映射到 AI Lab 常见岗位、团队和 ownership。

- `references/05_recruiting/candidate_signals.md`  
  定义评估 AI 候选人时的 strong signals、weak signals 和 risk signals。

- `references/05_recruiting/pre_talk_questions.md`  
  提供不同 LLM 技术方向下的结构化 pre-talk 问题。

- `references/05_recruiting/lab_org_mapping.md`  
  解释 AI Lab 常见组织结构，包括 foundation model、post-training、infra、eval、agent、product 和 safety 团队。

---

## 推荐阅读顺序

### 如果你是非技术背景读者

建议先读：

1. `references/01_pipeline/data.md`
2. `references/01_pipeline/architecture.md`
3. `references/01_pipeline/pretraining.md`
4. `references/01_pipeline/post_training.md`
5. `references/01_pipeline/evaluation.md`
6. `references/01_pipeline/inference.md`
7. `references/01_pipeline/agent.md`

目标是先建立直觉：模型从哪里学来能力，如何变得可用，如何被评测和部署。

---

### 如果你想建立完整 LLM 工业系统视角

建议按 pipeline 顺序阅读：

1. `references/01_pipeline/compute.md`
2. `references/01_pipeline/data.md`
3. `references/01_pipeline/architecture.md`
4. `references/01_pipeline/training_infra.md`
5. `references/01_pipeline/pretraining.md`
6. `references/01_pipeline/mid_training.md`
7. `references/01_pipeline/post_training.md`
8. `references/01_pipeline/evaluation.md`
9. `references/01_pipeline/inference.md`
10. `references/01_pipeline/agent.md`
11. `references/01_pipeline/online_feedback.md`

目标是理解一个现代 LLM 从算力、数据、训练到产品化和持续迭代的完整链路。

---

### 如果你用于招聘和 Talent Mapping

建议先读：

1. `references/05_recruiting/role_mapping.md`
2. `references/05_recruiting/candidate_signals.md`
3. `references/05_recruiting/pre_talk_questions.md`
4. `references/05_recruiting/lab_org_mapping.md`
5. 再按候选人方向查阅 `references/01_pipeline/` 和 `references/02_concepts/` 中的相关技术页。

目标是把技术概念转化为候选人判断、团队归属判断和 pre-talk 问题。

---

## 每篇 reference 的默认结构

每个 reference 文件建议使用统一结构，方便人阅读，也方便 Agent 检索和复用。

```markdown
# Topic

## TL;DR

## Definition

## Pipeline Position

## Technical Mechanism

## Common Misunderstandings

## Recruiting Lens

## Simple Analogy

## Sources
