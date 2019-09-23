<template>
  <div class="poke-list">
    <poke-list-header
      v-on="$listeners"
    />
    <poke-card
      v-for="(pokemon, index) in pokemons"
      class="card"
      :key="pokemon.name"
      :index="index+1"
      :poke-data="pokemon"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import PokeCard from './PokeCard'
import PokeListHeader from './PokeListHeader'

export default {
  name: 'pokeListComponent',
  components: { PokeCard, PokeListHeader },
  props: {
    pokemons: Array
  }
}
</script>

<style scoped lang="scss">
  .poke-list {
    padding: 10px 30px;
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
</style>
