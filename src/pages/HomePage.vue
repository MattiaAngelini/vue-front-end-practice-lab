<script lang="ts">
import { useMainStore } from '../store.ts'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Hero from '../components/sections/Hero.vue'
import Carousel from '../components/sections/Carousel.vue'
import SideBySide from '../components/sections/SideBySide.vue'

export default {
  name:'AppHome',

  components:{
    Header,
    Footer,
    Hero,
    Carousel,
    SideBySide,
  },

  setup() {
    const mainStore = useMainStore(); // Usa lo store
    return { mainStore };
  },
}

</script>

<template>

  <div class="ms-container">  
    <Header :icons="mainStore.socialIcons" 
            :links="mainStore.headerLinks">
    </Header> 
    <Hero :media="mainStore.heroVideo"  
          :title="mainStore.MyName" 
          :description="mainStore.MyInfo">
    </Hero>  
    <SideBySide :layout="mainStore.AboutMeSideBySide">
              </SideBySide>
    <Carousel bgColor="black" 
              :cards="mainStore.cardsCarousel">
    </Carousel>
    <Footer :icons="mainStore.logoFooter"></Footer>
  </div>

</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

</style>
