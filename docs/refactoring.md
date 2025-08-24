# 代码重构

## 功能概览

Qoder 提供智能代码重构功能，帮助改进代码质量和结构。

### 🔧 重构类型
- **提取函数**: 将重复代码提取为独立函数
- **重命名符号**: 智能重命名变量、函数、类
- **优化结构**: 改进代码组织和架构
- **性能优化**: 识别并优化性能瓶颈

### 📋 支持的重构操作
- 提取变量/函数/类
- 内联变量/函数
- 移动代码到合适位置
- 简化条件表达式
- 消除重复代码

## 使用方法

### 1. 选择代码
选中需要重构的代码块

### 2. 选择重构操作
- 右键选择 "重构代码"
- 使用快捷键 `Ctrl/Cmd + Shift + R`
- 从建议列表中选择操作

### 3. 预览和应用
- 查看重构预览
- 确认更改
- 应用重构

## 重构示例

### 提取函数
```javascript
// 重构前
function processOrder(order) {
  if (order.total > 100) {
    order.discount = order.total * 0.1;
  }
  if (order.total > 500) {
    order.shipping = 0;
  } else {
    order.shipping = 10;
  }
}

// 重构后  
function processOrder(order) {
  applyDiscount(order);
  calculateShipping(order);
}

function applyDiscount(order) {
  if (order.total > 100) {
    order.discount = order.total * 0.1;
  }
}

function calculateShipping(order) {
  order.shipping = order.total > 500 ? 0 : 10;
}
```

## 最佳实践

1. 小步重构，频繁测试
2. 保持功能不变
3. 改进可读性和维护性
4. 遵循设计原则
5. 使用版本控制跟踪更改