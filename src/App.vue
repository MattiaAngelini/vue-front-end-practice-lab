<script lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import { useMainStore} from './store.ts';
export default {
    name: 'App',
    components:{
        Header,
        Footer
    },
    data(){
        return{
            store: useMainStore()
        }
    },

methods:{
  
},

mounted(){
 
}

};

</script>

<template>
        <Header 
        :header="store.mainHeader"
        />
    <router-view></router-view>
    <Footer :icons="store.logoFooter" />
</template>

<style scoped lang="scss">
@use './assets/styles/generic.scss' as *;
@use './assets//styles/partials/mediaqueries/mediaqueries.scss' as *;
</style>
