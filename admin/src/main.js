import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './api/interception'
import VueMarkdownIt from 'vue3-markdown-it';
import 'highlight.js/styles/monokai.css';
import 'github-markdown-css/github-markdown.css'



let app=createApp(App)

app.use(router)
    .use(ElementPlus)
    .use(VueMarkdownIt)
    .mount('#app')
