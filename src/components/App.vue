<template>
  <div id="app">
    <h3>Jokester</h3>
    <button class="btn btn-danger" @click="initJokes">Get Ten Jokes</button>
    <button class="btn btn-danger" @click="randomJoke">Random Joke</button>
    <br>
    <span v-for="(type, index) in types" :key="index">
      <label class="px-2">
      <input 
      :key="index" 
      type="checkbox" 
      :value="type" 
      v-model="checkedTypes"
      checked
      >{{type}}
      </label>
    </span>
    <br>
    <div class="container d-flex flex-wrap">
      <Joke 
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        :key="index"
        :index="index"
        v-show="checkedTypes.includes(joke.type)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './Joke';

export default {
  data() {
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming']
    };
  },
  methods: mapActions(['initJokes', 'randomJoke']),
  components: {
    Joke
  }
};
</script>
