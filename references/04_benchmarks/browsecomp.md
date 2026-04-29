# BrowseComp

## TL;DR

BrowseComp 用来评估模型或 agent 的网页浏览、搜索和信息综合能力。它关注 agent 是否能在开放网络中找到证据、判断可信度并回答复杂问题。这个条目用于理解 browsing agent 和 research agent 的评测边界。

## Definition

BrowseComp is a benchmark for evaluating web browsing and information-seeking capabilities in AI agents.

## Pipeline Position

BrowseComp 位于 evaluation、agent、tool use 和 online information retrieval 的交叉位置。它能反馈模型是否能把语言能力、搜索策略、网页阅读和证据综合结合起来。

## Technical Mechanism

BrowseComp 任务通常要求 agent 使用浏览器或搜索工具定位信息源，抽取关键证据，并给出可验证答案。难点包括 query planning、source selection、信息冲突处理、网页导航和引用质量。

## Common Misunderstandings

- 把浏览能力等同于普通问答能力。
- 只看答案对不对，不看证据链是否可靠。
- 忽略搜索引擎、浏览器工具和网页变化带来的评测不稳定性。

## Recruiting Lens

BrowseComp 适合评估候选人是否理解 research agent 的真实难点。pre-talk 可追问：一个浏览 agent 要稳定可用，需要模型、工具、引用、缓存和安全策略分别解决什么问题？

## Simple Analogy

BrowseComp 像考模型做资料检索：不是凭记忆回答，而是要会找资料、筛资料、合并资料。

## Sources

- TBD
