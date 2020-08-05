<template>
  <div id="app">
    <TvShows/>   
  </div>
</template>

<script>
import TvShows from './components/TvShows.vue'

export default {
  name: 'App',
  components: {
    TvShows
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
