<script lang="ts">
import { useMainStore } from '../../store.ts';
import SideBySide from '../../components/sections/SideBySide.vue';

export default{
    name: 'ContactsPage',
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
        <div>
            <SideBySide :layout="store.ContactsSideBySide"
            /> 
        </div>
    </section>          
</template>
<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{
    min-height: 100vh;
}
</style>