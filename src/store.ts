import { defineStore } from 'pinia';
import { ButtonHref } from './models/ButtonHref.ts';
import { Hamburger } from './models/Hamburger.ts';

export const useMainStore = defineStore('main', {
  state: () => ({ //data
   
      //props:
    
      //************HEADER ************//
      headerLinks: [
          { label: 'Home', href: '/home' },
          { label: 'Contatti', href: '/contact' },
          { label: 'CV', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
      ],

      headerHamburger: new Hamburger(
        'Mattia Angelini',
        'fa-solid fa-bars', 
        'grey', 
        'black', 
        'medium',
        ['Home','Contatti','CV']
      ),

      socialIcons: [
          { label: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
          { label: 'fa-brands fa-github', href: 'https://github.com/MattiaAngelini' }
      ],
      //************HERO************//
  
      heroVideo: '../public/video/heroVideo.mp4',
      MyName: 'Mattia Angelini',
      MyInfo: 'Front-end Web Developer',
  
      //************SIDEBYSIDE************//

      AboutMeSideBySide: {
          title: 'Mattia',
          description: 'Benvenuti sul mio profilo, mi chiamo Mattia Angelini ecc.ecc.',
          image: '../public/images/laptop.avif',
      },

      btnSideBySide: new ButtonHref(
        'Leggi di più', // Titolo
        'https://www.cristianoronaldo.com/#cr7', // URL
        'orange', // Colore di sfondo
        'black' // Colore del testo
      ),
  
      //************CAROUSEL***********//
      cardsCarousel: [
        {
          title: 'Work',
          description: 'Le mie esperienze lavorative',
          image: '../public/images/work.jpg',
        },
        {
          title: 'BJJ',
          description: 'Le mie esperienze di jiu-jitsu',
          image: '../public/images/bjj.jpg',
        },
        {
          title: 'Coding',
          description: 'Le mie esperienze di coding',
          image: '../public/images/coding.jpg',
        },
        {
          title: 'Trips',
          description: 'I miei viaggi',
          image: '../public/images/trips.jpg',
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
  
  getters: {   //computed of store
    doubleCount: (state) => state.count * 2,
  },

  actions: {  //methods
    increment() {
      this.count++;
    },
  },
});
