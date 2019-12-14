<template>
  <div>
    <Header />
    <section class="container">
      <div class="container_list">

        <BtnFilter />
        <List :pokemons="pokemonInfo" />

      </div>
    </section>

    <div v-if="openModal">
      <Modal />
    </div>

  </div>
</template>

<script>
import Header from '../components/Header';
import BtnFilter from '../components/BtnFilter';
import List from '../components/List';
import Modal from '../components/Modal';

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Header,
    BtnFilter,
    List,
    Modal,
  },
  data(){
    return{
      pokemons: [ "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard" ],
    }
  },
  computed:{
    ...mapState(['pokemonInfo', 'openModal'])
  },
  methods:{
    ...mapActions([ 'getInfoPokemons'])
  },
  mounted(){

    this.pokemons.map(pokemon =>{
      this.getInfoPokemons(pokemon)
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
  width: 80%;
  padding: 5%;
  }
</style>
