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
        imgResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm' ){

                return  {width: '360px', height: '360px'  }
            } else { 
                return {width: '280px', height: '280px'}
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

        <div  class="ms-container d-lg-flex justify-content-evenly align-items-center">
        
            <div :style="infoResponsive" class="info">
                <h2>Ciao, sono <span>Mattia Angelini</span></h2>
                <h5 class="mt-2">Front-end Developer</h5>      
                <p class="mt-2">                    
                    Benvenuto nel mio portfolio! Qui condivido il mio percorso di crescita, 
                    unendo passione per il coding, lavoro e la mia crescita. 
                    Questo sito, sviluppato con Vue, è uno dei miei laboratori per sperimentare e migliorare le mie competenze nella programmazione.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod, est molestiae corrupti ratione impedit voluptatem tempora rem laboriosam? Aliquam sit veritatis dolor deleniti natus aut esse neque tempora porro.
                    
                </p>
            </div>

            <div class="picProfile d-flex justify-content-center ">         
                    <div :style="imgResponsive"  class="borderAnimation rounded-circle border1"></div>     
                    <div   class="borderAnimation rounded-circle border2"></div>  
                    <img class="rounded-circle p-3 " :style="imgResponsive"   src="../assets/images/me.jpg" alt="">     
            </div>
          
       </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

section{

    span{color: $baffo;}
    
    .ms-container{        
        min-height: 100vh;
        background: linear-gradient(10deg, rgb(0, 0, 0) -30%, rgb(230,230,230) 100%);
        position: relative;

        .picProfile{
             //animazione immagin
             .borderAnimation{
                animation: move2 2s linear infinite;            
                position: absolute;
            }
            .border1{
                box-shadow: 1px 1px 1px 1px $baffo;
           
                }
        
            @keyframes move2 {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }
        
        .info{
            line-height: 30px;
            color: black;  
        }         
    }
}
</style>