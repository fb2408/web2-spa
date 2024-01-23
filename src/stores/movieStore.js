import { defineStore } from "pinia";

export const useMovieStore = defineStore("moviesStore", {
  state: () => ({
    movies: [
      {
        id: 1,
        title: "The Shawshank Redemption",
        image: "assets/shawnshankRedemption.jpeg",
        director: "Frank Darabont",
        topCast: "Tim Robbins",
        description: "Bjezanje iz zatvora.",
        fav: true,
      },
      {
        id: 2,
        title: "The Godfather",
        image: "assets/godfather.webp",
        director: "Francis Ford Coppola",
        topCast: "Marlon Brando",
        description: "Talijanska mafija.",
        fav: true,
      },
      {
        id: 3,
        title: "The dark knight",
        image: "assets/thedarkknight.jpeg",
        director: "Christopher Nolan",
        topCast: "Christian Bale",
        description: "Batman.",
        fav: false,
      },
      {
        id: 4,
        title: "12 Angry Men",
        image: "assets/12angrymen.jpeg",
        director: "Sidney Lumet",
        topCast: "Henry Fonda",
        description: "Ubojstvo u New Yorku.",
        fav: false,
      },
      {
        id: 5,
        title: "Pulp Fiction",
        image: "assets/pulpfiction.avif",
        director: "Quentin Tarantino",
        topCast: "John Travolta",
        description: "Dobar film.",
        fav: false,
      },
      {
        id: 6,
        title: "Forrest Gump",
        image: "assets/forrestgump.jpeg",
        director: "Robert Zemeckis",
        topCast: "Tom Hanks",
        description: "Ikonski film.",
        fav: false,
      },
      {
        id: 7,
        title: "Fight club",
        image: "assets/fightclub.jpeg",
        director: "David Fincher",
        topCast: "Brad Pitt",
        description: "Psiholoski film.",
        fav: false,
      },
    ],
  }),
  getters: {
    allMovies: (state) => state.movies,
    getMovieById: (state) => {
      return (id) => state.movies.find((movie) => movie.id === id);
    },
  },
  actions: {
    deleteMovie(id) {
      this.movies = this.movies.filter((x) => x.id !== id);
    },
    setToFav(movie) {
      this.getMovieById(movie.id).fav = !this.getMovieById(movie.id).fav;
    },
    insertMovie(movie) {
      this.movies.push(movie);
    },
  },
});
