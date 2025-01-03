<script lang="ts">
import { useMainStore} from '../../store.ts';
import { currentWindow } from '../../assets/styles/breakpoint.ts';
import AnimatedSection from '../layout/AnimatedSection.vue';

export default{
    name: 'AboutMePage',

    components:{
        AnimatedSection

    },
    
    data(){
        return{
            store: useMainStore(),
            sizeWindow: currentWindow(window.innerWidth),       
        }
    },
    computed:{
        imgResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm' ){

                return  {width: '360px', height: '360px'  }
            } else { 
                return {width: '250px', height: '250px'}
            }
        },

        infoResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm'&&
               this.sizeWindow !== 'md' ){

                return  {width: '50%',  }
            } else { 
                return {width: '100%', padding: '10%' }
            }
        },
    },
    mounted(){
        window.addEventListener('resize', () => {
            this.sizeWindow = currentWindow(window.innerWidth);
        });
    }
}
</script>

<template>
    <section>
        <AnimatedSection>
            <div class="ms-container d-xl-flex flex-lg-row flex-column justify-content-evenly align-items-center">
                <div :style="infoResponsive" class="info order-2 order-lg-1">
                    <h2>Ciao, sono <span>Mattia Angelini</span></h2>
                    <h5 class="mt-2">Jr Full Stack Web-Developer</h5>
                    <p class="mt-2">
                    Benvenuto nel mio portfolio! Qui condivido il mio percorso di crescita, 
                    unendo passione per il coding, lavoro e la mia crescita. 
                    Questo sito, sviluppato con Vue, è uno dei miei laboratori per sperimentare e migliorare le mie competenze nella programmazione.
                    </p>
                </div>

                <div class="picProfile d-flex justify-content-center order-1 order-lg-2">
                    <div :style="imgResponsive" class="borderAnimation rounded-circle border1"></div>
                    
                    <img class="rounded-circle p-3" :style="imgResponsive" src="../../assets/images/me.jpg" alt="Mattia Angelini">
                </div>
            </div>
        </AnimatedSection>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{
    background: linear-gradient(180deg, #bababa 0%, $secondary-color 100%);

    span{color: $baffo;}
    .ms-container{        
        padding: 10% 0 10%;
        
        position: relative;

        .picProfile {
    position: relative;

    .borderAnimation {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0deg); // Inizia senza rotazione
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border-top: 0.2rem solid transparent;
        border-bottom: 0.2rem solid transparent;
        border-left: 0.2rem solid $baffo;
        border-right: 0.2rem solid $baffo;
        animation: spin 5s linear infinite; // Associa l'animazione
    }

    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(0deg); // Partenza senza rotazione
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg); // Rotazione completa
        }
    }

    img {
        border-radius: 50%;
        position: relative;
        z-index: 1; // L'immagine rimane sopra il bordo animato
    }
}

        
          
    }
}
</style>