<script lang="ts">
import { useMainStore} from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import Carousel from '../components/sections/Carousel.vue';
import SideBySide from '../components/sections/SideBySide.vue';
import ContactsPage from '../pages/ContactsPage.vue';
export default {
    name: 'HomePage',
    components: {
        Hero,
        Carousel,
        SideBySide,
        ContactsPage,
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
            
            <SideBySide :layout="store.AboutMeSideBySide"
            />
            <Carousel            
                :cards="store.cardsCarousel"   
            />
          
            <ContactsPage/>
        </main>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;
@use '../assets//styles/partials/mediaqueries/mediaqueries.scss' as *;
</style>
