<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12 ">
        <h3>TV Shows</h3>
        <br>
        <table class="striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Network</th>
              <th>Is Current</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="show in tv_shows" v-bind:key="show.id">
              <td><router-link v-bind:to="{ path:'/'+ show.id }">{{show.title}}</router-link></td> 
              <td> {{show.network}} </td>
              <td>
                <span v-if="show.isCurrent">Yes</span>
                <span v-else>No</span>
              </td>
              <td> {{show.genre.join(" / ")}} </td>
            </tr>
          </tbody>
        </table>
      </div> 
    </div>
    <div class="row">
      <form class="col s12 m12 ">
        <h3>Add a TV Show</h3>
        <br>
        <div class="row">
          <div class="input-field col m6 s12">
            <input id="title" type="text" required="required" maxlength="30" class="validate" v-model="add_title">
            <label for="title">Title</label>
          </div>
          <div class="input-field col m6 s12">
            <input id="network" type="text" required="required" maxlength="30" class="validate" v-model="add_network">
            <label for="network">Network</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m6 s12">
            <input id="genres" type="text" required="required" class="validate" maxlength="40" v-model="add_genres">
            <label for="genres">Genres (separated by commas)</label>
          </div>
          <div class="input-field col m6 s12">
            <input id="seasons" type="number" required="required" class="validate"  min="0" max="50" v-model="add_seasons">
            <label for="seasons">Number of Seasons</label>
          </div>
        </div>
        <div class="row">
          <div class="col m2 s12">
            <p>Is the show current?</p>
          </div>
          <div class="col m4 s12">
            <form action="#">
              <p id="yes">
                <label >
                  <input class="with-gap" name="iscurrent" type="radio" value="yes" v-model="add_current"/>
                  <span>Yes</span>
                </label>
              </p>
              <p id="no">
                <label >
                  <input class="with-gap" name="iscurrent" type="radio" value="no" v-model="add_current"/>
                  <span>No</span>
                </label>
              </p>
            </form>
          </div>
          <div class="input-field col m6 s12">
            <input id="rating" type="number" required="required" class="validate" step=".1" min="0" max="10" v-model="add_rating">
            <label for="rating">IMDB Rating</label>        
          </div>
        </div>
        <div class="row">
          <div class="input-field col m6 s12">
            <input id="imgurl" type="text" required="required" maxlength="150" class="validate" v-model="add_imageUrl">
            <label for="imgurl">TV Show image URL (300px * 500px suggested)</label>
          </div>
          <div class="col m6 s12">
            <br>
            <button @click="addShow()" class="btn waves-effect waves-light" type="submit" name="action">Add TV show
            <i class="material-icons right">add</i>
            </button>
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
      tv_shows: [], // to start, the list is empty
      add_title: '',
      add_network: '',
      add_genres: [],
      add_seasons: 0,
      add_current: '',
      add_rating: 0,
      add_imageUrl: ''

    }
  },
  firestore() { // adding this key/function
    return {
      tv_shows: db.collection('tv_shows')
    }
  },
  methods:{
    addShow(){
      db.collection("tv_shows").add({
        title: this.add_title,
        network: this.add_network,
        nOfSeasons: parseInt(this.add_seasons),
        genre: this.add_genres.split(","),
        isCurrent: this.add_current == 'yes' ? true : false,
        imdbRating: this.add_rating,
        imgUrl: this.add_imageUrl
      });
      // reset values
      this.add_title = "";
      this.add_network = "";
      this.add_genres = [];
      this.add_seasons = 0;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

h3 {
  margin: 40px 0 0;
  font-family: 'Bungee', cursive;

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

#yes, #no{
  display: inline-block;
}


</style>
