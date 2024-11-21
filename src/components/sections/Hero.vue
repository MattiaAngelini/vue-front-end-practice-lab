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
            height: auto; 
            min-height: 100vh; 
            object-fit:fill; 
            
        }
            &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5));
            z-index: 1; 
    }
        .info{
            color: white;
            position: absolute;
            bottom: 30%;
            right:  20%;
            z-index:10;
            }
    }
}
</style>
