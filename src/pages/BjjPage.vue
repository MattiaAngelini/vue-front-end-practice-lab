<script lang="ts">
import { useMainStore } from '../store.ts';
// import Header from '../components/layout/Header.vue';
// import Footer from '../components/layout/Footer.vue';
import CardBs from '../components/common/CardBs.vue';
export default{
    name: 'BjjPage',
    components:{   
        // Header,
        // Footer,  
        CardBs
    },
    
    data(){
        return{
            data: null,
            isVisible: true,
            store: useMainStore(),
            userChoices: []
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
    },
    
}
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
                <!--chiavi oggetti nell'array filters in store, per label button-->
                {{ labelDropdown(Object.keys(filter)[0]) }}
            </button>

            <ul class="dropdown-menu">
                <li v-for="(values, index2) in filter" :key="index2">
                    <label class="d-block" v-for="(value, index) in values" :key="index"
                    >
                        <input v-model="userChoices" type="checkbox" :value="value" />
                        {{ value }}
                    </label>
                </li>
            </ul>

        </div>
    </div>

   <section class="container p-5 card">
            <div class="cards" 
                 >
                <CardBs v-for="(item, index) in store.techniques" 
                 v-show="isVisible"
                 :card="store.techniques[index]" 
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