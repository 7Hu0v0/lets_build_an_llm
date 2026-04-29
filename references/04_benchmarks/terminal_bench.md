# Terminal-Bench

## TL;DR

Terminal-Bench 用来评估 AI agent 在终端环境中完成任务的能力。它关注的不只是语言理解，还包括命令执行、环境探索、错误恢复和多步骤任务规划。这个条目用于理解 terminal-use agent 的评测方式。

## Definition

Terminal-Bench is a benchmark for measuring an AI agent's ability to complete tasks in a terminal-based environment.

## Pipeline Position

Terminal-Bench 位于 evaluation、agent 和 tool use 的交叉位置。它能反馈模型是否具备操作环境、调用工具、验证结果和修复错误的能力。

## Technical Mechanism

Terminal-Bench 通常给 agent 一个任务和可操作的终端环境，评估它是否能通过 shell commands、file inspection、execution 和 verification 完成目标。关键指标包括 task success、steps、error recovery、time cost 和 reproducibility。

## Common Misunderstandings

- 把 terminal benchmark 看成纯命令行知识测试。
- 忽略 agent harness、工具权限和环境配置对结果的影响。
- 只看成功率，不分析失败路径。

## Recruiting Lens

Terminal-Bench 很适合判断候选人是否理解 agent evaluation 与真实操作环境之间的关系。pre-talk 可追问：你如何区分模型不会做、工具不可用、环境坏了、还是评测设计不合理？

## Simple Analogy

Terminal-Bench 像让模型坐到一台电脑前干活：会说不够，还要会查、会跑、会修、会验证。

## Sources

- TBD
