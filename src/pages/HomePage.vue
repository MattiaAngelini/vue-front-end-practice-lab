<script lang="ts">
import { useMainStore } from '../store.ts'
import Hero from '../components/sections/Hero.vue'
import Carousel from '../components/sections/Carousel.vue'
import SideBySide from '../components/sections/SideBySide.vue'

export default {
  name:'AppHome',

  components:{
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
   
    <Hero :media="mainStore.heroVideo"  
          :title="mainStore.MyName" 
          :description="mainStore.MyInfo">
    </Hero>  
    <SideBySide :layout="mainStore.AboutMeSideBySide">
              </SideBySide>
    <Carousel bgColor="black" 
              :cards="mainStore.cardsCarousel">
    </Carousel>
   
  </div>

</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

</style>
