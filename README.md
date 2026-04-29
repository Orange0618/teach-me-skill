# Teach Me — AI 边教边做，项目驱动学习的最佳伴侣

[English](#english) | [中文](#chinese)

---

## Chinese

### 问题

用 AI 辅助编程学习时，一个典型的困境：

> 你说"帮我写一个 SQLite 数据库模块"，AI 秒秒钟生成 200 行 C 代码。
> 你盯着屏幕，发现连 `sqlite3_mprintf("%q")` 里的 `%q` 是什么意思都不清楚。
> 代码跑通了，但你什么也没学到。

这不是你的问题——是 AI 默认"只给结果、不讲过程"的工作方式导致的。

**Teach Me** 是一个 Claude Code 自定义技能（Skill），强制 AI 切换角色：从"代码生成器"变成"边教边做的导师"。

### 它做了什么

当你对 Claude 说 `/teach-me 帮我完成 Day4 数据库部分`，它会：

1. **先讲，不动手** — 把任务拆成 3-5 步，列出每个步骤涉及的知识点（是什么、为什么用在这里、关键 API），用一段话串联执行思路
2. **等你确认** — 你理解了再继续，不会埋头狂写
3. **边做边讲** — 每写一段代码都标注对应的知识点，让你带着理解看实现
4. **做完回顾** — 总结用了哪些知识点、它们之间如何配合、可以进一步看什么资料

### 效果对比

| | 默认 AI | 加上 Teach Me |
|---|---|---|
| 任务完成 | ✅ | ✅ |
| 代码质量 | ✅ 能跑 | ✅ 能跑 + 有注释 |
| 知识传递 | ❌ 你不问它不讲 | ✅ 主动拆解讲解 |
| 学习节奏 | ❌ AI 在冲刺，你在懵 | ✅ 先听懂再动手 |
| 代码所有权 | ❌ 你拷贝了代码，它不属于你 | ✅ 你理解了代码，它变成你的 |

### 安装

将本目录下的 `SKILL.md` 复制到你的项目的 `.claude/skills/teach-me/` 目录下：

```bash
mkdir -p your-project/.claude/skills/teach-me/
cp SKILL.md your-project/.claude/skills/teach-me/
```

也可以在 Claude Code 全局设置中使用。

### 使用

在任何 Claude Code 对话中：

```
/teach-me 帮我完成嵌入式Linux的SQLite3数据库移植
/teach-me 教我怎么用FrameBuffer在屏幕上画图
/teach-me 带我学习生产者-消费者模型的多线程实现
```

触发词包括但不限于：`教我`、`带我学习`、`帮我理解`、`讲讲这段代码`、`能不能边做边讲`。

### 最佳适用场景

- **嵌入式 Linux / IoT 项目开发** — 涉及多个子系统（显示、音频、网络、数据库），知识点密集
- **系统编程学习** — pthread、文件 IO、内存映射、Socket，概念需要结合代码才能理解
- **第三方库移植** — SQLite、OpenCV、ALSA，配置和 API 调用链需要讲解
- **任何"项目驱动学习"的场景** — 你不是在刷 LeetCode，而是在做一个完整的产品

### 谁在用

这个技能最初是为一个 [IMX6ULL 智能车库项目](https://github.com) 创建的——一个 15 天的嵌入式 Linux 实战项目，从 FrameBuffer 显示到多线程视频采集再到车牌识别。

---

## English

### The Problem

When using AI for project-driven learning, a common scenario:

> You ask: "Build me a SQLite database module." AI spits out 200 lines of C in seconds.
> You stare at `sqlite3_mprintf("%q")` wondering what `%q` even means.
> The code works. You learned nothing.

This isn't your fault — it's the default "output-first, explain-never" behavior of AI coding tools.

**Teach Me** is a Claude Code skill that forces AI to role-switch: from a code generator to a mentor who teaches while doing.

### What It Does

When you say `/teach-me guide me through the database module`:

1. **Explain first, code later** — Breaks the task into steps, lists key concepts (what it is, why here, key APIs), connects them into a coherent execution chain
2. **Waits for your go-ahead** — Won't write a single line until you're ready
3. **Teaches while doing** — Every code block comes with concept annotations, so you understand as you read
4. **Recap after completion** — Summarizes what was learned, how pieces fit together, and what to explore next

### Installation

Copy `SKILL.md` to your project's `.claude/skills/teach-me/`:

```bash
mkdir -p your-project/.claude/skills/teach-me/
cp SKILL.md your-project/.claude/skills/teach-me/
```

### Usage

```
/teach-me walk me through setting up FrameBuffer on embedded Linux
/teach-me help me understand the producer-consumer model with pthreads
/teach-me guide me through SQLite3 C API
```

### Best For

- Embedded Linux / IoT projects with dense knowledge requirements
- System programming (pthread, file IO, mmap, sockets)
- Third-party library integration (SQLite, OpenCV, ALSA)
- Project-driven learning of any kind — you're building a product, not grinding LeetCode

---

## 许可 / License

MIT
