import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../src/pages/AppHome.vue';


const routes = [
    { path: '/', name: 'AppHome', component: AppHome },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
