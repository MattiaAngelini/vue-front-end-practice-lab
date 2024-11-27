<script lang="ts" setup>
import { Button } from '../../models/Button';
import './msbutton.css'
withDefaults(defineProps<{

  button : Button

}>(), {});
</script>

<template>
    <a :href="button.url" download>
        <button 
            class="mainStyle"
            :style="{ backgroundColor: button.bgColor, color: button.color }" 
        >
            <slot>{{ button.label }}</slot>
        </button>
    </a>
</template>
