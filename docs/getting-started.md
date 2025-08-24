---
# SEO 配置
title: "Qoder 快速开始指南 - 从安装到上手使用教程"
description: "Qoder 智能编程平台快速开始指南，包含项目创建、AI 模型配置、智能代码补全、自动测试生成等功能使用教程。适合初学者和新用户。"
keywords: "Qoder 快速开始, 智能编程教程, AI 模型配置, 代码补全教程, 项目创建, 自动测试, 初学者指南, 上手教程, 使用指南"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "Qoder 快速开始指南 - 从安装到上手使用"
  - - meta
    - property: og:description
      content: "快速开始指南，包含项目创建、AI 模型配置、功能使用教程。"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/getting-started
  - - meta
    - property: article:section
      content: "入门教程"
  
  # 结构化数据 - 教程文章
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Qoder 快速开始指南",
        "description": "从安装到上手使用的完整教程",
        "url": "https://caug.cn/docs/getting-started",
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24",
        "author": {
          "@type": "Organization",
          "name": "Qoder Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "caug.cn",
          "url": "https://caug.cn"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Developers"
        },
        "about": "智能编程平台使用教程"
      }
---

# 快速开始

欢迎使用 Qoder！本指南将通过一个实际的项目演示 Qoder 的核心功能。完成本教程后，您将熟悉 Qoder 的下一步编辑建议（NES）、内联聊天和 AI 聊天等关键功能。

> **提示**: Qoder 个人版目前对所有用户免费试用。试用期限可能会有变化，请关注产品更新获取最新信息。

## 1. 下载并安装 Qoder

