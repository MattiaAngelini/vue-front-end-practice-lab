<script lang="ts">
import {ButtonHref} from '../../models/ButtonHref.ts'

export default{
    name: 'MainButton',
    props: {

        button: {
            type: Object as()=>ButtonHref,
            required: true,
            },
        },
}

</script>

<template>

    <button :style="{backgroundColor: button.bgColor, 
                     color: button.color }" 
            @click="button.locationHref">{{button.label}}
    </button>

</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

    button{
        padding: 20px;
        border-radius: 20px;
        font-weight: 900;
    }

</style>
