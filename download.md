# 下载 Qoder

<div class="download-hero">
  <h2>获取最新版本的 Qoder</h2>
  <p>支持 Windows 和 macOS，免费下载，立即开始您的智能编程之旅。</p>
</div>

## 最新版本

### Qoder v1.0.1
发布日期：2025年08月
文件大小：约 150MB (Windows) / 120MB (macOS)

<div class="version-info">
  <el-alert 
    title="最新版本已发布" 
    type="success" 
    description="包含最新的AI模型支持和性能优化，修复了多个已知问题。" 
    show-icon>
  </el-alert>
</div>

### 官方下载地址

基于 README.md 提供的官方下载链接：

**macOS 版本：**
- Apple Silicon (M1/M2/M3): `https://download.qoder.com/release/latest/Qoder-darwin-arm64.dmg`
- Intel 处理器: `https://download.qoder.com/release/latest/Qoder-darwin-x64.dmg`

**Windows 版本：**
- 64位系统: `https://download.qoder.com/release/latest/QoderUserSetup-x64.exe`

## 下载选项

<div class="download-cards">
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card class="download-card">
        <template #header>
          <div class="platform-header">
            <span class="platform-icon">🖥️</span>
            <h3>Windows</h3>
          </div>
        </template>
        <div class="platform-content">
          <p><strong>系统要求：</strong></p>
          <ul>
            <li>Windows 10 (版本 1903) 或更高版本</li>
            <li>Windows 11 (推荐)</li>
            <li>8GB RAM (推荐 16GB)</li>
            <li>2GB 可用磁盘空间</li>
          </ul>
          <div class="download-buttons">
            <el-button type="primary" size="large" block onclick="window.open('https://download.qoder.com/release/latest/QoderUserSetup-x64.exe')">
              下载 Windows 版本
            </el-button>
            <p class="download-note">适用于 Windows 10/11 (64位)</p>
          </div>
        </div>
      </el-card>
    </el-col>
    
    <el-col :span="12">
      <el-card class="download-card">
        <template #header>
          <div class="platform-header">
            <span class="platform-icon">🍎</span>
            <h3>macOS</h3>
          </div>
        </template>
        <div class="platform-content">
          <p><strong>系统要求：</strong></p>
          <ul>
            <li>macOS 11.0 (Big Sur) 或更高版本</li>
            <li>支持 Intel 和 Apple Silicon (M1/M2)</li>
            <li>8GB RAM (推荐 16GB)</li>
            <li>2GB 可用磁盘空间</li>
          </ul>
          <div class="download-buttons">
            <el-button type="primary" size="large" block onclick="window.open('https://download.qoder.com/release/latest/Qoder-darwin-arm64.dmg')">
              下载 Apple Silicon 版本
            </el-button>
            <el-button type="info" size="default" block onclick="window.open('https://download.qoder.com/release/latest/Qoder-darwin-x64.dmg')" style="margin-top: 8px;">
              下载 Intel 版本
            </el-button>
            <p class="download-note">M1/M2/M3 芯片推荐 Apple Silicon 版本</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>

## 安装指南

### Windows 安装步骤

1. **下载安装包**
   - 下载 `QoderUserSetup-x64.exe` 文件
   - 文件大小约 150MB

2. **运行安装程序**
   - 双击下载的 `.exe` 文件
   - 如果出现安全警告，点击"更多信息"然后选择"仍要运行"

3. **完成安装**
   - 按照安装向导提示完成安装
   - 建议安装到默认路径
   - 首次启动时会进行初始化配置

### macOS 安装步骤

1. **选择正确版本**
   - Apple Silicon (M1/M2/M3): 下载 `Qoder-darwin-arm64.dmg`
   - Intel 处理器: 下载 `Qoder-darwin-x64.dmg`

2. **安装应用**
   - 双击下载的 `.dmg` 文件
   - 将 Qoder 拖拽到 Applications 文件夹
   - 首次打开时可能需要在"安全性与隐私"中允许运行

3. **授权访问**
   - 首次运行时授予必要的文件访问权限
   - 如需使用AI功能，请配置相应的API密钥

## 验证下载

为确保下载文件的完整性和安全性，建议验证文件哈希值：

<el-collapse>
  <el-collapse-item title="查看文件校验值" name="checksums">
    <p>最新版本的校验值将在 <a href="https://github.com/shingle666/qoder/releases" target="_blank">GitHub Releases</a> 页面提供。</p>
    <p>使用以下命令验证文件完整性：</p>
    
**Windows (PowerShell):**
```powershell
Get-FileHash QoderUserSetup-x64.exe -Algorithm SHA256
```

**macOS/Linux:**
```bash
shasum -a 256 Qoder-darwin-*.dmg
```
  </el-collapse-item>
</el-collapse>

## 常见问题

