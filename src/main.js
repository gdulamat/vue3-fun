import { createApp } from "vue";
import App from "./App.vue";
import Characters from "./components/Characters.vue";
import LiveCoding from "./components/LiveCoding.vue";
import Exercise from "./components/Exercise.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Characters },
  { path: "/live-coding", component: LiveCoding },
  { path: "/exercise", component: Exercise }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(router).mount("#app");
