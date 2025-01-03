import { defineStore } from 'pinia';
import { Offcanvas } from './models/Offcanvas.ts';
import { Header } from './models/Header.ts';

export const useMainStore = defineStore('main', {
  state: () => ({
    //************HEADER ************//
    mainHeader: new Header(
      [
        { label: 'Home', href: 'HomePage' },
        { label: 'Contatti', href: 'ContactsPage' },
        { label: 'Download CV', href: '' },
      ],
      [
        { label: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
        { label: 'fa-brands fa-github', href: 'https://github.com/MattiaAngelini' },
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
          { link: 'DOWNLOAD CV', url: '' },
        ]
      )
    ),

    //************HERO************//
    heroVideo: '/video/heroVideo.mp4', // Corretto il percorso

    MyName: 'Mattia Angelini',
    MyInfo: 'Web Developer',

    //************ABOUT-ME PAGE************//
    btnProjectsPage: {
      label: 'LEGGI',
      url: 'ProjectsPage', // URL
      bgColor: 'rgba(0,0,0,3)', // Colore di sfondo
      color: 'white', // Colore del testo
      border: '2px solid rgb(140, 9, 211)',
    },

    //************CAROUSEL HOMEPAGE***********//
    cardsCarouselHref: [
      {
        title: 'Linkedin',
        description: 'Il mio profilo Linkedin',
        image: '/images/linkedin.png', // Corretto il percorso
        url: 'https://www.linkedin.com/in/mattia-angelini-b00427311/',
      },
      {
        title: 'Github',
        description: 'Il mio profilo Github',
        image: '/images/github.jpeg', // Corretto il percorso
        url: 'https://github.com/MattiaAngelini',
      },
    ],
    cardsRouterHref: [
      {
        title: 'Il Brazilian Jiu-Jitsu',
        description: 'My first passion',
        image: '/bjj/bjj3.jpg', // Corretto il percorso
        url: 'BjjPage',
      },
    ],

    //************CAROUSEL splide PROJECTS PAGE***********//
    cardsBoolean: [
      {
        title: 'DropoBox',
        description: 'La Home-Page di DropBox - HTML - CSS',
        image: '/projects-img/dropbox.jpg', // Corretto il percorso
      },
      {
        title: 'Dc Comics',
        description: 'Griglia film DC Comics - HTML - CSS - JS - API',
        image: '/projects-img/dc-comics.jpg', // Corretto il percorso
      },
      {
        title: 'Spotify',
        description: 'La Home-Page di Spotify - HTML - CSS ',
        image: '/projects-img/spotify.jpg', // Corretto il percorso
      },
      {
        title: 'Whatsapp',
        description: 'Interfaccia di messaggistica con logiche di invio e risposte automatiche - VUE/JS',
        image: '/projects-img/whatsapp.jpg', // Corretto il percorso
      },
      {
        title: 'Campo Minato',
        description: 'Campo minato con 3 modalità di difficoltà - HTML - CSS - JS',
        image: '/projects-img/campo-minato.jpg', // Corretto il percorso
      },
      {
        title: 'Autocar',
        description: 'SPA Autocar - VUE/JS',
        image: '/projects-img/autocar1.jpg', // Corretto il percorso
      },
      {
        title: 'Filtri Autocar',
        description: 'Logica per filtri auto di Autocar - VUE/JS',
        image: '/projects-img/autocar2.jpg', // Corretto il percorso
      },
      {
        title: 'Boolfix',
        description: 'Web-Site per ricerca film - HTML - CSS - API',
        image: '/projects-img/boolfix.jpg', // Corretto il percorso
      },
    ],
    cardsProjects: [
      {
        title: 'PortFolio',
        description:
          "Il mio portfolio è un progetto che rappresenta la sintesi delle mie competenze tecniche e creative. Ho utilizzato HTML5, CSS3 e JavaScript per creare una struttura moderna e completamente responsive, affiancati da Vue.js per la gestione dei componenti dinamici. Il progetto include animazioni personalizzate, l'uso di librerie per slide, e la creazione di caroselli sviluppati interamente da me. Grazie all’integrazione di Vite e TypeScript, il codice è ottimizzato e tipizzato, garantendo efficienza e scalabilità. Ogni dettaglio, dalle transizioni fluide al design mobile-first, è stato curato per offrire un'esperienza utente coinvolgente e professionale.",
        linkRepo: 'https://github.com/MattiaAngelini/vue-front-end-practice-lab',
        image1: '/projects-img/siteSM.png', // Corretto il percorso
        image2: '/projects-img/siteXL.png', // Corretto il percorso
        image3: '/projects-img/bjjpage.png', // Corretto il percorso
        image4: '',
        image5: '',
      },
      {
        title: 'React Aliens Game',
        description:
          "Alien Games è un progetto in fase di sviluppo, nato per esplorare e consolidare le mie competenze in React. Si tratta di un gioco interattivo che combina dinamismo e strategia, ispirato al classico stile di lotta Pokémon. Attualmente, il gioco include due schermate principali: una schermata iniziale per la scelta dei personaggi e una schermata di battaglia, dove i giocatori si sfidano in un sistema a turni. Ho utilizzato React per la gestione dei componenti, useState e useEffect per controllare lo stato del gioco e le dinamiche degli eventi. Alien Games rappresenta una sfida continua, con l'obiettivo di arricchire il gameplay e implementare nuove funzionalità in futuro.",
        linkRepo: 'https://github.com/MattiaAngelini/react-aliens-game',
        image1: '/projects-img/aliengame1.jpg', // Corretto il percorso
        image2: '/projects-img/aliengame2.jpg', // Corretto il percorso
        image3: '/projects-img/aliengame3.jpg', // Corretto il percorso
        image4: '/projects-img/aliengame4.jpg', // Corretto il percorso
        image5: '/projects-img/aliengame5.jpg', // Corretto il percorso
      },
    ],

    //************CONTACTS-PAGE************//
    ContactsSideBySide: {
      video: '/src/assets/video/videoContacts.mp4', // Usa un import o verifica il percorso
      form: true,
    },

    //************BJJ-PAGE************//
    imagesCarousel: [
      { src: '/bjj/bjj2.jpg' },
      { src: '/bjj/bjj3.jpg' },
      { src: '/bjj/bjj1.jpg' },
      { src: '/bjj/bjj4.jpg' },
      { src: '/bjj/bjj5.jpg' },
      { src: '/bjj/bjj6.jpg' },
      { src: '/bjj/bjj7.jpg' },
      { src: '/bjj/sweep1.jpg' },
      { src: '/bjj/sweep2.jpg' },
      { src: '/bjj/sweep3.jpg' },
      { src: '/bjj/sweep4.jpg' },
    ],

    //************FOOTER************//
    logoFooter: [
      { image: '/images/logos/bootstrap.png', altText: 'bootstrap' },
      { image: '/images/logos/css.png', altText: 'css' },
      { image: '/images/logos/html.png', altText: 'html' },
      { image: '/images/logos/js.png', altText: 'js' },
      { image: '/images/logos/laravel.png', altText: 'laravel' },
      { image: '/images/logos/mysql.png', altText: 'mysql' },
      { image: '/images/logos/php.png', altText: 'php' },
      { image: '/images/logos/sass.png', altText: 'sass' },
      { image: '/images/logos/ts.png', altText: 'ts' },
      { image: '/images/logos/vue.png', altText: 'vue' },
      { image: '/images/logos/node.png', altText: 'node' },
      { image: '/images/logos/github.png', altText: 'github' },
      { image: '', altText: '' },
      { image: '', altText: '' },
      { image: '', altText: '' },
    ],

    count: 0,
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
