import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue'
import router from '../router/index.ts';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueSplide from '@splidejs/vue-splide';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use( VueSplide );
app.mount('#app');