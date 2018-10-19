<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_comment.scss";
</style>

<template>
  <li class="comment">
    <i class="far fa-comments"></i>
    {{ comment.text }}
    <i class="fa fa-times" @click="remove"></i>
  </li>
</template>

<script>
export default {
  name: "CommentListItem",
  props: {
    comment: {
      type: Object
      // validator() {}
    }
  },
  methods: {
    remove() {
      this.$store.dispatch("removeComment", {
        text: this.comment.text,
        id: this.comment.id
      });
    }
  }
};
</script>
