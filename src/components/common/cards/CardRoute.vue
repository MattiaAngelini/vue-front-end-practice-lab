<script lang="ts">
export default {
    name: 'CardRoute',
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

<router-link :to="{name: url}">
    <div class="ms-card">
        <img  :src="image" alt="...">
        <div class="card-img-overlay">
            <div class="info">
                <h5>{{title}}</h5>
                <p >{{description}}</p>
            </div>
        </div>
    </div>
</router-link>

</template>

<style scoped lang="scss">
@use '../../../assets/styles/generic.scss' as *;
@use '../../../assets/styles/partials/cardsStyle.scss' as *;
</style>
