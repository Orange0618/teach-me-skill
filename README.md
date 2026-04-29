# Teach Me — AI 边教边做，项目驱动学习的最佳伴侣

> When AI writes code you don't understand, the problem isn't you — it's how the AI works.
> **Teach Me** changes that. / [English](#english)

---

## 问题

用 AI 辅助编程学习时，一个典型的困境：

> 你说"帮我写一个 SQLite 数据库模块"，AI 秒秒钟生成 200 行 C 代码。
> 你盯着屏幕，发现连 `sqlite3_mprintf("%q")` 里的 `%q` 是什么意思都不清楚。
> 代码跑通了，但**你什么也没学到**。

**Teach Me** 是一个 Claude Code 技能（Skill），强制 AI 从"代码生成器"变成"边教边做的导师"：

- ❌ 默认 AI：`需求 → 代码`（跳过你的理解过程）
- ✅ AI + Teach Me：`需求 → 拆解任务 → 讲解知识点 → 等你确认 → 边写边讲 → 回顾总结`

## 快速安装

```bash
npx claude-teach-me
```

或指定项目路径：

```bash
npx claude-teach-me ~/my-embedded-project
```

这会在你项目的 `.claude/skills/teach-me/` 下创建 `SKILL.md`，Claude Code 自动加载。

> 还没有发布到 npm？先手动安装：
> ```bash
> mkdir -p your-project/.claude/skills/teach-me/
> cp SKILL.md your-project/.claude/skills/teach-me/
> ```

## 使用

在任何 Claude Code 对话中：

```
/teach-me 帮我完成嵌入式 Linux 的 SQLite3 数据库移植
/teach-me 教我怎么用 FrameBuffer 在屏幕上画图
/teach-me 带我学习生产者-消费者模型的多线程实现
```

触发词包括但不限于：`教我`、`带我学习`、`帮我理解`、`讲讲这段代码`、`能不能边做边讲`、`teach me how to`、`guide me through`。

## 效果对比

| | 默认 AI | 加上 Teach Me |
|---|---|---|
| 任务完成 | ✅ | ✅ |
| 代码质量 | ✅ 能跑 | ✅ 能跑 + 有注释 + 标注知识点 |
| 知识传递 | ❌ 你不问它不讲 | ✅ 主动拆解：是什么→为什么→怎么用 |
| 学习节奏 | ❌ AI 在冲刺，你在懵 | ✅ 先听懂再动手，确认了才继续 |
| 代码归属 | ❌ AI 的代码，你来拷贝 | ✅ 你理解了代码，它变成你的 |

## 工作流程

### 阶段一：先讲，不动手

1. **任务拆解** — 把任务拆成 3-5 步，每步一句话
2. **核心知识点** — 每个知识点：是什么、为什么用在这里、关键 API
3. **实现思路** — 用一段话串联知识点形成执行链路
4. **等你确认** — 你理解了才继续

### 阶段二：边做边讲

- 每写一段代码都标注对应知识点
- 遇到选择点（两种写法都行），说明优劣再选一种
- 完成后回顾总结：用了哪些知识点、如何配合、可以深入的方向

## 最佳适用场景

- **嵌入式 Linux / IoT 项目** — 多子系统（显示、音频、网络、数据库），知识点密集
- **系统编程学习** — pthread、文件 IO、mmap、Socket
- **第三方库移植** — SQLite、OpenCV、ALSA
- **任何项目驱动学习** — 你在做完整产品，不是刷 LeetCode

## 灵感来源

这个技能最初是为一个 [IMX6ULL 智能车库项目]() 创建的——一个 15 天的嵌入式 Linux 实战项目，从 FrameBuffer 显示到多线程车牌识别。开发过程中发现：AI 能生成完美的代码，但学习者真正需要的是**理解代码为什么这么写**。

---

## English

### The Problem

> You ask AI: "Build me a SQLite database module." It spits out 200 lines of C in seconds.
> You stare at `sqlite3_mprintf("%q")` wondering what `%q` even means.
> The code works. **You learned nothing.**

### Quick Install

```bash
npx claude-teach-me
```

### Usage

```
/teach-me guide me through FrameBuffer programming on embedded Linux
/teach-me help me understand the producer-consumer model with pthreads
/teach-me walk me through SQLite3 C API integration
```

### How It Works

**Phase 1 — Explain before doing** (never skip this step): task breakdown, key concepts with rationale, implementation chain, waiting for confirmation.

**Phase 2 — Teach while coding**: every code block annotated with concepts, trade-off reasoning, post-task recap.

### Best For

Embedded Linux / IoT projects, systems programming (pthread, IO, sockets), library porting (SQLite, OpenCV, ALSA), and any project-driven learning where understanding matters more than speed.

---

## 许可

MIT
