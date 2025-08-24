---
# SEO 配置
title: "故障排除指南 - Qoder 智能编程平台 | 常见问题、诊断工具、问题解决"
description: "Qoder 智能编程平台故障排除完整指南。包含启动问题、AI 功能问题、性能问题、配置问题的解决方案，以及诊断命令和获取帮助的方法。"
keywords: "Qoder 故障排除, 常见问题, 启动问题, AI 功能问题, 性能问题, 配置问题, 诊断工具, 问题解决, 技术支持"

# Open Graph 配置
head:
  - - meta
    - property: og:title
      content: "故障排除指南 - Qoder 智能编程平台"
  - - meta
    - property: og:description
      content: "完整的 Qoder 故障排除指南，帮助解决各种常见问题"
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://caug.cn/docs/troubleshooting
  - - meta
    - property: og:image
      content: https://caug.cn/logo.svg
  - - meta
    - property: article:section
      content: "故障排除"
  - - meta
    - property: article:tag
      content: "故障排除"
  - - meta
    - property: article:tag
      content: "问题解决"
  
  # Twitter Card
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "故障排除指南 - Qoder"
  - - meta
    - name: twitter:description
      content: "常见问题、诊断工具、问题解决方案"
  
  # 结构化数据
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "故障排除指南",
        "description": "Qoder 智能编程平台故障排除完整指南",
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
          "@id": "https://caug.cn/docs/troubleshooting"
        },
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24"
      }
---

# 故障排除

本指南解释如何使用 Qoder 诊断脚本来排解启动和连接问题。脚本会自动收集关键系统信息，包括环境详情、网络设置、Qoder 服务状态和相关日志。

## 诊断脚本使用

### 先决条件
- **操作系统**: Windows
- **权限**: 管理员权限
- **脚本文件**: 下载 windows_Qoder.bat
- **安装路径**: C:\Users\<YourUsername>\.qoder

### 运行步骤
1. 双击 qoder_Debug.bat 文件
2. 等待脚本完成收集
3. 查看生成的日志文件：Qoder_Log_YYYYMMDD_HHMMSS.txt

## 常见问题

### 启动问题
- **无法启动**: 检查系统要求，重启应用
- **崩溃**: 重置配置文件，重新安装

如果 Qoder 卡在 "Qoder starting"：
1. 检查环境：确保最新版本和系统兼容性
2. 测试网络：
   ```bash
   curl https://api1.qoder.sh/algo/api/v1/ping
   ```
3. 清除缓存：删除 .Qoder 目录并重启

### AI 功能问题  
- **无响应**: 检查 API 密钥配置
- **错误建议**: 重建项目索引
- **连接失败**: 验证网络和代理设置

### 性能问题
- **运行缓慢**: 调整内存设置，排除大文件
- **索引失败**: 清理缓存，重建索引

### 配置问题
- **设置丢失**: 检查配置文件权限
- **同步失败**: 验证团队配置一致性

## 诊断命令

```bash
qoder doctor          # 健康检查
qoder index rebuild   # 重建索引  
qoder cache clear     # 清理缓存
qoder config reset    # 重置配置
```

## 支持的平台
- **macOS**: 11.0 及以上
- **Windows**: 10/11

## 数据安全
- Qoder 不存储或共享您的代码
- 代码上下文仅用于补全，不会存储
- 只有在明确提交反馈时才可能匿名化使用日志

## 获取帮助

如果遇到任何问题，请先尝试重启 Qoder。如果问题持续，请联系 contact@qoder.com，并附上诊断日志文件。

- 查看日志文件了解详细错误
- 访问社区论坛交流讨论
- 联系技术支持获取帮助