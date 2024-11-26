<script lang="ts">
import ButtonDownload from '../components/common/buttons/ButtonDownload.vue';
import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import Button from '../stories/Button.vue'
export default{
    name: 'CvPage',
    components:{
        ButtonDownload,
        Header,
        Footer,
        Button
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
        <ButtonDownload :button="mainStore.btnCvPage"
    />
        <Button label="CIAO" primary="true" size="large" backgroundColor="red"  ></Button>
    </main>
    
    <Footer :icons="mainStore.logoFooter" />
    
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main{
    min-height: 50vh;
   
}

</style>