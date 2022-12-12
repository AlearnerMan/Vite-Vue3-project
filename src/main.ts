import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./routers/index.js";
import {store} from "./store/index.js";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
