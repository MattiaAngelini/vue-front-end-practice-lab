<script lang="ts">
import { useMainStore } from '../store.ts';
import { currentWindow } from '../assets/styles/breakpoint.ts';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Wrap from '../components/layout/Wrap.vue';
import AnimatedSection from '../components/layout/AnimatedSection.vue';

export default {
    name: 'ProjectsPage',
    components: {
        Splide,
        SplideSlide,
        Wrap,
        AnimatedSection
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
        <Wrap wrap="../../public//projects-img/display.jpg" shadowRgba="rgba(0,0,0,0.6)" />
        <!-- ATTESTATO -->
        <div class="d-lg-flex intro">
            <div class="description d-flex flex-column justify-content-evenly">
                <AnimatedSection>          
                <div>
                    <h1 class="mb-3">LA PROGRAMMAZIONE</h1>
                    <h3 class="mb-2">Start: Boolean Academy</h3>
                    <p>
                        Il mio percorso nel mondo della programmazione è iniziato con un corso intensivo presso Boolean Tech Academy, 
                        un’esperienza che ha gettato le basi della mia carriera nel settore. Il programma, 
                        della durata di sei mesi e composto da oltre 700 ore di formazione pratica, 
                        mi ha permesso di sviluppare competenze solide sia nel front-end che nel back-end. 
                        La mia determinazione mi ha portato a completare il corso senza mai un’assenza e consegnando puntualmente tutti gli esercizi assegnati, 
                        dimostrando costanza e dedizione in ogni fase del percorso. 
                    </p>
                </div>
                <img style="width: 100%;" class="assenze mt-3" src="../../public/projects-img/assenze.jpg" alt="">
            </AnimatedSection>
            
               
            </div>
            
            <div class="attestato d-flex align-items-center">
                    <AnimatedSection>
                        <img :style="imageResponsive" src="../../public/projects-img/attestato.jpg" alt="">
                    </AnimatedSection>           
            </div>
        </div>

        <!-- PROGETTI BOOLEAN -->
        <div class="text-center wrap">
            <AnimatedSection>
                <h1>BOOLEAN</h1>
            </AnimatedSection>  
        </div>
        <div class="booleanProj d-flex flex-column flex-lg-row justify-content-evenly gap-4">
            
            <AnimatedSection class="description order-lg-2 m-lg-auto">
                <h1>Alcuni dei miei progetti in Academy</h1>
                <p>
                    Durante il corso presso Boolean Tech Academy, ho avuto l'opportunità di sviluppare diversi progetti pratici, che rappresentano al meglio le competenze acquisite. Attraverso un approccio hands-on,
                     ho realizzato applicazioni complete, affrontando sfide legate sia al front-end che al back-end.
                      Nel carosello puoi trovare alcuni screenshot dei lavori               
                </p>
                <a class="" href="https://github.com/MattiaAngelini?tab=repositories">Qui puoi trovare le repo su Github</a>
            </AnimatedSection>
            
            <AnimatedSection class="carousel">
                <Splide :options="{ rewind: true }" aria-label="bjj-competitions-pics">
                    <SplideSlide v-for="card in store.cardsBoolean" :key="card.image">
                        <img :src="`${card.image}`" alt="Competition Image">
                        <div class="p-4">
                            <h3 class="mt-3">{{card.title}}</h3>
                            <p class="mt-2">{{card.description}}</p>
                        </div>
                    </SplideSlide>
                </Splide>
            </AnimatedSection>          
        </div>

        <!-- WRAP -->
         
        <div class="text-center wrap">
            <AnimatedSection>
                <h1>PROGETTI PERSONALI</h1>
            </AnimatedSection>  
        </div>
        <div class="projects">
            <AnimatedSection>
                <Splide :options="{ rewind: true, height: 'auto' }" aria-label="bjj-competitions-pics">
                <!-- PORTFOLIO -->
                <SplideSlide>
                    <div class="slide">
                        <div class="d-md-flex">
                            <div :style="widthResponsive" class="description text-center">
                                <h3 class="p-2">{{store.cardsProjects[0].title}}</h3>
                                <p class="p-lg-5">
                                    {{store.cardsProjects[0].description}}
                                    
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

            </AnimatedSection>
           
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

// intro
.intro {
    min-height: 100vh;
    background: linear-gradient(180deg, #ffffff 40%, rgb(173, 173, 173) 80%);
    .description {
        min-width: 70%;
        min-height: 60vh;
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
    margin: 100px 0;
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
