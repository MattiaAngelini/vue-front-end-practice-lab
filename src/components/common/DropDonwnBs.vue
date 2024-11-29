<script lang="ts">
import { DropDownBs } from '../../models/DropdownBs';
import { PropType } from 'vue';

export default {
    name: 'Offcanvas',
    props: {
        items: {
            type: Object as PropType<DropDownBs>, 
            required: true,
        },

        label:{
            type: String,
            required: true,
            default: 'Dropdown'
        }
    },
};
</script>

<template>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{label}}
    </button>
    <ul class="dropdown-menu">
            <li v-for="(values,index) in items"  :key="index" >
                <a v-for="(value,index) in values" :key="index"  class="dropdown-item" href="#">
                    {{ value }}
                </a>
            </li>
    </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

</style>
