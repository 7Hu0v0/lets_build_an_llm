# SWE-bench

## TL;DR

SWE-bench 用真实 GitHub issue 和代码仓库来评估模型的软件工程任务能力。它比单纯代码补全更接近真实工作，因为模型需要理解仓库、定位 bug、修改代码并通过测试。这个条目用于观察 coding agent 能力，而不只是 code generation 能力。

## Definition

SWE-bench is a benchmark that evaluates whether models or agents can resolve real software engineering issues from open-source repositories.

## Pipeline Position

SWE-bench 位于 evaluation 和 agent 阶段之间，连接 coding capability、repository understanding、tool use、test execution 和 task completion。它对 coding-oriented post-training 和 agent workflow 设计很重要。

## Technical Mechanism

SWE-bench 通常要求系统读取 issue、理解代码、生成 patch，并用测试验证。核心难点包括 repo navigation、bug localization、context selection、multi-step editing、dependency setup 和 evaluation harness。

## Common Misunderstandings

- 把 SWE-bench 等同于普通 coding benchmark。
- 只看最终 resolved rate，不看 agent workflow 和失败类型。
- 忽略测试覆盖、环境复现和 benchmark leakage 的影响。

## Recruiting Lens

能讲清 SWE-bench 的候选人通常更懂 coding agent 和真实软件工程自动化。pre-talk 可追问：一个 agent 在 SWE-bench 上失败，可能是模型能力问题、工具链问题，还是测试环境问题？

## Simple Analogy

SWE-bench 像把模型丢进真实代码仓库修 bug：不是写一道算法题，而是做一次小型工程交付。

## Sources

- TBD
