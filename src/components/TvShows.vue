<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h3>TV Shows</h3>
        <br>
        <table class="striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Network</th>
              <th>Is Current</th>
              <th>Number of Seasons</th>
              <th>IMDB Rating</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="show in tv_shows" v-bind:key="show.id">
              <td> {{show.title}} </td>
              <td> {{show.network}} </td>
              <td>
                <span v-if="show.isCurrent">Yes</span>
                <span v-else>No</span>
              </td>
              <td> {{show.nOfSeasons}} </td>
              <td> {{show.imdbRating}} </td>
              <td id="genre" v-for="(genreindividual, i) in show.genre" v-bind:key="i">{{genreindividual}}</td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div>
    <div class="row">
      <form class="col s12 m12">
        <h3>Add a Show</h3>
        <br>
        <div class="row">
          <div class="input-field col m6 s12">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col m6 s12">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m6 s12">
            <input disabled value="I am not editable" id="disabled" type="text" class="validate">
            <label for="disabled">Disabled</label>
          </div>
          <div class="input-field col m6 s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m6 s12">
            <input id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
      </form>
    </div>
  </div>       
</template>

<script>
import { db } from '../firebase'; 

export default {
  name: 'TvShows',
  data(){
    return {
      tv_shows: [] // to start, the list is empty
    }
  },
  firestore() { // adding this key/function
    return {
      tv_shows: db.collection('tv_shows')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
