<script lang="ts">
import { useMainStore } from '../store.ts';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import SideBySide from '../components/sections/SideBySide.vue';

export default{
    name: 'ContactsPage',
    components:{
        Header,
        Footer  ,
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
        <div  class="layout">          
            <SideBySide :layout="store.ContactsSideBySide"
            />
        </div>                 
</template>
<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.layout{            
    position: relative;
    margin: 5% 10% 5% 10%;
    width: 80%;
    height: 80%;
    border: 6px solid red;
    z-index: 100;
    
        form{
            display: grid;
        }
    }
        
</style>