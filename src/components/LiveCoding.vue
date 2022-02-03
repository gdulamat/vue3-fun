<template>
  <div>
    <div class="mt-2" v-if="isVisible">{{ name }}</div>
    <button @click="toggle">Toggle name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Macopedia",
      isVisible: true,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style>
</style>