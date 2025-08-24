# 安装指南

本指南将帮助您在 Windows 或 macOS 系统上安装 Qoder。

## 系统要求

### Windows
- **操作系统**: Windows 10 (版本 1903) 或更高版本
- **推荐系统**: Windows 11
- **内存**: 8GB RAM (推荐 16GB)
- **磁盘空间**: 2GB 可用空间
- **网络**: 互联网连接 (用于 AI 模型访问)

### macOS
- **操作系统**: macOS 11.0 (Big Sur) 或更高版本
- **处理器**: Intel 或 Apple Silicon (M1/M2) 
- **内存**: 8GB RAM (推荐 16GB)
- **磁盘空间**: 2GB 可用空间
- **网络**: 互联网连接 (用于 AI 模型访问)

## 安装方法

### 方法一: 直接下载安装包

1. 访问 [下载页面](/download)
2. 选择适合您操作系统的版本
3. 下载安装包
4. 按照安装向导完成安装

#### Windows 安装步骤
1. 运行下载的 `.exe` 安装文件
2. 如果出现安全警告，点击"更多信息"然后"仍要运行"
3. 选择安装路径 (默认: `C:\Program Files\Qoder`)
4. 选择是否创建桌面快捷方式
5. 点击"安装"等待完成
6. 安装完成后启动 Qoder

#### macOS 安装步骤
1. 打开下载的 `.dmg` 文件
2. 将 Qoder 拖拽到 Applications 文件夹
3. 首次启动时，在 Launchpad 或 Applications 中找到 Qoder
4. 如果出现安全警告，前往"系统偏好设置" > "安全性与隐私"允许运行

### 方法二: 包管理器安装

#### Homebrew (macOS)
```bash
# 添加 Qoder tap
brew tap qoder-dev/qoder

# 安装 Qoder
brew install qoder

# 启动 Qoder
qoder
```

#### Chocolatey (Windows)
```bash
# 安装 Qoder
choco install qoder

# 启动 Qoder
qoder
```

#### Scoop (Windows)
```bash
# 添加 bucket
scoop bucket add qoder https://github.com/shingle666/qoder

# 安装 Qoder
scoop install qoder

# 启动 Qoder
qoder
```

## 首次配置

### 1. 启动 Qoder
安装完成后，首次启动 Qoder 时需要进行基本配置。

### 2. 选择 AI 模型
Qoder 支持多种 AI 模型，您需要配置至少一个：

<el-alert 
  title="API 密钥配置" 
  type="info" 
  description="使用 AI 功能需要相应的 API 密钥。您可以从各个提供商的官网获取。"
  show-icon>
</el-alert>

#### OpenAI (GPT-4)
1. 前往 [OpenAI API](https://platform.openai.com/api-keys)
2. 创建新的 API 密钥
3. 在 Qoder 设置中输入密钥

#### Anthropic (Claude)
1. 前往 [Anthropic Console](https://console.anthropic.com/)
2. 获取 API 密钥
3. 在 Qoder 设置中配置

#### Google (Gemini)
1. 前往 [Google AI Studio](https://aistudio.google.com/)
2. 获取 API 密钥
3. 在 Qoder 设置中配置

### 3. 工作区设置
- **项目路径**: 选择您的代码项目所在目录
- **编程语言**: 选择主要使用的编程语言
- **代码风格**: 配置偏好的代码格式化规则

### 4. 性能优化 (可选)
- **GPU 加速**: 如果有支持的显卡，可启用 GPU 加速
- **内存限制**: 根据系统配置调整内存使用限制
- **网络代理**: 如需要，配置网络代理设置

## 验证安装

安装完成后，您可以通过以下步骤验证 Qoder 是否正常工作：

1. **启动检查**: 确保 Qoder 能够正常启动
2. **AI 连接测试**: 在设置中测试 AI 模型连接
3. **创建测试项目**: 创建一个简单项目测试功能
4. **代码补全测试**: 尝试使用智能代码补全功能

### 命令行验证
```bash
# 检查版本
qoder --version

# 运行健康检查
qoder doctor

# 查看配置
qoder config list
```

## 许可证激活

Qoder 提供免费和专业版本：

### 免费版
- 基础 AI 功能
- 代码补全和生成
- 有限的月度 API 调用

### 专业版
- 无限 AI 功能访问
- 高级代码分析
- 优先技术支持
- 团队协作功能

专业版需要激活码，可在官网购买或通过企业许可获得。

## 更新 Qoder

### 自动更新
Qoder 默认启用自动更新检查。当有新版本时，会在启动时提示更新。

### 手动更新

#### 通过应用内更新
1. 打开 Qoder
2. 前往 "帮助" > "检查更新"
3. 按照提示完成更新

#### 通过包管理器更新
```bash
# Homebrew
brew upgrade qoder

# Chocolatey
choco upgrade qoder

# Scoop
scoop update qoder
```

## 卸载 Qoder

### Windows 卸载
1. 打开"设置" > "应用"
2. 搜索"Qoder"
3. 点击"卸载"

或使用控制面板:
1. 打开"控制面板" > "程序和功能"
2. 找到"Qoder"
3. 点击"卸载"

### macOS 卸载
1. 打开 Finder
2. 前往 Applications 文件夹
3. 将 Qoder 拖到垃圾桶
4. 清空垃圾桶

### 清理配置文件 (可选)
如果需要完全清理 Qoder 的配置文件：

#### Windows
删除目录: `%APPDATA%\Qoder`

#### macOS
删除目录: `~/Library/Application Support/Qoder`

## 常见问题

### 安装失败
如果安装过程中遇到问题：

1. **权限问题**: 确保以管理员身份运行安装程序
2. **杀毒软件**: 临时禁用杀毒软件
3. **磁盘空间**: 确保有足够的磁盘空间
4. **网络连接**: 检查网络连接是否正常

### 启动问题
如果 Qoder 无法启动：

1. **重新安装**: 卸载后重新安装
2. **配置重置**: 删除配置文件夹
3. **系统兼容性**: 检查系统版本是否满足要求
4. **日志检查**: 查看错误日志文件

### 获取帮助
如果仍然遇到问题，可以：

- 查看 [故障排除指南](./troubleshooting)
- 访问 [社区论坛](https://community.qoder.com)
- 发送邮件到 support@qoder.com
- 在 [GitHub](https://github.com/shingle666/qoder/issues) 提交问题

---

安装完成后，您可以继续阅读 [快速开始指南](./getting-started) 学习如何使用 Qoder。