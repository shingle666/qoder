---
# SEO 配置
title: "索引功能 - Qoder 智能代码索引与语义搜索"
description: "Qoder 索引功能详细介绍，自动生成文件嵌入向量，支持智能代码理解、语义搜索和实时增量索引功能。"
keywords: "Qoder 索引, 代码索引, 语义搜索, 文件嵌入, 智能搜索, 增量索引, 代码理解, 自动索引"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "索引功能 - Qoder 智能代码索引"
  - - meta
    - property: og:description
      content: "自动代码索引和语义搜索，提升 AI 代码理解能力"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/indexing
  - - meta
    - property: og:image
      content: https://caug.cn/logo.svg
  - - meta
    - property: article:section
      content: "核心功能"
  - - meta
    - property: article:tag
      content: "索引"
  - - meta
    - property: article:tag
      content: "搜索"
  
  # Twitter Card
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "索引功能 - Qoder"
  - - meta
    - name: twitter:description
      content: "智能代码索引与语义搜索功能"
  
  # 结构化数据
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "索引功能",
        "description": "Qoder 智能代码索引与语义搜索功能详细指南",
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
          "@id": "https://caug.cn/docs/indexing"
        },
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24"
      }
---

# 索引功能

Qoder 在您打开项目时自动索引您的代码库，通过生成文件嵌入向量来实现 AI 驱动的代码理解、智能推荐和语义搜索。索引是增量进行的，因此新文件或修改的文件会实时处理——无需手动干预。

## 工作原理

### 自动索引流程

1. **项目检测**：Qoder 自动检测新打开的项目
2. **文件扫描**：扫描项目中的所有相关文件
3. **向量生成**：为每个文件生成语义嵌入向量
4. **索引构建**：构建高效的搜索索引结构
5. **增量更新**：实时监控文件变化并更新索引

### 支持的功能

- **语义搜索**：基于代码含义而非字面匹配的搜索
- **智能推荐**：基于上下文的代码建议
- **代码理解**：深度分析代码结构和关系
- **快速导航**：快速定位相关代码片段

## 配置索引

### 启用索引

1. 在 Qoder IDE 右上角，点击用户图标或使用快捷键（`⌘ ⇧ ,`（macOS）或 `Ctrl + Shift + ,`（Windows）），选择 **Qoder 设置**
2. 在左侧导航面板中，点击 **索引**
3. 选择以下选项之一：

**手动启用索引：**
- 点击"代码库索引"旁边的 **创建**

**启用连续后台索引：**
- 开启 **自动索引** 功能

::: tip 索引说明
代码库索引支持最多 100,000 个文件的代码库。
对于少于 10,000 个文件的代码库，默认启用自动索引。
对于较大的代码库，需要手动启用索引。
:::

## 忽略文件

默认情况下，Qoder 索引所有项目文件，除了：
- `.gitignore` 中指定的文件和目录
- `.qoderignore` 中列出的文件

### 指定自定义忽略文件

您可以定义其他要从索引中排除的文件或目录：

1. 在 Qoder IDE 右上角，点击用户图标或使用快捷键（`⌘ ⇧ ,`（macOS）或 `Ctrl + Shift + ,`（Windows）），选择 **Qoder 设置**
2. 在左侧导航面板中，点击 **索引**
3. 点击"忽略文件"旁边的 **管理**
4. 添加您的自定义模式

### 模式示例

| 模式 | 描述 |
|------|------|
| `config.json` | 忽略特定文件 |
| `dist/` | 忽略整个目录 |
| `*.log` | 忽略所有 .log 扩展名的文件 |
| `**/logs` | 忽略任何嵌套级别的 logs 目录 |
| `!app/` | 排除路径不被忽略（否定） |

### 检查文件是否被忽略

要检查特定文件是否被忽略，使用以下命令：
```bash
git check-ignore -v [文件名]
```

## 索引类型

### 文件索引
- **源代码文件**：`.js`, `.ts`, `.py`, `.java`, `.go`, `.rs` 等
- **配置文件**：`package.json`, `tsconfig.json`, `.env` 等
- **文档文件**：`.md`, `.txt`, `.rst` 等
- **数据文件**：`.json`, `.yaml`, `.xml` 等

