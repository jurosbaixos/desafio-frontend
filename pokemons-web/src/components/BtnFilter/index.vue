<template>
  <div class="button_filter">
    <button ><span class="seta-baixo"></span> 1st Generation  </button>
    <button >Pokedex  <span class="seta-baixo"></span></button>
  </div>
</template>

<script>
export default {
  name: 'BtnFilter',
}
</script>

<style lang="scss">
$aquamarine: #49d0b0;
$white: #fff;

.button_filter{
  display: flex;
  justify-content: space-between;

  button {
    height: 40px;
    width: 173px;
    display: flex;
    justify-content: space-around;
    padding:0 2%;
    box-sizing: border-box;
    background-color: $aquamarine;
    border:none;
    border-radius: 20px;

    font-size: 14px;
    font-weight: bold;
    color: $white;
    text-align: center;

    .seta-baixo:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    width: 0;
    height: 0;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid $white;
    }
  }
}
</style>
