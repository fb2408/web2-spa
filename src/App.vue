<script setup>
import { RouterLink, RouterView } from "vue-router";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAuRva9OltSC3DfVD0xwb9cYCnCtnXbCTo",
//   authDomain: "web2-spa-a378d.firebaseapp.com",
//   projectId: "web2-spa-a378d",
//   storageBucket: "web2-spa-a378d.appspot.com",
//   messagingSenderId: "159734722048",
//   appId: "1:159734722048:web:046f25ecd21abf530af2e5",
//   measurementId: "G-CRYKDW2TJJ"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
</script>

<template>
  <header>
    <span class="navigation">
      <h1 class="title">Movies App</h1>
      <RouterLink to="/" class="navigation-button">Home</RouterLink>
      <RouterLink to="/movies" class="navigation-button">Movies</RouterLink>
    </span>
  </header>
  <RouterView></RouterView>
</template>

<style>
#app {
  background-color: rgb(23 37 84);
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

.navigation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: lightgray;
}

.title {
  width: 42%;
  color: rgb(23 37 84);
}

.navigation-button {
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: rgb(23 37 84);
  color: white;
  text-decoration: none;
}

.navigation-button:hover {
  background-color: #63E6BE;
}
</style>
