<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import CardCarsDetalies from "../../../global/CardCarsDetalies/index.vue";
import { defineProps } from "vue";
import AOS from "aos";

// useI18n
const { t } = useI18n();

// defineProps
let props = defineProps(["Cars"]);

const data = ref([
  {
    id: 0,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 1,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car2.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 2,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 3,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 4,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car2.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 5,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="row" v-if="props.Cars.length != 0">
    <div class="col-md-4" v-for="info in props.Cars" :key="info.id">
      <!-- <router-link to="/car-detalies"> -->
      <CardCarsDetalies :data="info"></CardCarsDetalies>
    </div>
  </div>
</template>
<style scoped lang="scss">
a {
  color: black;
  &:hover {
    color: black;
  }
}
/*media" */
</style>
