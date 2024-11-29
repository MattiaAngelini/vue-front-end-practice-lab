<script lang="ts">
import { Card } from '../../../src/models/Card.ts';
import CardCustom from '../../stories/CardCustom.vue';
import { currentWindow } from '../../assets/styles/breakpoint.ts';

export default {
    name: 'Carousel',
    components:{
                CardCustom           
            },
    props: {
        cards: {
            type: Array as() => Card[],
            required: true
        }, 
        bgColor: {
            type: String,
            default: 'black',
            required: false      
        }  
    },
    data() {
        return {
            gridColumns: (this.cards.length),
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

            <div class="ms-card" v-for="(card, index) in cards" :key="index">
                <CardCustom
                    :card="card"
                />    
            </div>

        </div>   
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section {   
    padding:6%;
    display: grid;

    .carousel {
        display: grid;
        gap:30px;
        min-height: 60vh;
        width: 100%;
        

        .ms-card:hover {
            transform:scale(1.1);        
            z-index: 999;
            border: 10px solid $primary-color;
            border-radius: 6px;
            transition-duration: 0.3s;
       }
    }
}
</style>
