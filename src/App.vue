<script lang="ts">
import{ getTechniques } from './data/apiTechniques.ts'

export default {
    name: 'App',
    mounted(){
        getTechniques()
    }
};
</script>

<template>
    <router-view></router-view>
</template>

<style scoped lang="scss">
@use './assets/styles/generic.scss' as *;
@use './assets//styles/partials/mediaqueries.scss' as *;
</style>
