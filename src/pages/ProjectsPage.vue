<script lang="ts">
import { useMainStore } from '../store.ts';

export default{
    name: 'ProjectsPage',
    components:{
       
    },
    data(){
        return{
            store: useMainStore(),
        }
    },
}
</script>
<template>
    <main >
  
    </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.container{
    height: 100vh;
}
</style>