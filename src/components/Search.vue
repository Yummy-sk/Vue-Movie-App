<template>
  <div class="container">
    <input
      class="form-control"
      type="text"
      placeholder="Search for Movie"
      v-model="title"
      @keyup.enter="search"
    />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select"
      >
        <option v-if="filter.name === 'year'" value="">All Years</option>
        <option v-for="item in filter.items" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary" @click="search">Apply</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      type: "movie",
      number: 10,
      year: "",
      filters: [
        {
          name: "type",
          items: ["movie", "series", "episode"],
        },
        {
          name: "number",
          items: [10, 20, 30],
        },
        {
          name: "year",
          items: (() => {
            const years = [];
            const thisYear = new Date().getFullYear();
            for (let i = thisYear; i >= 1985; i--) {
              years.push(i);
            }
            return years;
          })(),
        },
      ],
    };
  },
  methods: {
    async search() {
      const payload = {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year,
      };
      this.$store.dispatch("movie/getMovies", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .form-control {
    flex: 2;
  }
  .selects {
    display: flex;
    flex: 3;
    select {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    display: flex;

    flex-direction: column;
    > * {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .form-control {
      flex: 1;
    }
    .selects {
      flex: 1;
      select {
        margin-right: 2;
        *:last-child {
          margin-right: 0;
        }
      }
    }
    .btn {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
