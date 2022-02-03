<template>
  <ul>
    <li v-for="name in items" :key="name">{{ name }}</li>
  </ul>
  <button @click="getData">More</button>
</template>

<script>
import requestMixin from "../mixins/requestMixin.js";
export default {
  mixins: ["kawa", "herbata", "kakao"],
  data() {
    return {
      category: "character",
    };
  },
  async created() {
    this.getData();
  },
};
</script>

<style>
</style>