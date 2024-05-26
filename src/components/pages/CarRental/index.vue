<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import FillterHeader from "../../global/FillterHeader/index.vue";
import Fillter from "./Fillter/index.vue";
import CardsDetailes from "./CardsDetailes/index.vue";
import { defineProps } from "vue";
import AOS from "aos";

// useI18n
const { t } = useI18n();

// defineProps
let props = defineProps(["Cars"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="CarRental">
    <div class="container">
      <div class="LookingFor"><FillterHeader /></div>
      <div class="row">
        <!-- <div class="col-lg-4"><Fillter /></div> -->
        <div class="col-lg-12"><CardsDetailes :Cars="props.Cars" /></div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.CarRental {
  padding-top: 152px;
  position: relative;
  .LookingFor {
    position: absolute;
    top: -90px;
    width: 100%;
    left: 0px;
    z-index: 10000;
  }
}
/*media" */
@media screen and (max-width: 990px) {
  .CarRental {
    // padding-top: 500px;
    .LookingFor {
    }
    .row {
      margin: 0px;
      padding: 0px;
    }
  }
}

/*ar version */
.is-ar {
}
</style>
<style lang="scss">
.LookingFor .FillterHeader {
  width: 84%;
  margin: auto;
  .withReturn_point,
  .card,
  .tab {
    max-width: 100%;
    width: 100%;
  }
}
</style>
