<script lang="ts">
import { Button } from '../../../models/Button.ts';
import { PropType } from 'vue';

export default {
    name: 'ButtonDownload',
    props: {
        button: {
            type: Object as PropType<Button>,
            required: true,
        },
    },
};
</script>

<template>
    <a :href="button.url" download>
        <button 
            :style="{ backgroundColor: button.bgColor, color: button.color }" 
        >
            <slot>{{ button.label }}</slot>
        </button>
    </a>
</template>

<style scoped lang="scss">
@use '../../../assets/styles/generic.scss' as *;

    button {
        padding: 20px;
        border-radius: 10px;
        font-weight: 800;
        max-width: 300px;
    }
</style>

