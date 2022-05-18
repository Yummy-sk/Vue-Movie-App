<template>
  <div class="modal-content modal-xl">
    <div class="modal-header">
      <h5 class="modal-title">{{ movie.Title }}</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        @click="closeModal"
      ></button>
    </div>
    <div class="modal-body">
      <Skelotons v-if="loading" />
      <MovieContent v-else />
    </div>
  </div>
</template>

<script>
import Skelotons from "~/components/Skelotons.vue";
import MovieContent from "~/components/MovieContent.vue";

export default {
  components: {
    Skelotons,
    MovieContent,
  },
  props: {
    closeModal: {
      type: Function,
      required: true,
    },
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    loading() {
      return this.$store.state.movie.loading;
    },
  },
};
</script>
