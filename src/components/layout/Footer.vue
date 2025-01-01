<script lang="ts">
import { Footer } from '../../models/Footer.ts';
import { currentWindow } from '../../assets/styles/breakpoint.ts';
import AnimatedSection from './AnimatedSection.vue';

export default {
    name: 'Footer',
    components:{
        AnimatedSection
    },
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
        <AnimatedSection>
            <h2 class="text-center ms-title p-5">LINGUAGGI E STRUMENTI</h2>
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
                    <div>© 2024 Mattia Angelini. </div>
                    <div>Tutti i diritti riservati.</div>
                </div>
            </section>
        </AnimatedSection>    
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

footer {
    background-color: $primary-color;
    display: grid;

    .ms-title {
        padding: 4%;
        color:  $baffo;
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
        background: radial-gradient(circle, $baffo, rgba(0, 0, 0, 0) 75%);

        .logo {
            height: auto;
            width: 100%;
            padding: 8%;
            background-color: $primary-color;
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
        margin: 30px 10px 30px 10px;
        font-size: 12px;
        color: black;
    }
}
</style>
