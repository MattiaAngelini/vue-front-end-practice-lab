<script lang="ts">
import ButtonCustom from '../../stories/Buttons/ButtonCustom.vue';
import { useMainStore} from '../../store';
import AnimatedSection from '../layout/AnimatedSection.vue';

export default{
    name: 'WrapHome',
    components:{
        ButtonCustom,
        AnimatedSection
    },
    data(){
        return{
            store: useMainStore(),
              
        }
    },
}
</script>
<template>  

<section>
    <AnimatedSection>
        <div class="d-flex justify-content-center align-items-center info">
            <div class="d-flex flex-column align-items-center">
                <h1 class="text-center p-3">My coding experience</h1>
                <ButtonCustom :button="store.btnProjectsPage" isRouter ></ButtonCustom>        
            </div>
        </div>
    </AnimatedSection>  
</section>

</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

section{
    min-height: 70vh;
    
        h1{
        color: white;
        }

        .info{
            min-height: 70vh;
        }
        button{
            width: 50px;
            background-color: $baffo;
            border: none;
            color: white;
        }
        
}
</style>