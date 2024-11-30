<script lang="ts">
import { useMainStore } from '../store.ts';
// import Header from '../components/layout/Header.vue';
// import Footer from '../components/layout/Footer.vue';
import DropDonwnBs from '../components/common/DropDonwnBs.vue';
import CardBs from '../components/common/CardBs.vue';
import axios from 'axios';

export default{
    name: 'BjjPage',
    components:{   
        // Header,
        // Footer,
        DropDonwnBs,
        CardBs
    },

    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },

    data(){
        return{
            data: null,
            isVisible: true
        }
    },

    methods:{
        labelDropdown(key:string){
            if(key === 'belts'){
                return 'Cintura'
            }else if(key === 'age_range'){
                return 'Età'
            }else{
                return 'Difficoltà'
            }         
        },

        getTechniques(){
           axios.get('https://mocki.io/v1/e2fe5cbc-9571-42fa-af5b-beace1837b70')
            .then(response => {
                this.data = response.data;
            })
            .catch(error => {
                console.error('Errore nel recupero delle tecniche', error);
            })       
        }
    },
    computed:{
    },
    mounted() {  
        this.getTechniques();    
    },
}
</script>
<template>
    <!-- <Header 
        :header="mainStore.mainHeader"
    /> -->

 <main>
    <h1 class="text-center p-3">MIGLIORA IL TUO BJJ E ALLENA LE TECNICHE IN BASE AL TUO LIVELLO</h1>

   <div>
        <div class="d-flex gap-3 justify-content-center">
            <DropDonwnBs v-for="(filter,index) in mainStore.filters" :key="index" 
                :items="mainStore.filters[index]" 
                :label="labelDropdown(Object.keys(filter)[0])" />     
        </div>
   </div>

   <section class="container">
            <div class="d-flex justify-content-center item" v-for="(card, index) in mainStore.cardsCarousel" 
                 :key="index">
                <CardBs 
                 v-show="isVisible"
                 :card="mainStore.cardsCarousel[index]" 
                 /> <!--costruire json, ora layout su cardsCarousel-->
            </div>
        </section>

 </main>
    <!-- <Footer :icons="mainStore.logoFooter" /> -->
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main{
    min-height: 100vh;
    background-color: lightgrey;
        section{
            display: grid;
            grid-template-columns: 1fr 1fr;         
        }
}
</style>