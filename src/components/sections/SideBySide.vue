<script lang="ts">
import MainButton from '../common/MainButton.vue';
import { SideBySide } from '../../models/SideBySide';

export default{
    name:'SideBySide',
    components: {
        MainButton
    },

    props:{
      layout: {
        type: Object as()=> SideBySide,
        required: true
      }
    }
}

</script>

<template>
    <section>
        <div class="container-img">
            <img :src="layout.image" alt="">
        </div>
        <div class="container-info">
            <h1>{{ layout.title }}</h1>
            <div>{{ layout.description }}</div>
            <MainButton :url="layout.urlButton"></MainButton>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{
    min-height: 100vh;
    background-color: lightgray;
    display: grid;
    grid-template-columns: 2fr 1fr;

        .container-img{      
            img{
                width: 100%;
                height: 100%;
             }
        }

        .container-info{
            margin: auto;
            padding: 10%;
            position: relative;
            bottom: 0;
        }
}

</style>