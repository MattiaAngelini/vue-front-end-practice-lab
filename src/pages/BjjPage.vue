<script lang="ts">
import Wrap from '../components/layout/Wrap.vue';
import { useMainStore } from '../store.ts';
import { currentWindow } from '../assets/styles/breakpoint.ts';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
    name: 'BjjPage',
    components: {
        Splide,
        SplideSlide,
        Wrap
    },
    data() {
        return {
            sizeWindow: currentWindow(window.innerWidth),
            store: useMainStore()
        };
    },
    computed: {
        widthResponsive(){
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ||
             this.sizeWindow === 'md'|| this.sizeWindow === 'lg') {
                return { width: '35%', };
            }else {
                return { width: '100%', };
            }
        },
        imageSlider(): Record<string, string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' || 
                this.sizeWindow === 'md'|| this.sizeWindow === 'lg') {
                return { width: '100%', height:'100vh', };
            }  else {
                return { width: '100%',height: '40vh' };
            }
        },
    },

    mounted() {
        window.addEventListener('resize', () => {
            this.sizeWindow = currentWindow(window.innerWidth);
        });
    }
};
</script>

<template>
    <main >
        <Wrap wrap="../../public/bjj/winner.jpg" shadowRgba="rgba(0,0,0,0.8)"/>
        
        <!--INTRO-->
        <div class="d-md-flex intro p-2"> 
            <div class="info">               
                <h1 class="text-center p-4">Il Brazilian <span>Jiu-Jitsu</span></h1>
                <p class="container">
                    La mia principale passione, a cui dedico la maggior parte del mio tempo libero, il Brazilian Jiu-Jitsu. 
                    Ho iniziato a praticare questo sport nel 2018 e oggi sono cintura viola, agonista e istruttore in uno dei team
                    più vincenti d'Italia la W.C.R.A.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate minus, a reprehenderit reiciendis temporibus nulla quibusdam sint dolorem eveniet tenetur, odio totam modi expedita. Ducimus perferendis laborum rerum impedit.
                </p>         
            </div>
            <div :style="widthResponsive" class="img-container d-flex justify-content-center align-items-center">
                <img src="../../public/bjj/beltDay.png" alt="">
            </div>
        </div>

        <section class="wrap d-flex justify-content-center align-items-center">
            <h1>IL MIO SECONDO LAVORO</h1>       
        </section>

        <!--CLASSE FUNDAMENTALS-->
        <div class="fundamentals d-md-flex p-2">

                <div class="description">
                    <h1 class="text-center p-4">La Classe <span>Fundamentals</span></h1>
                    <p class="container">
                        A gennaio 2024 mi è stata affidata la classe 'Fundamentals', 
                        segnando il mio primo ruolo ufficiale come insegnante di Brazilian Jiu-Jitsu.
                         Questo corso è rivolto principalmente ai principianti, 
                         dove accompagno gli studenti nei primi passi nel mondo del Jiu-Jitsu, 
                         trasmettendo le basi tecniche e i principi fondamentali di questo sport. 
                         Il mio obiettivo principale è creare un ambiente accogliente e motivante,
                          in cui ogni allievo possa apprendere e migliorare con fiducia e costanza. 
                          Questo ruolo, che svolgo con passione rappresenta ad oggi il mio secondo lavoro che mi ha permesso di crescere non solo come atleta,
                           ma anche come guida per chi si avvicina al Jiu-Jitsu, rafforzando le mie capacità comunicative e organizzative.
                    </p>   
                </div>

                <div class="locandina">                                       
                    <div>
                        <img src="../../public/bjj/locandina.jpg" alt="">     
                    </div>                      
                </div>
        </div>

         <section class="wrap d-flex justify-content-center align-items-center">
            <h1>L'AGONISMO</h1>       
        </section>
      <!--COMPETITIONS-->
        <div class="competitions d-flex flex-column flex-md-row">
            <div class="description order-1 order-lg-2 p-2 ">       
                <h1 class="text-center p-4">Competere per <span>Evolvere</span></h1>
                <p class="container">
                    L'agonismo rappresenta per me una sfida fondamentale, un percorso che va oltre la competizione stessa. 
                    Ogni gara è un'opportunità per mettermi alla prova, affrontare i miei limiti e migliorare non solo come atleta, ma anche come persona. 
                    Questo impegno costante mi insegna disciplina, resilienza e la capacità di gestire la pressione, valori che applico in ogni ambito della mia vita.
                </p>
            </div>      
            <div class="images-carousel order-2 order-lg-1">
                <Splide :options="{ rewind: true }" aria-label="bjj-competitions-pics">
                    <SplideSlide v-for="image in store.imagesCarousel" :key="image.src">
                        <img :style="imageSlider" :src="`${image.src}`" alt="Competition Image">
                    </SplideSlide>            
                </Splide>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main {
   
    .wrap{
        min-height: 65vh;
        h1{
            color: white;
        }
    }
    span{color:$baffo};
    //section1
    .intro{
        background-color: white;
 
        .info{         
           margin: auto;
           max-width: 100%;
       
       }
        .img-container{ 
            margin: auto;
            
        img{ 
                width: 100%;          
                margin-right: 50px;
            }
            
    }
    }
    //section2
    .fundamentals{
        background-color: white;
       .description{         
            margin: auto;
            min-width: 60%;
        }

        .locandina{           
            div{
                
                margin: auto;
            }
            img{
                width: 100%;
                padding: 10%;
            }
        }
      
    }

    .competitions{
        background-color:white;

        .description{
            min-width: 40%;
            margin: auto;
        }

        .images-carousel{
            min-width: 60%;
            padding: 1%;

        }
    }
}
</style>
