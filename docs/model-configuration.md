# 模型配置

## 支持的模型

### OpenAI
- GPT-4 Turbo
- GPT-3.5 Turbo
- GPT-4

### Anthropic  
- Claude 3.5 Sonnet
- Claude 3 Haiku
- Claude 3 Opus

### Google
- Gemini Pro
- Gemini Pro Vision

## 配置步骤

### 1. 获取 API 密钥
访问对应平台获取 API 密钥：
- OpenAI: https://platform.openai.com/
- Anthropic: https://console.anthropic.com/
- Google: https://aistudio.google.com/

### 2. 配置模型
在设置页面添加 API 密钥和模型参数。

### 3. 测试连接
点击"测试连接"验证配置。

## 模型参数

```json
{
  "temperature": 0.3,
  "max_tokens": 4096,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0
}
```

## 使用建议

- **代码生成**: GPT-4 Turbo, Claude 3.5 Sonnet
- **代码审查**: Claude 3.5 Sonnet  
- **快速补全**: Claude 3 Haiku, GPT-3.5 Turbo
- **文档生成**: Gemini Pro

## 成本优化

1. 为不同任务选择合适模型
2. 设置使用限制
3. 启用智能缓存
4. 监控 API 使用量