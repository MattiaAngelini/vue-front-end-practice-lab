<script lang="ts">
import { Offcanvas } from '../../models/Offcanvas';
import { PropType } from 'vue';
export default {
    name: 'HamburgerHeader',
    props: {
        offcanvas: {
            type: Object as PropType<Offcanvas>,
            required: true,
        },
    },
    data() {
        return {
            isVisible: false,
            isDownload: false,  
        };
    },
    methods: {

        toggle() {
             this.isVisible = !this.isVisible;
        },

        modal(label:string){
            console.log(label)
            if(label === 'DOWNLOAD CV'){
                this.isDownload = true;
            } else {
                this.isDownload = false}
        },

        closeModal(){
            this.isDownload = false
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
    <div class="ms-hamburger d-block d-lg-none" type="button" @click="toggle()">
        <!--Hamburger creato con triplo div per problema icon-->
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div :class="change" class="hamburger-body">
        <div class="d-flex justify-content-between align-items-center">
            <h1>{{ offcanvas.title }}</h1>       
            <button class="btn ms-btn-close" @click="toggle">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        
        <div>
            <div class="rule"></div>
            <div>
                <li 
                    class="list-unstyled" 
                    v-for="(link, index) in offcanvas.links" 
                    :key="index"
                >
                    <router-link @click="modal(link.link)"  :to="{ name: link.url }">
                        <a @click="toggle">{{ link.link }}</a>
                    </router-link>
                </li>
                <li class="list-unstyled" ><a href="https://www.linkedin.com/in/mattia-angelini-b00427311/">LINKEDIN</a></li>
                <li class="list-unstyled" ><a href="https://github.com/MattiaAngelini">GIT-HUB</a></li>             
            </div>
        </div>
    </div> 

    <section class="ms-modal" v-if="isDownload">
        <div class="d-flex justify-content-center mt-5">
            <div class="info-modal">
        <div>Confermi di voler scaricare il mio cv?</div>
        <div>
            <div class="buttons d-flex gap-3 p-3">
                <a download href="/files/cv.pdf" type="button" class="btn btn-primary p-1">DOWNLOAD</a>
                <button @click="closeModal" type="button" class="btn btn-secondary p-1">CLOSE</button>
            </div>
        </div> 
        </div>

        </div>
        
     </section>
</template>

<style scoped lang="scss">


.hamburger-body {
    font-family: "Kanit", serif;
    color: white;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background-color:#2d2d2d;
    min-width:100%;
    min-height: 100vh;
    height: 100%;
    animation-duration: 0.3s;
    animation-name: slide-in;
    overflow-y: hidden;
   
        button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        
        }
        .rule{
            min-height: 2px;
            margin: 10px 0 10px 0;
            background-color: black;
            box-shadow: 0px 0px 5px 0.3px rgb(140, 9, 211);;
        }
        a{

            font-size: 20px;
            font-weight: 800;
            line-height: 60px;
            text-decoration: none;
            font-weight: 600;
            color: white;
        }
      
        i{
            font-size: 24px;
        }
        .ms-btn-close{
            font-size: 20px;
            font-weight: 900;
            color: white;
        }

    @keyframes slide-in {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
}

.ms-hamburger {
    grid-column: 6 / 6;
    align-self: center;
    padding: 10px;
    border-radius: 2px;
    font-size: 20px;
    width: 50px;

        div{
            width: 100%;
            height: 3px;
            background-color:rgb(140, 9, 211);
            margin: 6px;
            border-radius: 4px;
        }
}

.ms-modal{
        background-color: rgba(0,0,0,0.6);
        z-index: 999;
        position: fixed;
        top:0;
        left:0;
        height: 100%;
        width: 100%;

        .info-modal{
            color: black;
            padding: 5%;
            position: fixed;
            top: 25%;
            min-height: 30%;
            min-width: 50%;
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
