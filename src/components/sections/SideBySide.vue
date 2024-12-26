<script lang="ts">
import { SideBySide } from '../../models/SideBySide';
import { useMainStore} from '../../store';
import { PropType } from 'vue';
import ButtonCustom from '../../stories/Buttons/ButtonCustom.vue';
import emailjs from '@emailjs/browser';
export default {
    name: 'SideBySide',
    components: {
        ButtonCustom,
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
        }
    }
    }
</script>

<template>
  
    <section class="reverse-layout">
        <Transition appear name="alert">
            <div v-if="emailSent" class="ms-alert">
                <h1 class="p-3">E-MAIL INVIATA!</h1>
            </div>
        </Transition>

        <!--IMMAGINE-->
        <div class="container-img"  :style="layoutPosition">
            <div  class="ms-img">
                <img :src="layout.image" alt="" />
            </div>
        </div>

        <!--TITOLO E DESCRIZIONE-->
        <div v-if="layout.info"   class="container-info p-4">
            <h1>{{  layout.title }}</h1>
            <div>{{ layout.description }}</div>

            <div class="d-flex justify-content-center p-3">
                <ButtonCustom v-if="btnInfo" size="large" :button="store.btnSideBySide" />     
            </div>
        </div>

        <!--FORM-->
        <div v-if="layout.form"  class="ms-form">
            <div >
            <h1 class="text-center p-3">CONTATTAMI</h1>
            <form ref="form" @submit.prevent="sendEmail">
                <input required placeholder="Nome*" type="text" name="userName">
                <input required placeholder="E-mail*" type="email" name="userEmail">
                <input required placeholder="Oggetto della Mail*" type="text" name="subject">
                <textarea required placeholder="Scrivi il tuo messaggio*" name="message"></textarea>
                <input required type="submit" value="Send">
            </form>      
        </div>

        </div>
        
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section { 
    background-color: lightgray;
    display: flex;
    min-height: 100vh;
    position: relative;
    background: linear-gradient(rgb(109, 112, 113) 40%, rgb(0, 0, 0) 80%);
        
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
   
    .container-img{
        width: 50%;
        .ms-img { 
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;      
            }      
        }
    }
        
    .container-info {     
        margin: auto;
        width: 50%;
    }

    .ms-form{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4%;
        line-height: 40px;
        color: white;
    }

    input, textArea{
        width: 100%;
        padding: 2%;
        margin: 1%;
        border: none;
        border-radius: 8px;
    }
}
</style>
