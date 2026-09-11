window.EXPANDED_POST_TYPES = [
  {
    "id": "comparison-selection",
    "type_name": "对比与选型",
    "description": "用统一条件比较方案，帮助高意向用户完成评估、迁移和采购决策。",
    "conversion_grade": "S",
    "grade_reason": "处于决策后段，CTA 可直达试用、估算或迁移；透明方法与可复核证据能降低风险，但制作摩擦高。",
    "conversion_score": 94,
    "engagement_score": 82,
    "production_cost": "高",
    "funnel_stage": "考虑→决策",
    "platforms": [
      "独立博客",
      "Reddit",
      "Hacker News",
      "LinkedIn",
      "Indie Hackers",
      "Pinterest",
      "GitHub Discussions",
      "YouTube",
      "Medium",
      "Instagram Reels",
      "TikTok"
    ],
    "best_for": "成熟竞争品类、替代方案、采购评估与迁移窗口",
    "buildin_angle": "用同一真实内容任务、同一输入与公开口径比较 Buildin AI；承认适用边界，不宣称绝对赢家。",
    "subtypes": [
      {
        "name": "功能对比",
        "platforms": [
          "独立博客",
          "Reddit",
          "Hacker News",
          "LinkedIn"
        ],
        "cta_examples": [
          "下载功能选型表",
          "用你的任务免费对比"
        ],
        "risks": [
          "功能口径不对称",
          "版本更新导致结论过期"
        ],
        "comparison_dimensions": [
          "核心功能覆盖",
          "高级能力",
          "协作与权限",
          "稳定性与限制"
        ]
      },
      {
        "name": "价格与 TCO 对比",
        "platforms": [
          "独立博客",
          "Reddit",
          "Indie Hackers",
          "Pinterest"
        ],
        "cta_examples": [
          "复制 TCO 计算表",
          "按席位数估算成本"
        ],
        "risks": [
          "价格或配额过期",
          "把时间价值包装成实测 ROI"
        ],
        "comparison_dimensions": [
          "订阅与席位费",
          "用量/API 成本",
          "实施维护成本",
          "隐性切换成本"
        ]
      },
      {
        "name": "迁移对比",
        "platforms": [
          "Hacker News",
          "Reddit",
          "GitHub Discussions",
          "独立博客"
        ],
        "cta_examples": [
          "下载迁移清单",
          "先迁移 20 条内容做 PoC"
        ],
        "risks": [
          "遗漏附件或权限",
          "迁移不可逆或回滚不充分"
        ],
        "comparison_dimensions": [
          "导入覆盖率",
          "权限映射",
          "迁移耗时",
          "回滚与导出"
        ]
      },
      {
        "name": "隐私与数据主权对比",
        "platforms": [
          "Hacker News",
          "Reddit",
          "GitHub Discussions",
          "LinkedIn"
        ],
        "cta_examples": [
          "查看数据流说明",
          "提交你的合规约束"
        ],
        "risks": [
          "安全表述缺乏技术依据",
          "混淆数据驻留与数据主权"
        ],
        "comparison_dimensions": [
          "数据驻留",
          "训练与遥测政策",
          "访问控制",
          "保留删除与导出"
        ]
      },
      {
        "name": "性能与稳定性对比",
        "platforms": [
          "YouTube",
          "Hacker News",
          "Reddit",
          "独立博客"
        ],
        "cta_examples": [
          "下载原始基准结果",
          "提交规模参数补测"
        ],
        "risks": [
          "测试环境偏置",
          "用单次结果概括长期表现"
        ],
        "comparison_dimensions": [
          "首字节与完成延迟",
          "成功率",
          "并发与限流",
          "资源占用"
        ]
      },
      {
        "name": "场景适配对比",
        "platforms": [
          "LinkedIn",
          "Reddit",
          "独立博客",
          "Medium"
        ],
        "cta_examples": [
          "选择你的场景路径",
          "用真实 Brief 验证"
        ],
        "risks": [
          "场景选择偏向自家产品",
          "忽略不适用人群"
        ],
        "comparison_dimensions": [
          "个人创作",
          "团队协作",
          "内容复用",
          "复杂审批"
        ]
      },
      {
        "name": "体验与上手对比",
        "platforms": [
          "YouTube",
          "Instagram Reels",
          "TikTok",
          "独立博客"
        ],
        "cta_examples": [
          "按同一任务亲自试用",
          "查看完整操作录像"
        ],
        "risks": [
          "只展示理想路径",
          "主观体验冒充普遍结论"
        ],
        "comparison_dimensions": [
          "首次成功时间",
          "学习成本",
          "错误恢复",
          "移动端与无障碍"
        ]
      },
      {
        "name": "生态与集成对比",
        "platforms": [
          "GitHub Discussions",
          "Hacker News",
          "独立博客",
          "LinkedIn"
        ],
        "cta_examples": [
          "查看集成清单",
          "提交你的工具栈做适配评估"
        ],
        "risks": [
          "仅按数量比较集成",
          "忽略 API 深度与维护状态"
        ],
        "comparison_dimensions": [
          "原生集成",
          "API/Webhook",
          "身份与权限",
          "生态活跃度"
        ]
      }
    ]
  },
  {
    "id": "tutorial-workflow",
    "type_name": "教程与工作流",
    "description": "围绕一个明确任务交付可复现步骤，从教育自然过渡到模板使用或产品激活。",
    "conversion_grade": "A",
    "grade_reason": "任务意图明确，CTA 可嵌入复制模板或亲手完成；证据较强，但部分读者仍处于学习阶段。",
    "conversion_score": 84,
    "engagement_score": 86,
    "production_cost": "中",
    "funnel_stage": "认知→激活",
    "platforms": [
      "TikTok",
      "Instagram Reels",
      "YouTube Shorts",
      "Reddit",
      "Indie Hackers",
      "GitHub Discussions",
      "Hacker News",
      "YouTube",
      "独立博客",
      "Medium",
      "Pinterest",
      "Substack"
    ],
    "best_for": "功能教育、SEO、onboarding 与复杂工作流",
    "buildin_angle": "把散乱素材转成跨平台内容包，保留前置条件、失败处理和人工审校点。",
    "subtypes": [
      {
        "name": "短视频三步微教程",
        "structure": "结果预览→步骤 1/2/3→常见错误→成品回看。",
        "platforms": [
          "TikTok",
          "Instagram Reels",
          "YouTube Shorts"
        ],
        "cta_examples": [
          "收藏后照做",
          "评论“步骤”拿提示词"
        ],
        "risks": [
          "步骤过密",
          "省略前置条件"
        ]
      },
      {
        "name": "社区可复现 How-to",
        "structure": "问题→前置条件→分步配置→预期输出→失败排查→模板。",
        "platforms": [
          "Reddit",
          "Indie Hackers",
          "GitHub Discussions",
          "Hacker News"
        ],
        "cta_examples": [
          "复制模板复现",
          "把失败截图贴回来"
        ],
        "risks": [
          "教程变软广",
          "版本路径失效"
        ]
      },
      {
        "name": "真实项目深度教程",
        "structure": "业务 Brief→规划→构建→排错→验收→资源包。",
        "platforms": [
          "YouTube",
          "独立博客",
          "Medium"
        ],
        "cta_examples": [
          "下载 Brief 与验收表",
          "复制项目替换数据"
        ],
        "risks": [
          "变成功能流水账",
          "维护成本高"
        ]
      },
      {
        "name": "搜索型任务指南",
        "structure": "搜索任务→时间/难度→步骤截图→FAQ→可复制工作流。",
        "platforms": [
          "独立博客",
          "Pinterest",
          "Substack",
          "Medium"
        ],
        "cta_examples": [
          "复制本文工作流",
          "用示例输入生成第一版"
        ],
        "risks": [
          "为关键词堆篇幅",
          "界面更新后失效"
        ]
      }
    ]
  },
  {
    "id": "product-demo",
    "type_name": "产品演示与展示",
    "description": "让产品本身成为证据，以可玩 Demo、屏录或模板成品缩短理解距离。",
    "conversion_grade": "S",
    "grade_reason": "价值可被直接看见或体验，CTA 与首次成功距离短；若登录墙或理想化演示增加摩擦，效果会明显下降。",
    "conversion_score": 91,
    "engagement_score": 88,
    "production_cost": "中",
    "funnel_stage": "认知→激活",
    "platforms": [
      "TikTok",
      "Instagram Reels",
      "YouTube Shorts",
      "YouTube",
      "Hacker News",
      "Indie Hackers",
      "Reddit",
      "GitHub Discussions",
      "Instagram",
      "Pinterest",
      "独立博客"
    ],
    "best_for": "新品发布、核心功能、MVP 与模板库",
    "buildin_angle": "首帧展示 Buildin AI 成品，再回到真实输入和必要操作，并公开限制。",
    "subtypes": [
      {
        "name": "15–45 秒结果先行 Demo",
        "structure": "成品首帧→输入→2–3 个操作→结果与耗时→单一 CTA。",
        "platforms": [
          "TikTok",
          "Instagram Reels",
          "YouTube Shorts"
        ],
        "cta_examples": [
          "点主页用你的需求试一次",
          "看完整 Walkthrough"
        ],
        "risks": [
          "像预制魔法",
          "首帧信息过密"
        ]
      },
      {
        "name": "端到端 Walkthrough",
        "structure": "交付目标→配置→生成→人工修改→导出→限制复盘。",
        "platforms": [
          "YouTube"
        ],
        "cta_examples": [
          "复制示例需求",
          "预约场景化演示"
        ],
        "risks": [
          "开场过长",
          "只展示理想路径"
        ]
      },
      {
        "name": "社区 Showcase / Show",
        "structure": "做了什么→为何做→可玩入口→真实任务→限制→作者答疑。",
        "platforms": [
          "Hacker News",
          "Indie Hackers",
          "Reddit",
          "GitHub Discussions"
        ],
        "cta_examples": [
          "直接试无需注册示例",
          "贴出最差结果"
        ],
        "risks": [
          "只有等待名单",
          "宕机或营销腔"
        ]
      },
      {
        "name": "模板画廊与一题多版",
        "structure": "最终成品→3–8 个变体→可编辑区域→输入到成品→模板入口。",
        "platforms": [
          "Instagram",
          "Pinterest",
          "独立博客"
        ],
        "cta_examples": [
          "复制跨平台模板",
          "选择版式开始生成"
        ],
        "risks": [
          "样例过于理想化",
          "跳转后无法复刻"
        ]
      }
    ]
  },
  {
    "id": "case-proof",
    "type_name": "客户案例与结果证明",
    "description": "用基线、过程、结果和第三方证言降低采购风险并处理异议。",
    "conversion_grade": "S",
    "grade_reason": "与购买决策最接近，CTA 可导向演示或试点，社会证明强；授权、核验和归因摩擦也最高。",
    "conversion_score": 96,
    "engagement_score": 78,
    "production_cost": "高",
    "funnel_stage": "考虑→决策",
    "platforms": [
      "LinkedIn",
      "X",
      "YouTube",
      "独立博客",
      "TikTok",
      "Instagram Reels",
      "YouTube Shorts",
      "Instagram",
      "Indie Hackers",
      "Reddit",
      "Substack",
      "Medium"
    ],
    "best_for": "B2B、高客单价、垂直行业与销售跟进",
    "buildin_angle": "展示同一研究素材如何生成多平台产物，披露时间窗、修改次数和人工审核，不虚构节省比例。",
    "subtypes": [
      {
        "name": "客户问题—采用—结果",
        "structure": "客户背景→基线→采用过程→结果口径→客户原话→下一步。",
        "platforms": [
          "LinkedIn",
          "X",
          "YouTube",
          "独立博客"
        ],
        "cta_examples": [
          "查看完整案例",
          "预约同场景评估"
        ],
        "risks": [
          "无基线或时间窗",
          "未经授权披露"
        ]
      },
      {
        "name": "Before/After 前后对照",
        "structure": "同条件基线→关键改变→同屏结果→差异标注→复现入口。",
        "platforms": [
          "TikTok",
          "Instagram Reels",
          "YouTube Shorts",
          "Instagram"
        ],
        "cta_examples": [
          "用同一模板复现",
          "提交旧内容做改造"
        ],
        "risks": [
          "条件不一致",
          "省略人工工作"
        ]
      },
      {
        "name": "量化增长/效率复盘",
        "structure": "约束→时间线→前后指标→失败尝试→归因限制→方法。",
        "platforms": [
          "Indie Hackers",
          "Reddit",
          "Substack",
          "Medium"
        ],
        "cta_examples": [
          "下载复盘模板",
          "申请同口径试点"
        ],
        "risks": [
          "幸存者偏差",
          "只报增幅不报基线"
        ]
      },
      {
        "name": "第三方诚实测评",
        "structure": "测试标准→现场输入→优点→失败→适用人群→披露。",
        "platforms": [
          "YouTube",
          "TikTok",
          "Instagram Reels",
          "YouTube Shorts"
        ],
        "cta_examples": [
          "用同一 Brief 自测",
          "查看完整优缺点"
        ],
        "risks": [
          "合作披露不足",
          "删掉负面结果"
        ]
      }
    ]
  },
  {
    "id": "launch-event",
    "type_name": "发布与活动",
    "description": "利用明确时间窗口集中承接注册、报名、首日口碑与后续培育。",
    "conversion_grade": "S",
    "grade_reason": "CTA、时间和下一步清晰，接近激活；评论、嘉宾与实时答疑形成证明，但执行链条较长。",
    "conversion_score": 90,
    "engagement_score": 84,
    "production_cost": "高",
    "funnel_stage": "激活→决策",
    "platforms": [
      "Product Hunt",
      "Hacker News",
      "Indie Hackers",
      "Reddit",
      "LinkedIn",
      "X",
      "Threads",
      "Instagram",
      "YouTube",
      "TikTok",
      "Instagram Reels"
    ],
    "best_for": "正式发布、重大版本、直播演示与 AMA",
    "buildin_angle": "围绕‘一份研究变成多平台原生帖子’设置现场任务，发布后沉淀回放与切片。",
    "subtypes": [
      {
        "name": "Product Hunt / 社区首发",
        "structure": "一句话定位→创作者故事→3 个价值点→演示→限制/定价→答疑。",
        "platforms": [
          "Product Hunt",
          "Hacker News",
          "Indie Hackers",
          "Reddit"
        ],
        "cta_examples": [
          "今天直接体验",
          "告诉我们首次成功前卡点"
        ],
        "risks": [
          "诱导投票",
          "隐藏限制或价格"
        ]
      },
      {
        "name": "活动报名预热",
        "structure": "目标人群与痛点→活动承诺→议程/嘉宾→时间→报名。",
        "platforms": [
          "LinkedIn",
          "X",
          "Threads",
          "Instagram"
        ],
        "cta_examples": [
          "报名并提交旧帖子",
          "转发给协作同事"
        ],
        "risks": [
          "时区或链接错误",
          "主题过宽"
        ]
      },
      {
        "name": "直播 Build + AMA",
        "structure": "目标与规则→现场 Build→投票→失败修复→验收→AMA。",
        "platforms": [
          "YouTube",
          "TikTok",
          "Instagram Reels"
        ],
        "cta_examples": [
          "预约并提交需求",
          "领取本场成品"
        ],
        "risks": [
          "现场故障",
          "敏感信息进入画面"
        ]
      },
      {
        "name": "会后回放与高光",
        "structure": "3 个关键结论→时间戳切片→问题答复→回放→下一步。",
        "platforms": [
          "YouTube",
          "LinkedIn",
          "X",
          "Instagram Reels"
        ],
        "cta_examples": [
          "领取回放和检查表",
          "预约后续演示"
        ],
        "risks": [
          "只发回放无摘要",
          "高意向参与者未跟进"
        ]
      }
    ]
  },
  {
    "id": "build-in-public",
    "type_name": "Build in Public 与幕后",
    "description": "持续公开进展、决策和失败，用透明度积累长期信任与反馈循环。",
    "conversion_grade": "A",
    "grade_reason": "真实过程和连续证据可累积社会证明并招募早期用户，但通常要多次触达，且信息脱敏增加摩擦。",
    "conversion_score": 79,
    "engagement_score": 83,
    "production_cost": "中",
    "funnel_stage": "认知→考虑",
    "platforms": [
      "X",
      "LinkedIn",
      "Threads",
      "Indie Hackers",
      "Reddit",
      "Substack",
      "Medium",
      "Instagram",
      "Pinterest",
      "独立博客",
      "GitHub Discussions"
    ],
    "best_for": "早期产品、创始人品牌、路线图共创",
    "buildin_angle": "公开帖子类型库的样本选择、启发式评分、人工校验与下一轮实验。",
    "subtypes": [
      {
        "name": "进展—指标—决策周报",
        "structure": "周期结论→交付→指标口径→得失→关键决策→下周目标。",
        "platforms": [
          "X",
          "LinkedIn",
          "Threads",
          "Indie Hackers"
        ],
        "cta_examples": [
          "投票决定下项实验",
          "申请成为测试者"
        ],
        "risks": [
          "只晒增长",
          "指标口径漂移"
        ]
      },
      {
        "name": "失败复盘与取舍日志",
        "structure": "目标→失败现场→根因→代价→修正→仍未解决的问题。",
        "platforms": [
          "Reddit",
          "Indie Hackers",
          "Substack",
          "Medium"
        ],
        "cta_examples": [
          "分享你的反例",
          "订阅下一次验证"
        ],
        "risks": [
          "表演式脆弱",
          "泄露客户数据"
        ]
      },
      {
        "name": "幕后制作过程",
        "structure": "草稿/时间线→工具与角色→中间产物→修改理由→下一步。",
        "platforms": [
          "Instagram",
          "Pinterest",
          "独立博客",
          "GitHub Discussions"
        ],
        "cta_examples": [
          "评论想看的环节",
          "加入测试提交任务"
        ],
        "risks": [
          "流水账无洞察",
          "公开路线图过度"
        ]
      }
    ]
  },
  {
    "id": "thought-leadership",
    "type_name": "观点与思想领导力",
    "description": "以可争论主张、证据和边界建立品类认知与品牌差异。",
    "conversion_grade": "B",
    "grade_reason": "讨论与关注潜力高，但购买意图通常较弱；只有论点紧连产品问题且给出行动路径时才接近转化。",
    "conversion_score": 68,
    "engagement_score": 89,
    "production_cost": "中",
    "funnel_stage": "认知→考虑",
    "platforms": [
      "X",
      "LinkedIn",
      "Threads",
      "Substack",
      "Medium",
      "独立博客",
      "Instagram",
      "Pinterest"
    ],
    "best_for": "品类教育、创始人立场与行业变化",
    "buildin_angle": "主张‘跨平台不是复制粘贴，而是保留论点、重构阅读动作’，用改写对照证明。",
    "subtypes": [
      {
        "name": "反共识短观点",
        "structure": "争议主张→常见做法→理由→边界→替代方案→邀请反例。",
        "platforms": [
          "X",
          "LinkedIn",
          "Threads"
        ],
        "cta_examples": [
          "贴出一个反例",
          "关注后续验证"
        ],
        "risks": [
          "为争议而争议",
          "绝对化表述"
        ]
      },
      {
        "name": "论点—证据—框架长文",
        "structure": "主张→背景→分论点→证据/反例→框架→行动。",
        "platforms": [
          "LinkedIn",
          "X",
          "Substack",
          "Medium",
          "独立博客"
        ],
        "cta_examples": [
          "阅读完整框架",
          "用自己的内容验证"
        ],
        "risks": [
          "观点无证据",
          "正文墙"
        ]
      },
      {
        "name": "观点图文摘要",
        "structure": "鲜明观点→语境与证据→机制/边界→行动→完整论证。",
        "platforms": [
          "Instagram",
          "Pinterest",
          "LinkedIn"
        ],
        "cta_examples": [
          "保存观点图",
          "阅读完整论证"
        ],
        "risks": [
          "摘要脱离语境",
          "跨平台原样复制"
        ]
      }
    ]
  },
  {
    "id": "data-research",
    "type_name": "数据与研究拆解",
    "description": "以透明口径、可复算数据和局限说明建立分析权威。",
    "conversion_grade": "S",
    "grade_reason": "既有保存价值又能完成购买前教育，数据与产品价值链相关时 CTA 很强；采集、复核和更新成本高。",
    "conversion_score": 92,
    "engagement_score": 87,
    "production_cost": "高",
    "funnel_stage": "考虑→决策",
    "platforms": [
      "X",
      "LinkedIn",
      "Threads",
      "独立博客",
      "Substack",
      "Pinterest",
      "Instagram"
    ],
    "best_for": "行业基准、ROI 解释、趋势和策略取舍",
    "buildin_angle": "拆解各平台内容结构差异，公开样本、评分方法和局限，明确所有分数均为启发式。",
    "subtypes": [
      {
        "name": "单指标反推",
        "structure": "反直觉数字→来源口径→分步计算→驱动因素→局限→决策。",
        "platforms": [
          "X",
          "LinkedIn",
          "Threads"
        ],
        "cta_examples": [
          "下载可复算表",
          "提交样本补做分组"
        ],
        "risks": [
          "相关性冒充因果",
          "省略基数"
        ]
      },
      {
        "name": "跨平台基准报告",
        "structure": "研究问题→样本→方法→平台分组→结论→原始表/更新日期。",
        "platforms": [
          "独立博客",
          "Substack",
          "LinkedIn",
          "Pinterest"
        ],
        "cta_examples": [
          "查看完整方法",
          "订阅下一版基准"
        ],
        "risks": [
          "样本偏差",
          "平台规则变化"
        ]
      },
      {
        "name": "数据故事信息图",
        "structure": "核心结论→关键数据→原因→行动建议→来源与方法。",
        "platforms": [
          "Instagram",
          "Pinterest",
          "独立博客"
        ],
        "cta_examples": [
          "保存平台选择图",
          "上传主题生成结构"
        ],
        "risks": [
          "图表误导",
          "移动端字号过小"
        ]
      }
    ]
  },
  {
    "id": "resource-template",
    "type_name": "资源清单与模板",
    "description": "以可立即复用的清单、模板或工具箱换取收藏、订阅和首次产品动作。",
    "conversion_grade": "A",
    "grade_reason": "价值交换清晰、CTA 容易落到复制或导入；流量意图混杂，质量、筛选标准和交付体验决定后续转化。",
    "conversion_score": 85,
    "engagement_score": 91,
    "production_cost": "中",
    "funnel_stage": "认知→激活",
    "platforms": [
      "X",
      "LinkedIn",
      "Threads",
      "Reddit",
      "GitHub Discussions",
      "Pinterest",
      "独立博客",
      "Substack",
      "Instagram"
    ],
    "best_for": "模板驱动增长、工具栈、学习路径与潜客获取",
    "buildin_angle": "发布跨平台帖子启动包，并说明 Buildin AI 在研究、改写、视觉和复盘中的边界。",
    "subtypes": [
      {
        "name": "按任务分组资源清单",
        "structure": "人群/任务→筛选标准→分组→适用边界→起步组合→更新日。",
        "platforms": [
          "X",
          "LinkedIn",
          "Threads",
          "Reddit"
        ],
        "cta_examples": [
          "收藏并补充资源",
          "领取可复制清单"
        ],
        "risks": [
          "堆数量无筛选",
          "链接与价格过时"
        ]
      },
      {
        "name": "场景决策树",
        "structure": "限定问题→条件分支→每条路径建议→不适用条件→更新入口。",
        "platforms": [
          "Reddit",
          "GitHub Discussions",
          "Pinterest",
          "独立博客"
        ],
        "cta_examples": [
          "先用决策树选路径",
          "提交遗漏场景"
        ],
        "risks": [
          "伪中立置顶自家产品",
          "条件不完整"
        ]
      },
      {
        "name": "模板资源包 / Swipe File",
        "structure": "受众与结果→预览→场景分类→免费样例→完整包→上手邮件。",
        "platforms": [
          "独立博客",
          "Substack",
          "Pinterest",
          "Instagram"
        ],
        "cta_examples": [
          "免费复制模板包",
          "导入 Buildin AI 使用"
        ],
        "risks": [
          "表单摩擦高",
          "下载后无引导"
        ]
      },
      {
        "name": "发布前检查表",
        "structure": "结果型标题→适用对象→逐项检查→常见坑→总结→模板入口。",
        "platforms": [
          "Instagram",
          "LinkedIn",
          "Pinterest"
        ],
        "cta_examples": [
          "收藏检查表",
          "获取可编辑版本"
        ],
        "risks": [
          "条目过多",
          "互动诱导替代价值"
        ]
      }
    ]
  },
  {
    "id": "carousel-visual",
    "type_name": "轮播与信息图",
    "description": "把复杂框架拆成可滑动、可保存、可跨尺寸重排的视觉资产。",
    "conversion_grade": "A",
    "grade_reason": "保存和分享信号强，可承接模板或报告；但从浏览到产品动作仍有距离，且设计执行摩擦中高。",
    "conversion_score": 82,
    "engagement_score": 93,
    "production_cost": "高",
    "funnel_stage": "认知→考虑",
    "platforms": [
      "LinkedIn",
      "Instagram",
      "Pinterest"
    ],
    "best_for": "框架解释、检查表、数据摘要与案例预览",
    "buildin_angle": "制作‘一个核心洞察，多个平台结构’轮播，并为 Pinterest 输出可独立理解的长图。",
    "subtypes": [
      {
        "name": "一页一观点教程轮播",
        "structure": "封面收益→问题→3–7 页步骤→示例→总结→单一 CTA。",
        "platforms": [
          "LinkedIn",
          "Instagram"
        ],
        "cta_examples": [
          "保存逐页教程",
          "评论获取结构表"
        ],
        "risks": [
          "单页字太多",
          "封面空泛"
        ]
      },
      {
        "name": "流程图与框架图解",
        "structure": "核心关系→节点解释→示例→使用条件→完整方法链接。",
        "platforms": [
          "Instagram",
          "Pinterest",
          "LinkedIn"
        ],
        "cta_examples": [
          "保存流程图",
          "查看完整方法"
        ],
        "risks": [
          "视觉好看但不可行动",
          "裁切破坏顺序"
        ]
      },
      {
        "name": "对比矩阵轮播",
        "structure": "比较前提→统一维度→逐页差异→场景建议→评分表入口。",
        "platforms": [
          "LinkedIn",
          "Instagram",
          "Pinterest"
        ],
        "cta_examples": [
          "下载选型矩阵",
          "评论你的优先维度"
        ],
        "risks": [
          "维度不对称",
          "结论偏置"
        ]
      },
      {
        "name": "案例摘要轮播",
        "structure": "客户/场景→基线→过程→结果→限制→完整案例。",
        "platforms": [
          "LinkedIn",
          "Instagram"
        ],
        "cta_examples": [
          "查看完整案例",
          "申请同场景试点"
        ],
        "risks": [
          "省略归因限制",
          "品牌自夸感强"
        ]
      }
    ]
  },
  {
    "id": "founder-story",
    "type_name": "创始人与品牌故事",
    "description": "通过具体冲突、选择和认知变化人格化品牌，让产品使命更易记忆。",
    "conversion_grade": "A",
    "grade_reason": "真实叙事能提升信任并辅助创始人驱动销售，但转化依赖故事与客户问题的自然连接，CTA 不宜过硬。",
    "conversion_score": 77,
    "engagement_score": 90,
    "production_cost": "中",
    "funnel_stage": "认知→考虑",
    "platforms": [
      "LinkedIn",
      "X",
      "Threads",
      "Substack",
      "Product Hunt",
      "Indie Hackers",
      "独立博客",
      "YouTube",
      "Medium",
      "Instagram"
    ],
    "best_for": "创始人品牌、使命、招聘与早期客户沟通",
    "buildin_angle": "讲清团队从手工跨平台改写中发现问题，再落到‘保存平台差异与可验证结构’的产品选择。",
    "subtypes": [
      {
        "name": "困境—选择—代价—转折",
        "structure": "具体场景→错误信念→关键选择→代价→结果→新认知。",
        "platforms": [
          "LinkedIn",
          "X",
          "Threads",
          "Substack"
        ],
        "cta_examples": [
          "分享你的转折时刻",
          "关注后续产品决策"
        ],
        "risks": [
          "过度戏剧化",
          "情绪替代证据"
        ]
      },
      {
        "name": "产品起源故事",
        "structure": "用户痛点→旧替代方案→洞察→最初原型→今天仍坚持的原则。",
        "platforms": [
          "Product Hunt",
          "Indie Hackers",
          "独立博客",
          "YouTube"
        ],
        "cta_examples": [
          "试用最初场景",
          "告诉我们你的旧工作流"
        ],
        "risks": [
          "英雄叙事过重",
          "时间线失真"
        ]
      },
      {
        "name": "团队价值观与取舍",
        "structure": "冲突决策→可选方案→选择标准→放弃什么→对用户的意义。",
        "platforms": [
          "LinkedIn",
          "Medium",
          "Instagram"
        ],
        "cta_examples": [
          "评论你的选择",
          "查看公开原则"
        ],
        "risks": [
          "空洞口号",
          "披露内部敏感信息"
        ]
      }
    ]
  },
  {
    "id": "community-feedback",
    "type_name": "互动反馈与社区共创",
    "description": "用具体问题、公开回应和共同决策发现需求并识别高意向早期用户。",
    "conversion_grade": "B",
    "grade_reason": "主要 CTA 是反馈、投票或测试，距购买较远；真实产品和持续回应可形成信任，执行摩擦集中在后续跟进。",
    "conversion_score": 70,
    "engagement_score": 95,
    "production_cost": "低",
    "funnel_stage": "考虑→验证",
    "platforms": [
      "Reddit",
      "Indie Hackers",
      "GitHub Discussions",
      "Product Hunt",
      "X",
      "LinkedIn",
      "Threads",
      "Instagram"
    ],
    "best_for": "MVP、定位、可用性测试与路线图选择",
    "buildin_angle": "让用户完成一个真实跨平台任务，再问哪里不敢信、哪一步想退出。",
    "subtypes": [
      {
        "name": "定向 MVP 反馈",
        "structure": "目标用户/阶段→可操作版本→1–3 个问题→已知缺陷→反馈承诺。",
        "platforms": [
          "Reddit",
          "Indie Hackers",
          "GitHub Discussions",
          "Product Hunt"
        ],
        "cta_examples": [
          "回答一个具体问题",
          "参加 10 分钟测试"
        ],
        "risks": [
          "问题过泛",
          "求反馈伪装推广"
        ]
      },
      {
        "name": "Roast / 公开诊断",
        "structure": "提交规则→样本→公开拆解→改写建议→作者回应→汇总规律。",
        "platforms": [
          "X",
          "LinkedIn",
          "Threads",
          "Reddit"
        ],
        "cta_examples": [
          "提交一条旧帖子",
          "投票选下个诊断"
        ],
        "risks": [
          "让参与者难堪",
          "未经许可公开内容"
        ]
      },
      {
        "name": "投票式路线图共创",
        "structure": "两个明确选项→选择标准→影响说明→投票→结果与后续动作。",
        "platforms": [
          "LinkedIn",
          "X",
          "Instagram",
          "Indie Hackers"
        ],
        "cta_examples": [
          "投票并说明原因",
          "加入下一轮测试"
        ],
        "risks": [
          "虚假参与感",
          "样本不代表客户总体"
        ]
      }
    ]
  },
  {
    "id": "series-subscription",
    "type_name": "系列与订阅内容",
    "description": "以固定命名、节奏和内容承诺建立复访习惯与自有受众资产。",
    "conversion_grade": "A",
    "grade_reason": "连续触达可降低信任成本并积累复利，但转化慢、依赖稳定交付，单期 CTA 强度有限。",
    "conversion_score": 76,
    "engagement_score": 85,
    "production_cost": "中",
    "funnel_stage": "认知→留存",
    "platforms": [
      "Substack",
      "独立博客",
      "Medium",
      "TikTok",
      "Instagram Reels",
      "YouTube Shorts",
      "YouTube",
      "X",
      "LinkedIn",
      "Threads"
    ],
    "best_for": "长期账号、Newsletter、课程式教育与功能更新",
    "buildin_angle": "运营‘跨平台内容实验室’，每期把一个主题改写成多平台版本并附模板。",
    "subtypes": [
      {
        "name": "Newsletter 固定栏目",
        "structure": "本期结论→案例→框架→资源→下期预告，以一个主 CTA 收束。",
        "platforms": [
          "Substack",
          "独立博客",
          "Medium"
        ],
        "cta_examples": [
          "订阅后续拆解",
          "回复下个选题"
        ],
        "risks": [
          "定位过宽",
          "更新中断"
        ]
      },
      {
        "name": "短视频连续剧",
        "structure": "固定片头+独立收益→一句回顾→本集演示→下集悬念→合集。",
        "platforms": [
          "TikTok",
          "Instagram Reels",
          "YouTube Shorts",
          "YouTube"
        ],
        "cta_examples": [
          "从合集第 1 集复现",
          "投票下一集"
        ],
        "risks": [
          "新观众看不懂",
          "为频率牺牲质量"
        ]
      },
      {
        "name": "主题线程/课程连载",
        "structure": "总目录→每期独立问题→阶段作业→答疑→阶段总结。",
        "platforms": [
          "X",
          "LinkedIn",
          "Threads",
          "Substack"
        ],
        "cta_examples": [
          "收藏总目录",
          "提交阶段作业"
        ],
        "risks": [
          "链路断裂",
          "只预告不给本期价值"
        ]
      }
    ]
  },
  {
    "id": "challenge-entertainment",
    "type_name": "挑战与娱乐化证明",
    "description": "用时间、预算或能力约束制造悬念，在娱乐节奏中证明产品能力。",
    "conversion_grade": "B",
    "grade_reason": "完播、评论和触达潜力很高，但观众可能只记住挑战；只有验收标准和试用 CTA 紧连真实任务时才靠近转化。",
    "conversion_score": 72,
    "engagement_score": 96,
    "production_cost": "中",
    "funnel_stage": "认知→考虑",
    "platforms": [
      "TikTok",
      "YouTube",
      "Instagram Reels",
      "YouTube Shorts",
      "Reddit",
      "Indie Hackers",
      "X"
    ],
    "best_for": "新品认知、创作者联动、社区投稿与系列选题",
    "buildin_angle": "公开验收表，用 Buildin AI 在限定时间内完成粉丝投稿任务，保留失败与修复过程。",
    "subtypes": [
      {
        "name": "限时 Build 挑战",
        "structure": "规则/倒计时→关键节点→失败→验收→邀请出题。",
        "platforms": [
          "TikTok",
          "YouTube",
          "Instagram Reels",
          "YouTube Shorts"
        ],
        "cta_examples": [
          "提交下一次需求",
          "用同一 Brief 挑战"
        ],
        "risks": [
          "计时剪辑不透明",
          "为速度牺牲质量"
        ]
      },
      {
        "name": "预算/工具限制挑战",
        "structure": "预算与禁用项→方案选择→执行→成本明细→结果。",
        "platforms": [
          "YouTube",
          "Reddit",
          "Indie Hackers"
        ],
        "cta_examples": [
          "复制预算表",
          "评论你的限制条件"
        ],
        "risks": [
          "隐性成本未计入",
          "规则中途变化"
        ]
      },
      {
        "name": "观众盲测与评分",
        "structure": "统一样本→隐藏方案→观众评分→揭晓→解释差异→复测入口。",
        "platforms": [
          "YouTube Shorts",
          "TikTok",
          "Instagram Reels",
          "X"
        ],
        "cta_examples": [
          "先评分再看答案",
          "提交下轮样本"
        ],
        "risks": [
          "样本选择偏置",
          "诱导性评分标准"
        ]
      }
    ]
  }
];
