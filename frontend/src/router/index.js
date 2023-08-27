import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  { path: "/about", name: "About", component: () => import("@/views/About.vue") },
  {
    path: "/lista/:id",
    name: "Lista",
    component: () => import("@/views/Lista.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
