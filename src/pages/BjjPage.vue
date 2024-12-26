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
        width(): Record<string, string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' || this.sizeWindow === 'md'|| this.sizeWindow === 'lg') {
                return { width: '100%', height:'100%' };
            }  else {
                return { width: '100%',height: '50%' };
            }
        },
        maxWidth(): Record<string, string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ) {
                return { maxWidth: '60%' };

            }else if(this.sizeWindow === 'md'|| this.sizeWindow === 'lg'){
                return {maxWidth: '70%'};

            }else {
                return { maxWidth: '100%' };
            }
        },
        imageSlider(): Record<string, string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' || this.sizeWindow === 'md'|| this.sizeWindow === 'lg') {
                return { width: '80%', height:'80vh', marginLeft: '10%' };
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
        <div class="d-md-flex intro container"> 
            <div :style="width" class="info d-lg-flex justify-content-center align-items-center"> 
                <div>
                    <div class="">
                        <h1 class="text-center p-3">Il Brazilian Jiu-Jitsu</h1>
                        <h5>La mia comfort zone</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, nesciunt eaque repellat dolorem
                        accusantium numquam eos corrupti cum nemo quidem 
                        recusandae ut accusamus doloremque aut quam consequuntur odio neque quod.
                        </p>
                    </div>
                </div>
            </div>
            <div :style="width"  class="img-container d-flex justify-content-center align-items-center">
                <img src="../../public/bjj/beltDay.png" alt="">
            </div>
        </div>

        <div class="fundamentals d-xl-flex">
        
                <div :style="width" class="team">
                    <img src="../../public/bjj/team.jpg" alt="">
                </div>

                <div :style="width" class="info container description">
                    <h1 class="text-center p-3">La Classe Fundamentals</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis temporibus qui error quis dolores
                         vero veritatis dolorem voluptatibus delectus exercitationem! Accusamus 
                         facilis itaque, sunt est eveniet placeat porro repellendus facere.</p>
                         <div :style="maxWidth" class="locandina" >
                            <img class="p-3" src="../../public/bjj/locandina.jpg" alt="">
                         </div>              
                </div>
        </div>

        <div class="container competitions">       
            <h1 class="text-center">COMPETITIONS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione debitis reiciendis 
                modi assumenda ipsum asperiores temporibus? Id vitae soluta libero praesentium 
                veritatis eius debitis, rerum harum maxime repudiandae. Fuga, culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi unde autem tempore at numquam, neque rerum fugiat reprehenderit
                quos nobis. Ullam repellat doloribus minima soluta mollitia perferendis provident ducimus.</p>

             <div class="images-carousel pb-3">
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
    //section1
    .intro{
        .img-container{ 
            margin: auto;
        img{ 
                width: 80%;          
            }
    }
    .info{         
            height: 50%;
            margin: auto;
        }
    }

    //section2
    .fundamentals{
       min-height: 50vh;
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
      
 
}
</style>
