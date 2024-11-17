// store.js
import { reactive } from 'vue'
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

    AboutMeSideBySide:{
        title: 'Mattia',
        description: 'Benvenuti sul mio profilo, mi chiamo Mattia Angelini ecc.ecc.',
        image: '../public/images/bg.jpeg',
        urlAboutMe: 'https://github.com/MattiaAngelini/front-end-practice-lab'
    },

    cardsCarousel:[
        {title: 'Work',description:'le mie esperienze lavorative' ,image: '', },
        {title: 'BJJ',description:'le mie esperienze lavorative' ,image: '', },
        {title: 'Coding',description:'le mie esperienze lavorative' ,image: '', },
        {title: 'Trips',description:'le mie esperienze lavorative' ,image: '', },
        
    ]
});