<script lang="ts">
import MainButton from '../components/MainButton.vue'
export default{
    name: 'HeroImage',

    components:{
        MainButton
    },

    props: {
    image: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: false,
    },

    description: {
        type: String,
        required: false,
    },

    buttonActivated: {
        type: Boolean,
        required:false,
        default: false
    }
   
    },
}
</script>

<template>

    <div class="hero-image">
        <img :src="image" alt="">
        <div class="info">
            <h1 class="name">{{title}}</h1>
            <p class="description">{{ description }}</p>
            <MainButton v-show="buttonActivated" bgColor="lightgreen" colorText="black" url="http://localhost:5173/progetti" label="Scopri"></MainButton>
        </div>   
    </div>

</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.hero-image{
    position: relative; 

    .info{
    color: white;
    position: absolute;
    bottom: 20%;
    right: 20%;
    }

    img{
    width: 100%;
    height: 100vh;
}
}

</style>
