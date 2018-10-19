<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_post-list.scss";
</style>

<template>
  <ul class="post-list">
    <h1 class="post-list__title">Post list</h1>
    <hr class="post-list__divider">
    <PostListItem 
      v-for="(item, index) in items" :key="index"
      :item="item"
    />
  </ul>
</template>

<script>
import PostListItem from "./PostListItem";
import { mapGetters } from "vuex";

export default {
  name: "PostList",
  components: {
    PostListItem
  },
  computed: {
    ...mapGetters(["items"])
  }
};
</script>
