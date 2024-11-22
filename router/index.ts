import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';
import CvPage from '../src/pages/CvPage.vue';
import ContactsPage from '../src/pages/ContactsPage.vue';
import WorkExpPage from '../src/pages/WorkExpPage.vue';
import BjjPage from '../src/pages/BjjPage.vue';
import CodeExpPage from '../src/pages/CodeExpPage.vue';
import TripsPage from '../src/pages/TripsPage.vue';
import AboutMePage from '../src/pages/AboutMePage.vue';


const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/Contatti', name: 'ContactsPage', component: ContactsPage },
    { path: '/CurriculumVitae', name: 'CvPage', component: CvPage },
    { path: '/CodingExperiences', name: 'CodeExpPage', component: CodeExpPage },
    { path: '/MyWorkExperiences', name: 'WorkExpPage', component: WorkExpPage },
    { path: '/IlBrazilianJiuJitsu', name: 'BjjPage', component: BjjPage },
    { path: '/Trips', name: 'TripsPage', component: TripsPage },
    { path: '/AboutMe', name: 'AboutMePage', component: AboutMePage},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
