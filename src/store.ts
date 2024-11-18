// store.js
import { reactive } from 'vue'
import { Card } from '../src/models/Card.ts'
import { SideBySide } from './models/SideBySide.ts';

export const store = reactive({

    //props:
    MyName: 'Mattia Angelini',
    MyInfo: 'Front-end Web Developer',
    
    headerLinks:[
        { text: 'Home', href: '/home' },
        { text: 'Contatti', href: '/contact' },
        { text: 'CV', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
    
    ],
    socialIcons:[
        { logo: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
        { logo: 'fa-brands fa-github', href: 'https://github.com/MattiaAngelini' }
    ],

    heroVideo: '../public/video/heroVideo.mp4',

    AboutMeSideBySide: new SideBySide(
        'Mattia',
        'Benvenuti sul mio profilo, mi chiamo Mattia Angelini ecc.ecc.',
        '../public/images/laptop.avif',
        'https://github.com/MattiaAngelini/front-end-practice-lab' // Questo è urlButton
      ),

    cardsCarousel:[
        new Card('Work', 'Le mie esperienze lavorative', '../public/images/work.jpg'),
        new Card('BJJ', 'Le mie esperienze di jiu-jitsu', '../public/images/bjj.jpg'),
        new Card('Coding', 'Le mie esperienze di coding', '../public/images/coding.jpg'),
        new Card('Trips', 'i miei viaggi','../public/images/trips.jpg'),
    ],

    logoFooter:[
        {image: '../public/images/logos/bootstrap.png' },
        {image: '../public/images/logos/css.png'},
        {image: '../public/images/logos/html.png'},
        {image: '../public/images/logos/js.png'},
        {image: '../public/images/logos/laravel.png'},
        {image: '../public/images/logos/mysql.png'},
        {image: '../public/images/logos/php.png'},
        {image: '../public/images/logos/sass.png'},
        {image: '../public/images/logos/ts.png'},
        {image: '../public/images/logos/vue.png'},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        
    ]
});