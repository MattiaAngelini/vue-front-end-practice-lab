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
        cardsHref: {
            type: Array as() => Card[],
        }, 
        cardsRouter: {
            type: Array as() => Card[],
        }, 
        bgColor: {
            type: String,
            required: false      
        }  
    },
    data() {
        return { 
            sizeWindow: currentWindow(window.innerWidth),
        };
    },


    computed: {
        gridColumns(): number {
            return (this.cardsHref?.length || 0) + (this.cardsRouter?.length || 0);
        },
        
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
      
        <div :style="columns" class="carousel gap-4">

            <!--CARDS HREF-->
            <div class="ms-card" v-for="(card, index) in cardsHref" :key="index">
                <CardCustom
                    :card="card"
                />      
            </div>

            <!--CARDS ROUTERLINK-->
            <div class="ms-card" v-for="(card, index) in cardsRouter" :key="index">
                <CardCustom 
                    :isRouter="true"
                    :card="card"
                />      
            </div>

        </div>   
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section {   
    display: grid;
    .carousel {
        display: grid;
   
      
        .ms-card:hover {
            transform:scale(1.1);        
            border-radius: 6px;
            transition-duration: 0.6s;       
       }
    }
}
</style>
