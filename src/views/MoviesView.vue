<template>
  <div class="movies">
    <div class="empty-div"></div>
    <h1 class="movies-title">This is movies page</h1>
    <i class="fa fa-plus-square" @click="toggleCreateForm"></i>
    <div class="fav-buttons-div">
      <button v-if="!showFav" @click="toggleShowFav" class="fav-botton">
        Favourites Movies
      </button>
      <button v-else @click="toggleShowFav" class="fav-botton">
        Watched movies
      </button>
    </div>
  </div>
  <div class="container" v-if="showFav">
    <div v-for="movie in getFavs" :key="movie.id">
      <MovieDetails :movie="movie" @delete-movie="deleteMovie" />
    </div>
  </div>
  <div class="container" v-else>
    <div v-for="movie in allMovies" :key="movie.id">
      <MovieDetails :movie="movie" @delete-movie="deleteMovie" />
    </div>
  </div>
  <div v-if="creatingNew">
    <CreateMovie
      :creatingNew="creatingNew"
      @closing-form="toggleCreateForm"
      @new-movie="createNewMovie"
    ></CreateMovie>
  </div>
</template>

<script>
import MovieDetails from "../components/MovieDetails.vue";
import CreateMovie from "../components/CreateMovie.vue";

import { mapState, mapActions } from "pinia";
import { useMovieStore } from "../stores/movieStore.js";

export default {
  components: { MovieDetails, CreateMovie },
  data() {
    return {
      showFav: false,
      creatingNew: false,
    };
  },
  computed: {
    ...mapState(useMovieStore, ["allMovies"]),
    getFavs() {
      return this.allMovies.filter((movie) => movie.fav);
    },
  },
  methods: {
    ...mapActions(useMovieStore, ["insertMovie"]),
    toggleShowFav() {
      this.showFav = !this.showFav;
    },
    deleteMovie() {
      console.log("movie successfully deleted");
    },
    toggleCreateForm() {
      this.creatingNew = !this.creatingNew;
    },
    createNewMovie(args) {
      console.log("Created new ad " + args.newMovie);
      this.insertMovie(args.newMovie);
      this.creatingNew = false;
    },
  },
};
</script>

<style>
.movies {
  width: 100%;
  display: inline;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.fav-botton {
  display: inline;
  padding: 0.8rem;
  color: white;
  background-color: rgb(30 64 175);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 10px;
  margin-bottom: 0px;
  border: none;
}

.movies-title {
  color: white;
  flex-grow: 8;
}

.fav-botton:hover {
  background-color: #63E6BE;
}

.text-to-fav {
  margin-top: 0;
  padding-top: 0;
}

.empty-div {
  margin: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  flex-grow: 1;
}

.fa-plus-square {
  display: inline;
  font-size: 45px;
  color: lightgray;
  flex-grow: 0.4;
}

.fa-plus-square:hover {
  color: rgba(211, 211, 211, 0.659);
}

.fav-buttons-div {
  flex-grow: 0.6;
}
</style>
