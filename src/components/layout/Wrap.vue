<script lang="ts">
export default{
    name: 'Wrap',

    props:{
        wrap:{
            type: String,
            required: true,
        },

        shadowRgba:{
            type: String,
            required: false,

        }
    },
    computed:{
        shadow(){
            return {backgroundColor: this.shadowRgba}
        }
    }
}
</script>
<template>  

    <div>
        <img :src= wrap alt="">
        <div :style="shadow" class="shadow"></div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

div{
    min-width: 100%;
    position: fixed;
    bottom: 0;
    z-index: -1;
    
    img{
        width: 100%;
        min-height: 100vh;
    }   
    
    .shadow{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;         
        }
}

</style>