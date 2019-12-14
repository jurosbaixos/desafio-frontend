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
    },

    OPEN_MODAL(state){
      state.openModal = !state.openModal
    },

    MORE_INFO(state, payload){
      state.pokemon = payload
    }
  },
  actions:{

    getInfoPokemons(context, payload){
        api.getPokemon(payload)
        .then(res => res.data)
        .then(res => context.commit("ADD_POKEMONS_INFO", res))

    },

    openModal(context){
      context.commit("OPEN_MODAL")
    },

    moreInfo(context, payload){
      context.commit ("MORE_INFO", payload)
    }
  }
})
