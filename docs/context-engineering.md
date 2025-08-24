---
# SEO 配置
title: "上下文工程 - Qoder AI 智能上下文管理功能"
description: "Qoder 上下文工程详细介绍，支持文件、目录、图片、Git提交、规则等多种上下文类型，提升 AI 理解和代码生成准确性。"
keywords: "Qoder 上下文, 上下文工程, AI 上下文, 文件上下文, 代码上下文, Git 提交, 图片上下文, 规则上下文"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "上下文工程 - Qoder 智能上下文管理"
  - - meta
    - property: og:description
      content: "多种上下文类型支持，提升 AI 理解和代码生成准确性"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/context-engineering
  - - meta
    - property: og:image
      content: https://caug.cn/logo.svg
  - - meta
    - property: article:section
      content: "核心功能"
  - - meta
    - property: article:tag
      content: "上下文工程"
  - - meta
    - property: article:tag
      content: "AI 上下文"
  
  # Twitter Card
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "上下文工程 - Qoder"
  - - meta
    - name: twitter:description
      content: "智能上下文管理和工程功能"
  
  # 结构化数据
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "上下文工程功能",
        "description": "Qoder 智能上下文管理功能详细指南",
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
          "@id": "https://caug.cn/docs/context-engineering"
        },
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24"
      }
---

# 上下文工程

Qoder 支持丰富的上下文输入，如代码文件、目录、图片、Git 提交和规则。您可以用这些资源补充您的问题，以澄清您的需求，让 AI 更好地理解您的意图并提供更准确的帮助。

## 如何添加上下文

使用以下任何方法打开上下文选择窗口，在 AI 聊天中添加上下文：

### 方法一：点击添加按钮
在输入框中点击 **+ 添加上下文**

### 方法二：@ 符号快速添加
1. 在输入框中输入 `@`
2. 继续输入以搜索文件
3. 选择上下文类型，如 `@file`、`@folder` 或 `@gitCommit`
4. 搜索特定内容
5. 支持多选

### 方法三：拖拽或复制粘贴
将代码文件和图片拖放或复制粘贴到输入框中，自动添加为上下文

## 支持的上下文类型

Qoder 提供多种上下文选项，可以与您的输入结合使用，创建完整的需求表达。

### 📄 @file - 文件上下文

使用此命令询问或修改一个或多个文件。

**使用方法：**
- 在输入框中输入 `@file` 选择代码文件，可以选择多个
- 也可以通过从资源管理器拖拽文件到聊天框来添加文件上下文

**使用技巧：**
- 要在描述中强调某个文件，输入 @ 后跟文件名
- 通过拖拽添加文件时，文件会自动被强调

**示例：**
```
基于 @config.js 中的配置，优化 @api.js 文件的性能
```

### 📁 @folder - 文件夹上下文

使用此命令询问或修改代码片段。这在搜索、重构、注释或生成单元测试时很有用。

**使用方法：**
1. 输入 `@folder`
2. 按名称搜索文件夹
3. 选择包含代码片段的项目文件夹
4. 结合您的需求描述

**示例：**
```
重构 @src/components 文件夹中的所有组件，使用 TypeScript
```

### 🖼️ @image - 图片上下文

使用此命令添加图片并生成代码、修复错误或可视化显示某些内容。例如，您可以从设计图片创建前端页面。

**使用方法：**
1. 输入 `@image`，Qoder 会提示您上传图片
2. 或者直接将图片复制粘贴到聊天框

**应用场景：**
- **UI 设计实现**：基于设计稿生成前端代码
- **图表分析**：分析架构图或流程图
- **错误截图**：上传错误截图获得修复建议
- **原型设计**：将手绘草图转为代码

**示例：**
```
根据这个 @image 设计稿，创建一个响应式的登录页面
```

### 🔧 @rule - 规则上下文

规则将系统提示嵌入到每个模型调用中，提供持久、可重用的上下文，在代码生成、重构和工作流自动化中保持指导的一致性。

