<script lang="ts">
import { useMainStore } from '../store.ts';
import axios from 'axios';
// import Header from '../components/layout/Header.vue';
// import Footer from '../components/layout/Footer.vue';
import CardBs from '../components/common/CardBs.vue';
import { currentWindow } from '../assets/styles/breakpoint.ts';

export default {
    name: 'BjjPage',
    components: {
        // Header,
        // Footer,
        CardBs
    },

    data() {
        return {
            data: null,
            store: useMainStore(),
            userChoices: [],
            techniques: [],
            sizeWindow: currentWindow(window.innerWidth),
        };
    },

    methods: {
        labelDropdown(key: string) {
            if (key === 'belts') {
                return 'Cintura';
            } else if (key === 'age_range') {
                return 'Età';
            } else {
                return 'Difficoltà';
            }
        },

        getTechniques() {
            axios
                .get('https://mocki.io/v1/93b6195f-e54e-48e2-866e-f94a591761da')
                .then(response => {
                    this.techniques = response.data;
                    console.log(this.techniques);
                })
                .catch(error => {
                    console.error('Errore nel recupero delle tecniche', error);
                });
        },

        getLayout() {
            window.addEventListener('resize', () => {
                this.sizeWindow = currentWindow(window.innerWidth);
                console.log(this.sizeWindow);
            });
        },

        filters() {
            this.techniques.forEach(technique => {
                if (this.userChoices.length === 0) {
                    technique.isVisible = true;
                }
                else{
                    this.userChoices.forEach(choice => {
                    if (
                        technique.belt.includes(choice)||
                        technique.difficulty.includes(choice) ||
                        technique.age_range.includes(choice)
                    ) {
                       
                    } else {
                        technique.isVisible = false;
                    }
                });}
            });
        },
    },

    computed: {
        columns(): Record<string, string> {
            if (this.sizeWindow === 'xl' || this.sizeWindow === 'xxl') {
                return { gridTemplateColumns: 'repeat(3, 1fr)' };
            } else if (this.sizeWindow === 'xs' || this.sizeWindow === 'xxs') {
                return { gridTemplateColumns: '1fr' };
            } else {
                return { gridTemplateColumns: 'repeat(2, 1fr)' };
            }
        },
    },

    mounted() {
        this.getTechniques();
        this.getLayout();
    }
};
</script>


<template>
    <!-- <Header :header="store.mainHeader" /> -->
    <main class="p-5">
        <h1 class="text-center mb-5">MIGLIORA IL TUO BJJ E ALLENA LE TECNICHE IN BASE AL TUO LIVELLO</h1>

        <div class="dropdown buttons-drop d-lg-flex d-md-flex d-block">
            <div v-for="(filter, index) in store.filters" :key="index">
                <button
                    class="btn btn-secondary dropdown-toggle m-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {{ labelDropdown(Object.keys(filter)[0]) }}
                </button>

                <ul class="dropdown-menu">
                    <li v-for="(values, index2) in filter" :key="index2">
                        <label class="d-block" v-for="(value, index) in values" :key="index">
                            <input @change="filters" v-model="userChoices" type="checkbox" :value="value" />
                            {{ value }}
                        </label>
                    </li>
                </ul>
            </div>

        </div>

        <section class="p-3">
            <div :style="columns" class="cards">
                <CardBs
                    v-for="(item, index) in techniques"
                    :card="techniques[index]"
                    v-show="techniques[index].isVisible"
                />
            </div>
        </section>
    </main>
    <!-- <Footer :icons="store.logoFooter" /> -->
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

main {
    min-height: 100vh;
    background-color: lightgrey;

    .buttons-drop {
        display: grid;
        justify-content: center;
    }

    section {
        .cards {
            display: grid;
            gap: 14px;
            height: 100%;
        }
    }
}
</style>
