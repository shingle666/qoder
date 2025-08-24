---
# SEO 配置
title: "Qoder 贡献指南 - 如何为开源项目做出贡献"
description: "Qoder 开源项目贡献指南，包括 Bug 报告、功能建议、代码贡献、文档改进等。了解如何参与开源社区和开发流程。"
keywords: "Qoder 贡献, 开源贡献, Bug 报告, 功能建议, 代码贡献, Pull Request, 开源社区"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "Qoder 贡献指南 - 如何为开源项目做出贡献"
  - - meta
    - property: og:description
      content: "开源项目贡献指南，参与社区开发和改进。"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/contributing
---

# 贡献指南

欢迎为 Qoder 项目做出贡献！

## 贡献方式

### 报告 Bug
1. 搜索现有 issues
2. 使用 Bug 报告模板
3. 提供详细信息和重现步骤
4. 添加相关标签

### 功能建议
1. 描述功能需求
2. 说明使用场景
3. 提供设计建议
4. 讨论实现方案

### 代码贡献
1. Fork 项目仓库
2. 创建功能分支
3. 实现功能或修复
4. 编写测试用例
5. 提交 Pull Request

## 开发流程

### 环境搭建
```bash
git clone https://github.com/shingle666/qoder.git
cd qoder
npm install
npm run dev
```

### 编码规范
- 遵循项目编码风格
- 编写清晰的注释
- 保持代码简洁
- 使用有意义的变量名

### 测试要求
- 为新功能编写测试
- 确保所有测试通过
- 保持高测试覆盖率
- 测试边界情况

### 文档更新
- 更新相关文档
- 添加使用示例
- 更新 CHANGELOG
- 检查文档准确性

## Pull Request 指南

### 提交前检查
- [ ] 代码通过所有测试
- [ ] 遵循编码规范
- [ ] 更新相关文档
- [ ] 添加必要的测试

### PR 描述
- 清晰描述变更内容
- 说明变更原因
- 列出相关 issues
- 添加测试截图（如适用）

## 社区规范

### 行为准则
- 保持友好和尊重
- 欢迎新手贡献者
- 提供建设性反馈
- 遵循开源精神

### 沟通渠道
- GitHub Issues：Bug 报告和功能请求
- GitHub Discussions：一般讨论
- 社区论坛：经验分享