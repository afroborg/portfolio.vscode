import homePage from '@/pages/home-page/home-page.vue';
import projectPage from '@/pages/project-page/project-page.vue';
import rootPage from '@/pages/root-page/root-page.vue';
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: homePage,
    children: [
      {
        path: '/',
        name: 'Home',
        component: rootPage,
      },
      {
        path: '/projects/:id/description',
        name: 'Project information',
        component: projectPage,
      }
    ]
  }
];
