# lets_build_an_llm Skill

## Purpose

This skill helps Jeff systematically learn how to build a modern LLM industrial system and convert that understanding into AI Talent Mapping, candidate pre-talk, technical briefing, and recruiting judgment.

The goal is not to produce a general AI encyclopedia. The goal is to explain how LLMs are built, evaluated, deployed, and continuously improved.

## Core Principle

Use Occam's Razor.

Do not add unnecessary categories, frameworks, or abstractions. Every concept must help with at least one of the following:

1. understanding the LLM industrial pipeline;
2. explaining a technical concept clearly;
3. preparing candidate pre-talk;
4. judging candidate capability;
5. mapping AI teams and talent;
6. learning from open-source models and primary sources instead of relying on rumors or outdated secondary posts about closed-source models.

## Main Pipeline

Always organize knowledge around the LLM industrial pipeline:

1. Compute
2. Data
3. Architecture
4. Training Infrastructure
5. Pretraining
6. Mid-training
7. Post-training
8. Evaluation
9. Inference
10. Agent
11. Online Feedback

Do not create separate top-level categories for multimodal, world model, coding agent, search agent, computer use, robotics, or enterprise AI. Place them into the relevant pipeline stage.

## Default Reference Format

When creating or rewriting a reference file, prefer the narrative system style used by `references/01_core_pipeline/01g_post_training.md`.

```markdown
# Topic
English Subtitle / One-line Technical Positioning
> 中文直觉解释：用一句话说明这个 topic 到底解决什么问题

## Table of Contents

- [TL;DR](#tldr)
- [Definition](#definition)
- [Pipeline Position](#pipeline-position)
- [Core Question](#core-question)
- [Core Mechanism](#core-mechanism)
- [System View](#system-view)
- [Recruiting Translation](#recruiting-translation)
- [Sources](#sources)

## TL;DR

用 2-4 段说明这个 topic 的核心价值：
它是什么、为什么重要、它在 LLM 工业链路里改变了什么。

## Definition

给出精确定义。
可以使用 Python-like pseudo code、公式、流程图或 bullet list，把概念表达得更结构化。

## Pipeline Position

说明它位于 LLM pipeline 的哪一段，包括 upstream dependencies、downstream impact 和 stage boundary。

## Core Question

回答这个 topic 最本质的问题。

## Core Mechanism

拆解核心机制、方法或组成部分。

## System View

从系统角度解释它如何与 data、training、evaluation、inference、agent、online feedback 形成闭环。

## Recruiting Translation

把技术理解转化为候选人判断。

建议包含：
- Candidate Signal：strong signals、weak signals、risk signals
- Talk Track：opening question、deep-dive question、follow-up question
- Role / Team Mapping：相关岗位、团队 ownership、上下游协作
- Red Flags：容易夸大或误判的地方

## Sources

列出 papers、technical reports、official blogs、benchmarks、GitHub repos、model cards 或 company announcements。
未验证的信息必须标记为 inference / hypothesis。
```

## Reference Usage

Use files under `references/` as the knowledge base.

Recommended reference mapping:

- `references/00_index.md`: the master index, reading order, and default reference template.
- `references/01_core_pipeline/01a_compute.md`: compute, GPU clusters, networking, storage, scheduling, and training resources.
- `references/01_core_pipeline/01b_data.md`: data sources, cleaning, filtering, deduplication, mixture, and dataset roles.
- `references/01_core_pipeline/01c_architecture.md`: Transformer, Attention, MoE, long context, multimodal architecture, and architecture trade-offs.
- `references/01_core_pipeline/01d_training_infra.md`: distributed training, parallelism, communication, checkpointing, fault tolerance, and stability.
- `references/01_core_pipeline/01e_pretraining.md`: base model training and next-token prediction.
- `references/01_core_pipeline/01f_mid_training.md`: continued training for code, math, long context, domain knowledge, tool traces, and multimodal capability.
- `references/01_core_pipeline/01g_post_training.md`: SFT, RL, verifier, agentic data, safety, distillation, evaluation loop, and behavior optimization.
- `references/01_core_pipeline/01h_evaluation.md`: benchmark, internal eval, real-world task eval, and regression testing.
- `references/01_core_pipeline/01i_inference.md`: serving, KV cache, batching, quantization, speculative decoding, latency, throughput, and deployment cost.
- `references/01_core_pipeline/01j_agent.md`: tool calling, browser use, terminal use, planning, memory, orchestration, and agent workflow.
- `references/01_core_pipeline/01k_online_feedback.md`: online data, failure mining, user feedback, A/B testing, and continuous post-training.
- `references/02_core_concept/02a_category.md`: reusable concept entry point for training signals, learning rate, and related fundamentals.
- `references/03_models/`: model family notes for GPT, Claude, Gemini, DeepSeek, Qwen, Llama, and Hunyuan.
- `references/04_benchmarks/`: benchmark notes for MMLU, GPQA, SWE-bench, Terminal-Bench, and BrowseComp.
- `references/05_recruiting/`: recruiting translation notes for role mapping, candidate signals, pre-talk questions, and lab org mapping.

## Writing Rules

Default language: Simplified Chinese.

Keep important technical terms in English.

Be concise, structured, and technically accurate.

Avoid:
- generic popular science explanations;
- unnecessary taxonomies;
- mixing pipeline stages with application domains;
- claiming model details without sources;
- turning one topic into a multi-topic article.

Every answer should help Jeff answer:

How does this technical point help me judge a candidate's real capability, team ownership, and talent value before a pre-talk?
