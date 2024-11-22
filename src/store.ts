import { defineStore } from 'pinia';
import { ButtonHref } from './models/ButtonHref.ts';
import { Hamburger } from './models/Hamburger.ts';

export const useMainStore = defineStore('main', {
    state: () => ({
        //************HEADER ************//
        headerLinks: [
            { label: 'Home', href: 'HomePage' },
            { label: 'Contatti', href: 'ContactsPage' },
            { label: 'CV', href: 'CvPage' },
        ],

        headerHamburger: new Hamburger(
            'Mattia Angelini', // title
            'fa-solid fa-bars', // icon
            'grey', // bgColor
            'black', // color
            'medium', // size
            // links
            [
              { link: 'Home', url: 'HomePage' },
              { link: 'Contatti', url: 'ContactsPage' },
              { link: 'CV', url: 'CvPage' },
            ]
        ),

        socialIcons: [
            { label: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
            { label: 'fa-brands fa-github', href: 'https://github.com/MattiaAngelini' },
        ],

        //************HERO************//
        heroVideo: '../public/video/heroVideo.mp4',
        MyName: 'Mattia Angelini',
        MyInfo: 'Front-end Web Developer',

        //************SIDEBYSIDE************//
        AboutMeSideBySide: {
            title: 'Il mio sito vetrina',
            description: 'Benvenuti sul mio sito portfolio, se sei qui perchè cerchi informazioni sul mio background e vuoi scoprire chi sono ho preparato una lettera di presentazione al link qui sotto.',
            image: '../public/images/laptop.avif',
        },

        btnSideBySide: new ButtonHref(
            'Presentazione!', // Titolo
            'AboutMePage', // URL
            'darkgrey', // Colore di sfondo
            'orange' // Colore del testo
        ),

        //************CAROUSEL***********//
        cardsCarousel : [
            {
              title: 'Work',
              description: 'Le mie esperienze lavorative',
              image: '../public/images/me.jpg',
              url: 'WorkExpPage',
            },
            {
              title: 'BJJ',
              description: 'Il Brazilian jiu-jitsu',
              image: '../public/images/me.jpg',
              url: 'BjjPage',
            },
            {
              title: 'Coding',
              description: 'Le mie esperienze di coding',
              image: '../public/images/me.jpg',
              url: 'CodeExpPage',
            },
            {
              title: 'Trips',
              description: 'I miei viaggi',
              image: '../public/images/me.jpg',
              url: 'TripsPage',
            },
          ],
          

        //************FOOTER************//
        logoFooter: [
            { image: '../public/images/logos/bootstrap.png', altText: 'bootstrap' },
            { image: '../public/images/logos/css.png', altText: 'css' },
            { image: '../public/images/logos/html.png', altText: 'html' },
            { image: '../public/images/logos/js.png', altText: 'js' },
            { image: '../public/images/logos/laravel.png', altText: 'laravel' },
            { image: '../public/images/logos/mysql.png', altText: 'mysql' },
            { image: '../public/images/logos/php.png', altText: 'php' },
            { image: '../public/images/logos/sass.png', altText: 'sass' },
            { image: '../public/images/logos/ts.png', altText: 'ts' },
            { image: '../public/images/logos/vue.png', altText: 'vue' },
            { image: '../public/images/logos/node.png', altText: 'node' },
            { image: '../public/images/logos/github.png', altText: 'github' },
        ],
    }),

    getters: {
        // computed of store
        doubleCount: (state) => state.count * 2,
    },

    actions: {
        // methods
        increment() {
            this.count++;
        },
    },
});
