<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_caption.scss";
@import "@/styles/blocks/_location.scss";
</style>

<template>
  <section class="location">
    <div class="location__wrapper">
      <div class="location__container">
        <h3 class="location__caption  caption  caption--color-white">Our Offices</h3>
        <ul class="location__list">
          <li class="location__tab">
            <a class="location__link  location__link--active" href="#" @click.prevent="showAddress">KYIV</a>
          </li>
          <li class="location__tab">
            <a class="location__link" href="#" @click.prevent="showAddress">New york</a>
          </li>
          <li class="location__tab">
            <a class="location__link" href="#" @click.prevent="showAddress">Guangzhou</a>
          </li>
          <li class="location__tab">
            <a class="location__link" href="#" @click.prevent="showAddress">barcelona</a>
          </li>
        </ul>
        <h4 class="location__subtitle">Global Message Services Ukraine LLC</h4>
        <p class="location__address">
          <span>Kuiv, Stepan Bandera, 33</span>
          <span>02066</span>
          <span>Ukraine</span>
        </p>
      </div>
    </div>
    <GoogleMap class="location__map"/>
  </section>
</template>

<script>
import GoogleMap from "@/components/GoogleMap";

export default {
  name: "LocationBlock",
  data() {
    return {
      currentCoordinates: null,
      ACTIVE_CLASS: "location__link--active"
    };
  },
  computed: {
    cityCoordinates() {
      return this.$store.getters.cityCoordinates;
    }
  },
  methods: {
    showAddress({ target }) {
      const coordinates = target.textContent.toLowerCase();
      this.$store.dispatch(
        "changeCurrentCoordinates",
        this.cityCoordinates[coordinates]
      );
      this.activateLink(target);
    },
    activateLink(target) {
      const activeLink = document.querySelector(`.${this.ACTIVE_CLASS}`);
      if (activeLink) {
        activeLink.classList.remove(this.ACTIVE_CLASS);
      }
      target.classList.add(this.ACTIVE_CLASS);
    }
  },
  components: {
    GoogleMap
  }
};
</script>
