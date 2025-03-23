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
    heroVideo: '/video/heroVideo.mp4', 

    MyName: 'Mattia Angelini',
    MyInfo: 'Web Developer',

    //************ABOUT-ME PAGE************//
    btnProjectsPage: {
      label: 'VISUALIZZA',
      url: 'ProjectsPage', // URL
      bgColor: 'rgba(0,0,0,3)', // Colore di sfondo
      color: 'white', // Colore del testo
      border: '2px solid rgb(140, 9, 211)',
    },

    //************CAROUSEL HOMEPAGE***********//
    cardsCarouselHref: [

      {
        title: 'Github',
        description: 'Il mio profilo Github',
        image: '/images/github.jpeg', 
        url: 'https://github.com/MattiaAngelini',
      },
    ],
    cardsRouterHref: [
     
      {
        title: 'Boolean Academy',
        description: 'Il mio percorso di studi',
        image: '/images/boolean.png', 
        url: 'ProjectsPage',
      },
      {
        title: 'Il Brazilian Jiu-Jitsu',
        description: 'My first passion',
        image: '/bjj/bjj3.jpg', 
        url: 'BjjPage',
      },
    ],

    //************CAROUSEL splide PROJECTS PAGE***********//
    cardsBoolean: [
      {
        title: 'DropoBox',
        description: 'La Home-Page di DropBox - HTML - CSS',
        image: '/projects-img/dropbox.jpg', 
      },
      {
        title: 'Dc Comics',
        description: 'Griglia film DC Comics - HTML - CSS - JS - API',
        image: '/projects-img/dc-comics.jpg', 
      },
      {
        title: 'Spotify',
        description: 'La Home-Page di Spotify - HTML - CSS ',
        image: '/projects-img/spotify.jpg', 
      },
      {
        title: 'Whatsapp',
        description: 'Interfaccia di messaggistica con logiche di invio e risposte automatiche - VUE/JS',
        image: '/projects-img/whatsapp.jpg', 
      },
      {
        title: 'Campo Minato',
        description: 'Campo minato con 3 modalità di difficoltà - HTML - CSS - JS',
        image: '/projects-img/campo-minato.jpg', 
      },
      {
        title: 'Autocar',
        description: 'SPA Autocar - VUE/JS',
        image: '/projects-img/autocar1.jpg', 
      },
      {
        title: 'Filtri Autocar',
        description: 'Logica per filtri auto di Autocar - VUE/JS',
        image: '/projects-img/autocar2.jpg', 
      },
      {
        title: 'Boolfix',
        description: 'Web-Site per ricerca film - HTML - CSS - API',
        image: '/projects-img/boolfix.jpg', 
      },
    ],
    cardsProjects: [
      
      {
        title: 'React Aliens Game',
        description:"Alien Games è un progetto in fase di sviluppo, nato per esplorare e consolidare le mie competenze in React. Si tratta di un gioco interattivo che combina dinamismo e strategia, ispirato al classico stile di lotta Pokémon. Attualmente, il gioco include due schermate principali: una schermata iniziale per la scelta dei personaggi e una schermata di battaglia, dove i giocatori si sfidano in un sistema a turni. Ho utilizzato React per la gestione dei componenti, useState e useEffect per controllare lo stato del gioco e le dinamiche degli eventi. Alien Games rappresenta una sfida continua, con l'obiettivo di arricchire il gameplay e implementare nuove funzionalità in futuro.",
        linkRepo: 'https://github.com/MattiaAngelini/react-aliens-game',
        images:['/projects-img/aliengame3.jpg',
          '/projects-img/aliengame2.jpg',
        ]
      },
      {
        title: 'React My Shop',
        description:"My Shop è un progetto e-commerce creato per approfondire Redux Toolkit e RTK Query. L'app simula la gestione di un magazzino e di un carrello, permettendo di acquistare e rimuovere prodotti. Include due sezioni principali: una per visualizzare i prodotti disponibili e una per gestire il carrello. RTK Query viene utilizzato per caricare i prodotti da Fake Store API, mentre Redux Toolkit gestisce lo stato globale con slice separati per magazzino e carrello, aggiornando dinamicamente la disponibilità dei prodotti.",
        linkRepo: 'https://github.com/MattiaAngelini/redux-shopping-cart',
        images:['/projects-img/myshopscreen.jpg', ]
      },

      {
        title: 'App Meteo Js Vanilla',
        description:"La Weather App consente di cercare il meteo di una città tramite l'API di WeatherAPI.com. Sviluppata con HTML5, CSS3 (Bootstrap) e JavaScript vanilla, offre un'interfaccia reattiva che mostra temperatura, condizioni meteo e icone rappresentative. Include una funzione per salvare le città cercate di recente , la possibilità di cancellare la cronologia e una dark/light mode migliorando l'usabilità. Il progetto ha approfondito la gestione delle API, la manipolazione del DOM e la gestione degli errori in JavaScript.",
        linkRepo: 'https://github.com/MattiaAngelini/weather-app-js-vanilla',
        images:['/projects-img/weatherApp1.jpg','/projects-img/weatherApp2.jpg' ]
      },

      {
        title: 'App Note Js Vanilla',
        description:"La Note App è un'applicazione per prendere appunti in modo organizzato e persistente. Ho utilizzato HTML5, CSS3 (con Bootstrap per un design pulito) e JavaScript vanilla per implementare funzionalità come l'aggiunta, la visualizzazione e l'eliminazione delle note. Le note vengono salvate nel localStorage, garantendo che i dati non vengano persi al refresh della pagina. Ho anche implementato una modale per visualizzare il contenuto completo delle note, migliorando l'esperienza utente. Questo progetto mi ha aiutato a comprendere meglio la gestione dello stato, l'uso del localStorage e la creazione di componenti interattivi senza l'uso di framework esterni.",
        linkRepo: 'https://github.com/MattiaAngelini/note-app-js-vanilla',
        images:['/projects-img/noteApp1.jpg','/projects-img/noteApp2.jpg',
         
        ]
      },

      {
        title: 'To Do List Js Vanilla',
        description:"La To-Do List è un'applicazione semplice ma efficace per gestire attività quotidiane. Ho utilizzato HTML5, CSS3 (con Bootstrap per lo styling) e JavaScript vanilla per creare un'interfaccia utente intuitiva e reattiva. L'app permette di aggiungere, completare e rimuovere task, con un contatore dinamico che tiene traccia dei task completati. Questo progetto mi ha permesso di approfondire la manipolazione del DOM e la gestione degli eventi in JavaScript, oltre a migliorare la mia capacità di creare interfacce utente funzionali e user-friendly.",  
        linkRepo: 'https://github.com/MattiaAngelini/to-do-list-js-vanilla',
        images:['/projects-img/screen-to-do-list.jpg',
        ]
      },
      {
        title: 'Sito Personale',
        description: "Il mio sito portfolio è un progetto che rappresenta la sintesi delle mie competenze tecniche e creative. Ho utilizzato HTML5, CSS3 e JavaScript per creare una struttura moderna e completamente responsive, affiancati da Vue.js per la gestione dei componenti dinamici. Il progetto include animazioni personalizzate, l'uso di librerie per slide, e la creazione di caroselli sviluppati interamente da me. Grazie all’integrazione di Vite e TypeScript, il codice è ottimizzato e tipizzato, garantendo efficienza e scalabilità. Ogni dettaglio, dalle transizioni fluide al design mobile-first, è stato curato per offrire un'esperienza utente coinvolgente e professionale.",
        linkRepo: 'https://github.com/MattiaAngelini/vue-front-end-practice-lab',
        images: [ '/projects-img/sitopersonale.jpg',]
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
