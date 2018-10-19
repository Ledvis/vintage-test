<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_not-found.scss";
</style>

<template>
  <section class="not-found">
    <div class="not-found__wrapper">
      <h1 class="not-found__title">Not Found</h1>
      <p class="not-found__text">Ooops, we couldn't find what you are looking for. Why don't you
        <router-link class="not-found__link" :to="{name: 'home'}">
          go home instead?
        </router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>
