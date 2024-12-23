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
                return  {background: 'linear-gradient(105deg, rgb(109, 112, 113) 40%, rgb(0, 0, 0) 60%)'}
            } else { 
                return {background: 'linear-gradient(-10deg, rgb(109, 112, 113) 40%, rgb(0, 0, 0) 60%)'}
            }
        },
        imgResponsive(){
            if(this.sizeWindow !== 'xxs' &&
               this.sizeWindow !== 'xs' &&
               this.sizeWindow !== 'sm' ){
                return  {minWidth: '40%', maxHeight: '80%', position:'absolute', right:'0'}
            } else { 
                return {minWidth: '100%', maxHeight: '50%',}
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
                <h1>Ciao, sono Mattia Angelini</h1>
                <h3>Front-end Developer</h3>      
                <p>                    
                    In questo sito portfolio racconto il mio percorso, 
                    unendo lavoro, passioni e voglia di migliorarmi ogni giorno.
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