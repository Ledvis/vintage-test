<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_post-list.scss";
</style>

<template>
  <li class="post-list__item">
    <router-link :to="{name: 'post', params: {id: item.id}}" class="post-list__anchor">
      <i class="fas fa-link post-list__icon"></i>
      {{ item.title }}
    </router-link>
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
  }
};
</script>
