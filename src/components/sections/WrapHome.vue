<script lang="ts">
import ButtonCustom from '../../stories/Buttons/ButtonCustom.vue';


export default{
    name: 'WrapHome',

    components:{
        ButtonCustom
    }
}
</script>
<template>  

<section>

    <div class="d-flex justify-content-center align-items-center info">
        <div class="d-flex flex-column align-items-center">
            <h1 class="text-center">My coding experience</h1>
            <button class="btn m-3">VAI</button>
        
        </div>
    </div>


</section>


</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{
    min-height: 70vh;
    
        h1{
        color: white;
        }

        .info{
            min-height: 70vh;
        }
        button{
            width: 50px;
            background-color: $baffo;
            border: none;
            color: white;
        }
        
}
</style>