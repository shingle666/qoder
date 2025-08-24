---
# SEO 配置
title: "MCP 模型上下文协议 - Qoder 外部系统集成功能"
description: "Qoder MCP (模型上下文协议) 详细介绍，支持与外部系统和数据源的无缝集成，扩展 AI 代理功能，支持 STDIO 和 SSE 传输协议。"
keywords: "Qoder MCP, 模型上下文协议, 外部系统集成, API 集成, 工具扩展, STDIO, SSE, AI 代理扩展, 第三方集成"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "MCP 模型上下文协议 - Qoder 外部系统集成"
  - - meta
    - property: og:description
      content: "与外部系统和数据源的无缝集成，扩展 AI 代理功能"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/mcp-protocol
  - - meta
    - property: og:image
      content: https://caug.cn/logo.svg
  - - meta
    - property: article:section
      content: "高级功能"
  - - meta
    - property: article:tag
      content: "MCP"
  - - meta
    - property: article:tag
      content: "集成"
  
  # Twitter Card
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "MCP 模型上下文协议 - Qoder"
  - - meta
    - name: twitter:description
      content: "外部系统集成和工具扩展功能"
  
  # 结构化数据
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "MCP 模型上下文协议功能",
        "description": "Qoder 外部系统集成功能详细指南",
        "author": {
          "@type": "Organization",
          "name": "Qoder"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Qoder",
          "logo": {
            "@type": "ImageObject",
            "url": "https://caug.cn/logo.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://caug.cn/docs/mcp-protocol"
        },
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24"
      }
---

# MCP - 模型上下文协议

模型上下文协议 (MCP) 通过与外部系统和数据源的无缝集成来扩展 Qoder 的功能。本主题涵盖核心概念、支持的传输类型、配置步骤和 MCP 的实际用例。

## 什么是 MCP？

