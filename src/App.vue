<script lang="ts">
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { useMainStore } from './store.ts'

export default{
    name:'App',
    components:{
        Header,
        Footer,
    },
    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },
}

</script>

<template>
    <Header :icons="mainStore.socialIcons" 
            :links="mainStore.headerLinks"/>
    <router-view></router-view>
    <Footer :icons="mainStore.logoFooter" />
</template>

<style scoped lang="scss">
@use './assets/styles/generic.scss' as *;

</style>
