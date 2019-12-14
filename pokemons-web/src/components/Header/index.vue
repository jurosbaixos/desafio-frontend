<template>
    <header class="header">
        <h1 class="logo">Pokemon</h1>
    </header>
</template>
<script>
export default {
   name:'Header',
}
</script>
<style lang="scss">
@mixin headerShadow{
    -webkit-filter: drop-shadow(0 3px 6px rgba(76, 78, 111, 0.12) );
    -moz-filter: drop-shadow(0 3px 6px rgba(76, 78, 111, 0.12) );
    -ms-filter: drop-shadow(0 3px 6px rgba(76, 78, 111, 0.12) );
    filter: drop-shadow(0px 3px 6px rgba(76, 78, 111, 0.12) );
}
  .header {
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffff;
  @include headerShadow;

  .logo {
    height: 56px;
    width: 158px;

    margin-left: 10%;

    background-image: url('../../assets/logo_pokemon.png');
    background-size: cover;

    text-indent: -9999px;
  }
}

</style>
