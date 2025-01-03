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

    methods: {
        sendEmail() {
            const form = this.$refs.form as HTMLFormElement;
            emailjs
                .sendForm('service_s9wonvb', 'template_4wunygu', form, {
                    publicKey: 'liM4P9Emnvlm8w4sW',
                })
                .then(
                    () => {
                        this.emailSent = true;
                        // Reset dei campi del form
                        form.reset();
                        setTimeout(() => {
                            this.emailSent = false; // Nascondo il messaggio di successo
                        }, 3000);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
            }

    },

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
                return { minHeight: '50vh' };
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
                <!-- <ButtonCustom v-if="btnInfo" size="large" :button="store.btnSideBySide" />      -->
            </div>
        </div>

        <!--FORM-->
        <div :style="widthResponsive"  v-if="layout.form"  class="ms-form d-flex align-items-center">
            
        <AnimatedSection style="width: 80%;" class="m-auto">    
                <h1 class="text-center p-4">CONTATTAMI</h1>
                <form ref="form" @submit.prevent="sendEmail">
                    <input required placeholder="Nome*" type="text" name="userName">
                    <input required placeholder="E-mail*" type="email" name="userEmail">
                    <input required placeholder="Oggetto della Mail*" type="text" name="subject">
                    <textarea required placeholder="Scrivi il tuo messaggio*" name="message"></textarea>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary mb-2" required type="submit" value="Send">Invia</button>
                    </div>
                </form>   
     </AnimatedSection>
        </div>
                
        <!--MEDIA-->
        <div :style="widthResponsive"   class="side-media d-flex alignt-items-center">
           
            <div style="width: 80%; margin: auto" class="position-relative">
                <div class="contacts text-center mb-5">          
                    <AnimatedSection>
                        <h2 class="p-2">TELEFONO</h2>
                        <div class="ms-badge">+39 339 783 9316</div>
               
                        <h2 class="p-2">E-MAIL</h2>
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

    .side-media { 
        background-image: url('../../../public/display.jpg');
        background-size: cover;       
        position: relative;
        min-height: 70vh;
    
        .contacts{   
            h2{color: $baffo;}

           .ms-badge{
                border: 1px solid $baffo;
                border-radius: 8px;
                padding: 4px;
                background-color: rgb(118, 118, 118);          
                color: white;
            }    
        }
    }
    
    .ms-form{ 
        background-color: rgb(225, 225, 225);
        color: $baffo;
        min-height: 60vh;
        button{
            background-color: rgb(87, 87, 87);
            border: 1px solid $baffo;
            color: white;
            width: 100px;
            margin: 4;
        }
    }

    input, textArea{
        width: 100%;
        padding: 4px; 
        margin: 6px 0 6px 0;
        border: 1px solid $baffo;
        border-radius: 8px;
    }

    textArea{
        height: 150px;
    }
}
</style>
