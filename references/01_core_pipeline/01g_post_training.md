# Post-training
From Instruction Alignment to Agentic Capability Construction
> 从“让模型会回答”到“让模型会推理、会调用工具、会解决问题”

## Table of Contents

- [TL;DR](#tldr)
- [Definition](#definition)
- [Pipeline Position](#pipeline-position)
- [What Changes After Post-training](#what-changes-after-post-training)
- [Core Methods](#core-methods)
- [System View & Data Loop](#system-view--data-loop)


## TL;DR

Post-training 是把 base model 训练成可用模型的关键阶段，模型从“会预测下一个 token”塑造成“会遵循指令、会推理、会调用工具、会解决问题”。
它不只是传统意义上的 instruction alignment / RLHF，而是一个复杂的系统性工程：
SFT 提供行为示范，Reward / Verifier 定义优化目标，RL 优化推理与行动策略，Agentic Environment Training 让模型在代码、搜索、工具和 sandbox 环境中学习完成任务，Distillation / Capability Integration 负责合并多种专项能力，Evaluation Loop 则持续验证模型是否真的更可靠、更可控、更适合部署。

## Definition
Post-training 是对 pretrained base model 执行的 behavior optimization and capability consolidation stage。下面用Python更逻辑清晰的表示一下：

```python
BaseModel = pretrained_model(
    objective = next_token_prediction,
    learned = {
        language,
        knowledge,
        code,
        reasoning_patterns,
        tool_use_patterns,
    }
)

PostTraining(BaseModel) = optimize_behavior(
    model = BaseModel,
    signals = {
        demonstrations,      # SFT
        preferences,         # RLHF / DPO
        rewards,             # RL / GRPO / PPO
        verifiers,           # RLVR / executable feedback
        trajectories,         # agentic data
        safety_constraints,
    },
    environments = {
        chat,
        code,
        search,
        tools,
        sandbox,
        MCP,
    },
    objective = {
        instruction_following,
        reasoning,
        tool_use,
        coding_agent,
        search_agent,
        long_horizon_task_execution,
        safety,
        deployability,
    }
)
      
```

## Pipeline Position

Post-training 位于 pretraining 之后、deployment 之前，是 base model 到产品模型之间的关键桥梁。
```mermaid
flowchart TD
    A[Pretraining] --> B[Base Model]
    B --> C[Post-training System]

    C --> D1[SFT]
    C --> D2[RL]
    C --> D3[Eval]
    C --> D4[Infra]

    D1 --> D2
    D2 --> D3
    D4 --> D1
    D4 --> D2
    D4 --> D3

    D3 --> E[Integration]
    E --> F[Instruct Model]
    F --> G[Deployment]
    G --> H[Online Feedback]
    H --> C

```

## What Changes After Post-training

## What Changes After Post-training
## What Changes After Post-training

## Core Methods
Post-training 的核心配方可以极简理解为两类：
> 1. **SFT（Supervised Fine-Tuning）**  
>    基于高质量 interaction-response，让模型模仿人类或强模型提供的标准示范，
> 
> 2. **RL（Reinforcement Learning）**  
>    让模型通过 reward / verifier / human preference 进一步优化行为，学会什么答案更好、什么任务算完成。

其他常见术语，例如 RLHF、RLAIF、RLVR、DPO、GRPO、Rejection Sampling、Distillation 和 Safety Alignment，并不是脱离 SFT / RL 之外的“第三套主配方”，而是围绕这两类核心方法展开的不同实现路径、数据策略、奖励机制或训练闭环。

因此，本节先聚焦 post-training 在算法层面的核心 recipe：SFT 如何让模型学会回应，RL 如何让模型学会优化行为。至于数据、reward、eval、infra 和 safety 如何共同组成完整生态，我们将在下一节从 system view 展开。






## System View & Data Loop
