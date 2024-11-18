<script lang="ts">

export default{
    name:'Footer',
    props:{
        icons: {
        type: Array as () => {image: string; }[],
        required: true,
    },
    }
}
</script>

<template>
    <footer>
        <h1 class="text-center">LINGUAGGI E STRUMENTI CON CUI LAVORO</h1>

        <section class="layout-footer">
            <div class="container container-logo">
                <div v-for="(icon,index) in icons" :key="index" class="logo">
                    <img v-show="icon.image !==''" :src="icon.image" alt="">
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

footer{
    min-height: 70vh;
    background-color: rgb(41, 36, 36);
    display: grid;

    h1{color: white;
        padding: 6%}

        .container-logo{      
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(5,1fr);
            grid-template-rows: repeat(3,1fr);
            gap: 4px;
            background: radial-gradient(circle, rgba(255, 103, 31, 0.6) 0%, rgba(0, 0, 0, 0) 75%);
            
                .logo{
                    height: 220px;
                    width: 100%;
                    padding: 8%;
                    background-color:  rgb(41, 36, 36);
                    
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
        }
        .policy{
            display: flex;
            justify-content: space-between;
            color: black;
            margin: 100px 10px 30px 10px;
        }
}

</style>