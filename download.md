# 下载 Qoder

<div class="download-hero">
  <h2>获取最新版本的 Qoder</h2>
  <p>支持 Windows 和 macOS，免费下载，立即开始您的智能编程之旅。</p>
</div>

## 最新版本

### Qoder v1.0.1
发布日期：2024年12月

<div class="version-info">
  <el-alert 
    title="最新版本已发布" 
    type="success" 
    description="包含最新的AI模型支持和性能优化。" 
    show-icon>
  </el-alert>
</div>

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
            <el-button type="primary" size="large" block>
              下载 Windows 版本
            </el-button>
            <el-button type="info" size="small" plain>
              下载便携版
            </el-button>
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
            <el-button type="primary" size="large" block>
              下载 macOS 版本
            </el-button>
            <el-button type="info" size="small" plain>
              通过 Homebrew 安装
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>

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
  <el-button type="warning" plain>下载开发版本</el-button>
</div>

## 更新历史

### v1.0.1 (2024-12-01)
- 🔧 修复了代码补全的性能问题
- ✨ 新增对 Gemini Pro 模型的支持
- 🐛 修复了 macOS 上的内存泄漏问题
- 📝 改进了文档生成功能

### v1.0.0 (2024-11-15)
- 🎉 首次正式发布
- 🤖 集成 Claude 3.5 Sonnet 和 GPT-4 Turbo
- 🧠 完整的上下文工程功能
- ⚡ 智能代码补全和生成
- 🛠️ 专业开发工具集

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
      <el-button type="primary" text>
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