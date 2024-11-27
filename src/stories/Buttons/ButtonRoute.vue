<script lang="ts" setup>
import { Button } from '../../models/Button';
import { computed } from 'vue';
import './msbutton.css'

const props =withDefaults(defineProps<{  
  button: Button
  size?: 'small' | 'medium' | 'large',
}>(), {});

const style = computed(() => ({
  backgroundColor: props.button.bgColor,
  color: props.button.color 
}));

const classes = computed(() => ({
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

</script>

<template>
    <router-link :to="{name: button.url}">
        <button       
            class="mainStyle"
            :style="style" 
            :class="classes"
        >
            {{ button.label }}
            <slot></slot>
        </button>
   </router-link>
</template>
