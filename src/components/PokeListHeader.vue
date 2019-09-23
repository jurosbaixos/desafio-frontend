<template>
  <div class="poke-list-header">
    <select class="select" @change="onChangeGeneration($event)">
      <option value="limit=150">1º generation</option>
      <option value="offset=151&limit=100">2º generation</option>
      <option value="offset=251&limit=135">3º generation</option>
      <option value="offset=386&limit=107">4º generation</option>
      <option value="offset=493&limit=156">5º generation</option>
      <option value="offset=649&limit=72">6º generation</option>
    </select>
    <select class="select" @change="onChangeOrder($event)">
      <option value="pokedex">Pokedex</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </select>
  </div>
</template>
<script>
export default {
  methods: {
    onChangeGeneration(e) {
      this.$emit('switch-generation', e.target.value)
    },
    onChangeOrder(e) {
      this.$emit('order', e.target.value)
    }
  }
}
</script>
<style lang="scss">
  @import '../style/settings';
  
  .poke-list-header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & >.select {
      padding: 10px;
      border: none;
      border-radius: 1px;
      background: $default-linear-gradient;
      color: $white-color;
      font-family: $base-font-family;
      
      &:focus, :hover {
        outline: none;
      }
      & > option {
        background: $green-style-1;
      }
    }
  }
</style>