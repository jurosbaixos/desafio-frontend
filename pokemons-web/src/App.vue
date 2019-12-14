<template>
  <div id="app">
    <Pokemons />
  </div>
</template>

<script>
import Pokemons from './pages/pokemons'

export default {
  name: 'app',
  components: {
    Pokemons
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

  *{
  font-family: 'Fira Sans', sans-serif;
  outline: none;
  margin: 0;
  }
</style>
