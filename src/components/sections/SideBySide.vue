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
        imageLeft:{
            type: Boolean,
            required:false,
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
            console.log('SUCCESS!');
            this.emailSent = true;

            setTimeout(() => {
                location.reload()
                }, "2000");
            
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
            if(!this.imageLeft){
                return  {gridColumn: '1'};
            }         
        }
    }
    }
</script>

<template>
    <section class="reverse-layout">
        <div class="container-img">
            <img :src="layout.image" alt="" />
            <Transition name="alert">
                <div v-if="emailSent" class="ms-alert">
                <h1>E-MAIL INVIATA!</h1>
            </div>
            </Transition>
        </div>

        <div v-if="layout.info"  :style="layoutPosition"  class="container-info p-4">
            <h1>{{  layout.title }}</h1>
            <div>{{ layout.description }}</div>

            <div class="d-flex justify-content-center p-3">
                <ButtonCustom size="medium" isRo :button="store.btnSideBySide" />     
            </div>
        </div>

        <div class="ms-form">
            <div v-if="layout.form" :style="layoutPosition">
            <h1>E-mail</h1>
            <form ref="form" @submit.prevent="sendEmail">
                <label>Nome:</label>
                <input required type="text" name="userName">
                <label>E-mail:</label>
                <input required type="email" name="userEmail">
                <label>Oggetto:</label>
                <input required type="text" name="subject">
                <label>Messaggio:</label>
                <textarea required name="message"></textarea>
                <input required @click="clearInput" type="submit" value="Send">
            </form>      
        </div>

        </div>
        
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section { 
    background-color: lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr;  
    grid-template-rows: 1fr; 
    min-height: 100vh;

    .container-img { 
           
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;      
        }
        .ms-alert{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 15%;
            width:50%;
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);   
            border: 8px solid black;   
            border-radius: 10px;
        }

        .alert-enter-active,
        .alert-leave-active{
            transition: opacity 0.3s ease-in-out;
        }
        .alert-enter-from,
        .alert-leave-to{
            opacity: 0;
        }
    }
    .container-info {     
        margin: auto;
    }

    .ms-form{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4% 
    }

    input, textArea{
        width: 100%;
    }
}
</style>
