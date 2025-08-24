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

欢迎使用 Qoder！本指南将带您完成首次使用 Qoder 的完整流程，从创建第一个项目到体验核心功能。

## 🚀 启动 Qoder

安装完成后，通过以下方式启动 Qoder：

- **Windows**: 双击桌面图标或从开始菜单启动
- **macOS**: 从 Launchpad 或 Applications 文件夹启动
- **命令行**: 输入 `qoder` 命令

## 📁 创建第一个项目

### 方式一: 打开现有项目
1. 点击"打开项目"按钮
2. 选择您的代码项目文件夹
3. Qoder 会自动分析项目结构

### 方式二: 创建新项目
1. 点击"新建项目"
2. 选择项目模板 (React、Vue、Node.js 等)
3. 填写项目名称和路径
4. 点击"创建"

<el-alert 
  title="项目分析" 
  type="info" 
  description="首次打开项目时，Qoder 需要一些时间来分析代码结构和依赖关系。这个过程只需要进行一次。"
  show-icon>
</el-alert>

## 🤖 配置 AI 模型

在开始使用 AI 功能之前，需要配置至少一个 AI 模型：

### 1. 打开设置
- 点击右上角的设置图标
- 或使用快捷键 `Ctrl/Cmd + ,`

### 2. 选择 AI 模型
导航到"AI 模型"设置页面，选择要使用的模型：

#### OpenAI GPT-4
```
API 密钥: sk-...
模型: gpt-4-turbo
温度: 0.3 (推荐用于代码生成)
```

#### Anthropic Claude
```
API 密钥: sk-ant-...
模型: claude-3-5-sonnet-20241022
温度: 0.2 (推荐用于代码分析)
```

#### Google Gemini
```
API 密钥: AIza...
模型: gemini-pro
温度: 0.3
```

### 3. 测试连接
配置完成后，点击"测试连接"按钮验证配置是否正确。

## 💡 体验核心功能

### 智能代码补全

1. **打开代码文件**: 在项目中打开任意代码文件
2. **开始输入**: 输入代码时，Qoder 会自动提供智能建议
3. **接受建议**: 按 `Tab` 键接受建议，按 `Esc` 键取消

#### 示例：JavaScript 函数
```javascript
// 输入：function calculateTotal
// Qoder 建议：
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

### 自然语言转代码

1. **选择插入位置**: 将光标放在要插入代码的位置
2. **输入描述**: 按 `Ctrl/Cmd + K`，输入功能描述
3. **生成代码**: Qoder 会根据描述生成相应代码

#### 示例
```
输入: "创建一个验证邮箱格式的函数"
生成:
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

### 代码解释

1. **选择代码**: 选中想要解释的代码块
2. **右键菜单**: 右键选择"解释代码"
3. **查看解释**: 在侧边栏查看详细解释

### 单元测试生成

1. **选择函数**: 选中要测试的函数
2. **生成测试**: 右键选择"生成单元测试"
3. **审查测试**: 检查生成的测试用例
4. **运行测试**: 使用 `Ctrl/Cmd + T` 运行测试

#### 示例：测试生成
```javascript
// 原函数
function add(a, b) {
  return a + b;
}

// 生成的测试
describe('add function', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  test('should handle negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });
  
  test('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});
```

## 🔧 自定义设置

### 代码风格
在设置中配置您偏好的代码风格：
- **缩进**: 空格或制表符
- **引号**: 单引号或双引号  
- **分号**: 总是添加或省略
- **换行符**: LF 或 CRLF

### 快捷键
自定义常用功能的快捷键：
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