<template>
  <div id="app">
    <nav>
    <div class="nav-wrapper teal lighten-2">
      <a id="titulo">TV Shows</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link v-bind:to="{ name: 'TvShows' }">Inicio</router-link></li>
      </ul>
    </div>
    </nav>
    <br>
    <br>
    <br>
    <router-view />    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

#titulo{
    font-family: 'Bungee Shade', cursive;
    margin-right: 1200px;
    font-size: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav{
  position: fixed;
}


</style>
