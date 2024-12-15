<script lang="ts">
import SideBySide from '../components/sections/SideBySide.vue';
import { useMainStore} from '../store.ts';
export default{
    name: 'AboutMePage',
    
    components:{
        SideBySide
    },
    data(){
        return{
            store: useMainStore()
        }
    },
}
</script>

<template>
    <section>
      
        <div class="container pt-5 pb-5">
            <SideBySide :imageLeft="false" :btnInfo="false" :layout="store.AboutMe"/>
        </div>
       
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

section{
    background-color: grey;
}
</style>