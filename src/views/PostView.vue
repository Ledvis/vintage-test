<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_card.scss";
@import "@/styles/blocks/_editor.scss";
</style>

<template>
  <section class="card" v-if="item">
    <div class="card__wrapper">
      <div class="card__container">
        <router-link :to="{name: 'home'}" class="card__back">
          <i class="fas fa-2x fa-arrow-left"></i>
        </router-link>
        <h2 class="card__title">Post Item</h2>
      </div>
      <article class="card__item">
        <header class="card__header">
          <p class="card__header-title">
            {{ item.title }}
          </p>
        </header>
        <div class="card__content">
          <template v-if="!isEditing">
            <p class="card__descr">
              {{ item.body }}
            </p>
          </template>
          <CommentList :comments="comments" v-if="!isEditing"/>
          <form class="editor" @submit.prevent="save">
            <textarea placeholder="Leave comment..." class="editor__field" v-model="text"></textarea>
            <span class="editor__count">{{ inputTextLength }}/300</span>
            <span class="editor__error" v-if="isInputTextLengthExceeded">
              Must be under one hundred characters
            </span>
          </form>
        </div>
        <footer class="card__footer">
          <button @click="persist" class="card__footer-btn" :disabled="!inputTextLength || isInputTextLengthExceeded">Save <i class="fas fa-save"></i></button>
          <button @click="edit" class="card__footer-btn">{{ isEditing ? 'Cancel' : 'Edit' }} <i :class="[isEditing ? 'fa-times' : 'fa-edit', 'fas']"></i></button>
          <button @click="remove" class="card__footer-btn">Delete <i class="fas fa-trash"></i></button>
        </footer>
      </article>
    </div>
  </section>
</template>

<script>
import CommentList from "@/components/CommentList";

export default {
  name: "PostView",
  data() {
    return {
      isEditing: false,
      text: "",
      fieldErrors: {
        inputText: undefined
      }
    };
  },
  props: {
    id: {
      required: true
    }
  },
  computed: {
    item() {
      return this.$store.getters.item(this.id);
    },
    comments() {
      return this.$store.getters.comments(this.id);
    },
    inputTextLength() {
      return this.text.length;
    },
    isInputTextLengthExceeded() {
      return this.text.length > 300;
    }
  },
  methods: {
    getItems() {
      this.$store.dispatch("getItems");
    },
    edit() {
      this.isEditing = !this.isEditing;
      this.text = this.isEditing ? this.item.body : "";
    },
    persist() {
      return !this.isEditing ? this.create() : this.update();
    },
    create() {
      this.$store.dispatch("createComment", {
        itemId: this.item.id,
        comment: {
          text: this.text,
          id: this.item.id
        }
      });
      this.text = "";
    },
    update() {
      this.$store.dispatch("updateItem", { ...this.item, body: this.text });
      this.isEditing = false;
      this.text = "";
    },
    remove() {
      this.$store.dispatch("removeItem", this.item.id).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  },
  components: {
    CommentList
  },
  watch: {
    id() {
      this.getItems();
    }
  }
};
</script>
