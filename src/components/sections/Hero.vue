<script lang="ts">
export default {
    name: 'Hero',
    props: {
        media: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            show: false,
            titleArray: this.title.split(''), 
            timedArray: [] as string[], 
        };
    },

    methods: {
        populateArrayAnim() {
            this.titleArray.forEach((letter, index) => {
                setTimeout(() => {
                    this.timedArray.push(letter); // Aggiunge una lettera all'array            
                }, index * 120);                
            });
        },
    },

    mounted() {
        this.populateArrayAnim(); 
        setTimeout(()=>{
            this.show = true;
        },1500)
    },
};
</script>

<template>
    <section>
        <div class="hero-media">
            <Transition name="layout" appear>
                <video class="hero-video" autoplay muted loop>
                    <source :src="media" type="video/mp4" />
                </video>
            </Transition>
            <div class="content">
                <h1>
                    <!-- lettere animate -->
                    <span v-for="(letter, index) in timedArray" :key="index">{{ letter }}</span>
                    <span class="dash">_</span>
                </h1>
                <hr>
                <Transition v-show="show" name="info">
                    <h5>{{ description }}</h5>
                </Transition>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;
@use '../../assets/styles/partials/styleHero.scss' as *;
</style>
