<script lang="ts">

export default{
    name: 'Hero',
    props: {

    media: {
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

    <section>
        <div class="hero-media">

            <video class="hero-video" autoplay muted loop>
                <source :src="media" type="video/mp4">
            </video>


            <div class="info">
                <h1 class="name">{{title}}</h1>
                <p class="description">{{ description }}</p>
            </div>   
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{
 
    .hero-media{
        position: relative; 

        .hero-video {
            display: block;
            width: 100%;   
    }
        .info{
            color: white;
            position: absolute;
            bottom: 30%;
            right:  20%;
            }
    }
}
</style>
