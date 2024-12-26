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
            gridColumns: 5,
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
        <div class="text-center ms-title">LINGUAGGI E STRUMENTI</div>
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
                
                <div>© 2024 Mattia Angelini. Tutti i diritti riservati.</div>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

footer {
    background-color: rgb(41, 36, 36);
    display: grid;

    .ms-title {
        color: white;
        padding: 4%;
    }

    .layout-footer {
        width: 60%;
        margin: auto;
    }

    .container-logo {
        display: grid;
        justify-items: center;
        grid-template-rows: repeat(3, 1fr);
        gap: 1.5px;
        background: radial-gradient(circle, $secondary-color 0%, rgba(0, 0, 0, 0) 75%);

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
        }

    }

    .policy {
        display: flex;
        justify-content: space-between;
        color: black;
        margin: 30px 10px 30px 10px;
        font-size: 14px;
    }
}
</style>
