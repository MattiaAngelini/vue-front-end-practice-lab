<script lang="ts">
import { useMainStore} from '../store.ts';
import { currentWindow } from '../assets/styles/breakpoint.ts';

export default{
    name: 'AboutMePage',
    
    data(){
        return{
            store: useMainStore(),
            sizeWindow: currentWindow(window.innerWidth),       
        }
    },
    computed:{
        layoutResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm' ){
                return  {background: 'linear-gradient(0deg, black 0%,rgb(230,230,230)100%)'}
            } else { 
                return {background: 'linear-gradient(10deg, rgb(0, 0, 0) 0%, rgb(230,230,230) 100%)'}
            }
        },
        imgResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm' ){

                return  {width: '360px', height: '360px', position:'absolute', right:'5%'}
            } else { 
                return {width: '300px', height: '300px',position:'absolute', right:'50%', transform: 'translate(50%, 100%)'}
            }
        },
        infoResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm' ){
                return  { maxWidth: '50%'}
            } else { 
                return { minWidth: '100%'}
            }
        }
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
        <div :style="layoutResponsive" class="ms-container">
            
            <div class="borderRounded">
                <img :style="imgResponsive" class="rounded-circle"  src="../assets/images/me.jpg" alt="">
            </div>
        
            <div :style="infoResponsive" class="info">
                <h2>Ciao, sono <span>Mattia Angelini</span></h2>
                <h5 class="mt-2">Front-end Developer</h5>      
                <p class="mt-2">                    
                    Benvenuto nel mio portfolio! Qui condivido il mio percorso di crescita, 
                    unendo passione per il coding, lavoro e la mia crescita. 
                    Questo sito, sviluppato con Vue, è uno dei miei laboratori per sperimentare e migliorare le mie competenze nella programmazione.
                    
                </p>
            </div>
       </div>

       <div>      
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

section{

    span{color: $baffo;}
    .ms-container{        
        position: relative;
        min-height: 100vh;
        
            img{
                max-width: 100%;
                max-block-size: 100%;
                bottom: 50%;
                transform: translate(-0%,50%);       
            }

            //animazione immagine
          


            .info{
                max-width: 40%; 
                padding: 10%;
                line-height: 30px;
                color: black;
            }         
    }
}
</style>