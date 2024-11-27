<script lang="ts">
import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import HeaderStory from '../stories/Header.vue';
export default{
    name: 'ContactsPage',
    components:{
    
        Header,
        Footer,
        HeaderStory
        
    },

    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },
}
</script>
<template>
    <Header 
        :header="mainStore.mainHeader"
    />

    <HeaderStory :user="{name: 'Mattia'}" />
        <main class="container">
            <h1>contatti</h1>
        </main>    
    <Footer 
        :icons="mainStore.logoFooter" 
    />
</template>
<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main{
    min-height: 50vh;
   
}

</style>