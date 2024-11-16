// store.js
import { reactive } from 'vue'
export const store = reactive({

    MyName: 'Mattia',
    MyInfo: 'Front-end Web Developer',
    
    headerLinks:[
        { text: 'Home', href: '/home' },
        { text: 'Contatti', href: '/contact' },
        { text: 'CV', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
        
    ],
    socialIcons:[
        { logo: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
        { logo: 'fa-brands fa-github', href: 'https://github.com/MattiaAngelini' },
        
    ],

});