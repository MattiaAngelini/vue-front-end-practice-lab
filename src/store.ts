import { defineStore } from 'pinia';
import { Button } from './models/Button.ts';
import { Offcanvas } from './models/Offcanvas.ts';
import { Header } from './models/Header.ts';

export const useMainStore = defineStore('main', {
    state: () => ({
        //************HEADER ************//

        mainHeader: new Header(
          [{label:'Home',href:'HomePage'},
           {label:'Contatti',href:'ContactsPage'},
           {label:'CV',href:'CvPage'},
          ],
          [{label:'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/'},
           {label:'fa-brands fa-github',  href: 'https://github.com/MattiaAngelini'}
          ],
          new Offcanvas(
            'Mattia Angelini', // title offcanvas
            'fa-solid fa-bars', // icon hamburger
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
        ),
 
        //************HERO************//
        heroVideo: '/src/assets/video/heroVideo.mp4',
        MyName: 'Mattia Angelini',
        MyInfo: 'Front-end Web Developer',

        //************SIDEBYSIDE************//
        AboutMeSideBySide: {
            title: 'Il mio sito vetrina',
            description: 'Benvenuti sul mio sito portfolio, se sei qui perchè cerchi informazioni sul mio background e vuoi scoprire chi sono ho preparato una lettera di presentazione al link qui sotto.',
            image: '/src/assets/images/laptop.avif',
        },

        btnSideBySide: new Button(
            'Presentazione!', // Titolo
            'AboutMePage', // URL
            'black', // Colore di sfondo
            'rgb(255, 103, 31)' // Colore del testo
        ),

        //************CAROUSEL***********//
        cardsCarouselRoute : [
            {
              title: 'Work',
              description: 'Le mie esperienze lavorative',
              image: '/src/assets/images/me.jpg',
              url: 'WorkExpPage',
            },
            {
              title: 'BJJ',
              description: 'Il Brazilian jiu-jitsu',
              image: '/src/assets/images/me.jpg',
              url: 'BjjPage',
            },         
          ],
          
          cardsCarouselHref : [
            {
              title: 'Linkedin',
              description: 'Il mio profilo Linkedin',
              image: '/src/assets/images/me.jpg',
              url: 'https://www.linkedin.com/in/mattia-angelini-b00427311/',
            },
            {
              title: 'Github',
              description: 'Il mio profilo Github',
              image: '/src/assets/images/me.jpg',
              url: 'https://github.com/MattiaAngelini',
            },
          ],
        //************CV-PAGE************//
              
        btnCvPage: new Button(
          'Download', // Titolo
          '../public/test.jpg', // URL
          'black', // Colore di sfondo
          'rgb(255, 103, 31)' // Colore del testo
      ),

        //************FOOTER************//
        logoFooter: [
            { image: 'src/assets/images/logos/bootstrap.png', altText: 'bootstrap' },
            { image: 'src/assets/images/logos/css.png', altText: 'css' },
            { image: 'src/assets/images/logos/html.png', altText: 'html' },
            { image: 'src/assets/images/logos/js.png', altText: 'js' },
            { image: 'src/assets/images/logos/laravel.png', altText: 'laravel' },
            { image: 'src/assets/images/logos/mysql.png', altText: 'mysql' },
            { image: 'src/assets/images/logos/php.png', altText: 'php' },
            { image: 'src/assets/images/logos/sass.png', altText: 'sass' },
            { image: 'src/assets/images/logos/ts.png', altText: 'ts' },
            { image: 'src/assets/images/logos/vue.png', altText: 'vue' },
            { image: 'src/assets/images/logos/node.png', altText: 'node' },
            { image: 'src/assets/images/logos/github.png', altText: 'github' },
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
