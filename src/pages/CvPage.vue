<script lang="ts">
import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import ButtonCustom from '../stories/Buttons/ButtonCustom.vue';
export default{
    name: 'CvPage',
    components:{
        ButtonCustom,
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
        <ButtonCustom size="large" isDownload :button="mainStore.btnCvPage"
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