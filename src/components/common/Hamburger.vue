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
            <h3 class="offcanvas-title" id="offcanvasScrollingLabel">{{hamburger.title}}</h3>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul>
                <li v-for="(link,index) in hamburger.links" :key="index">{{ link }}</li>                 
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

</style>
