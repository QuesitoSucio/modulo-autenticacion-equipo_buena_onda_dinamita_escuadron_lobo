import menu from "../view/menu.vue";

import login from "../view/login.vue";
import Dashboard from "../components/Dashboard.vue";

import UserRegistration from "../components/UserRegistration.vue";//modal

import Dasboard from "../view/Dasboard.vue";
import vista from "../view/vista.vue";
import Projects from "../view/Projects.vue";
import invoices from "../view/invoices.vue";
import Reports from '../view/report.vue'
import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    { path: '/', component: menu },
    { path: '/login', component: login},
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
    { path: '/vista', component: vista},
    { path: '/dasboard', component: Dasboard},
    { path: '/projects', component: Projects},
    { path: '/invoices', component: invoices},
    { path: '/Reports', component: Reports},
];


export const router = createRouter({
    history: createWebHashHistory(),
    routes
})