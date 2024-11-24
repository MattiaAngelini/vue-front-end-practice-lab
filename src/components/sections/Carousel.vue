<script lang="ts">
import { Card } from '../../../src/models/Card.ts';
import CardRoute from '../common/CardRoute.vue';
import CardHref from '../common/CardHref.vue';
import { currentWindow } from '../../assets/styles/breakpoint.ts';
import { PropType } from 'vue';

export default {
    name: 'Carousel',
    components:{
                CardRoute,
                CardHref
            },

    props: {
        cardsRoute: {
            type: Array as PropType<Card[]>,
            required: false,
        },
        cardsHref: {
            type: Array as PropType<Card[]>,
            required: false,
        },
        bgColor: {
            type: String,
            required: false,
            default: 'white',
        },
    },

    data() {
        return {
            gridColumns: (this.cardsRoute.length + this.cardsHref.length),
            sizeWindow: currentWindow(window.innerWidth),
        };
    },

    computed: {
        columns():Record<string,string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl') {
                return { gridTemplateColumns: `repeat(${this.gridColumns}, 1fr)` };
            }      
            else if (this.sizeWindow === 'xs' || this.sizeWindow === 'xxs') {
                return { gridTemplateColumns: `1fr`, height: '100vh', padding: '20px' };
            }
            else {
                return { gridTemplateColumns: `repeat(2, 1fr)` };
            }
        },
    },

    mounted() {
        window.addEventListener('resize', () => {
            this.sizeWindow = currentWindow(window.innerWidth);
        });
    },
};
</script>

<template>
    <section :style="{ backgroundColor: bgColor }"> 
        <div :style="columns" class="carousel">
            <div v-for="(card, index) in cardsRoute" :key="index">
                <CardRoute  
                    :title="card.title"    
                    :description="card.description"
                    :image="card.image"
                    :url="card.url"
                />    
            </div>

            <div v-for="(card, index) in cardsHref" :key="index">         
                <CardHref 
                    :title="card.title"    
                    :description="card.description"
                    :image="card.image"
                    :url="card.url"
                    />
            </div>
        </div>   
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section {
    min-height: 100vh;
    display: grid;

    .carousel {
        display: grid;
        gap: 30px;
        min-height: 60vh;
        width: 90%;
        margin: auto; 
    }
}
</style>
