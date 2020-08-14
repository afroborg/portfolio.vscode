import homePage from '@/pages/home-page/home-page.vue';
import projectPage from '@/pages/project-page/project-page.vue';
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: homePage,
    children: [
      {
        path: '/projects/:id/description',
        name: 'Project information',
        component: projectPage,
      }
    ]
  }
];
