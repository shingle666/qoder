---
# SEO 配置
title: "AI 模型配置指南 - Qoder 智能编程平台 | GPT-4、Claude、Gemini 设置教程"
description: "详细的 Qoder 平台 AI 模型配置指南。支持 OpenAI GPT-4、Anthropic Claude、Google Gemini 等主流模型。包含 API 密钥配置、参数调优、成本优化和使用建议。"
keywords: "Qoder 模型配置, AI 模型设置, GPT-4 配置, Claude 配置, Gemini 配置, API 密钥, 模型参数, 成本优化, 代码生成模型"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "AI 模型配置指南 - Qoder 智能编程平台"
  - - meta
    - property: og:description
      content: "支持 GPT-4、Claude、Gemini 等主流 AI 模型配置"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/model-configuration
  - - meta
    - property: og:image
      content: https://caug.cn/logo.svg
  - - meta
    - property: article:section
      content: "配置指南"
  - - meta
    - property: article:tag
      content: "AI模型"
  - - meta
    - property: article:tag
      content: "配置"
  
  # Twitter Card
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "AI 模型配置指南 - Qoder"
  - - meta
    - name: twitter:description
      content: "支持 GPT-4、Claude、Gemini 等主流模型"
  
  # 结构化数据
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI 模型配置指南",
        "description": "Qoder 平台 AI 模型配置完整指南",
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
          "@id": "https://caug.cn/docs/model-configuration"
        },
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24"
      }
---

# 模型配置

## 支持的模型

### OpenAI
- GPT-4 Turbo
- GPT-3.5 Turbo
- GPT-4

### Anthropic  
- Claude 3.5 Sonnet
- Claude 3 Haiku
- Claude 3 Opus

### Google
- Gemini Pro
- Gemini Pro Vision

## 配置步骤

### 1. 获取 API 密钥
访问对应平台获取 API 密钥：
- OpenAI: https://platform.openai.com/
- Anthropic: https://console.anthropic.com/
- Google: https://aistudio.google.com/

### 2. 配置模型
在设置页面添加 API 密钥和模型参数。

### 3. 测试连接
点击"测试连接"验证配置。

## 模型参数

```json
{
  "temperature": 0.3,
  "max_tokens": 4096,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0
}
```

## 使用建议

- **代码生成**: GPT-4 Turbo, Claude 3.5 Sonnet
- **代码审查**: Claude 3.5 Sonnet  
- **快速补全**: Claude 3 Haiku, GPT-3.5 Turbo
- **文档生成**: Gemini Pro

## 成本优化

1. 为不同任务选择合适模型
2. 设置使用限制
3. 启用智能缓存
4. 监控 API 使用量