<script lang="ts">
import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
export default{
    name: 'BjjPage',
    components:{
        Header,
        Footer
    },

    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },
}
</script>
<template>
    <Header 
        :header="mainStore.mainHeader"
    />
        <main class="container">
            <h1>il Jiu Jitsu Brasiliano</h1>
        </main>    
    <Footer 
        :icons="mainStore.logoFooter" 
    />
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main{
    min-height: 50vh;
}

</style>