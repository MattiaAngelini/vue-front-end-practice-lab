<script lang="ts">
export default{
    name: 'Header',
    props: {

    links: {
        type: Array as () => {text: string; href: string }[],
        required: true,
    },
    icons: {
        type: Array as () => {logo: string; href: string }[],
        required: true,
    },

    },
}
</script>

<template>
  
    <section class="p-3">
       <!--Social Logo-->
      <div class="icons-container d-flex justify-content-end"> 
         <a :href="icon.href" v-for="icon in icons"> <i :class="icon.logo"></i></a> 
      </div>

      <!--Header Links-->
      <div class="links">
        <img src="" alt="Logo">
          <a v-for="link in links" :key="index" :href="link.href"> {{link.text}}</a>     
      </div>  
    </section>

</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

  section{

    background-color: $secondary-color;

    a{
      text-decoration: none;
      color: $main-color;
    }  

    .links{
      display: grid;
      grid-template-columns: 2fr repeat(4,1fr);
    }
    
    .icons-container > a{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      margin-right: 2%;
      background-color: white;
      padding: 4px;
      border-radius: 100%;
    }

  }

</style>
