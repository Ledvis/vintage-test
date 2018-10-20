<style lang="scss">
@import "@/styles/style.scss";
</style>

<template>
  <div>
    <InfoBlock/>
    <LocationBlock/>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock.vue";
import LocationBlock from "@/components/LocationBlock.vue";

export default {
  name: "HomeView",
  components: {
    InfoBlock,
    LocationBlock
  }
};
</script>
