import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layouts/Layout";
import Index from "@/views/Index";
import Detail from "@/views/Detail";
import NotFound from "@/views/NotFound";

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
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
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
