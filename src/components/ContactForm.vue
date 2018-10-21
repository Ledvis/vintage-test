<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_form.scss";
</style>

<template>
  <form class="form" @submit.prevent="submit" novalidate>
    <div class="form__field">
      <input class="form__input" type="text" id="name" v-model="name">
      <label class="form__label" for="name">
        Name
      </label>
      <span class="form__error">{{ fieldErrors.name }}</span>
      <span :class="['form__counter', isNameCharactersLimitExceeded ? 'form__counter--color-red' : '']">{{ name.length }}/{{ limits.name }}</span>
    </div>
    <div class="form__field">
      <input class="form__input" type="tel" id="phone" v-model="phone">
      <label class="form__label" for="phone">
        Phone
      </label>
      <span class="form__error">{{ fieldErrors.phone }}</span>
      <span :class="['form__counter', isPhoneCharactersLimitExceeded ? 'form__counter--color-red' : '']">{{ phone.length }}/{{ limits.phone }}</span>
    </div>
    <div class="form__field">
      <input class="form__input" type="email" id="email" v-model="email">
      <label class="form__label" for="email">
        E-mail
      </label>
      <span class="form__error">{{ fieldErrors.email }}</span>
      <span :class="['form__counter', isEmailCharactersLimitExceeded ? 'form__counter--color-red' : '']">{{ email.length }}/{{ limits.email }}</span>
    </div>
    <div class="form__field">
      <input class="form__checkbox" type="checkbox" id="data" v-model="data">
      <label class="form__label" for="data">I agree the processing of personal data</label>
    </div>
    <span class="form__error">{{ fieldErrors.data }}</span>
    <button class="form__btn" type="submit" v-if="saveStatus === 'SAVING'" disabled>Saving...</button>
    <button class="form__btn" type="submit" v-if="saveStatus === 'SUCCESS'" :disabled="isCharactersLimitExceeded">Saved! Submit another</button>
    <button class="form__btn" type="submit" v-if="saveStatus === 'ERROR'" :disabled="isCharactersLimitExceeded">Save Failed - Retry?</button>
    <button class="form__btn" type="submit" v-if="saveStatus ==='READY'" :disabled="isCharactersLimitExceeded">Get in touch</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      URL: "http://httpbin.org/post",
      name: "",
      phone: "",
      email: "",
      data: false,
      limits: {
        name: 20,
        phone: 15,
        email: 30
      },
      fieldErrors: {
        name: undefined,
        phone: undefined,
        email: undefined,
        data: undefined
      },
      saveStatus: "READY"
    };
  },
  computed: {
    isNameCharactersLimitExceeded() {
      return this.name.length > this.limits.name;
    },
    isPhoneCharactersLimitExceeded() {
      return this.phone.length > this.limits.phone;
    },
    isEmailCharactersLimitExceeded() {
      return this.email.length > this.limits.email;
    },
    isCharactersLimitExceeded() {
      return (
        this.isNameCharactersLimitExceeded ||
        this.isPhoneCharactersLimitExceeded ||
        this.isEmailCharactersLimitExceeded
      );
    }
  },
  methods: {
    submit() {
      this.fieldErrors = this.validate(this.fieldErrors);

      if (Object.keys(this.fieldErrors).length) return;

      const form = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        data: this.data
      };

      this.saveStatus = "SAVING";

      axios
        .post(this.URL, form)
        .then(response => {
          if (response.status === 200) {
            this.saveStatus = "SUCCESS";
          }
        })
        .catch(err => {
          this.saveStatus = "ERROR";
          window.console.log(err);
        });
    },
    validate() {
      const errors = {};

      if (!this.name) {
        errors.name = "Name Required";
      }
      if (!this.phone) {
        errors.phone = "Phone Required";
      }
      if (!this.email) {
        errors.email = "Email Required";
      }
      if (!this.data) {
        errors.data = "Processing of personal data has to be approved";
      }

      if (this.email && !this.isEmail(this.email)) {
        errors.email = "Invalid Email";
      }

      if (this.phone && !this.isNumber(this.phone)) {
        errors.phone = "Only numbers include";
      }

      return errors;
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    isNumber(number) {
      const re = /\d+/;
      return re.test(number);
    }
  }
};
</script>
