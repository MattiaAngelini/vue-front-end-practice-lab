<script lang="ts">
import { SideBySide } from '../../models/SideBySide';
import { useMainStore} from '../../store';
import { PropType } from 'vue';
import ButtonCustom from '../../stories/Buttons/ButtonCustom.vue';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../layout/AnimatedSection.vue';
export default {
    name: 'SideBySide',
    components: {
        ButtonCustom,
        AnimatedSection
    },
    data(){
        return{
            store: useMainStore(),
            emailSent: false       
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

        // widthResponsive() {
        //     if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl' ||
        //         this.sizeWindow === 'md' || this.sizeWindow === 'lg') {
        //         return { width: '50%' };
        //     } else {
        //         return { width: '100%' };
        //     }
        // },
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
        <AnimatedSection :style="widthResponsive"  class="ms-video">
            <video  autoplay muted loop>
                <source :src="layout.video" type="video/mp4" />
            </video>
        </AnimatedSection>
      
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section { 
        .ms-alert{
        color: white;
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        padding-top: 150px;
}
    .alert-enter-active,
    .alert-leave-active{
        transition: opacity 0.3s ease-in-out;
    }
    .alert-enter-from,
    .alert-leave-to{
        opacity: 0;
    }

    .ms-video { 
   
        padding: 3%;
     
        background-color: rgb(169, 169, 169);
        
        video {
            width: 80%;
            height: 50%;     
            margin: auto;
            object-fit: cover;  
            display:block;        
            border-radius: 10px;
            border: 1px solid $baffo;
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
