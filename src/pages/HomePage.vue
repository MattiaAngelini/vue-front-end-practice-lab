<script lang="ts">
import { useMainStore} from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import Carousel from '../components/sections/Carousel.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import DiscoverMore from '../components/sections/DiscoverMore.vue';
import AboutMePage from './AboutMePage.vue';
import Wrap from '../components/layout/Wrap.vue';
import WrapHome from '../components/sections/WrapHome.vue';

export default {
    name: 'HomePage',
    components: {
        Hero,
        Carousel,
        ContactsPage,
        DiscoverMore,
        AboutMePage,
        WrapHome,
        Wrap
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
        <Wrap wrap="../../public/display.jpg" shadowRgba="rgba(0,0,0,0.6)"/>
        <main>
            <Hero 
            :media="store.heroVideo"  
            :title="store.MyName"
            :description="store.MyInfo"
        />    
     
            <AboutMePage/>
            <WrapHome />     
            <DiscoverMore/>
            <ContactsPage/>     
        </main>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
@use '../assets//styles/partials/mediaqueries/mediaqueries.scss' as *;
</style>
