# MMLU

## TL;DR

MMLU 是常见的通用知识与学科能力评测基准。它适合快速观察模型在多学科选择题上的覆盖面，但不能代表模型在真实工作流中的完整能力。这个条目用于区分 benchmark score、知识覆盖、推理能力和实际任务表现。

## Definition

MMLU, Massive Multitask Language Understanding, is a benchmark that evaluates model performance across many academic and professional subjects through multiple-choice questions.

## Pipeline Position

MMLU 位于 evaluation 阶段，主要用于衡量 base model 或 instruction model 的广泛知识能力。它可以反馈 pretraining 数据覆盖和 post-training 后的答题行为，但不能单独决定模型是否适合 agent、coding 或企业任务。

## Technical Mechanism

MMLU 通过多领域题目测试模型的知识召回和选择题推理能力。使用时要关注 prompt setting、few-shot/zero-shot、contamination、model version 和是否经过专门 benchmark tuning。

## Common Misunderstandings

- 把 MMLU 高分等同于真实智能或真实业务能力。
- 忽略数据污染和 benchmark overfitting。
- 用 MMLU 判断 coding、agent、tool use 等不匹配能力。

## Recruiting Lens

候选人如果能解释 MMLU 的价值和局限，而不是只背分数，说明 TA 具备基本 eval literacy。pre-talk 可追问：你会如何设计一个比 MMLU 更贴近业务的内部评测？

## Simple Analogy

MMLU 像一场覆盖很多科目的标准化考试：能说明知识面，但不能说明一个人能不能完成真实项目。

## Sources

- TBD
