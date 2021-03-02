import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ProtectedPages from '@/containers/index.vue';
Vue.use(VueRouter);

// const Component = () => import('@/')

const routes: Array<RouteConfig> = [
  // { path: '/', name: 'Home', component: Home },
  // { path: '/', name: 'Home', component: Home },
  // {
  //   path: '/',
  //   component: ProtectedPages,
  //   children: [{ path: '/', name: 'Home', component: Home }],
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
