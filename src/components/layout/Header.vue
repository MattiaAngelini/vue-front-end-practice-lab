<script lang="ts">
import { Header } from '../../models/Header.ts';
import { Hamburger } from '../../models/Hamburger.ts';
import Hamburger from '../common/Hamburger.vue';
import { PropType } from 'vue';

export default {
    name: 'Header',
    components: {
        Hamburger,
    },
    props: {
        links: {
            type: Array as () => Header[],
            required: true,
        },
        icons: {
            type: Array as () => Header[],
            required: true,
        },
        headerHamburger: {
            type: Object as PropType<Hamburger>,
            required: true,
        },
    },
    computed: {
        Columns(): Record<string, string> {
            return { gridTemplateColumns: `6fr repeat(${this.links.length}, 1fr)` };
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
                <a 
                    class="d-none d-lg-block" 
                    v-for="(icon, index) in icons" 
                    :key="index"
                >
                    <i :class="icon.label"></i>
                </a>
            </div>
            <a 
                class="d-none d-lg-block" 
                v-for="(link, index) in links" 
                :key="index"
            >
                <router-link :to="{ name: link.href }"> {{ link.label }} </router-link>
            </a>
            <!--componente hamburger-->
            <Hamburger :hamburger="headerHamburger" />
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../../assets//styles/partials/mediaqueries.scss' as *;

header {
    color: white;
    position: fixed;
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
