import '@vant/touch-emulator';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import LottieAnimation from "lottie-web-vue";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LottieAnimation);

app.mount('#app')
