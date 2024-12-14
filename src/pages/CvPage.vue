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

    data(){
        return{
            store: useMainStore(),
        }
    },
}
</script>
<template>
    <Header 
        :header="store.mainHeader"
    />

    <main class="container">
        <h1>Scarica il mio curriculum aggiornato</h1>
        <ButtonCustom size="large" isDownload :button="store.btnCvPage"
    />

    </main>

    <Footer :icons="store.logoFooter" />
    
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.container{
    height: 100vh;
}



</style>