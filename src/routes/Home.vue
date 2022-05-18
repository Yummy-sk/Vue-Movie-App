<template>
  <Comment />
  <Search />
  <MovieList />
</template>

<script>
import Comment from "../components/Comment.vue";
import Search from "../components/Search.vue";
import MovieList from "../components/MovieList.vue";

export default {
  components: {
    Comment,
    Search,
    MovieList,
  },
};
</script>
