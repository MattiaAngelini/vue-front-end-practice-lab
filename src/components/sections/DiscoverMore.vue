<script lang="ts">
import { useMainStore } from '../../store.ts';
import Carousel from './Carousel.vue';

export default{
    name: 'DiscoverMore',
    components:{
        Carousel
     
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
            <h1 class="p-4 text-center">SCOPRI DI PIù</h1>
            <div class="container">
                <Carousel :cardsRouter="store.cardsRouterHref" :cardsHref="store.cardsCarouselHref"/>
            </div>
        </section>
    
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{  
    color: $baffo;
    min-height: 80vh;
    padding: 2% 0 2% 0;
    background-color: $primary-color;  
}

</style>