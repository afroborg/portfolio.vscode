import homePage from '@/pages/home-page/home-page.vue';
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: homePage
  }
];
