<script lang="ts">
import { useMainStore } from '../store.ts';
import SideBySide from '../components/sections/SideBySide.vue';

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
            <SideBySide :imageLeft="false" :layout="store.ContactsSideBySide"
            />  
</template>
<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.layout{              
        form{
            display: grid;
        }
    }     
</style>