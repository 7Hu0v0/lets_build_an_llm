# GPQA

## TL;DR

GPQA 用来评估模型在高难度科学问题上的推理能力，尤其关注研究生级别问题。它比普通知识题更强调专业理解和复杂推理，但仍然不是完整的科研能力评估。这个条目用于理解 high-difficulty reasoning benchmark 的意义和边界。

## Definition

GPQA, Graduate-Level Google-Proof Q&A, is a benchmark of difficult science questions designed to test expert-level reasoning and domain understanding.

## Pipeline Position

GPQA 位于 evaluation 阶段，常用于观察模型的 advanced reasoning 和 science capability。它对 pretraining 数据质量、reasoning-oriented post-training 和 evaluation protocol 都有参考价值。

## Technical Mechanism

GPQA 题目通常需要专业知识和多步推理，不容易通过简单搜索或表层记忆解决。评估时要关注模型是否使用 chain-of-thought、reasoning mode、tool access，以及答案是否存在猜测成分。

## Common Misunderstandings

- 把 GPQA 分数直接等同于科研能力。
- 忽略模型可能通过训练数据或 benchmark tuning 适配题型。
- 用单一 science benchmark 判断通用 reasoning。

## Recruiting Lens

GPQA 适合考察候选人是否理解 reasoning eval 的复杂性。pre-talk 可追问：如何判断一个模型是真的推理，还是只是学会了题型和答案分布？

## Simple Analogy

GPQA 像一组专业研究生难题：比普通考试更难，但仍然不能完全代表真实科研过程。

## Sources

- TBD
