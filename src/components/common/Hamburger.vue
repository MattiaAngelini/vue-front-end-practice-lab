<script lang="ts">
import { Hamburger } from '../../models/Hamburger';
import { PropType } from 'vue';
export default{
    name: 'Hamburger',
    props: {
        hamburger: {
            type: Object as PropType<Hamburger>,
            required: true,
            },
    },
}
</script>

<template>
    <i class="fa-solid fa-bars d-block d-lg-none" 
       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" 
       aria-controls="offcanvasScrolling"
       :style="{backgroundColor: hamburger.bgColor, color: hamburger.color}"></i>
       
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h2 class="offcanvas-title" id="offcanvasScrollingLabel">{{hamburger.title}}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <ul class="">
                <li class="list-unstyled mt-5" v-for="(link,index) in hamburger.links" :key="index">
                    <a :href="link.url" >{{ link.link }}</a>
                </li>                 
            </ul>

        </div>
    </div> 
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

    i{ 
        grid-column: 6/6;
        align-self: center;
        padding: 10px;
        border-radius: 2px;
        font-size: 20px;
    }

    a{
        text-decoration: none;
        font-weight: 600;
        color: black;
    }

</style>
