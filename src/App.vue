<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <span class="nav">
      <h1 class="title">Moji oglasi</h1>
      <RouterLink to="/" class="nav-buttom">Home</RouterLink>
      <RouterLink to="/ads" class="nav-buttom">Oglasi</RouterLink>
    </span>
  </header>
  <RouterView></RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0px;
  margin: 0px;
  color: #2c3e50;
}

header {
  width: 100%;
  padding: 0px;
  margin: 0px;
  display: inline-block;
  text-align: center;
}

.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: lightgray;
}

.title {
  width: 42%;
}

.nav-buttom {
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: rgb(133, 204, 252);
  color: black;
  text-decoration: none;
}

.nav-buttom:hover {
  background-color: rgb(133, 230, 252);
}
</style>
