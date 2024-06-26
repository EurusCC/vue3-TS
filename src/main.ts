import { createApp } from 'vue'
import './style.css'

import router from './router/index.ts' //导入路由
import App from './App.vue'
import http from './http/index.ts' //导入axios

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')
app.config.globalProperties.$http = http
