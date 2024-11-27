<script lang="ts">
import ButtonDownload from '../stories/Buttons/ButtonDownload.vue';

import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
export default{
    name: 'CvPage',
    components:{
        ButtonDownload,
        Header,
        Footer,
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

    <main class="container">
        <h1>Scarica il mio curriculum aggiornato</h1>
        <ButtonDownload size="large" :button="mainStore.btnCvPage"
    />
    </main>
    
    <Footer :icons="mainStore.logoFooter" />
    
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main{
    min-height: 50vh;
   
}

</style>