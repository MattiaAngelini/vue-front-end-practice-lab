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
        <div class="container d-flex pt-5">

            <div class="info">
                <h1>{{ store.AboutMe.title }}</h1>
                <p>
                    Ciao, sono Mattia.
                    Nato a Udine il 22 giugno 1993, oggi vivo a Bari. Il mio percorso nel mondo della programmazione è iniziato con la Boolean Tech Academy, dove ho completato una formazione intensiva come programmatore full stack. Da allora, continuo a crescere e a perfezionarmi, con particolare interesse per il front-end development.

                    Oltre al codice, sono un insegnante di Brazilian Jiu-Jitsu, cintura viola con oltre 5 anni di pratica. La costanza, la disciplina e la dedizione che applico sul tatami sono gli stessi valori che porto nella mia vita professionale.

                    In questo sito racconto il mio percorso, unendo lavoro, passioni e voglia di migliorarmi ogni giorno.
                </p>

            </div>
            

            <div class="ms-cards">

                <div>
                    <img :src="store.AboutMe.image" alt="">
                </div>

                <div class="stats">
                    <div>
                        <div>+ 3.5</div>
                        <p>Anni di esperienza</p>
                    </div>

                    <div>
                        <div>+ 3.5</div>
                        <p>Anni di esperienza</p>
                    </div>

                    <div>
                        <div>+ 3.5</div>
                        <p>Anni di esperienza</p>
                    </div>
                    
                    <div>
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

        .info{
            width: 50%;
            
        }
        .ms-cards{
            width: 50%;

                img{
                    width: 100%;                 
                }
            
        }
}
</style>