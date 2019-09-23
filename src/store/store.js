import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './types'

  Vue.use(Vuex)

  const state = {
    allPokemons: [],
    details: []
  }
  const getters = {
    [types.POKEMON]: state => {
      return state.allPokemons
    },
    [types.POKEMON_DETAILS]: state => {
      return state.details
    }
  }
  const mutations = {
    [types.POKEMON]: (state, payload) => {
      state.allPokemons = payload
    },
    [types.POKEMON_DETAILS]: (state, payload) => {
      state.details = payload
    },
  }
  const actions = {
    async [types.POKEMON] ({ commit }, param) {
      const url = `https://pokeapi.co/api/v2/pokemon?${param}`
      const {data} = await axios.get(url)
      commit(types.POKEMON, data)
    },
    async [types.POKEMON_DETAILS] ({ commit }, payload) {
      const url = payload
      const {data} = await axios.get(url)
      commit(types.POKEMON_DETAILS, data)
    },
    async [types.POKEMON_CHARACTERISTICS] (){

    }
  }

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store