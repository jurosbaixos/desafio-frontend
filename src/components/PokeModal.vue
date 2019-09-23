<template>
  <div class="poke-modal" v-if="isOpened">
    <div class="mask"></div>
    <div class="content">
      <button 
        class="close"
        @click="$emit('close')"
      />
      <poke-spinner 
        v-if="isLoading"
      />
      <div
        class="details"
        v-else
      >
        <div
          class="appareance"
          :style="{ backgroundImage: 
            `url(http://www.pokestadium.com/sprites/xy/${this.pokeNameFormated}.gif),
              url(https://i0.wp.com/orig00.deviantart.net/514e/f/2014/298/5/1/pokemon_x_and_y_battle_background_11_by_phoenixoflight92-d843okx.png?w=600)
            `
          }"
        />
        <div class="stats">
          <p class="name">{{ pokeDetails.name }}</p>
          <p class="stat" v-for="(stat, i) in pokeDetails.stats" :key="i">
            <span class="type">{{stat.stat.name }}:</span> {{ stat.base_stat}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import fixPokeName from '../utils/fixPokeName'
import PokeSpinner from '../components/PokeSpinner'

export default {
  components: { PokeSpinner },
  props: {
    isOpened: Boolean,
    isLoading: Boolean,
    pokeDetails: [Object, Array]
  },
  computed: {
    pokeNameFormated () {
      return fixPokeName((this.pokeDetails || {}).name)
    }
  },
}
</script>
<style lang="scss">
  @import '../style/settings';

  .poke-modal {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: rgba($shadow-color, 0.5);
    overflow: hidden;

    & >.content {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      background: $white-color;

      @include media('small') {
        width: 500px;
        height: 500px;
      }

      & >.details {
        width: 100%;
        height: 100%;

        & >.appareance {
          width: 100%;
          height: 40%;
          padding: 10px;
          background-position: center;
          background-repeat: no-repeat;
        }
        & >.stats {
          margin: 20px;
          padding: 20px 30px;
          border: 4px double $green-style-1;

          & >.stat {
            font-family: $base-font-family;
            text-transform: capitalize;
            font-size: 18px;
            margin: 5px;

            & >.type {
              font-weight: bold;
            }
          }
          & >.name {
            color: $green-style-1;
            font-family: $base-font-family;
            font-weight: bold;
            text-transform: capitalize;
            font-size: 26px;
            text-align: center;
            margin: 0;
          }
        }
      }

      & >.close {
        background-image: url('../assets/close.png');
        background-size: cover;
        background-position: center;
        background-color: $green-style-1;
        cursor: pointer;
        border: none;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        position: absolute;
        right: 10px;
        top: 10px;

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>