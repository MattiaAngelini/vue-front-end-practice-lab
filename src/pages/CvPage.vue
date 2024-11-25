<script lang="ts">
import ButtonDownload from '../components/common/buttons/ButtonDownload.vue';
import { useMainStore } from '../store.ts';
export default{
    name: 'CvPage',
    components:{
        ButtonDownload
    },

    setup() {
        const mainStore = useMainStore(); // Usa lo store
        return { mainStore };
    },
}
</script>
<template>
    <div>CURRICULUM</div>
    <ButtonDownload :button="mainStore.btnCvPage"
    />
    
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;


</style>