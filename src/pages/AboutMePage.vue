<script lang="ts">
import { useMainStore} from '../store.ts';
export default{
    name: 'AboutMePage',
    
    data(){
        return{
            store: useMainStore()
        }
    },
}

</script>

<template>
    <section>
        <div class="container d-block d-md-flex p-4">

            <div class="info p-3">
                <h1>{{ store.AboutMe.title }}</h1>
                <p>
                    Ciao, sono Mattia.
                    Nato a Udine il 22 giugno 1993, oggi vivo a Bari. Il mio percorso nel mondo della programmazione è iniziato con la Boolean Tech Academy, dove ho completato una formazione intensiva come programmatore full stack. Da allora, continuo a crescere e a perfezionarmi, con particolare interesse per il front-end development.
                    Oltre al codice, sono un insegnante di Brazilian Jiu-Jitsu, cintura viola con oltre 5 anni di pratica. La costanza, la disciplina e la dedizione che applico sul tatami sono gli stessi valori che porto nella mia vita professionale.
                    In questo sito racconto il mio percorso, unendo lavoro, passioni e voglia di migliorarmi ogni giorno.
                </p>

            </div>
            

            <div class="ms-cards">

                <div class="container-img d-flex justify-content-center">
                    <img :src="store.AboutMe.image" alt="">
                </div>

                <div class="stats pt-4">

                    <div class="ms-badge">
                        <div>+ 3.5</div>
                        <p>Anni di esperienza</p>
                    </div>

                    <div class="ms-badge">
                        <div>+ 3.5</div>
                        <p>Anni di esperienza</p>
                    </div>
                    <div class="ms-badge">
                        <div>+ 3.5</div>
                        <p>Anni di esperienza</p>
                    </div>
                    <div class="ms-badge">
                        <div>+ 3.5</div>
                        <p>Anni di esperienza</p>
                    </div>

                </div>

            </div>
           
          

        </div>  
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/generic.scss' as *;

section{
    min-height: 100vh;
    background-color: grey; 

                img{              
                    width: 400px;  
                    border-radius: 6px,                                     
                }

                .stats{                   
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-row: 1fr 1fr;
                gap: 10px;

                    .ms-badge{
                        border-radius: 10px;
                        background-color: lightgray;
                        padding: 6px;
                    }
                }
                
}
</style>