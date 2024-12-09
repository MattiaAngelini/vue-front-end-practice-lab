<script lang="ts">
import { SideBySide } from '../../models/SideBySide';
import { useMainStore} from '../../store';
import { PropType } from 'vue';
import ButtonCustom from '../../stories/Buttons/ButtonCustom.vue';

export default {
    name: 'SideBySide',
    components: {
        ButtonCustom,
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

    data(){
        return{
            store: useMainStore()
        }
    },

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
        </div>

        <div v-if="layout.info"  :style="layoutPosition"  class="container-info p-4">
            <h1>{{ layout.title }}</h1>
            <div>{{ layout.description }}</div>

            <div class="d-flex justify-content-center">
                <ButtonCustom size="medium" isRo :button="store.btnSideBySide" />     
            </div>
        </div>

        <div v-if="layout.form" :style="layoutPosition" class="container-info p-3">
            <h1>E-mail</h1>
            <form action="" methods=""  ref="form" @submit.prevent="sendEmail">
                <div v-for="input in store.ContactsInput">
                    <label :for="input.name">{{input.name}}</label>
                    <input :type="input.type" 
                           :id="input.name" 
                           :name="input.name" 
                           :placeholder="input.placeholder" 
                           :required="input.required">
                </div>
                <div>
                    <button type="submit" value="Send">Invia</button>
                </div>                
            </form>         
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;
@use '../../assets/styles/partials/mediaqueries/mediaqueries.scss' as *;

section { 
    background-color: lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr;  
    grid-template-rows: 1fr; 
    min-height: 100vh;

    .container-img { 
        grid-row: 1;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .container-info {     
        grid-row: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin: auto;
        position: relative;
        bottom: 0;
        font-size: 12px;
    }

    label{
        display: block;
    }
    input, textArea{
        width: 80%;
    }
}
</style>
