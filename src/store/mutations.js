import * as types from './mutation-types';

export const mutations = {
  [types.INIT_JOKES] (state, payload) {
    state.jokes.push(...payload)
  },
  [types.RANDOM_JOKE] (state, payload) {
    state.jokes.push(payload)
  },
  [types.REMOVE_JOKE] (state, id) {
    state.jokes.splice(id, 1)
  }
}