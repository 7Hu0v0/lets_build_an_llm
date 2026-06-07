window.LLM_FRESHER_DATA = {
  source: "lets_build_an_llm references",
  version: "fresher-mvp-1",
  batchSize: 10,
  questions: [
    {
      id: "compute-001",
      stage: "Compute",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01a_compute.md",
      stem: "在 LLM 工业链路里，Compute 最直接决定的是什么？",
      options: [
        { label: "A", text: "模型训练和推理能承载的物理上限" },
        { label: "B", text: "模型是否一定具备 reasoning 能力" },
        { label: "C", text: "数据质量是否自动变好" },
        { label: "D", text: "prompt 是否不再重要" }
      ],
      answer: ["A"],
      explanation: "Compute 是训练与推理的物理底座，影响可训练规模、训练速度、实验迭代和服务成本，但不会自动解决数据、算法或产品问题。",
      recruiting_translation: "如果候选人能讲清 GPU cluster、network、storage、scheduler 的边界，通常更可能真正做过训练或推理基础设施。"
    },
    {
      id: "data-001",
      stage: "Data",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01b_data.md",
      stem: "为什么 LLM data pipeline 不只是“收集更多文本”？",
      options: [
        { label: "A", text: "因为数据来源、清洗、去重、过滤和配比都会影响模型能力" },
        { label: "B", text: "因为模型只需要很少数据" },
        { label: "C", text: "因为训练阶段完全不依赖数据" },
        { label: "D", text: "因为所有网页文本质量都一样" }
      ],
      answer: ["A"],
      explanation: "数据工程决定模型学到什么、以什么比例学习、噪声和重复内容如何影响训练，因此 data pipeline 是能力构建的一部分。",
      recruiting_translation: "能讨论 data mixture、dedup、quality filter、domain data role 的候选人，比只说“做过数据清洗”更有信号。"
    },
    {
      id: "architecture-001",
      stage: "Architecture",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01c_architecture.md",
      stem: "在 decoder-only Transformer 里，attention 机制主要帮助模型做什么？",
      options: [
        { label: "A", text: "根据上下文 token 建立依赖关系" },
        { label: "B", text: "替代所有训练数据" },
        { label: "C", text: "让模型不需要 GPU" },
        { label: "D", text: "自动完成线上反馈闭环" }
      ],
      answer: ["A"],
      explanation: "Attention 让当前位置可以读取上下文中相关 token 的信息，是 Transformer forward path 的核心机制之一。",
      recruiting_translation: "架构候选人应该能把 attention、MLP、residual、normalization、position encoding 放回 forward path，而不是只背术语。"
    },
    {
      id: "training-infra-001",
      stage: "Training Infrastructure",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01d_training_infra.md",
      stem: "分布式训练基础设施最核心要解决的问题是什么？",
      options: [
        { label: "A", text: "让大模型训练能在多 GPU / 多节点上稳定、高效运行" },
        { label: "B", text: "让模型不用 checkpoint" },
        { label: "C", text: "让评测结果永远上涨" },
        { label: "D", text: "让数据标注完全自动化" }
      ],
      answer: ["A"],
      explanation: "Training infra 关注 parallelism、communication、checkpoint、fault tolerance、stability 等问题，使大规模训练不只是能启动，而是能长期可靠运行。",
      recruiting_translation: "强信号通常来自候选人能讲清并行策略、通信瓶颈、故障恢复和训练稳定性的真实 trade-off。"
    },
    {
      id: "pretraining-001",
      stage: "Pretraining",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01e_pretraining.md",
      stem: "Pretraining 阶段产出的 base model 通常最接近哪种状态？",
      options: [
        { label: "A", text: "学到大量语言和世界模式，但还没有被充分对齐成可用助手" },
        { label: "B", text: "已经完成所有产品级安全和偏好对齐" },
        { label: "C", text: "只会执行工具调用" },
        { label: "D", text: "只用于部署，不再需要评测" }
      ],
      answer: ["A"],
      explanation: "Pretraining 主要通过大规模训练目标让模型形成通用能力底座，之后通常还需要 mid-training、post-training、evaluation 等阶段。",
      recruiting_translation: "如果候选人把 base model 和 instruct model 混为一谈，需要继续追问其训练阶段理解。"
    },
    {
      id: "midtraining-001",
      stage: "Mid-training",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01f_mid_training.md",
      stem: "Mid-training 更像是在解决哪类问题？",
      options: [
        { label: "A", text: "在 base model 之后定向增强代码、数学、长上下文或领域能力" },
        { label: "B", text: "替代所有 post-training" },
        { label: "C", text: "只做 UI 页面开发" },
        { label: "D", text: "只负责采购 GPU" }
      ],
      answer: ["A"],
      explanation: "Mid-training 常用于能力专项增强，把 base model 推向某些能力方向，例如 code、math、long context、tool traces 或 domain knowledge。",
      recruiting_translation: "候选人若能解释 continued training 的数据、目标和 eval，通常比只说“调过模型”更有判断价值。"
    },
    {
      id: "posttraining-001",
      stage: "Post-training",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01g_post_training.md",
      stem: "Post-training 的核心目标更接近哪一项？",
      options: [
        { label: "A", text: "把 base model 优化成更符合指令、偏好、安全和任务完成要求的模型" },
        { label: "B", text: "只增加模型参数量" },
        { label: "C", text: "只压缩模型文件大小" },
        { label: "D", text: "只维护服务器监控" }
      ],
      answer: ["A"],
      explanation: "Post-training 包括 SFT、preference optimization、RL、verifier、agentic data 等，使模型更可控、更有用、更符合任务与人类偏好。",
      recruiting_translation: "强候选人通常能区分 SFT、RLHF/RLAIF、verifier、eval loop 各自解决的问题。"
    },
    {
      id: "evaluation-001",
      stage: "Evaluation",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01h_evaluation.md",
      stem: "为什么只看公开 benchmark 分数不足以判断模型真实能力？",
      options: [
        { label: "A", text: "公开 benchmark 不一定覆盖真实任务分布和产品失败模式" },
        { label: "B", text: "benchmark 分数永远没有任何意义" },
        { label: "C", text: "模型上线后不需要评测" },
        { label: "D", text: "评测只属于招聘团队" }
      ],
      answer: ["A"],
      explanation: "公开 benchmark 有横向参考价值，但真实能力还需要 internal eval、regression test、human preference、task-level eval 和线上反馈验证。",
      recruiting_translation: "能讲清 benchmark、internal eval、regression、real task eval 的边界，通常是 eval 或 model quality 方向的好信号。"
    },
    {
      id: "inference-001",
      stage: "Deployment & Inference",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01i_deployment_and_inference.md",
      stem: "KV cache 在 inference 中主要优化的是什么？",
      options: [
        { label: "A", text: "避免生成阶段重复计算已有 token 的 key/value" },
        { label: "B", text: "替代模型参数" },
        { label: "C", text: "让训练数据自动更新" },
        { label: "D", text: "让 benchmark 不再需要" }
      ],
      answer: ["A"],
      explanation: "KV cache 保存历史 token 的 key/value，使 decode 阶段不必反复计算全部上下文，从而影响 latency、throughput 和显存管理。",
      recruiting_translation: "推理候选人若能把 KV cache、prefill/decode、batching、latency 和 throughput 串起来，信号会明显更强。"
    },
    {
      id: "agent-001",
      stage: "Agent Harness",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01j_agent_harness.md",
      stem: "Agent Harness 主要负责什么？",
      options: [
        { label: "A", text: "把模型、工具、环境、记忆和任务流程组织成可执行系统" },
        { label: "B", text: "只训练 tokenizer" },
        { label: "C", text: "只负责购买云服务器" },
        { label: "D", text: "让模型不再需要评测" }
      ],
      answer: ["A"],
      explanation: "Agent Harness 关注 tool calling、browser/terminal use、planning、memory、workflow orchestration 和 task completion。",
      recruiting_translation: "Agent 方向候选人需要能讲清模型能力和工程 harness 的边界，否则容易把 demo 能力误判为系统能力。"
    },
    {
      id: "online-feedback-001",
      stage: "Online Feedback",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01k_online_feedback.md",
      stem: "Online Feedback 在 LLM 系统中最重要的价值是什么？",
      options: [
        { label: "A", text: "把真实使用中的失败、偏好和任务表现反馈到持续改进闭环" },
        { label: "B", text: "让模型永远不用重新评测" },
        { label: "C", text: "替代所有离线训练" },
        { label: "D", text: "只负责展示用户界面" }
      ],
      answer: ["A"],
      explanation: "线上反馈帮助系统发现真实失败案例、偏好差异、产品分布变化，并连接 evaluation、post-training 和 deployment 改进。",
      recruiting_translation: "能讲清 online data、failure mining、A/B testing、policy update 的候选人，通常更懂训推一体闭环。"
    },
    {
      id: "pipeline-001",
      stage: "Pipeline",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/00_index.md",
      stem: "以下哪条顺序最接近本 Wiki 的 LLM industrial pipeline 主线？",
      options: [
        { label: "A", text: "Compute -> Data -> Architecture -> Training -> Evaluation -> Inference -> Agent -> Online Feedback" },
        { label: "B", text: "UI -> Logo -> Prompt -> Viral Post -> Benchmark" },
        { label: "C", text: "Deployment -> Data -> Compute -> Architecture，顺序完全无关" },
        { label: "D", text: "Recruiting -> Offer -> Onboarding -> Pretraining" }
      ],
      answer: ["A"],
      explanation: "本项目围绕 LLM 从构建、训练、评测、部署到线上反馈的工业链路组织知识。",
      recruiting_translation: "如果候选人能把自己的工作放进 pipeline 位置，通常更容易判断其 ownership 和上下游协作。"
    },
    {
      id: "recruiting-001",
      stage: "Recruiting Translation",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/05_recruiting/candidate_signals.md",
      stem: "把技术知识转化为 recruiting judgment 时，最应该避免什么？",
      options: [
        { label: "A", text: "只听候选人说热门关键词，不追问实际 ownership 和上下游影响" },
        { label: "B", text: "追问候选人的系统边界" },
        { label: "C", text: "区分 strong signal 和 weak signal" },
        { label: "D", text: "把候选人经历放回 pipeline 判断" }
      ],
      answer: ["A"],
      explanation: "技术招聘判断的关键是识别真实贡献、系统边界、候选人决策权和对结果的影响，而不是堆关键词。",
      recruiting_translation: "一个好 pre-talk 问题应该能让候选人暴露真实 ownership、trade-off 和协作边界。"
    },
    {
      id: "concept-001",
      stage: "Core Concept",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/02_core_concept/02a_category.md",
      stem: "学习 LLM 概念时，为什么要反复追问“它位于 pipeline 哪一段”？",
      options: [
        { label: "A", text: "因为同一个术语在不同阶段的作用、目标和评价标准可能不同" },
        { label: "B", text: "因为 pipeline 位置只是装饰" },
        { label: "C", text: "因为所有概念都只属于 pretraining" },
        { label: "D", text: "因为招聘中不需要理解上下游" }
      ],
      answer: ["A"],
      explanation: "Pipeline position 能帮助区分 upstream dependency、downstream impact、stage boundary 和对应 team ownership。",
      recruiting_translation: "能把术语放回具体阶段的人，通常更容易讲清自己做了什么、影响了什么、没有负责什么。"
    },
    {
      id: "scenario-001",
      stage: "Scenario Judgment",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/05_recruiting/pre_talk_questions.md",
      stem: "候选人说“我负责模型评测”，下面哪个追问最能判断真实 ownership？",
      options: [
        { label: "A", text: "你负责的是 benchmark 跑分、internal eval 设计、错误分析，还是回归测试系统？" },
        { label: "B", text: "你觉得 AI 最近火吗？" },
        { label: "C", text: "你最喜欢哪个模型名字？" },
        { label: "D", text: "你会不会写 PPT？" }
      ],
      answer: ["A"],
      explanation: "评测方向的 ownership 可能落在数据集设计、评测执行、错误归因、regression infra、human eval 或 product eval，需要拆开问。",
      recruiting_translation: "好的追问会把候选人的笼统描述拆成可验证的工作流和决策边界。"
    },
    {
      id: "scenario-002",
      stage: "Scenario Judgment",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/05_recruiting/role_mapping.md",
      stem: "候选人说“我优化了模型推理性能”，下面哪个信息最关键？",
      options: [
        { label: "A", text: "优化的是 prefill、decode、batching、KV cache、quantization 还是 serving control plane" },
        { label: "B", text: "候选人的头像是否专业" },
        { label: "C", text: "候选人是否使用了最新流行词" },
        { label: "D", text: "候选人是否只看过一篇博客" }
      ],
      answer: ["A"],
      explanation: "Inference optimization 有多种层次，必须拆清楚优化对象、指标、约束和上线环境。",
      recruiting_translation: "能说出指标从哪里来、优化在哪一层生效、是否真实上线，是判断 inference 候选人的关键。"
    },
    {
      id: "architecture-002",
      stage: "Architecture",
      type: "multi_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01c_architecture.md",
      stem: "以下哪些属于 Architecture 章节关心的结构设计问题？",
      options: [
        { label: "A", text: "使用 dense MLP 还是 MoE" },
        { label: "B", text: "Attention、position encoding、normalization 和 residual path 如何组织" },
        { label: "C", text: "learning rate warmup / decay 的具体 schedule" },
        { label: "D", text: "上下文长度、KV cache 成本和推理延迟之间的 trade-off" }
      ],
      answer: ["A", "B", "D"],
      explanation: "Architecture 关注模型计算图和结构约束；learning rate schedule 属于 pretraining recipe。",
      recruiting_translation: "架构候选人如果能把结构选择连接到训练稳定性和推理成本，而不是只背模块名，信号更强。"
    },
    {
      id: "eval-002",
      stage: "Evaluation",
      type: "multi_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01h_evaluation.md",
      stem: "判断模型真实能力时，哪些评测视角通常需要结合？",
      options: [
        { label: "A", text: "公开 benchmark" },
        { label: "B", text: "internal eval 和 regression test" },
        { label: "C", text: "真实任务 / 产品场景表现" },
        { label: "D", text: "只看模型名字是否热门" }
      ],
      answer: ["A", "B", "C"],
      explanation: "公开 benchmark 有横向参考价值，但真实能力还要结合内部评测、回归测试、用户任务和产品失败模式。",
      recruiting_translation: "评测候选人应该能解释不同 eval 的覆盖范围、盲区和上线决策价值。"
    },
    {
      id: "misconception-001",
      stage: "Evaluation",
      type: "true_false",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01h_evaluation.md",
      stem: "判断题：模型在公开 benchmark 上分数高，就一定能在所有真实业务任务中表现好。",
      options: [
        { label: "A", text: "正确" },
        { label: "B", text: "错误" }
      ],
      answer: ["B"],
      explanation: "公开 benchmark 是参考，不等于真实任务分布、产品约束、用户偏好和长期稳定性。",
      recruiting_translation: "能主动指出 benchmark 与真实场景 gap 的候选人，通常更接近成熟的 model quality 思维。"
    },
    {
      id: "misconception-002",
      stage: "Post-training",
      type: "true_false",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01g_post_training.md",
      stem: "判断题：Post-training 只是在模型最后加一点 prompt，不涉及训练或评测闭环。",
      options: [
        { label: "A", text: "正确" },
        { label: "B", text: "错误" }
      ],
      answer: ["B"],
      explanation: "Post-training 通常涉及 SFT、preference optimization、RL、verifier、safety、distillation 和 evaluation loop。",
      recruiting_translation: "如果候选人把 post-training 说成 prompt engineering，需要继续确认其实际经验层级。"
    },
    {
      id: "agent-002",
      stage: "Agent Harness",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01j_agent_harness.md",
      stem: "为什么 Agent 系统不能只看模型本身能力？",
      options: [
        { label: "A", text: "因为工具接口、状态管理、错误恢复、任务编排也会决定任务完成率" },
        { label: "B", text: "因为模型能力完全不重要" },
        { label: "C", text: "因为 Agent 不需要环境" },
        { label: "D", text: "因为只要页面好看就能完成任务" }
      ],
      answer: ["A"],
      explanation: "Agent task completion 是模型能力与 harness 工程共同作用的结果，工具、规划、记忆、错误恢复都会影响最终表现。",
      recruiting_translation: "Agent infra 候选人应该能描述 harness 的失败模式，而不是只展示一次成功 demo。"
    },
    {
      id: "online-feedback-002",
      stage: "Online Feedback",
      type: "single_choice",
      difficulty: "fresher",
      source: "references/01_core_pipeline/01k_online_feedback.md",
      stem: "线上失败案例挖掘通常会流向哪个下游动作？",
      options: [
        { label: "A", text: "构造 eval、改进数据、post-training 或产品策略" },
        { label: "B", text: "删除所有模型权重" },
        { label: "C", text: "完全停止监控" },
        { label: "D", text: "只修改 README 标题" }
      ],
      answer: ["A"],
      explanation: "真实失败案例可以转化为评测集、训练数据、reward/verifier 信号、产品规则或部署策略更新。",
      recruiting_translation: "能把线上反馈连接到模型迭代的人，通常更懂模型产品化后的持续改进。"
    }
  ]
};
