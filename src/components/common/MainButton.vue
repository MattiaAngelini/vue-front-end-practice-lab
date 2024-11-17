<script lang="ts">
export default{
    name: 'MainButton',
    props: {

    label: {
        type: String,
        required: false,
        default: 'Scopri di più'
    },
    url: {
        type: String,
        required: true,
        default: 'http://localhost:5173/home'
    },
    bgColor: {
        type: String,
        required: false,
        default: 'blue'
    },
    colorText: {
        type: String,
        required: false,
        default: 'white'
    },
    },

    methods:{
        redirectPage(){
            window.location.href = this.url
        }
    }
}

</script>

<template>

<button :style="{backgroundColor: bgColor, color: colorText }" @click="redirectPage">{{label}}</button>

</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

    button{
        padding: 20px;
        border-radius: 20px;
        font-weight: 900;
    }

</style>
