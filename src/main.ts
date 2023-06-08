import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "virtual:uno.css";
import router from './router';
console.log(import.meta.env, '-----main');


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
