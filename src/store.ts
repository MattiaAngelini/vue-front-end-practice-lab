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
              { link: 'HOME', url: 'HomePage' },
              { link: 'CONTATTI', url: 'ContactsPage' },
              { link: 'DOWNLOAD CV', url: '' }
            ]
          ),
        ),
 
        //************HERO************// AGGIUSTARE PROPS
        heroVideo: '/src/assets/video/heroVideo.mp4',
        MyName: 'Mattia Angelini',
        MyInfo: 'Web Developer',

        //************ABOUT-ME PAGE************//
  
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
              title: 'Il Brazilian Jiu-Jitsu',
              description: 'My first passion',
              image: '../public/bjj/bjj3.jpg',
              url: 'BjjPage',
            },
        
          ],

          //************CAROUSEL splide PROJECTS PAGE***********//
          cardsBoolean : [             
          
            {
              title: 'DropoBox',
              description: 'La Home-Page di DropBox - HTML - CSS',
              image: '../public/projects-img/dropbox.jpg',
            },
            {
              title: 'Dc Comics',
              description: 'Griglia film DC Comics - HTML - CSS - JS - API',
              image: '../public/projects-img/dc-comics.jpg',
            },
            {
              title: 'Spotify',
              description: 'La Home-Page di Sotify - HTML - CSS ',
              image: '../public/projects-img/spotify.jpg',
            },
            {
              title: 'Whatsapp',
              description: 'Interfaccia di messagistica con logiche di invio e risposte automatiche - VUE/JS',
              image: '../public/projects-img/whatsapp.jpg',
            },
            {
              title: 'Campo Minato',
              description: 'Campo minato con 3 modalità di difficoltà - HTML - CSS - JS',
              image: '../public/projects-img/campo-minato.jpg',
            },
            {
              title: 'Autocar',
              description: 'SPA Autocar - VUE/JS',
              image: '../public/projects-img/autocar1.jpg',
            },
            {
              title: 'Filtri Autocar',
              description: 'Logica per filtri auto di Autocar - VUE/JS',
              image: '../public/projects-img/autocar2.jpg',
            },
            {
              title: 'Boolfix',
              description: 'Web-Site per ricerca film - HTML - CSS - API',
              image: '../public/projects-img/boolfix.jpg',
            },
              
          ],
          cardsProjects: [             
          
            {
              title: 'PortFolio',
              description: "Il mio portfolio è un progetto che rappresenta la sintesi delle mie competenze tecniche e creative. Ho utilizzato HTML5, CSS3 e JavaScript per creare una struttura moderna e completamente responsive, affiancati da Vue.js per la gestione dei componenti dinamici. Il progetto include animazioni personalizzate, l'uso di librerie per slide, e la creazione di caroselli sviluppati interamente da me. Grazie all’integrazione di Vite e TypeScript, il codice è ottimizzato e tipizzato, garantendo efficienza e scalabilità. Ogni dettaglio, dalle transizioni fluide al design mobile-first, è stato curato per offrire un'esperienza utente coinvolgente e professionale.",
              linkRepo: 'https://github.com/MattiaAngelini/vue-front-end-practice-lab',
              image1: '../public/projects-img/siteSM.png',
              image2: '../public/projects-img/siteXL.png',
              image3: '../public/projects-img/bjjpage.png',
              image4: '',
              image5: '',
              
            },
            {
              title: 'React Aliens Game',
              description: "Alien Games è un progetto in fase di sviluppo, nato per esplorare e consolidare le mie competenze in React. Si tratta di un gioco interattivo che combina dinamismo e strategia, ispirato al classico stile di lotta Pokémon. Attualmente, il gioco include due schermate principali: una schermata iniziale per la scelta dei personaggi e una schermata di battaglia, dove i giocatori si sfidano in un sistema a turni. Ho utilizzato React per la gestione dei componenti, useState e useEffect per controllare lo stato del gioco e le dinamiche degli eventi. Alien Games rappresenta una sfida continua, con l'obiettivo di arricchire il gameplay e implementare nuove funzionalità in futuro.",
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
          video: '/src/assets/video/videoContacts.mp4',        
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
