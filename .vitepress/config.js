import { defineConfig } from 'vitepress'

export default defineConfig({
  // SEO 配置
  lang: 'zh-CN',
  title: 'Qoder - 智能编程平台',
  titleTemplate: ':title | Qoder - The Agentic Coding Platform',
  description: 'Qoder 是一个为真实软件开发而设计的智能编程平台。它将增强的上下文工程与智能代理无缝集成，全面理解您的代码库，系统性地解决软件开发任务。支持世界上最新、最先进的AI模型：Claude、GPT、Gemini等。适用于Windows和macOS。',
  
  head: [
    // 基本 meta 标签
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }],
    ['meta', { name: 'next-size-adjust', content: '' }],
    
    // Apple Web App 配置
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Qoder' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    
    // SEO 核心标签
    ['meta', { name: 'keywords', content: 'Vibe coding, Qoder, Qoder AI, Qoder IDE, Alibaba Qoder, AI IDE, Agentic Coding, Spec-Driven, Spec-First, Context Engineering, Think Deeper. Build Better, Builder, Code Completion, Next Edit Suggestion, MCP Tools, Intelligent IDE, Code Explanation, Unit Test Generation, AI-Powered IDE, Deepwiki, 智能编程, 代码助手, Claude, GPT, Gemini, 编程平台' }],
    ['meta', { name: 'author', content: 'tzx' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'language', content: 'zh-CN' }],
    
    // Open Graph 标签 (Facebook)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Qoder - The Agentic Coding Platform' }],
    ['meta', { property: 'og:description', content: 'Qoder is an agentic coding platform for real software, think deeper, build better.' }],
    ['meta', { property: 'og:url', content: 'https://caug.cn' }],
    ['meta', { property: 'og:site_name', content: 'Qoder' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: 'https://caug.cn/logo.svg' }],
    ['meta', { property: 'og:image:type', content: 'image/svg+xml' }],
    ['meta', { property: 'og:image:width', content: '640' }],
    ['meta', { property: 'og:image:height', content: '180' }],
    ['meta', { property: 'og:image:alt', content: 'Qoder Logo - 智能编程平台' }],
    
    // 小红书分享标签
    ['meta', { property: 'xhs:type', content: 'app' }],
    ['meta', { property: 'xhs:app_name', content: 'Qoder' }],
    ['meta', { property: 'xhs:download_url', content: 'https://caug.cn/download' }],
    
    // Twitter Card 标签
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@qoder' }],
    ['meta', { name: 'twitter:creator', content: '@qoder' }],
    ['meta', { name: 'twitter:title', content: 'Qoder - The Agentic Coding Platform' }],
    ['meta', { name: 'twitter:description', content: 'Qoder is an agentic coding platform for real software, think deeper, build better.' }],
    ['meta', { name: 'twitter:image', content: 'https://caug.cn/logo.svg' }],
    ['meta', { name: 'twitter:image:type', content: 'image/svg+xml' }],
    ['meta', { name: 'twitter:image:width', content: '640' }],
    ['meta', { name: 'twitter:image:height', content: '180' }],
    ['meta', { name: 'twitter:image:alt', content: 'Qoder Logo - 智能编程平台' }],
    
    // 百度搜索引擎优化
    ['meta', { name: 'baidu-site-verification', content: '' }], // 需要百度站长工具验证码
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    
    // Google 搜索引擎优化
    ['meta', { name: 'google-site-verification', content: '' }], // 需要Google Search Console验证码
    
    // 其他搜索引擎
    ['meta', { name: 'msvalidate.01', content: '' }], // Bing验证码
    ['meta', { name: '360-site-verification', content: '' }], // 360搜索验证码
    ['meta', { name: 'sogou_site_verification', content: '' }], // 搜狗验证码
    
    // PWA 和移动端优化
    ['meta', { name: 'format-detection', content: 'telephone=no, email=no' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    
    // Favicon 和图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.svg' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#2563eb' }],
    
    // 结构化数据 (JSON-LD)
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Qoder',
      description: 'Qoder is an agentic coding platform designed for real software development. It seamlessly integrates enhanced context engineering with intelligent agents to gain a comprehensive understanding of your codebase and systematically tackles software development tasks.',
      url: 'https://caug.cn',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: ['Windows', 'macOS'],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      author: {
        '@type': 'Organization',
        name: 'Qoder Team',
        url: 'https://github.com/shingle666/qoder'
      },
      publisher: {
        '@type': 'Organization',
        name: 'caug.cn',
        url: 'https://caug.cn'
      },
      downloadUrl: 'https://caug.cn/download',
      screenshot: 'https://caug.cn/logo.svg',
      featureList: [
        '智能代码补全',
        '单元测试生成', 
        '代码解释',
        '上下文工程',
        'AI模型集成',
        'MCP工具支持'
      ]
    })]
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
      message: 'qoder学习指南，非官方。',
      copyright: 'Copyright © 2025 caug.cn'
    },

    search: {
      provider: 'local'
    }
  },

  // 支持中文URL
  cleanUrls: true,
  lastUpdated: true,
  
  // SEO 和性能优化
  sitemap: {
    hostname: 'https://caug.cn',
    transformItems: (items) => {
      // 为每个页面添加优先级和更新频率
      return items.map((item) => {
        const url = item.url
        if (url === '/' || url === '/index.html') {
          return { ...item, changefreq: 'daily', priority: 1.0 }
        } else if (url.includes('/docs/')) {
          return { ...item, changefreq: 'weekly', priority: 0.8 }
        } else if (url.includes('/download') || url.includes('/features')) {
          return { ...item, changefreq: 'weekly', priority: 0.9 }
        }
        return { ...item, changefreq: 'monthly', priority: 0.6 }
      })
    }
  },
  
  // 构建优化
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'element-plus': ['element-plus']
          }
        }
      }
    },
    ssr: {
      noExternal: ['element-plus']
    },
    publicDir: 'public'
  },
  
  // 构建钩子 - 确保robots.txt被正确复制
  buildEnd: async (siteConfig) => {
    // VitePress 会自动处理 public 目录下的文件
    console.log('Build completed. robots.txt should be available at /robots.txt')
  },
  
  // PWA 支持 (可选)
  // pwa: {
  //   mode: 'development',
  //   base: '/',
  //   scope: '/',
  //   registerType: 'autoUpdate',
  //   workbox: {
  //     globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,ts,tsx,jsx}']
  //   },
  //   manifest: {
  //     id: '/',
  //     name: 'Qoder - 智能编程平台',
  //     short_name: 'Qoder',
  //     description: 'Qoder 是一个为真实软件开发而设计的智能编程平台',
  //     theme_color: '#2563eb',
  //     background_color: '#ffffff',
  //     display: 'standalone',
  //     scope: '/',
  //     start_url: '/',
  //     icons: [
  //       {
  //         src: '/logo.svg',
  //         sizes: 'any',
  //         type: 'image/svg+xml'
  //       }
  //     ]
  //   }
  // }
})