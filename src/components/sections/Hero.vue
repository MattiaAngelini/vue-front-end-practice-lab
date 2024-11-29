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
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            show: false,
        };
    },

    mounted() {
        setTimeout(() => {
            this.show = true;
        }, 1000);
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

            <Transition name="info" appear>
                <div v-if="show" class="info">
                    <div class="content">
                        <h1 class="name d-flex justify-content-center">{{ title }}</h1>
                        <hr>
                        <p class="description d-flex justify-content-center">{{ description }}</p>
                    </div>
                </div>
            </Transition>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;
@use '../../assets/styles/partials/styleHero.scss';
</style>
