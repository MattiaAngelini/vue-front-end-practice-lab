<script lang="ts">
import { useMainStore } from '../../store.ts';
import Carousel from '../layout/Carousel.vue';
import AnimatedSection from '../layout/AnimatedSection.vue';

export default{
    name: 'DiscoverMore',
    components:{
        Carousel,
        AnimatedSection
     
    },
    data(){
        return{
            store: useMainStore(),
        }
    },
}
</script>
<template>   
        <section>
            <AnimatedSection>
                <h1 class="p-4 text-center">SCOPRI DI PIù</h1>   
                <div class="container">
                    <Carousel :cardsRouter="store.cardsRouterHref" :cardsHref="store.cardsCarouselHref"/>
                </div>
            </AnimatedSection>
        </section>  
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{  
    color: white;
    min-height: 80vh;
    padding: 2% 0 2% 0;
    background-color: $primary-color;  
}

</style>