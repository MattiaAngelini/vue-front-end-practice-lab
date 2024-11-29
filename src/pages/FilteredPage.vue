<script lang="ts">
import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import DropDonwnBs from '../components/common/DropDonwnBs.vue';
import data from '../data/bjjTecniques.json'

export default{
    name: 'CvPage',
    components:{   
        Header,
        Footer,
        DropDonwnBs
    },

    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },

    data(){
        return{
            tecniques: data
        }
    },

    methods:{
        labelDropdown(key:string){
            console.log(key)
            if(key === 'belts'){
                return 'Cintura'
            }else if(key === 'age_range'){
                return 'Età'
            }else{
                return 'Difficoltà'
            }         
        }
    },
    computed:{
    },

    mounted() {      
    },
}
</script>
<template>
    <!-- <Header 
        :header="mainStore.mainHeader"
    /> -->

 <main class="container">
    <h1 class="text-center p-3">IMPROVE YOUR JIU-JITSU!</h1>

   <div>
        <span>Filtra:</span>

        <div class="d-flex gap-3">
            <DropDonwnBs v-for="(filter,index) in mainStore.filters" 
                :key="index" 
                :items="mainStore.filters[index]" 
                :label="labelDropdown(Object.keys(filter)[0])" />     
        </div>
   </div>

 </main>
    <!-- <Footer :icons="mainStore.logoFooter" /> -->
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
main{
    min-height: 100vh;
}
</style>