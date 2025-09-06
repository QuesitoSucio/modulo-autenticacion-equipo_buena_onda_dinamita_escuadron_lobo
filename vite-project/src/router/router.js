import menu from "../view/menu.vue";
import {createRouter, createWebHashHistory} from "vue-router"


const routes = [
    { path: '/menu', component: menu },
];


export const router= createRouter({
    history:createWebHashHistory(),
    routes
})