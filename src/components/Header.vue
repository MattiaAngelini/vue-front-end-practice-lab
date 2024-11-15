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
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 10vh;
    background-color: rgba(0, 0, 0, 0.3);

    a{
      text-decoration: none;
      color: white;
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
      background-color: black;
      padding: 4px;
      border-radius: 100%;
    }

  }

</style>
