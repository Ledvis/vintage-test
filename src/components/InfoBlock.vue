<style lang="scss" scoped>
@import "@/styles/style.scss";
@import "@/styles/blocks/_caption.scss";
@import "@/styles/blocks/_info.scss";
</style>

<template>
  <section class="info">
    <div class="info__wrapper">
      <h1 class="info__title">Contacts</h1>
      <div class="info__container">
        <div class="info__block">
          <h3 class="info__caption  caption"><strong class="info__strong">GMS</strong> Headquarters</h3>
          <div class="info__flex-box">
            <div class="info__box">
              <p class="info__text">
                Global Message Services Ukraine LLC
              </p>
              <p class="info__text">
                Bundesstrasse 5 | 3rd Floor
              </p>
              <p class="info__text">
                6300 Zug
              </p>
              <p class="info__text  info__text--margin-bottom">
                Switzerland
              </p>
              <a class="info__link  info__link--font-big" href="tel:+41415446200">+41 41 544 62 00</a>
            </div>
            <div class="info__box">
              <p class="info__text">Email</p>
              <a class="info__link" href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a>
              <p class="info__text">Send message</p>
              <a class="info__link" href="#">Viber us</a>
              <p class="info__text">Send form</p>
              <a class="info__link" href="#">Contact us</a>
            </div>
          </div>
        </div>
        <div class="info__block">
          <h3 class="info__caption  caption">Technical support <strong class="info__strong">24/7</strong></h3>
          <p class="info__text  info__text--margin-bottom">GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
          <a class="info__link  info__link--font-big" href="tel:+41415446206">+41 41 544 62 06</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoBlock"
};
</script>
