import * as types from './mutation-types';

export const initJokes = ({commit}) => {
  fetch(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`, {method: "GET"})
    .then(res => res.json())
    .then(json => commit(types.INIT_JOKES, json))
}

export const randomJoke = ({commit}) => {
  fetch(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`, {method: "GET"})
    .then(res => res.json())
    .then(json => commit(types.RANDOM_JOKE, json))
}

export const removeJoke = ({commit}, id) => {
  commit(types.REMOVE_JOKE, id)
}