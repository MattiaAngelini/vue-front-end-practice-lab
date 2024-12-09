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
         <Header 
        :header="store.mainHeader"
        />               
        <div  class="layout">          
            <SideBySide :imageLeft="false" :layout="store.ContactsSideBySide"
            />
        </div>
        <Footer :icons="store.logoFooter" />                 
</template>
<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.layout{              
        form{
            display: grid;
        }
    }     
</style>