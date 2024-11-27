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
   'mainStyle':true,
}));

</script>

<template>
    <a :href="button.url" download>
        <button       
            :style="style" 
            :class="classes"
        >
            {{ button.label }}
            <slot></slot>
        </button>
    </a>
</template>
