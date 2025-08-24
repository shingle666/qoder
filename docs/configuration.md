# 配置指南

## 基础配置

### 编辑器设置
- 主题选择：浅色/深色/自动
- 字体大小和字体族
- 代码高亮配置

### AI 模型配置
- API 密钥设置
- 模型参数调整
- 使用限制配置

### 项目配置
- 包含/排除路径
- 语言和框架设置
- 分析深度配置

## 高级配置

### 性能优化
```json
{
  "performance": {
    "maxMemory": "2GB",
    "cacheSize": "500MB",
    "indexingThreads": 4
  }
}
```

### 团队配置
- 共享配置文件
- 统一编码规范
- 协作设置

## 配置文件位置

- Windows: `%APPDATA%\Qoder\config`
- macOS: `~/Library/Application Support/Qoder/config`

## 最佳实践

1. 从默认配置开始
2. 根据项目需求调整
3. 定期备份配置
4. 团队保持配置一致