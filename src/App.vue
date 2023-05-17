<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/aufgabe_1">Aufgabe 1</RouterLink>
      <RouterLink to="/aufgabe_2">Aufgabe 2</RouterLink>
      <RouterLink to="/任务一">任务一</RouterLink>
      <RouterLink to="/表格">表格</RouterLink>
      <RouterLink to="/npc">npc</RouterLink>


    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  background-color: violet;
}

nav a {
  display: block;
  color: black;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
}
nav a:hover {
  color: 	#9F2B68;
}
</style>
