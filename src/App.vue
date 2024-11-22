<script lang="ts">
import { useMainStore } from './store.ts';

export default {
    name: 'App',
  
    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },
};
</script>

<template>
    <router-view></router-view>
</template>

<style scoped lang="scss">
@use './assets/styles/generic.scss' as *;
@use './assets//styles/partials/mediaqueries.scss' as *;
</style>
