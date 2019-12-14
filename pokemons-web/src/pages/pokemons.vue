<template>
  <Header />
</template>

<script>
import Header from '../components/Header';

export default {
  components: {
    Header,
  },
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
