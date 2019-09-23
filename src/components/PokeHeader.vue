<template>
  <div class="poke-header">
    <img class="logo" src="../assets/pokelogo.png" alt="pokeDesafio">
  </div>
</template>

<script>
export default {
  name: 'PokeHeader',
  data() {
    return {
      openedMenu: false
    }
  },
}
</script>

<style scoped lang="scss">
  @import '../style/settings';

  .poke-header {
    display: flex;
    align-items: center;
    position: relative;
    background: $green-style-1;
    background: linear-gradient(90deg, $green-style-1 0%, $green-style-2 100%);
    height: 120px;
    box-shadow: 0px -4px 10px -1px rgba($shadow-color,0.5);

    & >.logo {
      width: 200px;
      padding-left: 45px;
      // animation: MoveUpDown 1s linear infinite;
      // position: absolute;
      // @keyframes MoveUpDown {
      //   0%, 100% {
      //     bottom: 0;
      //   }
      //   50% {
      //     bottom: 10px;
      //   }
      // }
    }
  }
</style>