### 内容索引
- **函数和方法**：函数签名、参数、返回值
- **类和接口**：类定义、继承关系、成员
- **变量和常量**：声明、类型、作用域
- **注释和文档**：代码注释、文档字符串

### 关系索引
- **依赖关系**：模块导入、库依赖
- **调用关系**：函数调用、方法调用
- **继承关系**：类继承、接口实现
- **引用关系**：变量引用、类型引用

## 索引优化

### 性能考虑

**项目大小：**
- 小型项目（< 1,000 文件）：即时索引
- 中型项目（1,000 - 10,000 文件）：几分钟内完成
- 大型项目（10,000 - 100,000 文件）：可能需要更长时间

**内存使用：**
- 索引数据存储在本地
- 使用高效的压缩算法
- 支持内存限制配置

**CPU 使用：**
- 后台低优先级处理
- 可配置处理线程数
- 不影响正常编码工作

### 优化建议

1. **排除不必要的文件**
   ```
   # .qoderignore
   node_modules/
   .git/
   dist/
   build/
   *.log
   *.tmp
   ```

2. **分批处理大型项目**
   - 按模块分别索引
   - 优先索引核心代码
   - 后续索引测试和文档

3. **定期维护索引**
   - 清理过期索引
   - 重建损坏索引
   - 优化索引结构

## 语义搜索功能

### 基于意图的搜索
```
搜索："用户认证功能"
结果：找到所有与用户登录、注册、权限相关的代码
```

### 代码模式搜索
```
搜索："异步数据库查询"
结果：找到使用 async/await 的数据库操作代码
```

### 功能相似性搜索
```
搜索："排序算法"
结果：找到各种排序实现，即使命名不同
```

### 跨语言概念搜索
```
搜索："单例模式"
结果：找到所有语言中的单例模式实现
```

## 索引状态监控

### 索引进度
- 实时显示索引进度
- 文件处理数量统计
- 估计完成时间

### 索引质量
- 成功索引的文件数
- 跳过的文件和原因
- 错误文件和错误信息

### 搜索性能
- 搜索响应时间
- 结果准确性评分
- 用户满意度反馈

## 常见问题

### 索引没有启动
**可能原因：**
- 项目文件数量超过限制
- 磁盘空间不足
- 权限不足

**解决方案：**
1. 检查项目文件数量
2. 清理磁盘空间
3. 检查文件访问权限
4. 重启 Qoder 重试

### 搜索结果不准确
**可能原因：**
- 索引未完成
- 文件内容已过期
- 搜索关键词不够精确

**解决方案：**
1. 等待索引完成
2. 重建索引
3. 使用更具体的搜索词
4. 检查文件是否被正确索引

### 性能问题
**可能原因：**
- 项目过大
- 内存不足
- 磁盘 I/O 瓶颈

**解决方案：**
1. 增加内存配置
2. 使用 SSD 存储
3. 优化忽略文件配置
4. 分批处理大型项目

## 诊断工具

### 索引状态检查
```bash
# 检查索引状态
qoder index status

# 查看索引统计
qoder index stats

# 检查特定文件索引
qoder index check <文件路径>
```

### 索引管理
```bash
# 重建索引
qoder index rebuild

# 清理索引
qoder index clean

# 优化索引
qoder index optimize
```

### 性能分析
```bash
# 索引性能报告
qoder index performance

# 搜索性能测试
qoder search benchmark

# 内存使用分析
qoder index memory
```

## 隐私和安全

### 本地处理
- 索引数据完全存储在本地
- 不上传源代码到服务器
- 嵌入向量本地生成

### 数据保护
- 加密存储索引数据
- 安全删除功能
- 访问权限控制

### 合规性
- 支持企业安全要求
- 符合数据保护法规
- 可配置安全策略

索引功能是 Qoder 智能编程能力的基础，通过深度理解您的代码库，为您提供更精准的 AI 辅助编程体验。