<template>
  <div id="app">
    <poke-header />
    <router-view/>
    <poke-footer />
  </div>
</template>

<script>
import PokeHeader from './components/PokeHeader'
import PokeFooter from './components/PokeFooter'

export default {
  components: { PokeHeader, PokeFooter }
}
</script>
<style lang="scss">
@import './style/settings';

body, html {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 100%;
}
</style>
