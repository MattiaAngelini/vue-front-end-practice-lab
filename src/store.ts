import { defineStore } from 'pinia';
import { Offcanvas } from './models/Offcanvas.ts';
import { Header } from './models/Header.ts';

export const useMainStore = defineStore('main', {
    state: () => ({
        //************HEADER ************//

        mainHeader: new Header(
          [{label:'Home',href:'HomePage'},
           {label:'Contatti',href:'ContactsPage'},
           {label:'Download CV',href:''},
          ],
          [{label:'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/'},
           {label:'fa-brands fa-github',  href: 'https://github.com/MattiaAngelini'},          
          ],
          new Offcanvas(
            `MENU'`, // title offcanvas
            'fa-solid fa-bars', // icon hamburger
            'grey', // bgColor
            'black', // color
            'medium', // size
            // links
            [
              { link: 'Home', url: 'HomePage' },
              { link: 'Contatti', url: 'ContactsPage' },
              { link: 'Download CV', url: '' }
            ]
          ),
        ),
 
        //************HERO************// AGGIUSTARE PROPS
        heroVideo: '/src/assets/video/heroVideo.mp4',
        MyName: 'Mattia Angelini',
        MyInfo: 'Front-end Developer',

        //************ABOUT-ME PAGE************//
        AboutMe: {
          title: 'Benvenuto sul mio sito portfolio',
          description: 'Ciao, sono Mattia.Nato a Udine il 22 giugno 1993, oggi vivo a Bari. Il mio percorso nel mondo della programmazione è iniziato con la Boolean Tech Academy, dove ho completato una formazione intensiva come programmatore full stack. Da allora, continuo a crescere e a perfezionarmi, con particolare interesse per il front-end development. Oltre al codice, sono un insegnante di Brazilian Jiu-Jitsu, cintura viola con oltre 5 anni di pratica. La costanza, la disciplina e la dedizione che applico sul tatami sono gli stessi valori che porto nella mia vita professionale. In questo sito racconto il mio percorso, unendo lavoro, passioni e voglia di migliorarmi ogni giorno.',
          image: '/src/assets/images/me.jpg',
          info:true
      },

        btnSideBySide: { 
          label:'LEGGI',
           url :'http://localhost:5173/AboutMe', // URL
           bgColor:'black', // Colore di sfondo
           color:'rgb(139, 134, 131)' // Colore del testo}   
        },
        
        
        //************CAROUSEL***********//
        cardsCarouselHref : [             
            {
              title: 'Linkedin',
              description: 'Il mio profilo Linkedin',
              image: '/src/assets/images/linkedin.png',
              url: 'https://www.linkedin.com/in/mattia-angelini-b00427311/',
            },
            {
              title: 'Github',
              description: 'Il mio profilo Github',
              image: '/src/assets/images/github.jpeg',
              url: 'https://github.com/MattiaAngelini',
            },
              
          ],
          cardsRouterHref : [             
            {
              title: 'IL Bjj',
              description: 'My first passion',
              image: '../public/bjj/bjj3.jpg',
              url: 'BjjPage',
            },
        
          ],
        //************CV-PAGE************//            
        btnCvPage: { 
           label:'DOWNLOAD', // Titolo
           url :'../public/test.jpg', // URL
           bgColor:'black', // Colore di sfondo
           color:'rgb(255, 103, 31)' // Colore del testo}   
        },
        //************CONTACTS-PAGE************//
        ContactsSideBySide: {
          image: '/src/assets/images/mail.webp',        
          form: true
        },

         //************BJJ-PAGE************//

         imagesCarousel : [               
          {
           src: '../public/bjj/bjj2.jpg',
          },
          {
            src: '../public/bjj/bjj3.jpg',
           },
           {
            src: '../public/bjj/bjj1.jpg',
           },
           {
            src: '../public/bjj/bjj4.jpg',
           },
           {
            src: '../public/bjj/bjj5.jpg',
           },
           {
            src: '../public/bjj/bjj6.jpg',
           },
           {
            src: '../public/bjj/bjj7.jpg',
           },
           {
            src: '../public/bjj/sweep1.jpg',
           },
           {
            src: '../public/bjj/sweep2.jpg',
           },
           {
            src: '../public/bjj/sweep3.jpg',
           },
           {
            src: '../public/bjj/sweep4.jpg',
           },
         ],
        
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
            { image: '', altText: 'github' },
            { image: '', altText: 'github' },
            { image: '', altText: 'github' },
        ],

        count:0,
        
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
