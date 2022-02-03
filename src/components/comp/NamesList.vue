<template>
  <ul>
    <li v-for="name in items" :key="name">{{ name }}</li>
  </ul>
  <button @click="getData">More</button>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      page: 1,
    };
  },
  async created() {
    this.getData();
  },
  methods: {
    async getData() {
      const url = `https://rickandmortyapi.com/api/character?page=${this.page}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.items = this.items.concat(
          data.results.map((character) => character.name)
        );
        this.page++;
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>

<style>
</style>