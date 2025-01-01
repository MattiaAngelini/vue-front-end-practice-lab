<script lang="ts">
import { SideBySide } from '../../models/SideBySide';
import { useMainStore} from '../../store';
import { PropType } from 'vue';
import ButtonCustom from '../../stories/Buttons/ButtonCustom.vue';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../layout/AnimatedSection.vue';
import { currentWindow } from '../../assets/styles/breakpoint.ts';

export default {
    name: 'SideBySide',
    components: {
        ButtonCustom,
        AnimatedSection
    },
    data(){
        return{
            store: useMainStore(),
            emailSent: false,
            sizeWindow: currentWindow(window.innerWidth),    
        }
    },
    props: {
        layout: {
            type: Object as PropType<SideBySide>,
            required: true,
        },
        btnInfo :{
            type: Boolean,
            default:true
        },
        imageLeft:{
            type: Boolean,
            default: true
        }     
    },

    methods :{
        sendEmail() {
      emailjs
        .sendForm('service_s9wonvb', 'template_4wunygu', this.$refs.form, {
          publicKey: 'liM4P9Emnvlm8w4sW',
        })
        .then(
          () => {
            this.emailSent = true;

            setTimeout(() => {
                location.reload()
                }, 1500);
            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
    }
    ,
    computed:{
        layoutPosition(){
            if(!this.imageLeft === true){
                return  {order: '2'};
            }      
        },

        widthResponsive() {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ||
                this.sizeWindow === 'md' || this.sizeWindow === 'lg') {
                return { width: '50%' };
            } else {
                return { width: '100%' };
            }
        },

        maxHeightResponsive() {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ||
                this.sizeWindow === 'md' || this.sizeWindow === 'lg') {
                return { minHeight: '100vh' };
            } else {
                return { minHeight: '60vh' };
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
  
    <section class="reverse-layout d-md-flex">
        <Transition appear name="alert">
            <div v-if="emailSent" class="ms-alert">
                <h1 class="p-3">E-MAIL INVIATA!</h1>
            </div>
        </Transition>
        
        <!--TITOLO E DESCRIZIONE-->
        <div v-if="layout.info"   class="container-info p-4">
            <h1>{{  layout.title }}</h1>
            <div>{{ layout.description }}</div>

            <div class="d-flex justify-content-center p-3">
                <ButtonCustom v-if="btnInfo" size="large" :button="store.btnSideBySide" />     
            </div>
        </div>

        <!--FORM-->
        <div :style="widthResponsive"  v-if="layout.form"  class="ms-form">
            
            <AnimatedSection> 
            <h1 class="text-center p-4">CONTATTAMI</h1>
            <div>
                <form ref="form" @submit.prevent="sendEmail">
                    <input required placeholder="Nome*" type="text" name="userName">
                    <input required placeholder="E-mail*" type="email" name="userEmail">
                    <input required placeholder="Oggetto della Mail*" type="text" name="subject">
                    <textarea required placeholder="Scrivi il tuo messaggio*" name="message"></textarea>
                    <input required type="submit" value="Send">
                </form>      
            </div>
        </AnimatedSection>
        </div>
                
        <!--VIDEO-->
        <div :style="widthResponsive"   class="ms-video">
            <div>
                <video :style="maxHeightResponsive"  autoplay muted loop>
                    <source :src="layout.video" type="video/mp4" />
                </video>

                <div class="contacts">          
                    <AnimatedSection class="p-4">
                        <h2 class="text-center p-2">TELEFONO</h2>
                        <div class="ms-badge">+39 339 783 9316</div>
                    </AnimatedSection>
                    
                    <AnimatedSection class="p-4">
                        <h2 class="text-center p-2">E-MAIL</h2>
                        <div class="ms-badge"> mattiaangelini1993@gmail.com</div>
                    </AnimatedSection>  
                </div>
            </div>
        </div>
      
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section { 
    position: relative;
        .ms-alert{
        color: white;
        position: absolute;
        top: 25%;
        left: 0%;      
        min-width: 100%;      
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        z-index: 999;
        
}
    .alert-enter-active,
    .alert-leave-active{
        transform: translate(0px, 0px);
        transition: transform 0.4s ease-out;
    }
    .alert-enter-from,
    .alert-leave-to{
        transform: translate(-100vw, 0px);
    }

    .ms-video { 
        background-color: rgb(169, 169, 169);
        position: relative;
    
        video {
            width: 100%;
            height: 100%;
            margin: auto;
            object-fit: cover;  
            display:block;        
            border-radius: 10px;
            border: 1px solid $baffo;
            position: relative;
            
        }&::after{
            content:'';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.2);
        }
    
        .contacts{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            h2{color: $baffo;}

           .ms-badge{
                border: 1px solid $baffo;
                border-radius: 10px;
                padding: 20px;
                background-color: rgb(118, 118, 118);
                font-size: 1.2rem;
                color: white;
            }
            
        }
    }
    
    .ms-form{ 
        background-color: rgb(225, 225, 225);
        padding: 3%;
        line-height: 40px;
        color: $baffo;
    }

    input, textArea{
        width: 100%;
        padding: 2%;
        margin: 1%;
        border: 1px solid $baffo;
        border-radius: 8px;
    }
}
</style>
