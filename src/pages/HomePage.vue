<script lang="ts">
import { useMainStore} from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import Carousel from '../components/sections/Carousel.vue';
import SideBySide from '../components/sections/SideBySide.vue';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import BjjPage from './BjjPage.vue';

export default {
    name: 'HomePage',
    components: {
        Hero,
        Carousel,
        SideBySide,
        Header,
        Footer,
        ContactsPage,
        BjjPage
    },

    data(){
        return{
            store: useMainStore()
        }
    },

};
</script>

<template>
    <div class="ms-container">  
        <Header 
        :header="store.mainHeader"
        />
        <main>
            <Hero 
            :media="store.heroVideo"  
            :title="store.MyName"
            :description="store.MyInfo"
        />
            
            <SideBySide :layout="store.AboutMeSideBySide"
            />
            <Carousel            
                :cards="store.cardsCarousel"   
            />
            <BjjPage/>
            <ContactsPage/>
        </main>
       <Footer :icons="store.logoFooter" />
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
@use '../assets//styles/partials/mediaqueries.scss' as *;
</style>
