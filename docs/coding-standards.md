---
# SEO 配置
title: "Qoder 编码规范 - 团队代码风格和质量标准指南"
description: "Qoder 编码规范指南，包括代码风格、命名约定、注释规范、最佳实践等，帮助团队建立统一的代码质量标准和一致性。"
keywords: "Qoder 编码规范, 代码风格, 命名约定, 注释规范, 代码质量, 团队规范, 最佳实践"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "Qoder 编码规范 - 团队代码风格和质量标准"
  - - meta
    - property: og:description
      content: "编码规范指南，建立团队代码质量标准和一致性。"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/coding-standards
---

# 编码规范

建立团队编码规范，确保代码质量和一致性。

## 代码风格
- 缩进：使用 2 或 4 个空格
- 引号：统一使用单引号或双引号
- 分号：明确是否使用分号
- 换行：设置行长度限制

## 命名约定
- 变量：camelCase
- 常量：UPPER_SNAKE_CASE
- 类名：PascalCase
- 文件名：kebab-case

## 注释规范
- 函数注释：描述功能、参数、返回值
- 复杂逻辑：添加解释性注释
- TODO：标记待办事项

## 最佳实践
1. 保持代码简洁
2. 避免深层嵌套
3. 使用有意义的命名
4. 定期重构代码