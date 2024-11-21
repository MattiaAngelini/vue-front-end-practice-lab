<script lang="ts">
import { Card } from '../../../src/models/Card.ts';
import { currentWindow } from '../../assets/styles/breakpoint.ts';

export default {
    name: 'Carousel',
    props: {
        cards: {
            type: Array as () => Card[],
            required: true,
        },
        bgColor: {
            type: String,
            required: false,
            default: 'white',
        },
    },

    data() {
        return {
            gridColumns: this.cards.length,
            sizeWindow: currentWindow(window.innerWidth),
        };
    },

    computed: {
        columns() {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl') {
                return { gridTemplateColumns: `repeat(${this.gridColumns}, 1fr)` };
            } else if (
                this.sizeWindow === 'lg' || 
                this.sizeWindow === 'md' || 
                this.sizeWindow === 'sm'
            ) {
                return { gridTemplateColumns: `repeat(2, 1fr)` };
            } else if (this.sizeWindow === 'xs' || this.sizeWindow === 'xxs') {
                return { gridTemplateColumns: `1fr`, height: '100vh', padding: '20px' };
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
            <div 
                v-for="(card, index) in cards" 
                :key="index" 
                class="ms-card"
                :style="{ backgroundImage: `url('${card.image}')` }"
            >
                <div class="info">
                    <h5>{{ card.title }}</h5>
                    <div>{{ card.description }}</div> 
                </div>       
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

        .ms-card {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 6px;
            transition: all 0.2s ease-in-out;
            color: black;
            position: relative;

            .info {
                position: absolute;
                bottom: 10%;
                right: 10%;
            }
        }

        .ms-card:hover {
            transform: scale(1.1); 
        }          
    }
}
</style>
