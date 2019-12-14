<template>
    <div  class="pokemon_list" >
      <div v-for="pokemon in pokemons" :key="pokemon.name">
          <card :pokemon="pokemon" />
      </div>
    </div>

</template>

<script>
import card from '../Card'
export default {
  name:'List',
  props:['pokemons'],
  components: {
    card,
  }
}
</script>

<style>
.pokemon_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5%;
}
</style>
