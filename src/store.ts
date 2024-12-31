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

        btnProjectsPage: { 
          label:'LEGGI',
           url :'ProjectsPage', // URL
           bgColor:'rgba(0,0,0,3)', // Colore di sfondo
           color:'white', // Colore del testo} 
           border: '2px solid rgb(140, 9, 211)'  
        },
        
        
        //************CAROUSEL HOMEPAGE***********//
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

          //************CAROUSEL splide PROJECTS PAGE***********//
          cardsBoolean : [             
          
            {
              title: 'DropoBox',
              description: 'Il mio profilo Linkedin',
              image: '../public/projects-img/dropbox.jpg',
            },
            {
              title: 'Dc Comics',
              description: 'Il mio profilo Github',
              image: '../public/projects-img/dc-comics.jpg',
            },
            {
              title: 'Spotify',
              description: 'Il mio profilo Linkedin',
              image: '../public/projects-img/spotify.jpg',
            },
            {
              title: 'Whatsapp',
              description: 'Il mio profilo Github',
              image: '../public/projects-img/whatsapp.jpg',
            },
            {
              title: 'Campo Minato',
              description: 'Il mio profilo Linkedin',
              image: '../public/projects-img/campo-minato.jpg',
            },
            {
              title: 'Autocar',
              description: 'Il mio profilo Github',
              image: '../public/projects-img/autocar1.jpg',
            },
            {
              title: 'Filtri Autocar',
              description: 'Il mio profilo Github',
              image: '../public/projects-img/autocar2.jpg',
            },
            {
              title: 'Boolfix',
              description: 'Il mio profilo Github',
              image: '../public/projects-img/boolfix.jpg',
            },
              
          ],
          cardsProjects: [             
          
            {
              title: 'PortFolio',
              description: 'Il mio sito Portfolio realizzato con vue',
              linkRepo: 'https://github.com/MattiaAngelini/vue-front-end-practice-lab',
              image1: '../public/projects-img/siteSM.png',
              image2: '../public/projects-img/siteXL.png',
              image3: '../public/projects-img/bjjpage.png',
              image4: '',
              image5: '',
              
            },
            {
              title: 'React Aliens Game',
              description: 'Progetto iniziato per studiare e imparare ad utilizzare React',
              linkRepo:'https://github.com/MattiaAngelini/react-aliens-game',
              image1: '../public/projects-img/aliengame1.jpg',
              image2: '../public/projects-img/aliengame2.jpg',
              image3: '../public/projects-img/aliengame3.jpg',
              image4: '../public/projects-img/aliengame4.jpg',
              image5: '../public/projects-img/aliengame5.jpg',
            
            },
          ],
       
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
