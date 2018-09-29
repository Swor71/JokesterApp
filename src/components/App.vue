<template>
  <div id="app">
    <h3>Jokester</h3>
    <button class="btn btn-danger" @click="initJokes">Get Jokes</button>
    <br>
    <br>
    <div class="row">
      <Joke 
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './Joke';

export default {
  methods: mapActions(['initJokes']),
  components: {
    Joke
  }
};
</script>

<style>
</style>
