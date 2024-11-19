<script lang="ts">
import {Card} from '../../../src/models/Card.ts'

export default{
    props:{
        cards:{
            type: Array as () => Card[],
            required:true
        },
        
        bgColor:{
            type:String,
            required:false,
            default: 'white'
        },     
    },

    computed:{
        Columns(): Record<string,string>{
            return {gridTemplateColumns: `repeat(${this.cards.length}, 1fr)` }
        }
    }
}
</script>

<template>

    <section :style="{backgroundColor: bgColor}">
        <div :style="Columns" class="carousel">
            <div v-for="(card,index) in cards" :key="index" class="ms-card">
                <div class="info">
                    <h5>{{ card.title }}</h5>
                    <div>{{ card.description }}  </div> 
                </div>       
            </div> 
        </div>   
    </section>
   
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{
    min-height: 100vh;
    display: grid;

    .carousel{
        display: grid;
        gap:30px;
        min-height: 60vh;
        width: 94%;
        margin: auto;
       
            .ms-card{
                background-image: url('../../../public/images/me.jpg'); //dinamic
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 6px;
                transition: all 0.2s ease-in-out; 
                color: black;
                position: relative;

                    .info{
                        position: absolute;
                        bottom: 10%;
                        right: 10%;
                    }
            }  

            .ms-card:hover{             
                transform: scale(1.1); 
            }          
    }

}

</style>