<script lang="ts">
import { Button } from '../../../models/Button.ts';
import { PropType } from 'vue';

export default {
    name: 'ButtonHref',
    props: {
        button: {
            type: Object as PropType<Button>,
            required: true,
        },
    },
};
</script>

<template>
    <a :href="button.url">
        <button 
            :style="{ backgroundColor: button.bgColor, color: button.color }" 
        >
            <slot>{{ button.label }}</slot>
        </button>
    </a>
</template>

<style scoped lang="scss">
@use '../../../assets/styles/generic.scss' as *;
@use '../../../assets/styles/partials/buttonStyle.scss' as *

</style>

