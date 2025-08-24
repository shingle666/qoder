import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Qoder - 智能编程平台',
  description: 'Qoder 是一个为真实软件开发而设计的智能编程平台。它将增强的上下文工程与智能代理无缝集成，全面理解您的代码库，系统性地解决软件开发任务。支持世界上最新、最先进的AI模型：Claude、GPT、Gemini等。适用于Windows和macOS。',
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'keywords', content: 'Qoder, AI IDE, 智能编程, 代码助手, Claude, GPT, Gemini, 编程平台' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '功能特性', link: '/features' },
      { text: '文档', link: '/docs/' },
      { text: '下载', link: '/download' },
      { text: '社区', link: 'https://github.com/shingle666/qoder' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: '开始使用',
          items: [
            { text: '简介', link: '/docs/' },
            { text: '快速开始', link: '/docs/getting-started' },
            { text: '安装指南', link: '/docs/installation' }
          ]
        },
        {
          text: '核心功能',
          items: [
            { text: '智能代码补全', link: '/docs/code-completion' },
            { text: '上下文工程', link: '/docs/context-engineering' },
            { text: '单元测试生成', link: '/docs/test-generation' }
          ]
        },
        {
          text: 'AI 模型',
          items: [
            { text: '支持的模型', link: '/docs/supported-models' },
            { text: '模型配置', link: '/docs/model-configuration' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shingle666/qoder' }
    ],

    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2024 Qoder Team'
    },

    search: {
      provider: 'local'
    }
  },

  // 支持中文URL
  cleanUrls: true,
  lastUpdated: true
})