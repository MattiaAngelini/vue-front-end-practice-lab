<script lang="ts">
import Header from './components/Header.vue'

export default {
  components:{
    Header
  },

  data(){
    return{

      headerLinks:[
          { text: 'Home', href: '/home' },
          { text: 'Progetti', href: '/about' },
          { text: 'Contatti', href: '/contact' },
          { text: 'Linkedin', href: '/contact' },
      ],
      socialIcons:[
          { logo: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/mattia-angelini-b00427311/' },
          { logo: 'fa-brands fa-github', href: 'https://github.com/MattiaAngelini' },
          
      ],
    }
  }
}

</script>

<template>

  <div class="ms-container">  
    <Header :icons="socialIcons" :links="headerLinks"></Header>    
  </div>

</template>

<style scoped lang="scss">
@use './assets/styles/generic.scss' as *;

</style>
