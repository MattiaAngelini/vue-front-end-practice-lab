<script lang="ts">
import { useMainStore } from '../store.ts';
import axios from 'axios';
// import Header from '../components/layout/Header.vue';
// import Footer from '../components/layout/Footer.vue';
import CardBs from '../components/common/CardBs.vue';

export default {
    name: 'BjjPage',
    components: {   
        // Header,
        // Footer,  
        CardBs
    },

    data() {
        return {
            data: null,
            store: useMainStore(),
            userChoices: [],
            techniques: []
        };
    },

    methods: {
        labelDropdown(key: string) {
            if (key === 'belts') {
                return 'Cintura';
            } else if (key === 'age_range') {
                return 'Età';
            } else {
                return 'Difficoltà';
            }         
        },
        getTechniques() {
            axios.get('https://mocki.io/v1/93b6195f-e54e-48e2-866e-f94a591761da')
                .then(response => {
                    this.techniques = response.data;
                })
                .catch(error => {
                    console.error('Errore nel recupero delle tecniche', error);
                });
        },
        filters() {
            this.techniques.forEach(technique => {   
                technique.isVisible = true;
                // Controlla ogni filtro selezionato
                this.userChoices.forEach(choice => {
                    // ciclo nelle options e verifico
                    // se il valore sia presente in una proprietà delle tecniche
                    if (!(technique.belt === choice || technique.difficulty === choice || technique.age_range === choice )){                   
                        technique.isVisible = false;} // Nascondo se non presente
                });
            });
        },
        resetFilters(){
            this.userChoices = [];
            this.techniques.forEach(technique => {   
                technique.isVisible = true;           
            });

        }
    },
    mounted() {
        this.getTechniques();
    }
};
</script>

<template>
    <!-- <Header 
        :header="store.mainHeader"
    /> -->
 <main>
    <h1 class="text-center p-3">MIGLIORA IL TUO BJJ E ALLENA LE TECNICHE IN BASE AL TUO LIVELLO</h1>   
    <div class="dropdown d-flex gap-3 justify-content-center">
        <div v-for="(filter, index) in store.filters" :key="index">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <!--chiavi degli oggetti nell'array filters in store (per label button)-->
                {{ labelDropdown(Object.keys(filter)[0]) }}
            </button>

            <ul class="dropdown-menu">
                <li v-for="(values, index2) in filter" :key="index2">
                    <label class="d-block" v-for="(value, index) in values" :key="index"
                    >
                        <input  v-model="userChoices" type="checkbox" :value="value" />
                        {{ value }}
                    </label>
                </li>
               
            </ul>
            
        </div>
        <button @click="filters">FILTRA</button>
        <button @click="resetFilters">PULISCI FILTRI</button>
    </div>

   <section class="container p-5 card">
            <div class="cards" 
                 >
                <CardBs  v-for="(item, index) in techniques" 
                 :card="techniques[index]" 
                 v-show="techniques[index].isVisible"
                 />                
            </div>     
    </section>

 </main>
    <!-- <Footer :icons="store.logoFooter" /> -->
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main{
    min-height: 100vh;
    background-color: lightgrey;
        .cards{
            display: grid;
            grid-template-columns: repeat(3,1fr);              
        }
}
</style>