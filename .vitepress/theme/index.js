import { defineClientConfig } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './custom.css'

export default defineClientConfig({
  enhanceApp(ctx) {
    ctx.app.use(ElementPlus)
  }
})