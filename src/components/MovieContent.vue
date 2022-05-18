<template>
  <div class="container movie-details">
    <div
      class="poster"
      :style="{
        backgroundImage: `url(${requestDiffSizeImage(movie.Poster)})`,
      }"
    ></div>
    <div class="specs">
      <div class="title">
        {{ movie.Title }}
      </div>
      <div class="labels">
        <span>{{ movie.Released }}</span>
        <span>{{ movie.Runtime }}</span>
        <span>{{ movie.Country }}</span>
      </div>
      <div class="plot">
        {{ movie.Plot }}
      </div>
      <div class="ratings">
        <h3>Ratings</h3>
        <div class="rating-wrap">
          <div
            class="rating"
            v-for="{ Source: name, Value: score } in movie.Ratings"
            :key="name"
            :title="name"
          >
            <img :src="imageUrl[name]" :alt="name" />
            <span>{{ score }}</span>
          </div>
        </div>
      </div>
      <div>
        <h3>Actors</h3>
        {{ movie.Actors }}
      </div>
      <div>
        <h3>Director</h3>
        {{ movie.Director }}
      </div>
      <div>
        <h3>Production</h3>
        {{ movie.Production }}
      </div>
      <div>
        <h3>Genre</h3>
        {{ movie.Genre }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.state.movie.movie;
    },
  },
  methods: {
    requestDiffSizeImage(url, size = 700) {
      if (url === "N/A") {
        return "https://i.imgur.com/mwg1HGn.png";
      }
      return url.replace("SX300", `SX${size}`);
    },
  },
  data() {
    return {
      imageUrl: {
        ["Metacritic"]: "https://i.imgur.com/w0LPNyw.png",
        ["Rotten Tomatoes"]: "https://i.imgur.com/9kXIY5G.png",
        ["Internet Movie Database"]: "https://i.imgur.com/DC9is0b.png",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.movie-details {
  display: flex;
  color: $gray-600;
  .poster {
    width: 300px;
    height: 300px * 3/2;
    margin-right: 70px;
    border-radius: 10px;
    background-color: $gray-200;
    background-size: cover;
    background-position: center;
    position: relative;
    flex-shrink: 0;
  }
  .specs {
    flex-grow: 1;
    .title {
      color: $black;
      font-family: "Oswald", sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels {
      color: $primary;
      span {
        &::after {
          content: "\00b7";
          margin: 0 6px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .plot {
      margin-top: 20px;
    }
    .ratings {
      .rating-wrap {
        display: flex;
        flex-direction: column;
        .rating {
          display: flex;
          align-items: center;
          img {
            height: 30px;
            flex-shrink: 0;
            margin-right: 6px;
          }
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      color: $black;
      font-family: "Oswald", sans-serif;
      font-size: 20px;
    }
  }
}
@media (max-width: 770px) {
  .movie-details {
    flex-direction: column;
    .specs {
      margin-top: 30px;
      .title {
        font-size: 40px;
      }
      .labels {
        font-size: 14px;
        span {
          &::after {
            display: none;
          }
        }
      }
      .plot {
        font-size: 14px;
      }
      .ratings {
        .rating-wrap {
          .rating {
            img {
              height: 20px;
              margin-right: 6px;
            }
          }
        }
      }
    }
  }
}
</style>
