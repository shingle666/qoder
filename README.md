# Qoder - 智能编程平台学习指南

<div align="center">
  
  <h3>为真实软件开发而设计的智能代理编程平台</h3>
  
  <p>
    <a href="https://caug.cn">🌐 访问网站</a> |
    <a href="https://github.com/shingle666/qoder">⭐ GitHub</a> |
    <a href="https://caug.cn/docs/">📖 文档</a> |
    <a href="https://caug.cn/download">⬇️ 下载</a>
  </p>
</div>

## 📖 项目介绍

**Qoder** 是一个面向真实软件开发的智能代理编程平台（Agentic Coding Platform）。它将增强的上下文工程（Context Engineering）与智能代理技术无缝集成，能够全面理解您的代码库并系统性地解决软件开发任务。

### 🎯 核心特性

- **🤖 多模型支持**: 集成世界上最新、最先进的AI模型（Claude、GPT、Gemini等）
- **🧠 上下文工程**: 深度理解代码库结构和业务逻辑
- **⚡ 智能代码补全**: 基于上下文的精准代码生成
- **🧪 单元测试生成**: 自动生成高质量的测试代码
- **📝 代码解释**: 智能解析复杂代码逻辑
- **🔧 MCP工具集成**: 支持Model Control Protocol工具链
- **💡 下一步编辑建议**: 智能推荐代码改进方案

### 🌟 设计理念

- **Spec-Driven Development**: 规范驱动的开发流程
- **Think Deeper. Build Better**: 深度思考，构建更好的软件
- **Context Engineering**: 增强的上下文理解能力
- **Agentic Coding**: 智能代理辅助编程

## 🚀 网站信息

- **网站域名**: [caug.cn](https://caug.cn)
- **网站名称**: Qoder - The Agentic Coding Platform
- **GitHub**: [https://github.com/shingle666/qoder](https://github.com/shingle666/qoder)
- **文档地址**: [https://caug.cn/docs/](https://caug.cn/docs/)
- **下载页面**: [https://caug.cn/download](https://caug.cn/download)

## 💾 下载地址

### macOS 版本
- **Apple Silicon (M1/M2/M3)**: [Qoder-darwin-arm64.dmg](https://download.qoder.com/release/latest/Qoder-darwin-arm64.dmg)
- **Intel 处理器**: [Qoder-darwin-x64.dmg](https://download.qoder.com/release/latest/Qoder-darwin-x64.dmg)

### Windows 版本
- **64位系统**: [QoderUserSetup-x64.exe](https://download.qoder.com/release/latest/QoderUserSetup-x64.exe)

## 🛠️ 技术栈

本项目是 Qoder 的简体中文学习指南网站，采用现代前端技术栈构建：

### 核心技术
- **Vue 3.5.19**: 渐进式JavaScript框架
- **VitePress 1.6.4**: 静态站点生成器
- **Element Plus 2.11.1**: Vue 3 UI组件库
- **Vite**: 下一代前端构建工具

### 项目配置
- **包管理器**: npm
- **模块系统**: ES Module (`type: "module"`)
- **开发环境**: Node.js 14+
- **构建工具**: VitePress + Vite

## 📁 项目结构

```
qoder-study/
├── README.md                # 项目说明文档
├── package.json             # 项目依赖配置
├── index.md                 # 网站首页
├── features.md              # 功能特性页面
├── download.md              # 下载页面
├── .vitepress/             # VitePress 配置
│   ├── config.js           # 站点配置文件
│   └── theme/              # 自定义主题
├── docs/                   # 文档目录
│   ├── index.md            # 文档首页
│   ├── getting-started.md  # 快速开始
│   ├── installation.md     # 安装指南
│   ├── code-completion.md  # 代码补全功能
│   ├── context-engineering.md  # 上下文工程
│   ├── test-generation.md  # 测试生成
│   └── supported-models.md # 支持的AI模型
└── public/                 # 静态资源
    ├── logo.svg            # 网站Logo
    └── favicon.ico         # 网站图标
```

## 🚀 快速开始

### 环境要求
- Node.js 14.0.0 或更高版本
- npm 6.0.0 或更高版本

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 构建部署
```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 本地运行构建后的文件
npm run serve
```

## 📋 可用脚本

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 构建生产环境静态文件 |
| `npm run preview` | 预览构建结果 |
| `npm run serve` | 本地运行构建后的文件 |

## 🌟 网站特色

- **📱 响应式设计**: 完美适配桌面、平板、手机设备
- **🌙 主题切换**: 支持明暗主题切换
- **🔍 本地搜索**: 内置全文搜索功能
- **🇨🇳 完全中文化**: 界面和内容完全中文化
- **⚡ 快速加载**: 基于Vite的极速构建和热更新
- **📖 丰富文档**: 完整的使用指南和API文档

## 📚 主要页面

- **[首页](index.md)**: Qoder产品介绍和核心功能展示
- **[功能特性](features.md)**: 详细的功能介绍和技术优势
- **[下载页面](download.md)**: 各平台下载链接和安装指南
- **[文档系统](docs/)**: 完整的使用文档和教程

## 🎨 设计系统

- **品牌色彩**: 基于Qoder品牌的专业配色方案
- **UI组件**: 使用Element Plus提供统一的用户界面
- **自定义样式**: 针对Qoder特色的定制化设计
- **图标系统**: 统一的图标风格和视觉语言

## 🤝 贡献指南

欢迎为 Qoder 学习指南网站做出贡献！

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request


## 📞 联系我们

- **GitHub Issues**: [提交问题和建议](https://github.com/shingle666/qoder/issues)
- **官方网站**: [https://caug.cn](https://caug.cn)
- **项目作者**: tzx

---

<div align="center">
  <p><strong>Think Deeper. Build Better.</strong></p>
  <p>用智能代理重新定义编程体验</p>
  <p>Copyright © 2025 caug.cn | Qoder学习指南，非官方</p>
</div>
