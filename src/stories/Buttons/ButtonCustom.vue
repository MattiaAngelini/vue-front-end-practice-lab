<script lang="ts" setup>
import { Button } from '../../models/Button';
import { computed } from 'vue';
import './buttonCustom.css'

const props =withDefaults(defineProps<{  
  button: Button
  size?: 'small' | 'medium' | 'large',
  isDownload? : boolean,
  isRouter?: boolean
}>(), {});

const style = computed(() => ({
  backgroundColor: props.button.bgColor,
  color: props.button.color 
}));

const classes = computed(() => ({
  [`storybook-button--${props.size || 'medium'}`]: true,
   'mainStyle': true
}));

</script>

<template>
 
    <a v-if="isDownload" :href="button.url" download>
        <button       
            :style="style" 
            :class="classes"
        >
            {{ button.label }}
            <slot></slot>
        </button>
    </a>

    <router-link v-else-if="isRouter" :to="{name: button.url}">
        <button                
            :style="style" 
            :class="classes"
        >
            {{ button.label }}
            <slot></slot>
        </button>
   </router-link>

   <a v-else :href="button.url">
        <button       
            :style="style" 
            :class="classes"
        >
            {{ button.label }}
            <slot></slot>
        </button>
    </a>

</template>