**功能特点：**
- **持久化指导**：规则在所有对话中保持一致
- **代码风格**：定义编码标准和格式要求
- **最佳实践**：嵌入项目特定的开发规范
- **自动化工作流**：定义标准操作流程

**示例：**
```
使用 @coding-standards 规则，重构这个模块的代码
```

### 🔄 @codeChanges - 代码更改上下文

查看当前 Git 暂存区中的代码更改，使用 `@codeChanges` 命令。例如，在将代码推送到 Git 仓库之前，您可以让 Qoder 审查和优化代码，或添加单元测试。

**使用场景：**
- **代码审查**：在提交前获得 AI 审查
- **测试生成**：为更改的代码生成测试
- **文档更新**：基于代码更改更新文档
- **性能优化**：分析更改对性能的影响

**示例：**
```
审查我的 @codeChanges，检查是否有潜在的性能问题
```

### 📋 @gitCommit - Git 提交上下文

对于 Git 提交中的代码更改，使用 `@gitCommit` 添加提交详细信息。例如，选择一个或多个 Git 提交记录来执行故障排除、错误修复和单元测试生成等任务。

**使用场景：**
- **问题排查**：分析特定提交引入的问题
- **回归测试**：为历史更改生成测试
- **代码分析**：理解代码演进过程
- **Bug 修复**：基于问题提交找到修复方案

**示例：**
```
分析 @gitCommit abc123 中的更改，找出导致性能下降的原因
```

## 上下文组合使用

### 多类型上下文组合
```
基于 @design.png 的设计稿，修改 @components/LoginForm.js 文件，
参考 @folder src/styles 中的样式规范，遵循 @code-style 规则
```

### 文件和更改组合
```
审查我的 @codeChanges，确保与 @config/eslint.js 规则保持一致
```

### Git 历史分析
```
比较 @gitCommit abc123 和 @gitCommit def456，
分析在 @src/api 文件夹中的接口变更
```

## 上下文的智能处理

### 自动关联
Qoder 会自动识别上下文之间的关联关系：
- 文件依赖关系
- 模块导入关系
- 目录结构关系
- Git 历史关联

### 上下文优先级
- **显式上下文**：用户主动添加的上下文
- **隐式上下文**：系统自动推断的相关上下文
- **历史上下文**：之前对话中的相关信息

### 智能过滤
- 自动排除无关文件
- 优先相关代码片段
- 限制上下文大小以保持性能

## 最佳实践

### 1. 精确选择相关上下文
```
好的做法：
@components/UserProfile.js @styles/user.css @types/user.ts

不好的做法：
@整个项目目录
```

### 2. 组合互补的上下文类型
```
设计 + 代码 + 规则：
@mockup.png @components/Button.js @design-system-rules
```

### 3. 利用时间维度上下文
```
变更分析：
比较 @gitCommit before-refactor 和 @codeChanges，
评估重构的效果
```

### 4. 层次化上下文组织
```
从抽象到具体：
@architecture-overview @folder src/services @file userService.js
```

## 上下文限制和优化

### 大小限制
- 单个文件：< 10MB
- 总上下文：< 100MB
- 图片文件：< 5MB

### 性能优化
- 使用相关文件而非整个项目
- 定期清理不必要的上下文
- 优先使用代码片段而非完整文件

### 隐私保护
- 敏感信息自动过滤
- 本地处理优先
- 可配置隐私规则

## 常见问题解决

### 上下文过大
```
解决方案：
1. 选择特定文件而非整个目录
2. 使用代码片段而非完整文件
3. 分批处理大型项目
```

### 上下文无关
```
解决方案：
1. 检查文件关联性
2. 使用更精确的搜索
3. 添加描述性说明
```

### 性能问题
```
解决方案：
1. 减少上下文数量
2. 使用增量上下文
3. 定期清理历史上下文
```

上下文工程是 Qoder 的核心优势之一，通过精确的上下文管理，让 AI 能够更深入地理解您的项目和需求，提供更准确、更有用的编程协助。