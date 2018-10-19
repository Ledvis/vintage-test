<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_post-list.scss";
</style>

<template>
  <li class="post-list__item">
    <router-link :to="{name: 'post', params: {id: item.id}}" class="post-list__caption">{{ item.title }}</router-link>
  </li>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log(this.item);
  }
};
</script>
