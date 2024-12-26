<script lang="ts">
import { useMainStore } from '../store.ts';

export default{
    name: 'DiscoverMore',
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
    <main class="container">

        <h1 class="p-3 text-center">SCOPRI DI PIù</h1>
        <section class="window">

            <div>
                <i class="fa-solid fa-ghost"></i>
            </div>

        </section>
    
    </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

.container{
    height: 100vh;

     section{
        background-image: url('../assets/images/display.jpg');
        background-size: contain;
        height: 80%;
     }
}
</style>