<script lang="ts">
import { useMainStore } from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import Carousel from '../components/sections/Carousel.vue';
import SideBySide from '../components/sections/SideBySide.vue';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import FilteredPage from '../pages/FilteredPage.vue';

export default {
    name: 'HomePage',
    components: {
        Hero,
        Carousel,
        SideBySide,
        Header,
        Footer,
        ContactsPage,
        FilteredPage
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
        :header="mainStore.mainHeader"
        />

        
        <main>
            <Hero 
            :media="mainStore.heroVideo"  
            :title="mainStore.MyName"
            :description="mainStore.MyInfo"
        />
        <FilteredPage/>
            <SideBySide :layout="mainStore.AboutMeSideBySide"
            />
            <Carousel            
                :cards="mainStore.cardsCarousel"   
            />
            <ContactsPage/>
        </main>
       <Footer :icons="mainStore.logoFooter" />
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
@use '../assets//styles/partials/mediaqueries.scss' as *;
</style>
