# DeepSeek

## Table of Contents

- [TL;DR](#tldr)
- [Definition](#definition)
- [Pipeline Position](#pipeline-position)
- [DeepSeek-V4 Snapshot](#deepseek-v4-snapshot)
- [Technical Mechanism](#technical-mechanism)
- [Why V4 Matters](#why-v4-matters)
- [Open Questions](#open-questions)
- [Common Misunderstandings](#common-misunderstandings)
- [Recruiting Lens](#recruiting-lens)
- [Simple Analogy](#simple-analogy)
- [Sources](#sources)
- [Update Log](#update-log)

## TL;DR

DeepSeek 是近年开源大模型路线中非常重要的模型家族，适合观察 MoE、reasoning training、coding、long context、RL、agentic workflows 和开源技术报告的结合。DeepSeek-V4 Preview 的核心信号不是单纯“参数更大”，而是把 1M context、MoE active-parameter efficiency、thinking/non-thinking 双模式、agentic coding 和更低 API 成本组合成一个更产品化的开放模型路线。

## Definition

DeepSeek refers to DeepSeek's model family, including general language models, coding models, reasoning models, and open-weight or openly documented model releases. In this note, DeepSeek-V4 means the April 2026 DeepSeek-V4 Preview release unless otherwise specified.

## Pipeline Position

DeepSeek 适合放在 architecture、training infrastructure、pretraining、post-training、evaluation、inference serving 和 open-source ecosystem 中观察。它的价值不只在模型本身，也在技术报告、API 迁移、开源权重和开发者采用方式提供的学习样本。

## DeepSeek-V4 Snapshot

DeepSeek-V4 Preview 包含两个主要模型：

| Model | Positioning | Total Params | Active Params | Context | Typical Use |
| --- | --- | ---: | ---: | ---: | --- |
| DeepSeek-V4-Pro | Stronger model for hard reasoning, coding, knowledge, and agent workflows | 1.6T | 49B | 1M | difficult coding, long-context analysis, agentic tasks |
| DeepSeek-V4-Flash | Faster and cheaper model for high-throughput usage | 284B | 13B | 1M | routine chat, extraction, summarization, RAG, cost-sensitive agents |

The API migration is intentionally simple: keep the same DeepSeek base URL and switch model IDs to `deepseek-v4-pro` or `deepseek-v4-flash`. This makes the release interesting not just as a research artifact, but as a deployment event: users can route workloads between Flash and Pro rather than choosing a single monolithic model.

## Technical Mechanism

V4 continues DeepSeek's MoE direction: the model has very large total capacity, but only a smaller subset of parameters is active per token. That design matters because it lets the model scale knowledge and specialization without paying dense-model inference cost on every token.

The most important V4 analysis points:

- MoE efficiency: compare total parameters versus active parameters, not total parameters alone.
- Long-context economics: 1M context is useful only if attention, KV cache, memory cost, and retrieval behavior remain practical.
- Thinking modes: the same model family exposes thinking and non-thinking operation, which creates a routing problem for products.
- Agentic coding: V4 is explicitly positioned around tool use, coding, and agent workflows, so evaluation should include multi-step tasks, repo context, tool calls, and failure recovery.
- API compatibility: OpenAI-compatible and Anthropic-compatible surfaces lower switching cost for developers.
- Open weights: useful for inspection and self-hosting experiments, but still does not mean the full training data, training recipe, or safety process is transparent.

## Why V4 Matters

V4 is a good case study in how open model competition is moving from single benchmark wins toward system-level usability. The release bundles model capability, long context, price, API migration, and agent-oriented positioning into one package. For teams building LLM products, the practical question becomes less "Is V4 the best model?" and more "Which workloads should default to Flash, which should escalate to Pro, and where do latency, reliability, privacy, and eval results make another model better?"

For research and recruiting, V4 is a useful prompt because it forces candidates to reason across layers:

- architecture: MoE, active parameters, attention and context scaling;
- post-training: reasoning behavior, coding ability, tool use and instruction following;
- serving: cost per token, cache pricing, output length, latency and routing;
- ecosystem: open weights, model cards, API compatibility and community benchmarking.

## Open Questions

- How do V4-Pro and V4-Flash perform in independent long-context retrieval and agentic coding evaluations?
- Does 1M context remain reliable under messy real-world inputs, or mainly under curated benchmark settings?
- How stable are tool calls, JSON output, and long outputs at maximum context sizes?
- What are the real latency and throughput trade-offs between Flash and Pro in production?
- How much of the claimed agentic improvement comes from model architecture, post-training data, tool schemas, or serving stack integration?
- Will open-weight users be able to reproduce hosted API behavior, or will the API version have meaningful serving-side advantages?

## Common Misunderstandings

- 只把 DeepSeek 当作性价比模型，而忽略其训练、架构和 serving 路线。
- 把开源权重等同于完全透明，忽略数据、训练细节和 hosted serving 仍可能不完整。
- 只看 reasoning 表现，不看 infra、eval、context reliability 和 deployment 约束。
- 只比较 V4-Pro 和闭源前沿模型，而忽略 V4-Flash 可能是更重要的生产默认选项。
- 把 1M context 当作自动解决 RAG、memory 和 agent planning 的方案；长上下文只是提供容量，不保证检索、排序和推理质量。

## Recruiting Lens

能讲清 DeepSeek 的 MoE、RL、reasoning、long context 和开源策略的候选人，通常对模型工程和开源生态都有较强理解。pre-talk 可以追问：如果你负责把 DeepSeek-V4 接入一个 coding agent，你会如何设计 Flash/Pro 路由、长上下文截断策略、tool-call eval、成本预算和失败回退？

一个强候选人不应该只复述参数量或榜单，而应该能把 V4 放进完整工程链路：数据和 post-training 如何塑造能力，attention/context 机制如何影响成本，API 设计如何影响迁移，open weights 如何改变研究和部署边界。

## Simple Analogy

DeepSeek-V4 像一套开放模型里的双档变速系统：Flash 负责日常巡航，Pro 负责困难路段；真正的工程价值来自什么时候换档、换档成本多高、以及长距离行驶时系统是否稳定。

## Sources

- [DeepSeek API Docs: DeepSeek V4 Preview Release](https://api-docs.deepseek.com/news/news260424)
- [DeepSeek API Docs: Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)
- [DeepSeek API Docs: Your First API Call](https://api-docs.deepseek.com/)
- [DeepSeek-V4-Pro Tech Report on Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf)
- [DeepSeek-V4 collection on Hugging Face](https://huggingface.co/collections/deepseek-ai/deepseek-v4)

## Update Log

### 2026-04-30 - DeepSeek-V4 Preview first pass

- DeepSeek-V4 Preview was officially announced on 2026-04-24, with two open-weight MoE models: DeepSeek-V4-Pro and DeepSeek-V4-Flash.
- V4-Pro is positioned as the stronger reasoning, coding, knowledge, and agentic workflow model: 1.6T total parameters and 49B active parameters.
- V4-Flash is positioned as the faster and cheaper production model: 284B total parameters and 13B active parameters.
- Both official API models support 1M context length, thinking and non-thinking modes, JSON output, tool calls, and a maximum output length listed as 384K tokens.
- The old API names `deepseek-chat` and `deepseek-reasoner` are now compatibility aliases for V4-Flash modes and are scheduled to retire on 2026-07-24.
- Current analysis stance: treat V4 as an important long-context and agentic-coding release, but keep benchmark claims separate from independent evaluation until more third-party tests settle.

### Log Template

Use this format for future updates:

```md
### YYYY-MM-DD - Short update title

- What changed:
- Source:
- Why it matters:
- Confidence:
- Follow-up:
```
