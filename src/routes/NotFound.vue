<template>
  <main class="main">
    <h1><span>404</span><br />Page Not Found</h1>
    <button class="btn btn-primary" @click="goHome">Go To Home</button>
  </main>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.main {
  margin-top: 150px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  span {
    color: $primary;
  }

  margin-bottom: 100px;
}

@media (max-width: 579px) {
  h1 {
    font-size: 50px;
  }
}
</style>
