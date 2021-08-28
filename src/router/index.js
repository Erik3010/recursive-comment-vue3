import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layouts/Layout";
import Index from "@/views/Index";
import Detail from "@/views/Detail";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: Index,
      },
      {
        path: "/post/:id",
        name: "post-detail",
        component: Detail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active-menu",
});

export default router;
