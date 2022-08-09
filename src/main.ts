import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from '@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import './promission'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import UComponents from '@/components/index.js'

const app = createApp(App)

app.use(createPinia()).use(router).use(ElementPlus,{ locale: zhCn,}).use(UComponents)

app.mount('#app')
