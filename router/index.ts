import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';
import CvPage from '../src/pages/CvPage.vue';
import ContactsPage from '../src/pages/ContactsPage.vue';
import BjjPage from '../src/pages/BjjPage.vue';
import AboutMePage from '../src/pages/AboutMePage.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/Contatti', name: 'ContactsPage', component: ContactsPage },
    { path: '/CurriculumVitae', name: 'CvPage', component: CvPage },
    { path: '/IlBrazilianJiuJitsu', name: 'BjjPage', component: BjjPage },
    { path: '/AboutMe', name: 'AboutMePage', component: AboutMePage},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };   
}
});

export default router;