[MCP](https://modelcontextprotocol.io/introduction) 是一个开放协议，标准化了应用程序如何为大型语言模型 (LLM) 提供上下文和工具。通过统一的接口公开功能，MCP 允许 LLM 以结构化和安全的方式与外部系统（如 API、数据库和本地工具）交互。

### 为什么使用 MCP

MCP 使 Qoder Agent 能够通过标准化接口连接各种外部系统和数据源。这增强了代理的能力：

- 检索实时信息
- 在外部系统中执行操作
- 处理结构化或非结构化数据

它支持个性化工作流程，并帮助开发者构建更智能、上下文感知的 AI 助手。

### 工作原理

MCP 服务器通过 MCP 协议公开其功能（如函数和数据访问）。Qoder 根据用户输入和工具元数据发现并调用这些功能。

Qoder 支持两种标准传输类型：

#### 标准输入/输出 (STDIO)
- 通过 stdin/stdout 流进行通信
- 适用于本地工具和命令行集成
- 需要本地环境设置——最适合专业开发者

#### 服务器发送事件 (SSE)
- 使用 HTTP POST 进行客户端到服务器请求，使用事件流进行服务器到客户端响应
- 远程托管——易于配置和使用
- 强烈推荐给初学者和快速原型制作

## 限制

- MCP 服务器仅在 Agent 模式下支持
- 您最多可以同时使用 10 个 MCP 服务器

## 配置 MCP 服务器

1. 在 Qoder IDE 右上角，点击用户图标或使用快捷键（`⌘ ⇧ ,`（macOS）或 `Ctrl + Shift + ,`（Windows）），选择**Qoder 设置**
2. 在左侧导航面板中，点击 **MCP**
3. 选择以下任一方式：

### 连接到您自己的 MCP 服务器

a. 在 **我的服务器** 选项卡上，点击右上角的 **+ 添加**
b. 在出现的 JSON 文件中，添加您的服务器详细信息：
   - 名称
   - 传输类型（STDIO 或 SSE）
   - 命令和参数（用于 STDIO）
   - 端点 URL（用于 SSE）

示例：
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

c. 关闭文件并在提示时点击保存

保存后，新服务器出现在您的列表中。链接图标表示连接成功。展开条目以查看可用工具。

### 使用 MCP Square 中的 MCP 服务器

a. 点击 **MCP Square** 选项卡
b. 浏览可用服务器列表并点击您想要的服务器上的 **安装**

> **注意**: 某些 MCP 服务器需要额外的环境变量（如 API_KEY 或 ACCESS_TOKEN）才能运行。这些必须手动配置。

c. 转到 **我的服务器** 选项卡确认安装。展开详细信息以查看工具列表。

> **注意**: 如果服务器因缺少依赖项而无法启动，请点击快速修复。如果问题仍然存在，请手动安装依赖项。有关故障排除，请参阅 MCP 常见问题。

## 使用 MCP 工具

Qoder 根据以下条件自动选择适当的 MCP 工具：
- 您的输入提示
- 工具的名称和描述

在 Qoder 调用 MCP 工具之前，您会收到确认提示。要自动运行所有后续 MCP 服务器，请选择此确认。然后，代理使用工具的输出继续工作流程中的下一步。

### 使用步骤

1. 在 AI 聊天面板中，切换到 Agent 模式并输入您的提示
2. 在调用工具之前，Qoder 提示确认。按 `⌘ ⏎`（macOS）或 `Ctrl + Enter`（Windows）执行
3. 执行后，结果出现在聊天中。展开响应以查看详细的输入和输出
4. 根据需要审查任何生成的代码并接受更改

## 示例场景

### 场景 1：检索和处理网页内容（远程 MCP via SSE）

使用 MCP 服务器获取网页内容并将 HTML 转换为 Markdown 以便更容易阅读。

**步骤 1：获取 MCP SSE 服务器端点**
1. 访问官方 MCP 市场网站
2. 复制 fetch 服务器的 SSE 端点 URL

**步骤 2：添加 MCP 服务器**
在 Qoder IDE 中，转到 **MCP** 页面，使用以下内容编辑 MCP 服务器：
- 名称：fetch
- 类型：SSE
- 服务器端点：粘贴复制的 URL

示例：
```json
{
  "mcpServers": {
    "fetch": {
      "type": "sse",
      "url": "https://mcp.api-inference.modelscope.net/******/sse"
    }
  }
}
```

**步骤 3：完成配置**
保存后，链接图标确认服务器已准备就绪。展开详细信息以查看工具列表。

**步骤 4：在 Qoder 中使用**
在 Agent 模式下，输入：
```
总结这个文档：https://docs.qoder.com/user-guide/chat/overview
```

### 场景 2：查询城市天气（本地 MCP via STDIO）

使用本地 MCP 服务器检索实时天气数据。

**步骤 1：检查先决条件**
确保安装了 Node.js。您可以要求 Qoder 验证：
```
检查我的本地环境以确保安装了 Node.js
```

**步骤 2：添加 MCP 服务器**
在 Qoder IDE 中，转到 **MCP** 页面，使用以下内容编辑 MCP 服务器：
- 名称：weather
- 类型：STDIO
- 命令：npx
- 参数：`-y @h1deya/mcp-server-weather`

示例：
```json
{
  "mcpServers": {
    "weather": {
      "command": "npx",
      "args": [
        "-y",
        "@h1deya/mcp-server-weather"
      ]
    }
  }
}
```

**步骤 3：完成配置**
保存后，链接图标确认服务器已准备就绪。展开详细信息以查看工具列表。

**步骤 4：在 Qoder 中使用**
在 Agent 模式下，输入提示如：
```
检查美国旧金山的天气
```

然后跟进：
```
明天美国有什么天气警报吗？
```

## 常见 MCP 服务器类型

### 开发工具
- **GitHub 集成**：仓库管理、问题跟踪、PR 操作
- **Git 操作**：版本控制、分支管理、提交历史
- **CI/CD 工具**：构建状态、部署流水线、测试结果

### 数据源
- **数据库连接**：SQL 查询、数据检索、结构分析
- **API 集成**：REST/GraphQL API 调用、数据同步
- **文件系统**：文件操作、目录浏览、内容搜索

### 外部服务
- **天气服务**：实时天气数据、预报信息
- **翻译服务**：多语言翻译、本地化支持
- **通知系统**：消息发送、邮件通知、Slack 集成

### 专业工具
- **设计工具**：Figma、Sketch 集成
- **项目管理**：Jira、Trello、Asana 连接
- **监控系统**：日志分析、性能监控、错误跟踪

## 最佳实践

### 1. 服务器命名
- 使用描述性名称
- 避免相似的服务器和工具名称
- 保持命名一致性

### 2. 安全配置
- 安全存储 API 密钥和令牌
- 使用环境变量管理敏感信息
- 定期轮换访问凭据

### 3. 性能优化
- 监控 MCP 服务器响应时间
- 限制并发请求数量
- 实施适当的错误处理

### 4. 故障排除
- 检查网络连接和防火墙设置
- 验证依赖项安装
- 查看服务器日志了解详细错误信息

MCP 协议使 Qoder 能够与广泛的外部系统集成，显著扩展了 AI 代理的能力和适用性。通过合理配置和使用 MCP 服务器，您可以构建强大的自动化工作流程和智能编程助手。