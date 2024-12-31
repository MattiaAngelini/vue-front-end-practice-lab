<script lang="ts">
import { useMainStore } from '../store.ts';
import { currentWindow } from '../assets/styles/breakpoint.ts';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Wrap from '../components/layout/Wrap.vue';

export default {
    name: 'ProjectsPage',
    components: {
        Splide,
        SplideSlide,
        Wrap
    },
    data() {
        return {
            store: useMainStore(),
            sizeWindow: currentWindow(window.innerWidth),
        }
    },
    computed: {
        imageResponsive() {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ||
                this.sizeWindow === 'md' || this.sizeWindow === 'lg') {
                return { width: '100%' };
            } else {
                return { width: '80%', margin: '0 10% 0 10%' };
            }
        },
        widthResponsive() {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ||
                this.sizeWindow === 'md' || this.sizeWindow === 'lg') {
                return { width: '50%' };
            } else {
                return { width: '100%' };
            }
        },
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.sizeWindow = currentWindow(window.innerWidth);
        });
    }
}
</script>

<template>
    <section>
        <Wrap wrap="../../public/bjj/winner.jpg" shadowRgba="rgba(0,0,0,0.8)" />
        <!-- ATTESTATO -->
        <div class="d-lg-flex intro">
            <div class="description d-flex flex-column justify-content-evenly">
                <div>
                    <h1>Start: Boolean Tech Academy</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi illo magni beatae perspiciatis doloremque eum architecto blanditiis.
                        Inventore accusantium quam ipsa tempore hic. Ad, corrupti. Sit, veniam? Reiciendis, architecto!
                    </p>
                </div>
                <img class="assenze" src="../../public/projects-img/assenze.jpg" alt="">
            </div>
            <div class="attestato d-flex align-items-center">
                <div>
                    <img :style="imageResponsive" src="../../public/projects-img/attestato.jpg" alt="">
                </div>
            </div>
        </div>

        <!-- PROGETTI BOOLEAN -->
        <h1 class="text-center wrap">PROGETTI BOOLEAN</h1>
        <div class="booleanProj d-flex flex-column flex-lg-row justify-content-evenly gap-4">
            <div class="description order-lg-2 m-lg-auto">
                <h1>Alcuni dei miei progetti in Academy</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, commodi similique in at officia autem tempore ipsa debitis harum exercitationem ex rerum, ad minima nesciunt ullam illo ea. Et, doloremque.
                </p>
                <a href="">Le mie repo su Github</a>
            </div>
            <div class="carousel">
                <Splide :options="{ rewind: true }" aria-label="bjj-competitions-pics">
                    <SplideSlide v-for="card in store.cardsBoolean" :key="card.image">
                        <img :src="`${card.image}`" alt="Competition Image">
                        <div class="p-4">
                            <h3 class="mt-3">{{card.title}}</h3>
                            <p class="mt-2">{{card.description}}</p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>

        <!-- WRAP -->
        <h1 class="wrap text-center">PERSONAL PROJECTS</h1>
        <div class="projects">
            <Splide :options="{ rewind: true, height: 'auto' }" aria-label="bjj-competitions-pics">
                <!-- PORTFOLIO -->
                <SplideSlide>
                    <div class="slide">
                        <div class="d-md-flex">
                            <div :style="widthResponsive" class="description text-center">
                                <h3 class="p-2">{{store.cardsProjects[0].title}}</h3>
                                <p class="p-lg-5">
                                    {{store.cardsProjects[0].description}}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a :href="store.cardsProjects[0].linkRepo">Link alla Repo</a>
                            </div>
                            <div :style="widthResponsive" class="d-flex justify-content-center p-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <img :src="`${store.cardsProjects[0].image2}`" alt="Competition Image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>

                <!-- ALIEN GAME -->
                <SplideSlide>
                    <div class="slide">
                        <div class="d-md-flex">
                            <div :style="widthResponsive" class="description text-center">
                                <h3 class="p-2">{{store.cardsProjects[1].title}}</h3>
                                <p class="p-lg-5">
                                    {{store.cardsProjects[1].description}}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a :href="store.cardsProjects[1].linkRepo">Link alla Repo</a>
                            </div>
                            <div :style="widthResponsive" class="d-flex justify-content-center p-5">
                                <div class="row">
                                    <div class="col-12">
                                        <img class="mt-2" :src="`${store.cardsProjects[1].image3}`" alt="Competition Image">
                                        <img class="mt-2" :src="`${store.cardsProjects[1].image2}`" alt="Competition Image">
                                        <img class="mt-2" :src="`${store.cardsProjects[1].image5}`" alt="Competition Image">
                                        <img v-if="sizeWindow === 'xs'" class="mt-2" style="height: 300px; width: 150px;" :src="`${store.cardsProjects[1].image1}`" alt="Competition Image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

// intro
.intro {
    min-height: 100vh;
    background: linear-gradient(170deg, #ffffff 60%, rgb(178, 178, 178) 50%);
    .description {
        min-width: 50%;
        min-height: 50vh;
        padding: 5%;
        margin: auto;
    }
    .attestato {
        min-width: 30%;
        padding: 5%;
        background-color: grey;
    }
}

// wrap
.wrap {
    color: white;
    margin: 120px 0;
}

// boolean
.booleanProj {
    padding: 5%;
    background-color: white;
    min-height: 90vh;
    .description {
        min-width: 40%;
    }
    .carousel {
        min-width: 60%;
        border: 4px solid rgb(225, 225, 225);
        border-radius: 4px;
        img {
            width: 100%;
        }
    }
}

// projects
.projects {
    background-color: white;
    border: 6px solid rgb(225, 225, 225);
    .slide {
        padding: 5%;
    }
    .description {
        border: 2px solid rgb(225, 225, 225);
        border-radius: 10px;
        padding: 20px;
    }
    img {
        width: 100%;
        max-height: 120vh;
    }
}
</style>
