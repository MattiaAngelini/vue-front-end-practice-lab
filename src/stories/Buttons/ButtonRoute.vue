<script lang="ts" setup>
import { Button } from '../../models/Button';
import './msbutton.css'

withDefaults(defineProps<{

  button : Button

}>(), {});
</script>

<template>
    <router-link :to="{name: button.url}">
        <button 
            class="mainStyle"
            :style="{ backgroundColor: button.bgColor, color: button.color }" 
        >
            <slot>{{ button.label }}</slot>
        </button>
   </router-link>
</template>
