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
    color: black;
    min-height: 80vh;
    background: linear-gradient(180deg, #bababa 0%, $secondary-color 100%);;
}

</style>