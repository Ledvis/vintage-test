<style lang="scss">
#app {
  margin: 3rem 0;
}
</style>


<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getItems");
  }
};
</script>
