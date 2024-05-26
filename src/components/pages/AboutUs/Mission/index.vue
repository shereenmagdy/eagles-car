<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Mission">
    <div class="container">
      <div
        class="info"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <h6 class="color-main">{{ t("More_info") }}</h6>
        <h2 class="header_title">{{ t("about_us_page") }}</h2>
        <p class="">
          {{ t("message_Mission1") }}<br />{{ t("message_Mission2") }}<br />{{
            t("message_Mission3")
          }}<br />{{ t("message_Mission4") }}
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.Mission {
  overflow-y: hidden;
  height: auto;
  text-align: center;
  margin: 150px 0px;
  p {
    line-height: 2.2;
  }
  .container {
    overflow-y: hidden;
    height: auto;
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
}

/*ar version */
.is-ar {
}
</style>
