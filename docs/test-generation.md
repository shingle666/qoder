# 单元测试生成

## 功能概览

Qoder 自动生成高质量单元测试，提高代码质量和测试覆盖率。

### 支持框架
- Jest (JavaScript/TypeScript)
- Pytest (Python)
- JUnit (Java)
- Go Test (Go)

### 测试类型
- 正常流程测试
- 边界值测试
- 异常处理测试
- Mock 对象测试

## 基础用法

### 生成测试
1. 选中目标函数
2. 右键选择 "生成单元测试"
3. 或使用快捷键 `Ctrl/Cmd + Shift + T`

### 示例
```javascript
// 原函数
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('参数必须是数字');
  }
  return a + b;
}

// 生成的测试
describe('add', () => {
  test('应该正确计算两个数的和', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('参数不是数字时应该抛出错误', () => {
    expect(() => add('a', 2)).toThrow('参数必须是数字');
  });
});
```

## 高级功能

### 异步函数测试
自动生成 async/await 测试和 Mock 设置

### 类测试生成
为整个类生成完整的测试套件

### 集成测试
生成 API 端点和组件集成测试

## 配置选项

```json
{
  "testing": {
    "framework": "jest",
    "language": "zh-CN",
    "includeEdgeCases": true,
    "mockStrategy": "auto"
  }
}
```

## 最佳实践

1. 使用描述性测试名称
2. 按功能组织测试
3. 保持测试独立性
4. 合理使用 Mock
5. 追求高覆盖率