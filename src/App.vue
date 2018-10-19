<style lang="scss">
@import "@/styles/style.scss";

#app {
  margin: 3rem 0;
}

h1 {
  font-family: $main-font;
  font-size: 3rem;
  text-align: center;
}
</style>


<template>
  <div id="app">
    <router-view/>
    <h1 v-if="error">{{ error }} <i class="fas fa-exclamation-triangle"></i></h1>
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  created() {
    this.$store.dispatch("getItems");
    console.log(this.error);
  }
};
</script>
