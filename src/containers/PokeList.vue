<template>
  <div class="poke-list">
    <poke-spinner v-show="isLoading" />
    <poke-list
      v-show="!isLoading"
      @open-details="details"
      @switch-generation="getNewGeneration"
      @order="orderBy"
      :pokemons="pokeList"
    />
    <poke-modal 
      class="modal"
      @close="isOpened = false"
      :is-opened="isOpened"
      :is-loading="isLoadingDetails"
      :poke-details="pokeDetails"
    />
  </div>
</template>

<script>
import PokeList from '@/components/PokeList'
import PokeSpinner from '@/components/PokeSpinner'
import PokeModal from '../components/PokeModal'
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/types'

export default {
  name: 'pokelist',
  components: {
    PokeList,
    PokeSpinner,
    PokeModal
  },
  data() {
    return {
      isLoading: false,
      isLoadingDetails: false,
      isOpened: false,
      pokeList: null
    }
  },
  computed: {
    ...mapGetters({
      allPokemons: types.POKEMON,
      pokeDetails: types.POKEMON_DETAILS,
    }),
  },
  methods: {
    ...mapActions({
      getPokemons: types.POKEMON,
      getDetails: types.POKEMON_DETAILS,
    }),
    async getNewGeneration(param) {
      this.isLoading = true
      await this.getPokemons(param)
      this.pokeList = this.allPokemons.results.map((pokemon, index) => {
        return { ...pokemon, index}
      })
      this.isLoading = false
    },
    async details(v) {
      this.isOpened = true
      this.isLoadingDetails = true
      await this.getDetails(v)
      this.isLoadingDetails = false
    },
    orderBy(v) {
      if(v === 'A-Z') {
        this.pokeList.sort((a, b) => {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
        })
      }
      if (v === 'Z-A') {
        this.pokeList.sort((a, b) => {
          if(a.name < b.name) { return 1; }
          if(a.name > b.name) { return -1; }
        })
      }
      if (v === 'pokedex') {
        this.pokeList.sort((a, b) => {
          if(a.index < b.index) { return -1; }
          if(a.index > b.index) { return 1; }
        })
      }
    }
  },
  async created () {
    this.isLoading = true
    await this.getPokemons('limit=151')
    this.pokeList = this.allPokemons.results.map((pokemon, index) => {
      return { ...pokemon, index}
    })
    this.isLoading = false
  }
}
</script>

<style lang="scss">
  .poke-list {
    min-height: 100vh;
  }
</style>
