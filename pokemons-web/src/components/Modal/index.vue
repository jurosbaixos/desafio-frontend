<template>
  <div class="pokemon" >
    <div class="pokemon_select">
      <div class="pokemon_id">
          <p>#001</p>
          <button  type="button" @click="closeModal" class="close">X</button>
      </div>
      <img  @mouseover="changeImage"  @mouseout="changeImage" :src="img ? pokemon.sprites.front_default : pokemon.sprites.back_default" :alt="pokemon.name" width="200" height="200">
      <div class="pokemon_name">
        <h2>{{pokemon.name}}</h2>
        <img src="../../assets/like.png">
      </div>
      <div class="pokemon_type">
        <p v-for="type in pokemon.types" :key="type.type.name"><span :class="type.type.name ">{{ type.type.name }}</span></p>
      </div>

      <div class="pokemon_info">

        <div v-for="stats in pokemon.stats" :key="stats.stat.name">
          <h3 :class="stats.stat.name === 'hp'? 'uppercase': '' ">{{stats.stat.name}}:</h3>
          <p>{{stats.base_stat}}</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapState ,mapActions } from 'vuex'
  export default {
    name: 'Modal',

    data(){
      return{
          img: true,
      }
    },
    computed: {
      ...mapState(['pokemon']),
    },
    methods:{
      ...mapActions(['openModal']),
      closeModal(){
        this.openModal();
      },
      changeImage(){
        this.img = !this.img
      }

  }
}
</script>
<style lang="scss">
@keyframes modal{
  from{
    opacity: 0;
    transform: translate3d(0, 60px, 0)
  }
  to{
    opacity: 1;
    transform: translate3d(0, 0, 0)
  }
}
.pokemon {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(39, 39, 41, 0.66);

  .pokemon_select {
    width: 350px;
    height: 580px;
    display: flex;
    padding: 1%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 15px 15px 0px rgba(33, 37, 41, 0.38);
    background: #fff;

    animation: modal .3s;

    h2{
      font-size: 28px;
      font-weight: bolder;
      color: rgba(33, 37, 41, 1);

      &::first-letter{
        text-transform: uppercase;
      }
    }
    .pokemon_id {
      width: 90%;
      display: flex;
      justify-content:space-between;

      .close{
        border: none;
        background: #fff;
        font-size: 25px;
        color: #cdcdcd;
        border-radius: 50%;

        &:hover {
          cursor: pointer;
          background: #cdcdcd;
          color:#fff;

        }
      }

      p {
        font-size: 1em;
        color: rgba(205, 205, 205, 1);
      }
    }
    .pokemon_name {
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
    .pokemon_type {
      width: 80%;
      display: flex;
      justify-content: flex-start;
      margin:12px 0 33px;

      p {
        width: 60px;
        padding: 3%;
        margin: 5px;
        font-weight: bold;
        font-size: 12px;
        text-align: center;
        color: rgba(73, 208, 176, 1);
        background-color: rgba(246, 247, 252, 1);
        border-radius: 10px;

        &::first-letter{
            text-transform: uppercase;
          }
          .fire{
            color: #e98846;
          }
          .flying{
            color: #e98846;
          }
      }
    }
    .pokemon_info {
      width: 80%;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 2%;
      div {
        width: 50%;
        margin-bottom: 3%;
        margin-right: 15%;
        h3 {
          font-weight: normal;
          font-size: 14px;
          &::first-letter{
            text-transform: uppercase;
          }
        }
        .uppercase{
          text-transform: uppercase;
        }
        p {
          font-weight: bold;
          font-size: 28px
        }
      }
    }
  }

}

</style>
