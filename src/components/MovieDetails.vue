<template>
  <div :class="{ fav: movie.fav }" class="one-movie">
    <img :src="movie.image" alt="Slika" class="movie-img" />
    <h2 class="one-movie-el">{{ movie.title }}</h2>
    <h3 class="one-movie-el">Najbolja uloga: {{ movie.topCast }}</h3>
    <h4 class="one-movie-el">Scenarist: {{ movie.director }}</h4>
    <p class="one-movie-el">{{ movie.description }}</p>
    <div class="fav-and-button">
      <i class="fa fa-heart heart" @click="setToFav(movie)"></i>
      <button class="delete-btn" @click="deleteMovie_local(movie.id)">Obriši</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useMovieStore } from "../stores/movieStore.js";

export default {
  props: ["movie"],
  methods: {
    ...mapActions(useMovieStore, ["deleteMovie", "setToFav"]),
    deleteMovie_local(id) {
      this.deleteMovie(id);
      this.$emit("deleteMovie");
    },
  },
};
</script>

<style scoped>
.movie-img {
  width:95%;
  margin:3px;
  height: 150px;
}

.one-movie-el {
  width:90%;
  padding-top: 2px;
  padding-bottom: 2px;
  margin:2px;
}

.one-movie {
  width: 250px;
  height:380px;
  opacity: 0.75;
  background-color: #63E6BE;
  margin: 10px;
  border-radius: 5px;
  padding: 2rem;
}

.fav-and-button {
  margin: 15px;
  display: flex;
  justify-content: space-evenly;
}

.heart {
  font-size: 26px;
  color: beige;
}

.delete-btn {
  border-radius: 5px;
  background-color: lightgray;
}

.fav .heart {
  color: rgba(255, 0, 0, 0.792);
}
</style>
