<script lang="ts">
import {Header} from '../../models/Header.ts'
export default{
    name: 'Header',
   
    props: {
      links: {
          type: Array as () => Header[],
          required: true,
      },
      icons: {
          type: Array as () => Header[],
          required: true,
      },
    },
    
    computed:{
      Columns():Record<string,string> {
        return {gridTemplateColumns: `8fr repeat(${this.links.length},1fr)`}
      }
    }
}
</script>

<template>
  
    <header class="p-3">
       <!--Social Logo-->
      <div class="icons-container d-flex justify-content-end"> 
         <a :href="icon.href" v-for="(icon,index) in icons" :key="index"> <i :class="icon.logo"></i></a> 
      </div>

      <!--Header Links-->
      <div :style="Columns" class="links">
        <div>MATTIA ANGELINI</div>
        <a v-for="(link,index) in links" :key="index" :href="link.href"> {{link.text}}</a>     
      </div>  
   
    </header>

</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

  header{
    color: white;
    position: fixed;
    z-index: 999;
    width: 100%;
    min-height: 10vh;
    background-color: rgba(0, 0, 0, 0.3);

    a{
      text-decoration: none;
      color: white;
      font-weight: 800;
    }  

    .links{
      display: grid;
      gap: 10px;
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
