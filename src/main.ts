import "@vant/touch-emulator";
import "./assets/base.scss";
import "normalize.css";
import { createApp } from "vue";
import { setupStore } from "@/stores";
import { setupVant } from "@/vant";
import "./assets/vant.scss";

import App from "./App.vue";

import "./assets/main.css";
import router from "./router";

const app = createApp(App);

setupStore(app);
setupVant(app);
app.use(router);

app.mount("#app");
