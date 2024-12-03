<script lang="ts">
import { Offcanvas } from '../../models/Offcanvas';
import { PropType } from 'vue';

export default {
    name: 'Hamburger',
    props: {
        offcanvas: {
            type: Object as PropType<Offcanvas>,
            required: true,
        },
    },
    data() {
        return {
            isVisible: false
        };
    },
    methods: {
        toggle() {
             this.isVisible = !this.isVisible;
        }

    },
    computed: {
        change() {
            if (!this.isVisible) {
                return { 'd-none': !this.isVisible };
            } else {
                return {
                    'd-block': this.isVisible,
                    'd-lg-none': this.isVisible
                };
            }
        }
    }
};
</script>

<template>
    <i 
        class="fa-solid fa-bars d-block d-lg-none" 
        type="button" 
        @click="toggle()" 
    ></i>

    <div :class="change" class="hamburger-body">
        <div class="d-flex justify-content-between gap-3">
            <h2>{{ offcanvas.title }}</h2>
            <button class="btn btn-danger" @click="toggle">
                <i>X</i>
            </button>
        </div>
        <div>
            <ul>
                <li 
                    class="list-unstyled mt-5" 
                    v-for="(link, index) in offcanvas.links" 
                    :key="index"
                >
                    <router-link :to="{ name: link.url }">
                        <a>{{ link.link }}</a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div> 
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

.hamburger-body {
    color: black;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: white;
    min-width: 60%;
    min-height: 100vh;
    animation-duration: 0.3s;
    animation-name: slide-in;

    @keyframes slide-in {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
}

i {
    grid-column: 6 / 6;
    align-self: center;
    padding: 10px;
    border-radius: 2px;
    font-size: 20px;
}

a {
    text-decoration: none;
    font-weight: 600;
    color: black;
}
</style>
