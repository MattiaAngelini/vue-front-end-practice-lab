<script lang="ts">
import { Header } from '../../models/Header.ts';
import { PropType } from 'vue';
import Hamburger from '../common/Hamburger.vue';

export default {
    name: 'Header',
    components:{
        Hamburger
    },
    props: {
        header: {
            type: Object as PropType<Header>,
            required: true,
        },
    },
    computed: {
        Columns(): Record<string, string> {
            return { gridTemplateColumns: `6fr repeat(${this.header.links.length}, 1fr)` };
        },
    },
};
</script>

<template>
    <header>
        <!--Header Links-->
        <div :style="Columns" class="links">
            <div class="d-flex gap-3 align-items-center">
                <div class="myname">MATTIA ANGELINI</div>
                <a :href="icon.href"
                    class="d-none d-lg-block" 
                    v-for="(icon, index) in header.icons" 
                    :key="index"
                >
                    <i :class="icon.label"></i>
                </a>
            </div>
            <a 
                class="d-none d-lg-block" 
                v-for="(link, index) in header.links" 
                :key="index"
            >
                <router-link :to="{ name: link.href }"> {{ link.label }} </router-link>
            </a>
            <!--componente hamburger-->
            <Hamburger :offcanvas="header.hamburger" />
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../../assets//styles/partials/mediaqueries/mediaqueries.scss' as *;

header {
    color: white;
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    min-height: 10vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        font-weight: 500;
    }

    .links {
        display: grid;
        width: 98%;
        margin: auto;

        .myname {
            font-size: 20px;
            font-weight: 900;
        }

        .fa-bars {
            grid-column: 6 / 6;
            font-size: 30px;
        }
    }
}
</style>
