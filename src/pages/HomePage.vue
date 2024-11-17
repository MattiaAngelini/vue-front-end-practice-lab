<script lang="ts">
import { store } from '../store.ts'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Hero from '../components/sections/Hero.vue'
import Carousel from '../components/sections/Carousel.vue'
import AboutPage from '../pages/AboutPage.vue'


export default {
  name:'AppHome',

  components:{
    Header,
    Footer,
    Hero,
    Carousel,
    AboutPage
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
    <Header :icons="store.socialIcons" :links="store.headerLinks"></Header> 
    <Hero image="../../public/images/bg.jpeg"  :title="store.MyName" :description="store.MyInfo"></Hero>  
    <Carousel :cards="store.cardsCarousel"></Carousel>
    <AboutPage></AboutPage>
    <Footer></Footer>
  </div>

</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;


</style>
