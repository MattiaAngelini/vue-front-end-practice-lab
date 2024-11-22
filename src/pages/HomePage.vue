<script lang="ts">
import { useMainStore } from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import Carousel from '../components/sections/Carousel.vue';
import SideBySide from '../components/sections/SideBySide.vue';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';

export default {
    name: 'HomePage',

    components: {
        Hero,
        Carousel,
        SideBySide,
        Header,
        Footer
    },

    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },
};
</script>

<template>
    <div class="ms-container">  
        <Header 
        :icons="mainStore.socialIcons" 
        :links="mainStore.headerLinks"     
        :headerHamburger="mainStore.headerHamburger"
        />
        <Hero 
            :media="mainStore.heroVideo"  
            :title="mainStore.MyName" 
            :description="mainStore.MyInfo"
        />
        
        <SideBySide :layout="mainStore.AboutMeSideBySide" />
        
        <Carousel 
            bgColor="black" 
            :cards="mainStore.cardsCarousel"
        />
        <Footer :icons="mainStore.logoFooter" />
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
@use '../assets//styles/partials/mediaqueries.scss' as *;
</style>
