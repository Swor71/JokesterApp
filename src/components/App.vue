<template>
  <div id="app">
    <h3>Jokester</h3>
    <button class="btn btn-danger" @click="initJokes">Get Ten Jokes</button>
    <button class="btn btn-danger" @click="randomJoke">Random Joke</button>
    <br>
    <br>
    <div class="container d-flex flex-wrap">
      <Joke 
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        :key="index"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './Joke';

export default {
  methods: mapActions(['initJokes', 'randomJoke']),
  components: {
    Joke
  }
};
</script>

<style>
</style>
