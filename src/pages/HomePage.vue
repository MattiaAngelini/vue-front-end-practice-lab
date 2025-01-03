<script lang="ts">
import { useMainStore} from '../store.ts';
import Hero from '../components/sections/Hero.vue';
import ContactsPage from '../components/sections/ContactsPage.vue';
import DiscoverMore from '../components/sections/DiscoverMore.vue';
import AboutMePage from '../components/sections/AboutMePage.vue';
import Wrap from '../components/layout/Wrap.vue';
import WrapHome from '../components/sections/WrapHome.vue';

export default {
    name: 'HomePage',
    components: {
        Hero,
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
     <Wrap wrap="/display.jpg" shadowRgba="rgba(0,0,0,0.6)"/>
    <div class="ms-container">  
       
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
