<template v-if="loading">
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    width: 300px;
    height: 300px * 3 / 2;
    margin-right: 70px;
  }
}
.specs {
  flex-grow: 1;
}
.skeleton {
  border-radius: 10px;
  background-color: $gray-200;
  animation: skeleton-gradient 1.8s infinite ease-in-out;
  &.title {
    width: 80%;
    height: 70px;
  }
  &.spec {
    width: 60%;
    height: 30px;
    margin-top: 20px;
  }
  &.plot {
    width: 100%;
    height: 250px;
    margin-top: 20px;
  }
  &.etc {
    width: 50%;
    height: 50px;
    margin-top: 20px;
  }
}

@keyframes skeleton-gradient {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

@media (max-width: 770px) {
  .skeletons {
    flex-direction: column;
    .poster {
      margin-right: 0;
      margin-bottom: 20px;
    }
    .specs {
      .title {
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
      }
      .spec {
        width: 100%;
        height: 20px;
        margin-bottom: 20px;
      }
      .plot {
        width: 100%;
        height: 125px;
        margin-bottom: 20px;
      }
      .etc {
        width: 100%;
        height: 25px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
