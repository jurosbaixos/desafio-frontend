import Vue from 'vue';
import Vuex from 'vuex';

import api from '../service/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonInfo : [],
    pokemon: '',
    openModal: false
  },
  mutations:{

    ADD_POKEMONS_INFO(state, payload){
      state.pokemonInfo = [...state.pokemonInfo, payload]
    }
  },
  actions:{

    getInfoPokemons(context, payload){
        api.getPokemon(payload)
        .then(res => res.data)
        .then(res => context.commit("ADD_POKEMONS_INFO", res))

    }
  }
})
