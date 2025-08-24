---
# SEO 配置
title: "NES 下一步编辑建议 - Qoder 智能代码预测与多行编辑功能"
description: "Qoder NES (下一步编辑建议) 功能详细介绍，提供智能的上下文感知编辑、多行编辑、基于历史的代码预测和无缝文件导航功能。"
keywords: "Qoder NES, 下一步编辑建议, 智能编辑, 多行编辑, 代码预测, 上下文感知, AI 编辑, 自动重构, 代码导航"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "NES 下一步编辑建议 - Qoder 智能代码预测功能"
  - - meta
    - property: og:description
      content: "智能的上下文感知编辑，支持多行编辑和基于历史的代码预测"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/next-edit-suggestion
  - - meta
    - property: og:image
      content: https://caug.cn/logo.svg
  - - meta
    - property: article:section
      content: "核心功能"
  - - meta
    - property: article:tag
      content: "NES"
  - - meta
    - property: article:tag
      content: "智能编辑"
  
  # Twitter Card
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "NES 下一步编辑建议 - Qoder"
  - - meta
    - name: twitter:description
      content: "智能代码预测与多行编辑功能"
  
  # 结构化数据
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "NES 下一步编辑建议功能",
        "description": "Qoder 智能代码预测与编辑功能详细指南",
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
          "@id": "https://caug.cn/docs/next-edit-suggestion"
        },
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24"
      }
---

# NES - 下一步编辑建议

下一步编辑建议 (NES) 通过在光标位置提供智能的、上下文感知的编辑建议，帮助您开始 AI 辅助编程。

使用 Qoder NES，您可以：
- 一次编辑光标附近的多行代码
- 基于最近的更改和之前接受的编辑获得建议
- 在文件内无缝导航到下一个建议位置

## 工作原理

Qoder 会根据更改代码的宽度和 NES 提示自动显示内联或并排建议：
- 如果组合宽度超过编辑器宽度，建议会以内联方式显示
- 否则，它们会并排显示以便更容易比较

要接受或拒绝建议：
- 悬停在接受/拒绝按钮上，或
- 按 `Tab` 接受，按 `Esc` 拒绝

如果下一个编辑超出当前视图：
- 点击"Tab 跳转"或按 `Tab` 跳转到同一文件中的编辑位置
- 对于其他文件中的编辑，点击"Tab 跳转"或按 `Tab` 导航到目标文件的编辑位置

## 启用 NES

1. 在 Qoder IDE 右上角，点击用户图标或使用快捷键（`⌘ ⇧ ,`（macOS）或 `Ctrl + Shift + ,`（Windows）），选择 Qoder 设置
2. 在出现的面板中，点击"补全"
3. 开启 NES（下一步编辑建议）

### 显示行为

NES 支持删除、修改和添加的智能编辑，具有针对更改类型定制的视觉差异。

## 使用场景

以下是一些展示 Qoder NES 如何提高编程效率的常见场景：

### 重命名
自动基于上下文建议一致的变量或函数名称。

**示例**：
```javascript
// 重命名变量时，NES 会建议在整个文件中一致地重命名
let userData = {};
// NES 建议：同时更新所有对 userData 的引用
```

### 重构
在函数内提出代码改进和重构机会。

**示例**：
```python
# 当您提取一个方法时，NES 会建议相关的重构
def process_data(data):
    # NES 建议：将重复代码提取为独立方法
    return cleaned_data
```

### 添加功能

#### 变量
当您声明新变量时，NES 预测它在代码后续部分的使用方式并建议后续编辑。

**示例**：
```javascript
// 声明新变量
const apiUrl = "https://api.example.com";
// NES 建议：添加使用该变量的 fetch 调用
```

#### 字段
当您注释一个字段时，它建议对其他字段应用相同或相关的注释。

**示例**：
```java
// 添加注解
@NotNull
private String name;
// NES 建议：为其他类似字段添加相同注解
```

#### 参数
当您向函数添加参数时，它建议修改调用函数的代码片段。

**示例**：
```typescript
// 添加新参数
function calculateTotal(items: Item[], tax: number) {
// NES 建议：更新所有函数调用以包含新参数
}
```

#### 注释
输入 `/` 触发注释建议。按 `Ctrl + ↓` 接受内联注释。

**示例**：
```python
def complex_algorithm(data):
    # / (触发注释建议)
    # NES 建议："""实现复杂的数据处理算法"""
```

## 快捷键参考

| 操作 | macOS | Windows |
|------|-------|---------|
| 接受建议 | Tab | Tab |
| 拒绝建议 | Esc | Esc |
| 跳转到下一个编辑位置 | Tab | Tab |
| 接受内联注释 | Ctrl + ↓ | Ctrl + ↓ |

## 最佳实践

### 1. 保持代码一致性
NES 会学习您的编码模式，因此保持一致的编码风格有助于提供更准确的建议。

### 2. 利用上下文信息
在进行编辑时，确保相关的上下文信息在可见范围内，这有助于 NES 提供更精确的建议。

### 3. 渐进式编辑
对于复杂的重构任务，建议分步进行，让 NES 能够在每一步提供相应的建议。

### 4. 及时反馈
通过接受或拒绝建议来训练 NES，使其更好地理解您的编程偏好。

## 与其他功能的集成

NES 与 Qoder 的其他功能无缝集成：

- **代码补全**：与传统的代码补全功能协同工作
- **AI 聊天**：可以基于聊天建议触发 NES
- **重构工具**：在重构过程中提供智能建议
- **代码分析**：基于代码分析结果提供改进建议

## 性能优化

为了获得最佳的 NES 体验：

- 保持项目索引更新
- 避免在大型文件中进行频繁的大量编辑
- 定期重启 IDE 以刷新模型缓存
- 确保有足够的系统内存供 AI 模型运行

NES 是 Qoder 智能编程体验的核心组成部分，通过预测您的下一步编辑意图，显著提高编程效率和代码质量。