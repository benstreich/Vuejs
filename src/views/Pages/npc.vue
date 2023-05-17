<script setup>
import { ref } from "vue";

const desc = ref('');
const price = ref('');






const log = ref([
    {
        id: 1,
        text: 'Startsaldo',
        value: 1500
    },
    { 
        id: 2,
        text: 'Bus-Abo',
        value: -79
    },
    {
        id: 3,
        text: 'zigaretten',
        value: -8.2
    },
    {
        id: 4,
        text: 'neue gitarre',
        value: -800
    },
    {
        id: 5,
        text: 'hundefutter für hao',
        value: -20
    },
    {
        id: 6,
        text: 'Lohn',
        value: +1250
    }
])

const currentId = ref(2)

function add(){
   log.value.push({ id: id++, text: desc.value, value: price.value})
}



function roundto05(){
   return (Math.ceil((amount - 0.05), 1) + 0.05).toFixed(2);
}

</script>

<template>
   <table>
   <tr>
      <td class="text-left">Text</td>
      <td class="text-right">Aufwand (in CHF)</td>
      <td class="text-right">Ertrag (in CHF)</td>
   </tr>

   <tr v-for="logs in log" :key="logs.id">         <!--Bei Foreach :key mitgeben-->
      <td class="text-left">{{logs.text}}</td>
      <td class="text-right"> <span v-if="logs.value < 0">{{logs.value}} </span></td>
      <td class="text-right"><span v-if="logs.value > 0">{{logs.value}} </span></td>
   </tr>

</table>

<table class="table-bottom"> 
<tr>
   <td><label for="Beschreibung">Beschreibung:</label> </td>

   <td><label for="number">Preis:</label></td>
   <td></td>
   
</tr>

<tr>
   <td> <input v-model="desc" type="text" name="beschreibung"> </td>
   <td><input v-model="price" type="number" name="preis"></td>
   <td><button @click="add()">Hinzufügen</button></td>
</tr>
</table>

</template>

<style lang="scss">
table{
   margin-top: 20px ;
   width: 500px;
   margin: 0 auto;

   tr{
      border-bottom:  1px solid gray;
   }
   .text-left{
      text-align: left;
   }

   .text-right{
      text-align: right;
   }

   

}
.table-bottom{
      margin-top: 50px;





   }



</style>