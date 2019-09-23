<template>
  <div class="poke-list">
    <poke-list />
  </div>
</template>

<script>
import PokeList from '@/containers/PokeList.vue'

export default {
  name: 'pokelist',
  components: {
    PokeList
  }
}
</script>
