<template>
  <div>
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/live-coding">Live coding</router-link>
      <router-link to="/exercise">Exercise</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}

a {
  display: inline-block;
  margin: 0 10px;
}
</style>