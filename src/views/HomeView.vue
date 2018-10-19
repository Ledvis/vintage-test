<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_home.scss";
</style>

<template>
  <section class="home">
    <div class="home__wrapper">
      <PostList/>
    </div>
  </section>
</template>

<script>
import PostList from "@/components/PostList.vue";

export default {
  name: "PostListView",
  components: {
    PostList
  }
};
</script>
