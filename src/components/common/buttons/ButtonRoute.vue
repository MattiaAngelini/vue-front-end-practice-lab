<script lang="ts">
import { Button } from '../../../models/Button.ts';
import { PropType } from 'vue';

export default {
    name: 'ButtonRoute',
    props: {
        button: {
            type: Object as PropType<Button>,
            required: true,
        },
    },
};
</script>

<template>
    <router-link :to="{name: button.url}">
        <button 
            :style="{ backgroundColor: button.bgColor, color: button.color }" 
        >
            <slot>{{ button.label }}</slot>
        </button>
   </router-link>
</template>

<style scoped lang="scss">
@use '../../../assets/styles/generic.scss' as *;
@use '../../../assets/styles/partials/buttonStyle.scss' as *;

 
</style>

