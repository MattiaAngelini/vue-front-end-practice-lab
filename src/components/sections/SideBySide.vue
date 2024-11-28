<script lang="ts">

import { SideBySide } from '../../models/SideBySide';
import { useMainStore } from '../../store';
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
    },
    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },

    computed:{
        msLayout(){ 
            if(this.layout.info){
                return {minHeight: '100vh', gridTemplateColumns: '1fr 1fr'}
                }
            }
        }
    }
</script>

<template>
    <section :style="msLayout">

        <div class="container-img">
            <img :src="layout.image" alt="" />
        </div>

        <div v-if="layout.info"  class="container-info p-4">
            <h1>{{ layout.title }}</h1>
            <div>{{ layout.description }}</div>

            <div class="d-flex justify-content-center">
                <ButtonCustom size="medium" isRo :button="mainStore.btnSideBySide" />     
            </div>
        </div>

        <div v-if="layout.form"  class="container-info p-3">

            <h3>E-mail</h3>
            <form action="">
                <label for="name">Nome *</label>
                <input type="text" id="name" name="name" placeholder="Inserisci il tuo nome" required>

     
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="Inserisci la tua email" required>

                <label for="numero">Numero</label>
                <input type="text" id="numero" name="numero" placeholder="Inserisci il tuo numero" required>

                <label for="azienda">Azienda</label>
                <input type="text" id="azienda" name="azienda" placeholder="Inserisci azienda" >

                <label for="message">Messaggio</label>
                <textarea id="message" name="message" placeholder="Scrivi il tuo messaggio" rows="5"></textarea>

                <div>
                    <button type="submit">Invia</button>
                </div>
                
            </form>
          
        </div>

    </section>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;
@use '../../assets/styles/partials/mediaqueries.scss' as *;

section { 
    background-color: lightgray;
    display: grid;
    grid-template-columns: 2fr 1fr;

    .container-img {
        min-width: 60%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .container-info {
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
        width: 100%;
    }
}
</style>
