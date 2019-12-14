import Vue from 'vue';
import Vuex from 'vuex';

import api from '../service/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokemonInfo : []
  },
  mutations:{
    ADD_POKEMONS(state,payload){
      state.pokemons = [...state.pokemons, ...payload]
    },
    ADD_POKEMONS_INFO(state, payload){
      state.pokemonInfo = [...state.pokemonInfo, payload]
    }
  },
  actions:{
    getPokemons(context){
      api.listPokemons()
      .then(res => res.data)
      .then(res => context.commit("ADD_POKEMONS",res.results)  )
    },

    getInfoPokemons(context, payload){
        api.getPokemon(payload)
        .then(res => res.data)
        .then(res => context.commit("ADD_POKEMONS_INFO", res))

    }
  }
})
