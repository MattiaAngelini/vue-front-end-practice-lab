<script lang="ts">
import { useMainStore } from '../store.ts';
import axios from 'axios';
// import Header from '../components/layout/Header.vue';
// import Footer from '../components/layout/Footer.vue';
import CardBs from '../components/common/CardBs.vue';
import { currentWindow } from '../assets/styles/breakpoint.ts';

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
            techniques: [],
            sizeWindow: currentWindow(window.innerWidth),
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
                this.userChoices.forEach(choice => {
                    if (!(technique.belt === choice || 
                          technique.difficulty === choice || 
                          technique.age_range === choice )){                   
                        technique.isVisible = false;} // Nascondo se non presente
                        
                });
            });
        },
        resetFilters(){
            this.userChoices = [];
            this.techniques.forEach(technique => {   
                technique.isVisible = true;           
            });
        },

        getLayout(){
                //ogni volta che finestra cambia viene ricalcolato 'sizeWindow' con funzione dei breakppoints 
                window.addEventListener('resize', () => {
                this.sizeWindow = currentWindow(window.innerWidth);
                console.log(this.sizeWindow)
            });

        }
    },

    computed:{
        //layout delle colonne grid in base ai breakpoints
        columns():Record<string,string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl') {
                return { gridTemplateColumns: 'repeat(4, 1fr)' };
            }      
            else if (this.sizeWindow === 'xs' || this.sizeWindow === 'xxs') {
                return { gridTemplateColumns:  '1fr'};
            }
            else {
                return { gridTemplateColumns: 'repeat(2, 1fr)' };
            }
        },

    },

    mounted() {
        this.getTechniques();
        this.getLayout();
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
            <div :style="columns"  class="cards" 
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
        // grid-template-columns: 1fr 1fr 1fr;
                  
        }
}
</style>