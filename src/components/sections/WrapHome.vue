<script lang="ts">
import ButtonCustom from '../../stories/Buttons/ButtonCustom.vue';
import { useMainStore} from '../../store';
import AnimatedSection from '../layout/AnimatedSection.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { currentWindow } from '../../assets/styles/breakpoint.ts';

export default{
    name: 'WrapHome',
    components:{
        ButtonCustom,
        AnimatedSection,
        Splide,
        SplideSlide,
    },
    data(){
        return{
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
                return { maxWidth: '60%' };
            } else {
                return { maxWidth: '100%' };
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
    <AnimatedSection>
                <h1 class="text-center p-5">Progetti <i class="fa-brands fa-github"></i></h1>
                <div class="projects mb-5">
     
                <Splide :options="{ rewind: true, height: 'auto', pagination:true, }" aria-label="bjj-competitions-pics">
                    <!-- SLIDES PROGETTI -->
                <SplideSlide v-for="(slide,index) in store.cardsProjects">
                    <div>
                        <div class="slide">
                                <div class="description text-center">
                                    <h3 class="mt-3">{{store.cardsProjects[index].title}}</h3>
                                    <a class="" style="font-size: 16px;" :href="store.cardsProjects[index].linkRepo">LINK ALLA REPO</a>
                                    <div class="align-items-center">
                                        <div >
                                            <p class="p-3 mb-1">
                                            {{store.cardsProjects[index].description}}
                                            </p>
                                        </div>
                                        <div class="d-md-flex justify-content-center gap-1">
                                            <div v-for="(image) in slide.images">
                                                <img class="mb-2 mt-3" :src="`${image}`" alt="">
                                            </div>
                                        </div>
                                    </div>       
                                </div>
                        </div>
                    </div>
                </SplideSlide>
              </Splide>
        </div>
    </AnimatedSection>  
</section>

</template>
<style scoped lang="scss">

section{
    min-height: 100vh;
        h1{
        color: white;
        }
        .info{
            min-height: 70vh;
        }
}
// projects
.projects {
    color: white;
    border: 2px solid rgb(225, 225, 225);
    margin: 1%;
    border-radius: 10px;
    .slide {
        width: 80%;
        margin: auto;
    }
    img {
        width: 100%;  
        border-radius: 4px;
        max-height: 300px;
    }
}
</style>