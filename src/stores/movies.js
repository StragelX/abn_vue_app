import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
    isLoading: true,
  }),

  actions: {
    saveFetchedMovies(data) {
      this.movies = data;
      this.setLoading(false);
    },

    moviesSortedByGenre(genre) {
      return this.movies
        .filter((movie) => movie._embedded.show.genres.includes(genre))
        .sort(
          (a, b) =>
            a._embedded.show.genres.indexOf(genre) -
            b._embedded.show.genres.indexOf(genre)
        );
    },

    setLoading(value) {
      this.isLoading = value;
    },
  },

  getters: {
    topRatedMovies() {
      return this.movies
        .sort(
          (a, b) =>
            b._embedded.show.rating.average - a._embedded.show.rating.average
        )
        .slice(0, 20);
    },

    allGenres() {
      const genres = new Set();
      this.movies.forEach((movie) => {
        movie._embedded.show.genres.forEach((genre) => {
          genres.add(genre);
        });
      });
      return Array.from(genres);
    },

    Loading() {
      return this.isLoading;
    },
  },
});
