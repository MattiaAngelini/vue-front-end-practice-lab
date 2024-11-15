<script lang="ts">
import { store } from '../store.js'
import Header from './components/Header.vue'
import HeroImage from './components/HeroImage.vue'

export default {
  components:{
    Header,
    HeroImage
  },

  data(){
    return{
      store,
    }
  }
}

</script>

<template>

  <div class="ms-container">  
    <Header :icons="store.socialIcons" :links="store.headerLinks"></Header> 
    <HeroImage buttonActivated image="../../public/images/bg.jpeg"  :title="store.MyName" :description="store.MyInfo"></HeroImage>  
  </div>

</template>

<style scoped lang="scss">
@use './assets/styles/generic.scss' as *;


</style>