1. 从 [官方下载页面](https://qoder.com/download) 下载安装程序
2. 双击安装文件开始安装
3. 双击 Qoder IDE 图标启动应用

## 2. 登录账户

1. 在 Qoder IDE 右上角，点击用户图标或使用快捷键：
   - **macOS**: `⌘ ⇧ ,`
   - **Windows**: `Ctrl + Shift + ,`
   
   然后选择"登录"

2. 在打开的网页中：
   - 点击底部的"注册"并完成注册过程，或
   - 使用 Google 或 GitHub 账户直接注册

3. 返回 Qoder IDE，现在您可以免费使用所有功能

## 3. 打开项目

选择使用本地项目或从 GitHub 克隆示例项目：

### 使用本地项目

点击"打开"或使用快捷键：
- **macOS**: `⌘ O`
- **Windows**: `Ctrl + O`

浏览到您的项目文件夹，选择一个文件并打开。

### 克隆项目

1. 点击"克隆仓库"
2. 在顶部搜索栏中：
   - 输入项目 URL 并点击"从 URL 克隆"，或
   - 点击"从 GitHub 克隆"并按提示操作
3. 完成步骤克隆项目

## 4. 探索功能

### 触发下一步编辑建议（NES）

NES 通过在光标位置提供智能的、上下文感知的编辑，帮助您开始 AI 辅助编程。

1. 输入部分代码片段或用自然语言表达代码需求。例如："初始化一个列表"
2. 按 `⌥ P`（macOS）或 `Alt + P`（Windows）。建议会自动出现
3. 按 `Tab` 接受建议

NES 支持多行编辑和无缝自动补全。

#### 快捷键表

| 操作 | macOS | Windows |
|------|-------|----------|
| 触发内联建议 | ⌥ P | Alt + P |
| 接受内联建议 | Tab | Tab |
| 逐词接受 | ⌘ → | Ctrl + → |
| 取消内联建议 | Esc | Esc |
| 显示上一个建议 | ⌥ [ | Alt + [ |
| 显示下一个建议 | ⌥ ] | Alt + ] |

### 启动内联聊天

使用内联聊天在代码上下文中直接获取 AI 帮助。

1. 在 Qoder 代码编辑器中，按 `⌘ I`（macOS）或 `Ctrl + I`（Windows）。内联聊天窗口将打开
2. 输入您的请求并按 Enter。例如："添加一个处理文件更新的方法"
3. 要应用 AI 生成的代码，按 `⌘ ⏎`（macOS）或 `Ctrl + Enter`（Windows）

### 开始 AI 聊天

使用 AI 聊天面板或按 `⌘ L`（macOS）或 `Ctrl + L`（Windows）处理 Ask 或 Agent 模式下的更广泛任务。

1. 在右侧的 AI 聊天面板中，输入您的请求。例如："为这个函数创建测试并运行它们"
2. 按 Enter。AI 代理将生成包含相关测试用例的测试文件
3. 根据提示点击"运行"，或按 `⌘ ⏎`（macOS）或 `Ctrl + Enter`（Windows）执行测试

## 5. 聊天模式详解

### Ask 模式

简单的问答模式，回答编程问题。它基于上下文提供解决方案和建议，但不会修改代码。

**适用场景**：
- 代码解释和分析
- 编程概念咨询
- 最佳实践建议
- 错误诊断

### Agent 模式

自主编程任务执行模式，具有自主决策、环境感知和工具利用功能。基于开发者的编程需求，它利用项目搜索、计划制定、文件编辑、终端操作等工具端到端完成编程任务。

**核心功能**：
- 自动环境感知
- 工具使用（10+ 种内置工具）
- 命令执行
- 项目级别更改
- 记忆感知

**适用场景**：
- 功能开发
- Bug 修复
- 代码重构
- 测试编写和运行
- 项目配置

## 6. 高级功能预览

### Quest Mode（任务模式）

Quest Mode 是为复杂、长期运行的开发任务设计的 AI 辅助编程功能。通过自然语言描述需求，您可以将功能开发、Bug 修复、重构和测试等任务委托给 AI。

**主要特点**：
- AI 辅助规格说明（Specs）
- 自主执行
- AI 辅助任务报告

### MCP 协议集成

模型上下文协议（MCP）通过与外部系统和数据源的无缝集成来扩展 Qoder 的功能。支持：
- 实时信息检索
- 外部系统操作
- 结构化和非结构化数据处理

## 7. 开始您的编程之旅

现在您已经了解了 Qoder 的基本功能，可以开始您的智能编程之旅了！

**建议的下一步**：
1. 尝试在您的项目中使用 NES 功能
2. 体验 Agent 模式完成一个小任务
3. 探索插件和自定义工具
4. 查看高级功能文档

有任何问题，请访问我们的 [常见问题](./faq) 页面或 [故障排除指南](./troubleshooting)。
- **代码补全**: `Ctrl/Cmd + Space`
- **AI 聊天**: `Ctrl/Cmd + K`
- **代码格式化**: `Shift + Alt + F`
- **运行测试**: `Ctrl/Cmd + T`

### 主题设置
选择您喜欢的编辑器主题：
- **浅色主题**: 适合白天使用
- **深色主题**: 适合夜间使用
- **高对比度**: 提高可读性
- **自定义主题**: 导入自定义主题文件

## 📊 项目洞察

Qoder 提供强大的项目分析功能：

### 代码统计
- **代码行数**: 按语言分类的代码统计
- **复杂度分析**: 代码复杂度评估
- **技术债务**: 潜在问题和改进建议

### 依赖分析
- **依赖图**: 可视化模块依赖关系
- **未使用依赖**: 检测无用的依赖包
- **版本冲突**: 识别版本兼容性问题

### 性能监控
- **构建时间**: 跟踪项目构建性能
- **内存使用**: 监控 Qoder 资源使用
- **API 调用**: 跟踪 AI API 使用情况

## 🛠️ 高级功能

### 代码重构
1. **选择代码块**: 选中需要重构的代码
2. **重构建议**: 右键选择"重构代码"
3. **预览更改**: 查看重构前后的对比
4. **应用更改**: 确认后应用重构

### 批量操作
- **批量重命名**: 重命名变量、函数或类
- **批量格式化**: 格式化整个项目
- **批量测试**: 为多个函数生成测试

### 团队协作
- **共享配置**: 与团队成员共享 Qoder 配置
- **代码审查**: 使用 AI 进行代码审查
- **最佳实践**: 自动检查编码规范

## 🎯 最佳实践

### 1. 项目结构
保持良好的项目结构有助于 Qoder 更好地理解您的代码：
```
project/
├── src/
│   ├── components/
│   ├── utils/
│   └── tests/
├── docs/
├── package.json
└── README.md
```

### 2. 代码注释
编写清晰的注释帮助 AI 更好地理解代码意图：
```javascript
/**
 * 计算购物车总价
 * @param {Array} items - 购物车商品列表
 * @param {number} tax - 税率 (0-1)
 * @returns {number} 包含税费的总价
 */
function calculateTotal(items, tax = 0) {
  // 实现...
}
```

### 3. 函数命名
使用描述性的函数名有助于生成更准确的代码：
```javascript
// ✅ 好的命名
function validateUserEmail(email) {}
function formatCurrency(amount, locale) {}

// ❌ 不好的命名  
function check(x) {}
function format(a, b) {}
```

## 📚 下一步

现在您已经了解了 Qoder 的基础功能，可以：

1. **深入学习**: 阅读 [功能特性详解](../features)
2. **配置优化**: 查看 [配置指南](./configuration)
3. **高级用法**: 探索 [高级功能](./advanced-features)
4. **问题解决**: 遇到问题时查看 [故障排除](./troubleshooting)

## 💬 获得帮助

如果在使用过程中遇到问题：

- **内置帮助**: 按 `F1` 查看帮助信息
- **AI 助手**: 使用 `Ctrl/Cmd + ?` 询问 AI 助手
- **文档搜索**: 使用 `Ctrl/Cmd + Shift + P` 搜索文档
- **社区支持**: 访问我们的社区论坛

---

祝您使用 Qoder 愉快！享受 AI 驱动的编程体验。 🎉