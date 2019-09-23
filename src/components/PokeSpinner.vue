<template>
  <div class="loading-spinner">
    <img class="pokeball" src="../assets/pokeball.png" alt="">
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  @import '../style/settings';
  
  .loading-spinner {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
    & >.pokeball {
      width: 40px;
      height: 40px;
      margin: 0 auto;
      -webkit-animation: rotation 2s infinite linear;

      @include rotate-infinite;
    }
  }
</style>