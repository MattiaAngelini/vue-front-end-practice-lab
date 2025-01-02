<script lang="ts" setup>
import { Card } from '../models/Card';
import './card.css'

const props =withDefaults(defineProps<{  
  card: Card,
  isRouter?: boolean
  
}>(), { });


</script>

<template>
     <router-link v-if="isRouter" :to="{name: props.card.url}">
        <div class="ms-card">
            <img  :src="props.card.image" alt="...">
            <div class="card-img-overlay">
                <div class="info">
                    <h5>{{props.card.title}}</h5>
                    <p >{{props.card.description}}</p>
                </div>
            </div>
        </div>
    </router-link>

    <a v-else :href="card.url" >     
        <div class="ms-card">
            <div class="container-img">
                <img :src="props.card.image" alt="...">
            </div>
            <div class="card-img-overlay">
                <div class="info">
                    <h5>{{props.card.title}}</h5>
                    <p >{{props.card.description}}</p>
                </div>
            </div>
        </div>
    </a>
</template>
