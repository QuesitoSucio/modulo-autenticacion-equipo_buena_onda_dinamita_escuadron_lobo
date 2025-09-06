import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../components/Dashboard.vue';

const routes = [
  { path: '/', component: Login },
  { 
    path: '/dashboard', 
    component: Dashboard, 
    beforeEnter: (to, from, next) => {
      const sesion = JSON.parse(localStorage.getItem('sesion-activa'));
      if (!sesion) {
        next('/');
      } else {
        next();
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
