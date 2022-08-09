import { createRouter, createWebHashHistory } from "vue-router";

const Layout = () => import("@/layout/index.vue");

const publicRoutes = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404.vue"),
  },
];
export const dynamicRoutes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页", icon: 'home'},
      },
    ],
  },
  {
    path: "/icons",
    component: Layout,
    children: [
      {
        path: "/icons",
        component: () => import("@/views/icons/index.vue"),
        meta: { title: "图标库", icon: 'icons' },
      },
    ],
  },
  {
    path: "/template",
    component: Layout,
    children: [
      {
        path: "/template",
        component: () => import("@/views/template/index.vue"),
        meta: { title: "基础模版", icon: 'template'},
      },
    ],
  },
  {
    path: "/menu",
    component: Layout,
    redirect: "/menu/menu-1",
    meta: { title: "menu" },
    children: [
      {
        path: "/menu/menu-1",
        redirect: "/menu/menu-1/menu-1-1",
        meta: { title: "menu-1" },
        children: [
          {
            path: "/menu/menu-1/menu-1-1",
            component: () => import("@/views/menu/menu-1/menu-1-1/index.vue"),
            meta: { title: "menu-1-1" },
          },
        ],
      },
      {
        path: "/menu/menu-2",
        component: () => import("@/views/menu/menu-2/index.vue"),
        meta: { title: "menu-2" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...dynamicRoutes],
});

export default router;
