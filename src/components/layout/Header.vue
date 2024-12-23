<script lang="ts">
import { Header } from '../../models/Header.ts';
import { PropType } from 'vue';
import HamburgerHeader from '../common/HamburgerHeader.vue';
export default {
    name: 'Header',
    components:{
        HamburgerHeader,
    },
    
    data(){
        return{
            isDownload: false,     
        }
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
    methods:{
        modal(label:string){
            console.log(label)
            if(label === 'Download CV'){
             this.isDownload = true;
            } else { this.isDownload = false}
            console.log(this.isDownload)
        },

        closeModal(){
            this.isDownload = false
        }
    }
};
</script>

<template>
    <header>
        <!--Header Links-->
        <div :style="Columns" class="links">
            <div class="d-flex gap-3 align-items-center">
                <div class="myname">MATTIA ANGELINI</div>
                <a  
                    :href="icon.href"
                    class="d-none d-lg-block" 
                    v-for="(icon, index) in header.icons" 
                    :key="index"
                >
                    <i  :class="icon.label"></i>
                </a>
            </div>

            <a                
                class="d-none d-lg-block" 
                v-for="(link, index) in header.links" 
                :key="index"               
            >
                <router-link @click="modal(link.label)" :to="{ name: link.href }"> {{ link.label }}  </router-link>                 
            </a>       
            <!--componente hamburgerHeader-->
            <HamburgerHeader :offcanvas="header.hamburger" />
        </div>
    </header>
    
    <section class="ms-modal" v-if="isDownload">
        <div class="info-modal">
        <div>Confermi di voler scaricare il mio cv?</div>
        <div>
            <div class="buttons d-flex gap-3 p-3">
                <a download href="../../../public/test.jpg" type="button" class="btn btn-primary p-1">DOWNLOAD</a>
                <button @click="closeModal" type="button" class="btn btn-secondary p-1">CLOSE</button>
            </div>
        </div> 
        </div>
     </section>
</template>

<style scoped lang="scss">
@use '../../assets//styles/partials/mediaqueries/mediaqueries.scss' as *;

header {
    color: white;
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 10vh;
    max-height: 20vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    align-items: center;
    padding: 10px;

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

.ms-modal{
        background-color: rgba(0,0,0,0.6);
        z-index: 999;
        position: fixed;
        height: 100%;
        width: 100%;

        .info-modal{
            position: fixed;
            left: 35%;
            top: 35%;
            height: 30%;
            width: 30%;
            z-index: 998;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgb(195, 191, 191);
            border-radius: 20px;   
            border: 1px solid grey
        }
    }

</style>
