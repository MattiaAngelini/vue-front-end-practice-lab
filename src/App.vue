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
            :links="mainStore.headerLinks"     
            :headerHamburger="mainStore.headerHamburger"/>
    <router-view></router-view>
    <Footer :icons="mainStore.logoFooter" />
</template>

<style scoped lang="scss">
@use './assets/styles/generic.scss' as *;
@use './assets//styles/partials/mediaqueries.scss' as *;

</style>