<el-collapse>
  <el-collapse-item title="Windows 安装失败怎么办？" name="windows-install">
    <ul>
      <li>确保您有管理员权限</li>
      <li>暂时关闭杀毒软件后重试</li>
      <li>检查系统是否为 Windows 10 1903 或更高版本</li>
      <li>确保有足够的磁盘空间（至少 2GB）</li>
    </ul>
  </el-collapse-item>
  
  <el-collapse-item title="macOS 提示应用已损坏？" name="macos-damaged">
    <p>这通常是 Gatekeeper 安全机制导致的，请尝试：</p>
    <ol>
      <li>在终端中运行：<code>sudo xattr -rd com.apple.quarantine /Applications/Qoder.app</code></li>
      <li>或在"安全性与隐私"设置中点击"仍要打开"</li>
    </ol>
  </el-collapse-item>
  
  <el-collapse-item title="如何选择 macOS 版本？" name="macos-version">
    <p>检查您的 Mac 处理器类型：</p>
    <ul>
      <li>点击苹果菜单 > 关于本机</li>
      <li>如果显示 "Apple M1"、"Apple M2" 或 "Apple M3"，选择 ARM64 版本</li>
      <li>如果显示 "Intel" 处理器，选择 x64 版本</li>
    </ul>
  </el-collapse-item>
  
  <el-collapse-item title="首次启动很慢是正常的吗？" name="first-launch">
    <p>是的，首次启动时 Qoder 会：</p>
    <ul>
      <li>初始化工作环境</li>
      <li>下载必要的语言模型文件</li>
      <li>配置默认设置</li>
    </ul>
    <p>这个过程通常需要 2-5 分钟，请耐心等待。</p>
  </el-collapse-item>
</el-collapse>

## 其他下载方式

### 包管理器安装

<el-tabs>
  <el-tab-pane label="Homebrew (macOS)" name="homebrew">
    
```bash
brew install qoder
```

  </el-tab-pane>
  
  <el-tab-pane label="Chocolatey (Windows)" name="chocolatey">
    
```bash
choco install qoder
```

  </el-tab-pane>
  
  <el-tab-pane label="Scoop (Windows)" name="scoop">
    
```bash
scoop install qoder
```

  </el-tab-pane>
</el-tabs>

### 开发版本

如果您想体验最新的功能，可以下载开发版本：

<el-alert 
  title="注意" 
  type="warning" 
  description="开发版本可能包含未完成的功能和已知问题，仅建议开发者使用。"
  show-icon>
</el-alert>

<div style="margin-top: 1rem;">
  <el-button type="warning" plain onclick="window.open('https://github.com/shingle666/qoder/releases')">
    查看开发版本
  </el-button>
</div>

## 更新历史

### v1.0.1 (2025-08-24)
- 🔧 修复了代码补全的性能问题
- ✨ 新增对 Gemini Pro 模型的支持
- 🐛 修复了 macOS 上的内存泄漏问题
- 📝 改进了文档生成功能
- 🔒 增强了安全性和稳定性
- ⚡ 优化了启动速度和内存使用

### v1.0.0 (2025-08-22)
- 🎉 首次正式发布
- 🤖 集成 Claude 3.5 Sonnet 和 GPT-4 Turbo
- 🧠 完整的上下文工程功能
- ⚡ 智能代码补全和生成
- 🛠️ 专业开发工具集
- 📚 完整的中文本土化支持

## 系统兼容性

### 支持的操作系统

**Windows:**
- Windows 10 (版本 1903 或更高)
- Windows 11 (推荐)
- Windows Server 2019/2022

**macOS:**
- macOS 11.0 Big Sur 或更高版本
- macOS 12.0 Monterey
- macOS 13.0 Ventura  
- macOS 14.0 Sonoma
- macOS 15.0 Sequoia

### 硬件要求

**最低配置:**
- 处理器: 64位多核处理器
- 内存: 8GB RAM
- 存储: 2GB 可用空间
- 网络: 互联网连接（用于AI功能）

**推荐配置:**
- 处理器: Intel i5/i7 或 Apple Silicon M1/M2/M3
- 内存: 16GB RAM 或更多
- 存储: 5GB 可用空间（SSD推荐）
- 网络: 稳定的宽带连接

## 技术支持

遇到安装或使用问题？我们提供多种支持方式：

<el-row :gutter="16">
  <el-col :span="8">
    <el-card>
      <template #header>
        <span>📖 文档</span>
      </template>
      <p>查看详细的安装和使用指南</p>
      <el-button type="primary" text @click="$router.push('/docs/')">
        查看文档
      </el-button>
    </el-card>
  </el-col>
  
  <el-col :span="8">
    <el-card>
      <template #header>
        <span>💬 社区</span>
      </template>
      <p>加入我们的开发者社区</p>
      <el-button type="primary" text>
        访问论坛
      </el-button>
    </el-card>
  </el-col>
  
  <el-col :span="8">
    <el-card>
      <template #header>
        <span>🐛 问题反馈</span>
      </template>
      <p>报告 Bug 或请求新功能</p>
      <el-button type="primary" text onclick="window.open('https://github.com/shingle666/qoder/issues')">
        GitHub Issues
      </el-button>
    </el-card>
  </el-col>
</el-row>

<style scoped>
.download-hero {
  text-align: center;
  padding: 2rem 0;
  background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
  color: white;
  margin: -2rem -2rem 3rem -2rem;
  border-radius: 12px;
}

.download-hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.download-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.version-info {
  margin: 2rem 0;
}

.download-cards {
  margin: 3rem 0;
}

.download-card {
  height: 100%;
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.platform-icon {
  font-size: 1.5rem;
}

.platform-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.download-buttons {
  margin-top: 2rem;
}

.download-buttons .el-button + .el-button {
  margin-top: 0.5rem;
}
</style>