<template>
    <div>
        <h3 class='bg-danger form-comtrol'>Éste es un componente</h3>
        <input type="text" class="form-control" placeholder="Ingrese un valor"/>
        <ul>
            <li v-for="(item, index) in lista" :key="index">{{item.nombre}} || {{item.descripcion}}</li>
        </ul>
        <img  src="/assets/img/CursoVueJs.png" width="800 px" height="400px" />
    </div>
</template>
<script>
    export default {
        data(){
            return{
                lista : [
                    {"nombre" : "Itapir", "descripcion" : "Animal que habita en latinoamérica parecio a un cerdo"},
                    {"nombre" : "Anaconda", "descripcion" : "Serpiente más grande del mundo, no tienen veneno, estruja a asus presas"},
                    {"nombre" : "Colibrí", "descripcion" : "Uno de las aves más pequeñás, su aleteo es similar a la de un insecto, vuela en todas direcciones"},
                ]
            }
        }
    }
</script>
