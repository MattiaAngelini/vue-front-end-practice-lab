//creato durante depoly per tipizzare componenti
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// Per tipizzare Splide
declare module '@splidejs/vue-splide' {
    import { DefineComponent } from 'vue';
    const Splide: DefineComponent<{}, {}, any>;
    const SplideSlide: DefineComponent<{}, {}, any>;
    export { Splide, SplideSlide };
}
declare module '*.css';
