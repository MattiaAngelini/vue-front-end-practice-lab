import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '../router/index.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide'; // Importa i componenti di Splide

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

// Registra i componenti di Splide globalmente
app.component('Splide', Splide);
app.component('SplideSlide', SplideSlide);

app.mount('#app');
