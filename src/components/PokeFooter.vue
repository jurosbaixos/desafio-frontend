<template>
  <div class="poke-footer">
    <img class="logo" src="../assets/jurosbaixos.png" alt="Juros Baixos">
    <p class="copyright">Alisson Rayan <br />CopyRight 2019</p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  @import '../style/settings';
  
  .poke-footer {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background: $green-style-1;
    background: linear-gradient(90deg, $green-style-1 0%, $green-style-2 100%);
    justify-content: space-between;
    
    & >.logo {
      padding: 5px 15px;
      width: 160px;
      height: 40px;
    }
    & >.copyright {
      color: $greey-color;
      text-align: center;
      font-family: $base-font-family;
      padding: 5px 15px;
    }
  }  
</style>