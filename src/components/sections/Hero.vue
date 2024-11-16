<script lang="ts">

export default{
    name: 'Hero',

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


    },
}
</script>

<template>

    <div class="hero-image">
        <img :src="image" alt="">
        <div class="info">
            <h1 class="name">{{title}}</h1>
            <p class="description">{{ description }}</p>
        </div>   
    </div>

</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

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
