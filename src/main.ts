import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// 1. 注册乾坤qiankun
import { start, registerMicroApps } from "qiankun";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 2. 加载的子应用列表
const subApp = [
  {
    name: "vue2App", // 子应用的名字
    activeRule: "/vue2-app", // 子应用匹配到的路由
    entry: "//localhost:8080", // 子应用的地址
    container: "#sub-app", // 加载的容器
  },
];

registerMicroApps(subApp, {
  // 子应用的声明周期函数
  beforeLoad: [async (app) => console.log("before load", app.name)],
  beforeMount: [async (app) => console.log("before mount", app.name)],
  afterMount: [async (app) => console.log("after mount", app.name)],
});

start();
