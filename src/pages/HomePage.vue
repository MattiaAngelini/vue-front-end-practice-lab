<script lang="ts">
import { useMainStore } from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import Carousel from '../components/sections/Carousel.vue';
import SideBySide from '../components/sections/SideBySide.vue';

export default {
    name: 'HomePage',

    components: {
        Hero,
        Carousel,
        SideBySide,
    },

    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },
};
</script>

<template>
    <div class="ms-container">  
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
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
@use '../assets//styles/partials/mediaqueries.scss' as *;
</style>
