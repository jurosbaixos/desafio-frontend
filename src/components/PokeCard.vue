<template>
  <div class="poke-card" @click.prevent="$emit('get-details', pokeData.url)">
    <div
      class="appearance"
      :style="{ backgroundImage: `url(http://www.pokestadium.com/sprites/xy/${this.pokeNameFormated}.gif)`}"
    >
    </div>
    <div class="details">
      <p class="name">{{ pokeData.name }}</p>
      <button
        class="view-more"
        @click="openDetails"
      >
        View More
      </button>
    </div>
  </div>
</template>
<script>
import fixPokeName from '../utils/fixPokeName'

export default {
  props: {
    pokeData: Object,
    index: Number
  },
  computed: {
    pokeNameFormated () {
      return fixPokeName(this.pokeData.name)
    }
  },
  methods: {
    openDetails() {
      this.$emit('open-details', this.pokeData.url)
    }
  }
}
</script>
<style lang="scss">
  @import '../style/settings';

  .poke-card {
    width: calc(100% - 10px);
    height: 220px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 4px 0 rgba($shadow-color,.3);

    @include media('small') {
      width: calc(50% - 10px);
    }
    @include media('medium') {
      width: calc(33% - 10px);
    }
    @include media('large') {
      width: calc(25% - 10px)
    }

    & >.appearance {
      padding: 10px;
      background-position: center;
      background-repeat: no-repeat;
      height: 50%;
    }
    & >.details {
      padding: 10px;

      & >.name {
        text-align: center;
        text-transform: capitalize;
        font-weight: 500;
        margin: 5px;
        font-family: $base-font-family;
        font-size: 20px;
      }

      & >.view-more {
        width: 100%;
        padding: 10px 15px;
        border-radius: 20px;
        border: none;
        text-transform: uppercase;
        color: $white-color;
        background-image: $default-linear-gradient;
        cursor: pointer;
        font-family: $base-font-family;
        font-weight: 600;
        transition: box-shadow 1s;
        
        &:hover {
          box-shadow: 0px 0px 22px 0px rgba($green-style-1,1);
          -webkit-box-shadow: 0px 0px 22px 0px rgba($green-style-1,1);
          -moz-box-shadow: 0px 0px 22px 0px rgba($green-style-1,1);
        }
      }
    }
  }
</style>