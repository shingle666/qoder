---
layout: home

# SEO 配置
title: "Qoder - 智能编程平台 | 为真实软件开发而设计"
description: "Qoder 是一个为真实软件开发而设计的智能代理编程平台。集成 Claude、GPT、Gemini 等世界领先的 AI 模型，提供智能代码补全、单元测试生成、代码解释等高级功能。支持 Windows 和 macOS。"
keywords: "Qoder, 智能编程, AI IDE, 代码补全, 智能代理, 上下文工程, Claude, GPT, Gemini, 编程平台, 代码生成, 单元测试, MCP工具, Agentic Coding, Context Engineering"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "Qoder - 智能编程平台 | 为真实软件开发而设计"
  - - meta
    - property: og:description
      content: "集成 Claude、GPT、Gemini 等 AI 模型的智能编程平台，提供智能代码补全、自动测试生成、代码解释等功能。"
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://caug.cn/
  - - meta
    - property: og:image
      content: https://caug.cn/logo.svg
  - - meta
    - property: og:image:alt
      content: "Qoder Logo - 智能编程平台"
  
  # Twitter Card
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: "Qoder - 智能编程平台"
  - - meta
    - name: twitter:description
      content: "集成 Claude、GPT、Gemini 等 AI 模型的智能编程平台"
  - - meta
    - name: twitter:image
      content: https://caug.cn/logo.svg
  
  # 结构化数据
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Qoder - 智能编程平台",
        "description": "为真实软件开发而设计的智能代理编程平台",
        "url": "https://caug.cn/",
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Qoder",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": ["Windows", "macOS"],
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      }

hero:
  name: "Qoder"
  text: "智能编程平台"
  tagline: "为真实软件开发而设计的智能编程平台。将增强的上下文工程与智能代理无缝集成，全面理解您的代码库，系统性地解决软件开发任务。"
  image:
    src: /logo.svg
    alt: Qoder
  actions:
    - theme: brand
      text: 立即下载
      link: /download
    - theme: alt
      text: 查看文档
      link: /docs/

features:
  - icon: 🤖
    title: 智能代理编程
    details: 集成世界领先的AI模型（Claude、GPT、Gemini），提供智能代码生成、重构和优化建议。
  - icon: 🧠
    title: 上下文工程
    details: 深度理解您的代码库结构，提供精准的代码建议和智能补全。
  - icon: ⚡
    title: 高效开发
    details: 自动化单元测试生成、代码审查和文档编写，显著提升开发效率。
  - icon: 🛠️
    title: 强大工具集
    details: 内置代码分析、调试助手、性能优化等专业开发工具。
  - icon: 🌐
    title: 跨平台支持
    details: 支持 Windows 和 macOS，适配主流编程语言和框架。
  - icon: 🔐
    title: 安全可靠
    details: 本地代码处理，保护您的代码安全和隐私。
---

<style>
.VPHero .VPImage {
  max-width: 200px;
}
</style>