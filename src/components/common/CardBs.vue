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
   <div class="card">
        <img :src="card.image" alt="...">
        <div class="card-body">
                <h5 class="card-title">{{card.technique}}</h5>
                <p class="card-text">CINTURA:{{card.belt}}.</p>
                <p class="card-text">DIFFICOLTA':{{card.difficulty}}.</p>
                <p class="card-text">ETA':{{card.age_range}}.</p>
        </div>
   </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

.card{
    width: 400px;
}

</style>
