<script lang="ts">
import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
export default{
    name: 'WorkExpPage',
    components:{
       
        Header,
        Footer
    },

    data(){
        return{
            store: useMainStore()
        }
    },
}
</script>
<template>
    <Header 
        :header="store.mainHeader"
    />
        <main class="container">
            <h1>Esperienze lavorative</h1>
        </main>    
    <Footer 
        :icons="store.logoFooter" 
    />
</template>
<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main{
    min-height: 50vh;
   
}

</style>