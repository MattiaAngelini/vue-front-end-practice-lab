import axios from 'axios';
import { useMainStore } from '../store';

export function getTechniques(){
axios.get('https://mocki.io/v1/f6287ed1-30ba-4801-8e2b-61601eacd59f')
    .then(response => {
        const store = useMainStore()
        store.techniques = response.data;
        console.log(store.techniques)
    })
    .catch(error => {
        console.error('Errore nel recupero delle tecniche', error);
    })       
}

