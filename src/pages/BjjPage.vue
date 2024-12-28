<script lang="ts">
import { useMainStore } from '../store.ts';
import { currentWindow } from '../assets/styles/breakpoint.ts';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
    name: 'BjjPage',
    components: {
        Splide,
        SplideSlide,
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
                return { width: '30%', };
            }else {
                return { width: '100%', };
            }
        },
   
        maxWidthResponsive(): Record<string, string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ) {
                return { maxWidth: '60%' };

            }else if(this.sizeWindow === 'md'|| this.sizeWindow === 'lg'){
                return {maxWidth: '70%'};

            }else {
                return { maxWidth: '100%' };
            }
        },
        imageSlider(): Record<string, string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' || 
                this.sizeWindow === 'md'|| this.sizeWindow === 'lg') {
                return { width: '60%', height:'100vh', marginLeft: '20%' };
            }  else {
                return { width: '100%',height: '50vh' };
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
        <div class="d-md-flex intro p-2"> 
            <div :style="widthResponsive" class="info">               
                <h1 class="text-center p-4">Il Brazilian <span>Jiu-Jitsu</span></h1>
                <p class="container">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, nesciunt eaque repellat dolorem
                accusantium numquam eos corrupti cum nemo quidem 
                recusandae ut accusamus doloremque aut quam consequuntur odio neque quod.
                </p>         
            </div>
            <div :style="widthResponsive" class="img-container d-flex justify-content-center align-items-center">
                <img src="../../public/bjj/beltDay.png" alt="">
            </div>
        </div>

        <div class="fundamentals d-xl-flex ">

                <div  class="team">
                    <img src="../../public/bjj/team.jpg" alt="">
                </div>

                <div class="info container description">              
                    <h1 class="text-center p-4">La Classe <span>Fundamentals</span></h1>
                    <p class="container">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus qui error quis dolores
                        vero veritatis dolorem voluptatibus delectus exercitationem! Accusamus 
                        facilis itaque, sunt est eveniet placeat porro repellendus facere.
                    </p>                    
                    <div :style="maxWidthResponsive" class="locandina" >
                        <img class="p-3" src="../../public/bjj/locandina.jpg" alt="">     
                    </div>                      
                </div>
        </div>

        <div class="competitions"> 

            <div class="p-2">       
                <h1 class="text-center p-4"><span>Competitions</span></h1>
                <p class="container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione debitis reiciendis 
                    modi assumenda ipsum asperiores temporibus? Id vitae soluta libero praesentium 
                    veritatis eius debitis, rerum harum maxime repudiandae. Fuga, culpa.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi unde autem tempore at numquam, neque rerum fugiat reprehenderit
                    quos nobis. Ullam repellat doloribus minima soluta mollitia perferendis provident ducimus.
                </p>
            </div>      
         

             <div class="images-carousel p-2">
                <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
                    <SplideSlide v-for="image in store.imagesCarousel">
                        <img :style="imageSlider" :src="`${image.src}`" alt="Sample 1">
                    </SplideSlide>            
                </Splide>
             </div>
        </div>

    </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main {
   
    span{color:$baffo};
    //section1
    .intro{
        max-height: 100vh;
        background:  linear-gradient(180deg, white 80%, $secondary-color 100%);
           
        .info{         
           margin: auto;
       }
        .img-container{ 
            margin: auto;
            
        img{ 
                width: 100%;          
            }
    }
    }
    //section2
    .fundamentals{
      
       background-color: grey;
        .team{
            min-width: 60%;
            img{
                width: 100%;
                height: 100%;
            }
            
        }
        .description{      
            .locandina{
                max-width: 60%;
                margin: auto;
                img{
                   width: 100%;
                }
            }
        }
    }

    .competitions{
        background:  linear-gradient(180deg, white 0%, $secondary-color 100%);
    }
}
</style>
