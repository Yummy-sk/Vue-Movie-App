import { createRouter, createWebHashHistory } from "vue-router";
import Home from "~/routes/Home.vue";
import NotFound from "~/routes/NotFound.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});
