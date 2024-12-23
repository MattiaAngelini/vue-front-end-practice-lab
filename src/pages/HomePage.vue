<script lang="ts">
import { useMainStore} from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import Carousel from '../components/sections/Carousel.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import DiscoverMore from '../components/sections/DiscoverMore.vue';
import AboutMePage from './AboutMePage.vue';
import AnimatedSection from '../components/common/AnimatedSection.vue';
export default {
    name: 'HomePage',
    components: {
        Hero,
        Carousel,
        ContactsPage,
        DiscoverMore,
        AboutMePage,
        AnimatedSection
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
        <main>
            <Hero 
            :media="store.heroVideo"  
            :title="store.MyName"
            :description="store.MyInfo"
        />    
        <AnimatedSection>
            <AboutMePage/>
        </AnimatedSection>
                  
        <AnimatedSection>
            <DiscoverMore/>
        </AnimatedSection>

        <AnimatedSection>
            <ContactsPage/>
        </AnimatedSection>           
        </main>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
@use '../assets//styles/partials/mediaqueries/mediaqueries.scss' as *;
</style>
