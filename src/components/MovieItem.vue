<template>
  <figure
    class="movie"
    :class="{ loading }"
    :style="{
      backgroundImage: `url(${
        movie.Poster !== 'N/A' ? movie.Poster : 'https://url.kr/whseck'
      })`,
    }"
    @click="getMovie"
  >
    <div class="loading-container">
      <div
        class="spinner-border text-primary"
        :class="{ loading }"
        v-if="loading"
      ></div>
    </div>
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </figure>
  <Modal v-model="isShow" :close="closeModal">
    <ModalContent :closeModal="closeModal" :movie="movie" />
  </Modal>
</template>

<script>
import { ref } from "vue";
import ModalContent from "./ModalContent.vue";

export default {
  components: {
    ModalContent,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async getMovie() {
      this.showModal();
      await this.$store.dispatch("movie/getMovie", { id: this.movie.imdbID });
    },
  },
  computed: {
    loading() {
      return this.$store.state.movie.loading;
    },
  },
  setup() {
    const isShow = ref(false);

    function showModal() {
      isShow.value = true;
    }

    function closeModal() {
      isShow.value = false;
    }

    return {
      isShow,
      showModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.movie {
  $width: 168px;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;

  position: relative;
  &:hover::after,
  &.loading::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .loading-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .info {
    background-color: rgba($black, 0.3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: 14px;

    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    .year {
      color: $primary;
    }
    .title {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
