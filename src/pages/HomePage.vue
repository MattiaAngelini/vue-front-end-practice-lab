<script lang="ts">
import { store } from '../store.ts'
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

  data(){
    return{
      store,
    }
  },
}

</script>

<template>

  <div class="ms-container">  
    <Header :icons="store.socialIcons" 
            :links="store.headerLinks">
    </Header> 
    <Hero :media="store.heroVideo"  
          :title="store.MyName" 
          :description="store.MyInfo">
    </Hero>  
    <SideBySide :layout="store.AboutMeSideBySide">
              </SideBySide>
    <Carousel bgColor="black" 
              :cards="store.cardsCarousel">
    </Carousel>
    <Footer :icons="store.logoFooter"></Footer>
  </div>

</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

</style>
