import _uniqueBy from "lodash/uniqBy";

const _fetch = async (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(url));
    }, 1000);
  });
};

const fetchMovie = async (payload) => {
  const { title, type, year, page, id } = payload;

  const API_ROOT = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}`;
  const API_PARAMS = id
    ? `&i=${id}`
    : `&s=${title}&type=${type}&y=${year}&page=${page}`;

  try {
    const response = await _fetch(`${API_ROOT}${API_PARAMS}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  namespaced: true,
  state: {
    movies: [],
    movie: {},
    message: "Search for the movie title",
    loading: false,
  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    async getMovies({ state, commit }, payload) {
      if (state.loading) return;

      commit("updateState", { loading: true, message: "" });
      try {
        const res = await fetchMovie({ ...payload, page: 1 });

        if (res.Response === "False") {
          commit("updateState", {
            movies: [],
            message: res.Error,
          });

          return;
        }

        commit("updateState", {
          movies: _uniqueBy(res.Search),
          message: "",
        });

        if (payload.number <= 10) return;

        const pageLength = Math.ceil(payload.number / 10);

        for (let i = 2; i <= pageLength; i++) {
          const res = await fetchMovie({ ...payload, page: i });

          commit("updateState", {
            movies: _uniqueBy([...state.movies, ...res.Search]),
            message: "",
          });
        }
      } catch (error) {
        console.error(error.message);
        commit("updateState", {
          message: "Something went wrong",
          movies: [],
        });
      } finally {
        commit("updateState", { loading: false });
      }
    },
    async getMovie({ state, commit }, payload) {
      if (state.loading) return;

      commit("updateState", { loading: true, movie: {} });

      try {
        const res = await fetchMovie(payload);
        commit("updateState", {
          movie: res,
        });
      } catch (error) {
        console.error(error.message);
        commit("updateState", {
          message: "Something went wrong",
          movie: {},
        });
      } finally {
        commit("updateState", { loading: false });
      }
    },
  },
};
