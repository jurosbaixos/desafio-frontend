<template>
  <div>
    <Header />
    <section class="container">

      <div class="container_list">

        <BtnFilter />

      </div>

    </section>
  </div>
</template>

<script>
import Header from '../components/Header';
import BtnFilter from '../components/BtnFilter';

export default {
  components: {
    Header,
    BtnFilter,
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
