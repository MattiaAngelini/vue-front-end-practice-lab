<script lang="ts">
import { Footer } from '../../models/Footer.ts';
import { currentWindow } from '../../assets/styles/breakpoint.ts';

export default {
    name: 'Footer',
    props: {
        icons: {
            type: Array as() => Footer[],
            required: true,
        },
    },

    data() {
        return {
            gridColumns: 4,
            sizeWindow: currentWindow(window.innerWidth),
        };
    },

    computed: {
    columns(): Record<string,string> {
        if (this.sizeWindow === 'sm') {
            return { gridTemplateColumns: `repeat(3, 1fr)` };
        } else if (this.sizeWindow === 'xs' || this.sizeWindow === 'xxs') {
            return { gridTemplateColumns: `repeat(2, 1fr)` };
        }
        return { gridTemplateColumns: `repeat(${this.gridColumns}, 1fr)` };
        },
    },


    mounted() {
        window.addEventListener('resize', () => {
            this.sizeWindow = currentWindow(window.innerWidth);
        });
    },
};
</script>

<template>
    <footer>
        <h1 class="text-center">LINGUAGGI E STRUMENTI CON CUI LAVORO</h1>
        <section>
            <div :style="columns" class="layout-footer container-logo">
                <div 
                    v-for="(icon, index) in icons" 
                    :key="index" 
                    class="logo"
                >         
                        <img 
                        v-show="icon.image !== ''" 
                            :src="icon.image" 
                            :alt="icon.altText"
                        >
                   
                </div>
            </div>

            <div class="policy">
                <div>Privacy Policy</div>
                <div>All Rights Reserved</div>
                <div>POWERED By Me and Myself</div>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

footer {
    min-height: 70vh;
    background-color: rgb(41, 36, 36);
    display: grid;

    h1 {
        color: $secondary-color;
        padding: 6%;
    }

    .layout-footer {
        width: 55%;
        margin: auto;
    }

    .container-logo {
        display: grid;
        justify-items: center;
        grid-template-rows: repeat(3, 1fr);
        gap: 1.5px;
        background: radial-gradient(circle, rgba(255, 103, 31, 0.6) 0%, rgba(0, 0, 0, 0) 75%);

        .logo {
            height: auto;
            width: 100%;
            padding: 8%;
            background-color: rgb(41, 36, 36);
            display: flex;
            justify-content: center;
            align-items: center;
          
            img {
                height: 80%;
                width: 80%;
            }

            .logos-enter-active,
            .logos-leave-active{
                transform: scale(1.0);
                transition: transform 4s ease-in-out;
            }
            .logos-enter-from,
            .logos-leave-to{
                transform: scale(1.3);
            }
        }

    }

    .policy {
        display: flex;
        justify-content: space-between;
        color: black;
        margin: 100px 10px 30px 10px;
    }
}
</style>
