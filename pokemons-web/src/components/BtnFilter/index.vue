<template>
  <div class="button_filter">
    <div>
      <button @click="openOptions" ><span class="seta-baixo"></span> {{generation}} </button>
      <ul v-if="dropdown" class="dropdown">
        <li v-for="generation in generations" :key="generation.name" @click="selectGeneration(generation)">{{generation.name}}</li>
      </ul>
    </div>
    <button >Pokedex  <span class="seta-baixo"></span></button>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  name: 'BtnFilter',

  data(){
    return{
      dropdown: false,
      generations : [
        {name:"1st Generation", Type:"genaration1"},
        {name:"2st Generation", Type:"genaration2"},
        {name:"3st Generation", Type:"genaration3"},
        {name:"4st Generation", Type:"genaration4"},
        {name:"5st Generation", Type:"genaration5"},
        {name:"6st Generation", Type:"genaration6"},
        {name:"7st Generation", Type:"genaration7"}],
      generation: "1st Generation",
      p: false,
    }
  },
  computed: mapState(["pokemonInfo","pokemons"]),
  methods:{

    ...mapActions(["getGeneration", "getInfoPokemons" ]),
    openOptions(){
      this.dropdown = !this.dropdown
    },
    selectGeneration(option){
    this.generation = option.name;
      this.getGeneration(option.Type);
      this.changePokemons()
    },

    changePokemons(){
      this.pokemons.map(pokemon =>{
        this.getInfoPokemons(pokemon)
      })
    }
  }
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

  .dropdown{
    width: 150px;
    border-radius: 20px;
    position: absolute;
    background:  $aquamarine ;
    border-radius: 20px;

    li{
      list-style: none;
      margin: 8% 0;
      font-size: 14px;
      font-weight: bold;
      color: $white;
    }

  }
}
</style>
