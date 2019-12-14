<template>
     <div class="pokemon_card">
        <div class="pokemon_id">
          <p>#00{{pokemon.id}}</p>
          <img src="../../assets/like.png">
        </div>
        <img  :src="pokemon.sprites.front_default" :alt="pokemon.name" width="200" height="200">
        <h2>{{pokemon.name}}</h2>

        <div class="pokemon_type">
          <span v-for="type in pokemon.types" :key="type.type.name" >{{ type.type.name }}</span>
        </div>
        <button @click="openModalPokemon(pokemon)" class="button_card">View More</button>


      </div>
</template>

<script>
export default {
  name:'card',
  props:['pokemon'],
  data(){
    return {
      info: ''
    }
  },
  methods:{
    openModalPokemon(newInfo){
      this.info = newInfo
    }
  }
}
</script>

<style lang="scss">
$aquamarine: #49d0b0;
$white: #fff;
$dark: #212529;

.pokemon_card{
  height: 400px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10%;
  margin-bottom: 15%;
  background-color: $white;
  border-radius: 10px;
  box-shadow: 0px 15px 15px 0px #d4d7e4;
  h2{
    font-size: 28px;
    font-weight: bolder;
    color: $dark;

  }
  .pokemon_id {
    width: 90%;
    display: flex;
    justify-content:space-between;

    p {
      font-size: 1em;
      color: #cdcdcd;
    }
  }

  .button_card {
    height: 56px;
    width: 265px;
    background-color: $aquamarine;
    border:none;
    border-radius: 28px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }

  .pokemon_type {
    width: 80%;
    display: flex;
    justify-content: center;
    margin:12px 0 33px;
    span {
      height: 24px;
      width: 60px;
      padding: 2%;
      margin: 5px;
      font-weight: bold;
      font-size: 12px;
      text-align: center;
      color: $aquamarine;
      background-color: #f6f7fc;
      border-radius: 10px;
    }
  }
}


</style>
