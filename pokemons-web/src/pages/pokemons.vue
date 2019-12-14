<template>
  <div>
    <Header />
    <section class="container">

      <div class="container_list">

        <BtnFilter />
        {{nome}}
        <p>{{pokemonInfo}}</p>

      </div>

    </section>
  </div>
</template>

<script>
import Header from '../components/Header';
import BtnFilter from '../components/BtnFilter';

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Header,
    BtnFilter,
  },
  data(){
    return{
      nome: [],
    }
  },
  computed:{
    ...mapState(['pokemons','pokemonInfo'])
  },
  methods:{
    ...mapActions([ 'getInfoPokemons', 'getPokemons'])
  },
  async mounted(){
    await this.getPokemons();
    this.pokemons.map(pokemon =>{
      this.nome = [...this.nome, pokemon.name]
      this.getInfoPokemons(pokemon.name)
    })

  }
}
</script>
<style lang="scss">
  .container {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(246, 247, 252, 1)
  }
  .container_list{
  width: 85%;
  padding: 5%;
  }
</style>
