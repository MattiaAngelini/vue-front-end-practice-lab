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
                return  {background: 'linear-gradient(105deg, rgb(109, 112, 113) 55%, rgb(0, 0, 0) 60%)'}
            } else { 
                return {background: 'linear-gradient(-10deg, rgb(109, 112, 113) 20%, rgb(0, 0, 0) 60%)'}
            }
        },
        imgResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm' ){

                return  {minWidth: '30%', maxHeight: '60%', position:'absolute', right:'0'}
            } else { 
                return {minWidth: '80%', maxHeight: '50%',position:'absolute', right:'0'}
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
            <div>
                <img :style="imgResponsive" class="img-fluid" src="../assets/images/me_mode.png" alt="">
            </div>
          
            <div :style="infoResponsive" class="info">
                <h2>Ciao, sono Mattia Angelini</h2>
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
    .ms-container{        
        position: relative;
        min-height: 100vh;
        
            img{     
            position: absolute;
            bottom: 0;                                                          
            }  
            .info{
                max-width: 40%;
                color: white;
                padding: 10%;
                line-height: 30px;
            }         
    }
}
</style>