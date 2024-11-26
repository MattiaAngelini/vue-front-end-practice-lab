<script lang="ts">
export default {
    name: 'CardHref',
    props: {
       title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: false,
        },
    },
};
</script>

<template>
    <a :href="url">   
        <div  class="ms-card">
            <img  :src="image" alt="...">
            <div class="card-img-overlay">
                <div class="info">
                    <h5>{{title}}</h5>
                    <p >{{description}}</p>
                </div>
        </div>
      </div>
    </a>
 
</template>

<style scoped lang="scss">
@use '../../../assets/styles/generic.scss' as *;
@use '../../../assets/styles/partials/cardsStyle.scss' as *;
</style>
