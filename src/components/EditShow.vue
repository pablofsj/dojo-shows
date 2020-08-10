<template>
  <div class="container">
    <div class="row">
      <form class="col s12 m12 ">
        <h3>Edit TV Show</h3>
        <br>
        <div class="row">
          <div class="input-field col m6 s12">
            <input id="title" type="text" required="required" maxlength="30" class="validate" v-model="edit_title">
            <label for="title">Title</label>
          </div>
          <div class="input-field col m6 s12">
            <input id="network" type="text" required="required" maxlength="30" class="validate" v-model="edit_network">
            <label for="network">Network</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m6 s12">
            <input id="genres" type="text" required="required" class="validate" maxlength="40" v-model="edit_genres">
            <label for="genres">Genres (separated by commas)</label>
          </div>
          <div class="input-field col m6 s12">
            <input id="seasons" type="number" required="required" class="validate"  min="0" max="50" v-model="edit_seasons">
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
                  <input class="with-gap" name="iscurrent" type="radio" value="yes" v-model="edit_current"/>
                  <span>Yes</span>
                </label>
              </p>
              <p id="no">
                <label >
                  <input class="with-gap" name="iscurrent" type="radio" value="no" v-model="edit_current"/>
                  <span>No</span>
                </label>
              </p>
            </form>
          </div>
          <div class="input-field col m6 s12">
            <input id="rating" type="number" required="required" class="validate" step=".1" min="0" max="10" v-model="edit_rating">
            <label for="rating">IMDB Rating</label>        
          </div>
        </div>
        <div class="row">
          <div class="input-field col m6 s12">
            <input id="imgurl" type="text" required="required" maxlength="150" class="validate" v-model="edit_imageUrl">
            <label for="imgurl">TV Show image URL (300px * 500px suggested)</label>
          </div>
          <div class="col m3 s12">
            <br>
            <button @click.prevent="editShow()" class="btn waves-effect waves-light" type="submit" name="action">Edit TV show
            <i class="material-icons right">check</i>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col m12 s12">
            <h5><router-link v-bind:to="{ name: 'TvShows' }">Back to Shows</router-link></h5>
          </div>
        </div>
      </form>
    </div>
  </div>       
</template>

<script>
import { db } from '../firebase'; 

export default {
  name: 'EditShow',
  data(){
    return {
      edit_title: '',
      edit_network: '',
      edit_seasons: 0,
      edit_genres: '',
      edit_current:'',
      edit_rating: 0,
      edit_imageUrl:''

    }
  },
  firestore() { // adding this key/function
    return {
      tv_shows: db.collection('tv_shows')
    }
  },
  mounted(){
    db.collection("tv_shows").doc(this.$route.params.id).get()
    .then(datos =>{
      let ShowDetail = datos.data();
      this.edit_title=ShowDetail.title;
      this.edit_network=ShowDetail.network;
      this.edit_seasons=ShowDetail.nOfSeasons;
      this.edit_genres=ShowDetail.genre;
      this.edit_current=ShowDetail.isCurrent;
      this.edit_rating=ShowDetail.imdbRating;
      this.edit_imageUrl=ShowDetail.imgUrl;      
    });
  },

  methods:{
    editShow(){
      if(typeof(this.edit_genres) == 'object') {
        this.edit_genres = this.edit_genres.join(',');
      }
      db.collection("tv_shows").doc(this.$route.params.id).update({
        title: this.edit_title,
        network: this.edit_network,
        nOfSeasons: parseInt(this.edit_seasons),
        genre: this.edit_genres.split(','),
        isCurrent: this.edit_current == 'yes' ? true : false,
        imdbRating: parseInt(this.edit_rating),
        imgUrl: this.edit_imageUrl
      })
      .then(()=>{
        this.$router.push('/');
      })
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
