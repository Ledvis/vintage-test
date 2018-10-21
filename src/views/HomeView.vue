<style lang="scss">
@import "@/styles/style.scss";
@import "@/styles/blocks/_contact.scss";
</style>

<template>
  <div>
    <InfoBlock/>
    <LocationBlock/>
    <ContactBlock/>
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock.vue";
import LocationBlock from "@/components/LocationBlock.vue";
import ContactBlock from "@/components/ContactBlock.vue";

export default {
  name: "HomeView",
  components: {
    InfoBlock,
    LocationBlock,
    ContactBlock
  }
};
</script>
