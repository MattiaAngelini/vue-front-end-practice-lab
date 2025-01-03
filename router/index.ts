import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';
import ProjectsPage from '../src/pages/ProjectsPage.vue';
import ContactsPage from '../src/components/sections/ContactsPage.vue';
import BjjPage from '../src/pages/BjjPage.vue';
import AboutMePage from '../src/components/sections/AboutMePage.vue';

const routes = [
    { 
        path: '/', 
        name: 'HomePage', 
        component: HomePage, 
        meta: { 
            title: 'Home - Mattia Angelini', 
            description: 'Benvenuto nel mio sito personale. Esplora i miei progetti e passioni!' 
        } 
    },
    { 
        path: '/Contatti', 
        name: 'ContactsPage', 
        component: ContactsPage, 
        meta: { 
            title: 'Contatti - Mattia Angelini', 
            description: 'Contattami per collaborazioni o per saperne di più sui miei progetti!' 
        } 
    },
    { 
        path: '/Projects', 
        name: 'ProjectsPage', 
        component: ProjectsPage, 
        meta: { 
            title: 'Progetti - Mattia Angelini', 
            description: 'Dai un\'occhiata ai miei progetti più recenti in ambito sviluppo e creatività.' 
        } 
    },
    { 
        path: '/IlBrazilianJiuJitsu', 
        name: 'BjjPage', 
        component: BjjPage, 
        meta: { 
            title: 'Brazilian Jiu-Jitsu - Mattia Angelini', 
            description: 'Scopri di più sul mio percorso e la mia passione per il Brazilian Jiu-Jitsu.' 
        } 
    },
    { 
        path: '/AboutMe', 
        name: 'AboutMePage', 
        component: AboutMePage, 
        meta: { 
            title: 'Chi Sono - Mattia Angelini', 
            description: 'Conosci meglio chi sono, le mie passioni e il mio percorso professionale.' 
        } 
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };   
}
});

export default router;
