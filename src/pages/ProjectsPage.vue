<script lang="ts">
import { useMainStore } from '../store.ts';
import ButtonCustom from '../stories/Buttons/ButtonCustom.vue';
export default{
    name: 'ProjectsPage',
    components:{
        ButtonCustom,
    },
    data(){
        return{
            store: useMainStore(),
        }
    },
}
</script>
<template>
    <main class="container">
        <h1>Ill mio curriculum aggiornato!</h1>
        <ButtonCustom size="large" isDownload :button="store.btnCvPage"
    />
    </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.container{
    height: 100vh;
}
</style>