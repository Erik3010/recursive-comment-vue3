import { createRouter, createWebHistory } from "vue-router";

import Index from "@/views/Index.vue";
import Detail from "@/views/Detail.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/post/:id",
    name: "post-detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
