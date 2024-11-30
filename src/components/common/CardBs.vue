<script lang="ts">
import { Card } from '../../models/Card.ts';
import { PropType } from 'vue';

export default {
    name: 'CardBs',
    props: {
        card: {
            type: Object as PropType<Card>, 
            required: true,
        },
    },
};
</script>

<template>
   <div class="card" style="width: 18rem;">
        <img :src="card.image" alt="...">
        <div class="card-body">
                <h5 class="card-title">{{card.title}}</h5>
                <p class="card-text">{{card.description}}.</p>
        </div>
   </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

</style>
