<script lang="ts">
import MainButton from '../common/MainButton.vue';

export default{
    components: {
        MainButton
    },

    props:{

        image:{
            type:String,
            required:true
        },

        title:{
            type:String,
            required:true
        },

        description:{
            type:String,
            required:true
        },

        urlButton:{
            type:String,
            required:true
        }
    }
}

</script>

<template>
    <section>
        <div class="container-img">
            <img :src="image" alt="">
        </div>
        <div class="container-info">
            <h1>{{ title }}</h1>
            <div>{{ description }}</div>
            <MainButton :url="urlButton"></MainButton>
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