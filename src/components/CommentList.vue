<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_comment-list.scss";
</style>

<template>
  <ul class="comment-list">
    <CommentListItem v-for="(comment, index) in comments" :key="index" :comment="comment"/>
  </ul>
</template>

<script>
import CommentListItem from "./CommentListItem";

export default {
  name: "CommentList",
  components: {
    CommentListItem
  },
  props: {
    comments: {
      type: Array
    }
  }
};
</script>
