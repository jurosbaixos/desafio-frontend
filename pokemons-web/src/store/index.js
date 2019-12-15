import Vue from 'vue';
import Vuex from 'vuex';

import api from '../service/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    generation: {
      genaration1:["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard"],
      genaration2: ["tyranitar","pupitar","blissey","hitmontop","porygon2","donphan"],
      genaration3: ["metagross","metang","salamence","shelgon","gorebyss","huntail"],
      genaration4: ["froslass","dusknoir","gallade","porygon-z","mamoswine", "gliscor","glaceon"],
      genaration5: ["bisharp","golurk","mienshao","accelgor","beartic","haxorus"],
      genaration6: ["aurorus","tyrantrum","heliolisk","clawitzer","dragalge","barbaracle"],
      genaration7: ["tsareena","steenee","bewear","salazzle","shiinotic","lurantis"]
    },
    pokemonInfo : [],
    pokemons: ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard"],
    pokemon: '',
    openModal: false
  },
  mutations:{

    ADD_POKEMONS_INFO(state, payload){
      state.pokemonInfo = [...state.pokemonInfo, payload]
    },
    CLEAR_POKEMON_INFO(state){
      state.pokemonInfo = []
    },
    OPEN_MODAL(state){
      state.openModal = !state.openModal
    },

    MORE_INFO(state, payload){
      state.pokemon = payload
    },
    CHANGE_GENARATION(state, payload){
      state.pokemons = state.generation[payload]
    }
  },
  actions:{

    getInfoPokemons(context, payload){
        api.getPokemon(payload)
        .then(res => res.data)
        .then(res => context.commit("ADD_POKEMONS_INFO", res))

    },
    getGeneration(context, payload){
        context.commit("CHANGE_GENARATION", payload)
        context.commit("CLEAR_POKEMON_INFO")
    },
    openModal(context){
      context.commit("OPEN_MODAL")
    },
    moreInfo(context, payload){
      context.commit ("MORE_INFO", payload)
    }
  },
})
