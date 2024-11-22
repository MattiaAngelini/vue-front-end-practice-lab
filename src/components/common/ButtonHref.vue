<script lang="ts">
import { ButtonHref } from '../../models/ButtonHref.ts';

export default {
    name: 'MainButton',
    props: {
        button: {
            type: Object as () => ButtonHref,
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
        {{ button.label }}
    </button>
</router-link>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

button {
    padding: 20px;
    border-radius: 10px;
    font-weight: 800;
    max-width: 300px;
}
</style>

