<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_caption.scss";
@import "@/styles/blocks/_contact.scss";
</style>

<template>
  <section class="contact">
    <div class="contact__wrapper">
      <h3 class="contact__caption  caption">Contact Us</h3>
      <div class="contact__container">
        <ContactForm class="contact__form"/>
        <p class="contact__text">Please tell us more about your request and give us info about your company and country</p>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  name: "ContactBlock",
  components: {
    ContactForm
  }
};
</script>
