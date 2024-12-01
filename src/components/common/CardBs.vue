<script lang="ts">
import { CardTechnique } from '../../models/CardTechnique.ts';
import { PropType } from 'vue';

export default {
    name: 'CardBs',
    props: {
        card: {
            type: Object as PropType<CardTechnique> || Object, 
            required: true,
        },
    },
};
</script>

<template>
   <div class="card--">
    
    <div class="d-flex justify-content-center align-items-center">
        <img :src="card.image" alt="...">
    </div>
       
        <div class="card-body-- p-3 d-flex flex-column gap-2">
                <div class="card-title-- text-center p-3"><b>{{card.technique}}</b></div>
                <div class="card-text--"><b>Cintura:</b>{{card.belt}}.</div>
                <div class="card-text--"><b>Difficoltà':</b>{{card.difficulty}}.</div>
                <div class="card-text--"><b>Età':</b>{{card.age_range}}.</div>
        </div>
   </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

.card--{
    background-color: white;
    border-radius: 6px;
}
</style>
