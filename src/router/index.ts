import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/Index.vue";
import useStore from '../store';
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。


const routes = [
  { path: "/login", component: () => import("../components/sign/Login.vue"), name: "Login" },
  { path: "/sign", component: () => import("../components/sign/SignUp.vue"), name: "SignUp" },
  { path: "/upload", component: () => import("../components/supe/Storage.vue"), name: "Storage" },
  { path: "/magic", component: () => import("../components/sign/MagicLink.vue"), name: "MagicLink" },
  { path: "/", component: Index, name: "Index" },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const base = process.env.NODE_ENV === "development" ? "/" : "/site";
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(base),
  routes, // `routes: routes` 的缩写v
});

router.beforeEach(async (to, from, next) => {
  const store = useStore();
  if (!localStorage.getItem('sb-lfgrnmcgdwljcmjvntub-auth-token') && !store.getUserInfo.session && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});

export default router;
