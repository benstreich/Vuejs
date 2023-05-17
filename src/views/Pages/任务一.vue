<template>
  <Button :class="Background" :id="Text" style="width: 200px; height: 50px; margin-top: 50px;">{{ Text }} - {{ Background }}</Button>

  <h1>BWWWWWWWWW🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿💀💀</h1>
  <p @click="Background = '💀'">💀</p>
  <p @click="Background = '🐴'">🐴</p>
  <p @click="Background = '🗿'">🗿</p>
  <p @click="Background = '🥷🏿'">🥷🏿</p>
  <p @click="Background = '🐨'">🐨</p>
  <p @click="Background = '🙋🏿‍♂️'">🙋🏿‍♂️</p>
 
  <h1>BWWWWWWWWW🗿🗿🗿🗿🗿🗿</h1>
    <p @click="Text = '💀'">💀</p>
  <p @click="Text = '🐴'">🐴</p>
  <p @click="Text = '🗿'">🗿</p>
  <p @click="Text = '🥷🏿'">🥷🏿</p>
  <p @click="Text = '🐨'">🐨</p>
  <p @click="Text = '🙋🏿‍♂️'">🙋🏿‍♂️</p>
</template>

<script setup>
import { ref } from "vue";

const Background = ref("");
const Text = ref("");
</script>

<style>
.💀 {
  background-color: green;
}
.🐴 {
  background-color: red;
}
.🗿 {
  background-color: yellow;
}
.🥷🏿 {
  background-color: blue;
}
.🐨 {
  background-color: black;
}
.🙋🏿‍♂️ {
  background-color: white;
}

#💀 {
  color: green;
}
#🐴 {
  color: red;
}
#🗿 {
  color: yellow;
}
#🥷🏿 {
  color: blue;
}
#🐨 {
  color: black;
}
#🙋🏿‍♂️ {
  color: white;
}


</style>