<script lang="ts">
import ButtonHref from '../common/ButtonHref.vue';
import { SideBySide } from '../../models/SideBySide';
import { useMainStore } from '../../store'

export default{
    name:'SideBySide',
    components: {
        ButtonHref,
    },
 
    props:{
      layout: {
        type: Object as()=>SideBySide,
        required: true
      }
    },

    setup() {
    const mainStore = useMainStore(); // Usa lo store
    return { mainStore };
    },
}

</script>

<template>
    <section>
        <div class="container-img">
            <img :src="layout.image" alt="">
        </div>

        <div class="container-info p-4">
            <h1>{{ layout.title }}</h1>
            <div>{{ layout.description }}</div>

            <div class="d-flex justify-content-center">
                <ButtonHref :button="mainStore.btnSideBySide"></ButtonHref>
            </div>
           
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;
@use '../../assets/styles/partials/mediaqueries.scss' as *;

section{
    min-height: 100vh;
    background-color: lightgray;
    display: grid;
    grid-template-columns: 2fr 1fr;

        .container-img{   
            min-width: 60%;  
           
            img{
             
                max-width: 100%;
                height: 100%;
                object-fit: cover;
             }
        }
        .container-info{
          
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin: auto;
            position: relative;
            bottom: 0;
            font-size: 12px;
        }
}

</style>