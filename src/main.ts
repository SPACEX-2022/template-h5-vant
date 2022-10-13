import '@vant/touch-emulator';
import './assets/base.css';
import 'normalize.css';
import { createApp } from 'vue'
import { setupStore } from "@/stores";

import App from './App.vue'

import './assets/main.css'
import router from './router'

const app = createApp(App)

setupStore(app)
app.use(router)

app.mount('#app')
