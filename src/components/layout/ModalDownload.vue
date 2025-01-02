<script lang="ts">
import { useMainStore } from '../../store.ts';

export default{
    name: 'ModalDownload',

    props:{
        title:{
            type:String,
            required: true
        }, 
        file :{
            type: String,
            required:true
        },
  
    },
    
    data(){
        return{
            store: useMainStore(),
        }
    },

    methods:{
        close(){        
            alert('ciao')
        }
    }
}
</script>
<template>  
    <!-- Modal -->
     <section>
        <div class="ms-modal">
        <div>{{title}}</div>
        <div>
            <div class="buttons d-flex gap-3 p-3">
                <a download :href="file" type="button" class="btn btn-primary p-1">DOWNLOAD</a>
                <button @click="close" type="button" class="btn btn-secondary p-1">CLOSE</button>
            </div>
        </div> 
        </div>
     </section>
    
</template>

<style scoped lang="scss">
@use '../../assets/styles/generic.scss' as *;

    section{
        background-color: rgba(0,0,0,0.6);
        position: fixed;
        height: 100%;
        width: 100%;

        .ms-modal{
            position: absolute;
            left: 25%;
            top: 25%;
            min-height: 30%;
            min-width: 80%;
            transform: translate(-25%, -5%);
           
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