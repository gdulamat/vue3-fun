<template>
  <ul>
    <li v-for="name in items" :key="name">{{ name }}</li>
  </ul>
  <button @click="getData">More</button>
  <div>
    <span v-for="drink in items" :key="drink">{{ drink }}</span>
  </div>
</template>

<script>
import requestMixin from "../../mixins/requestMixin.js";
export default {
  mixins: [requestMixin],
  data() {
    return {
      category: "location",
      items: ["kawa", "herbata", "kakao"],
    };
  },
  async created() {
    this.getData();
  },
};
</script>

<style>
</style>