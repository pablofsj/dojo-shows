<template>
  <div class="container">
    <div class="row">
      <div class="col m12 s12">
        <h3>{{title}}</h3>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col m6 s12">
        <p><img :src= "image" alt=""></p>
      </div>
      <div class="col m6 s12">
        <ul class="collection">
          <li class="collection-item">Network: {{network}}</li>
          <li class="collection-item">Seasons: {{seasons}}</li>
          <li class="collection-item">Genres: <span v-for="(g, i) in genre" v-bind:key="i">{{g}} </span></li>
          <li class="collection-item">Is Current:<span v-if="current"> Yes</span><span v-else> No</span></li>
          <li class="collection-item">IMDB Rating: {{rating}}</li>
        </ul>
        <br>
        <br>
        <h5><router-link v-bind:to="{ name: 'TvShows' }">Back to Shows</router-link></h5>
      </div>
    </div> 
  </div>
</template>

<script>
import { db } from '../firebase'; 


export default {
  name: 'Show',
  data(){
    return{
      title: '',
      network: '',
      seasons: '',
      genre: [],
      current:'',
      rating:'',
      image:''

    }
  },

  mounted(){
    db.collection("tv_shows").doc(this.$route.params.id).get()
    .then(datos =>{
      let ShowDetail = datos.data();
      this.title=ShowDetail.title;
      this.network=ShowDetail.network;
      this.seasons=ShowDetail.nOfSeasons;
      this.genre=ShowDetail.genre;
      this.current=ShowDetail.isCurrent;
      this.rating=ShowDetail.imdbRating;
      this.image=ShowDetail.imgUrl;

    });
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

a {
  color: #42b983;
}

img{
  object-fit: cover;
  width: 300px;
  height: 500px;
}

</style>