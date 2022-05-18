<template>
  <section class="container">
    <div class="inner" :class="{ 'not-found': !movies.length }">
      <div
        class="spinner-border text-primary"
        v-if="loading && !movies.length"
      ></div>
      <div class="message" v-if="message">{{ message }}</div>
      <section class="movies" v-else>
        <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
      </section>
    </div>
  </section>
</template>

<script>
import MovieItem from "~/components/MovieItem.vue";

export default {
  components: {
    MovieItem,
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
    message() {
      return this.$store.state.movie.message;
    },
    loading() {
      return this.$store.state.movie.loading;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
  margin-top: 2rem;
  .inner {
    background-color: $gray-300;
    padding: 10px 20px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    & .not-found {
      padding: 80px 0;
    }
  }
  .message {
    margin: 30px 0;
    color: $gray-500;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
