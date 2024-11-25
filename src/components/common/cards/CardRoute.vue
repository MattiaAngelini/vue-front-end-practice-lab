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


.ms-card{
    color: black;
    position: relative;
    min-height: 100%;

        img {
        width: 100%;  
        object-fit: cover;
        position: absolute;
        height: 100%;
        border-radius: 6px;
        
        }

        .info{
            position: absolute;
            bottom: 10%;
            right: 10%;
        }
    }

.ms-card:hover {
            transform: scale(1.1); 
            border-radius: 6px;
            transition: all 0.2s ease-in-out;
            color: black;
            position: relative;
        }   

</style>
