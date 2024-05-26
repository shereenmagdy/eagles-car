<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import CardCarsDetalies from "../../../global/CardCarsDetalies/index.vue";
import AOS from "aos";
const { t } = useI18n();
const props = defineProps(["Cars"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="CardsDetailes">
    <div class="container">
      <h6 class="color-main p-0">{{ t("New_data") }}</h6>
      <h3>{{ t("Recommended_cars") }}</h3>
      <div class="row">
        <div class="col-lg-4" v-for="info in props.Cars" :key="info.id">
          <CardCarsDetalies :data="info"></CardCarsDetalies>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.CardsDetailes {
  margin-top: 150px;
  height: auto;
  h3 {
    font-weight: 700;
    margin-bottom: 50px;
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
  .CarRental .row {
    margin: 0px;
    padding: 0px;
  }
  .CarRental .the_block .card .title,
  .CarRental .the_block .card .BookNow {
    flex-direction: column;
  }
}

/*ar version */
.is-ar {
  .CarRental .the_block .card .title .buttons .rating_number {
    margin-left: 10px;
    margin-right: 0px;
  }
  .Fillter .row label img {
    margin-left: 5px;
    margin-right: 0px;
  }
}
</style>
