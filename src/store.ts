// store.js
import { reactive } from 'vue'
export const store = reactive({

    MyName: 'Mattia',
    MyInfo: 'Front-end Web Developer',
    
    headerLinks:[
        { text: 'Home', href: '/home' },
        { text: 'Progetti', href: '/about' },
        { text: 'Contatti', href: '/contact' },
        { text: 'Linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
    ],
    socialIcons:[
        { logo: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
        { logo: 'fa-brands fa-github', href: 'https://github.com/MattiaAngelini' },
        
    ],

});