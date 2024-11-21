import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';
import CvPage from '../src/pages/CvPage.vue';
import ContactsPage from '../src/pages/ContactsPage.vue';

const routes = [
    { path: '/HomePage', name: 'HomePage', component: HomePage },
    { path: '/Contatti', name: 'ContactsPage', component: ContactsPage },
    { path: '/CurriculumVitae', name: 'CvPage', component: CvPage },

    //da collegare
    // { path: '/CodingExperiences', name: 'CodeExpPage', component: CodeExpPage },
    // { path: '/MyWorkExperiences', name: 'WorkExpPage', component: WorkExpPage },
    // { path: '/IlBrazilianJiuJitsu', name: 'BjjPage', component: BjjPage },
    // { path: '/Trips', name: 'TripsPage', component: TripsPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
