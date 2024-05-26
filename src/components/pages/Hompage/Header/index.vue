<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
import FillterHeader from "../../../global/FillterHeader/index.vue";

//useI18n
const { t } = useI18n();

//Return_point
const Return_point = ref(false);

//Return_point
const Tab_choose = ref("Long");

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <header>
    <div class="container">
      <h1
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-easing="ease-in-out"
      >
        {{ t("save") }} <span class="color-main">{{ t("time") }}</span>
        {{ t("withOur") }} <br /><span class="color-main">{{
          t("Eagles")
        }}</span>
        {{ t("car_rental") }}
      </h1>
      <FillterHeader />
      <div class="carImage">
        <img
          src="../../../../assets/images/global/icons/global/Homepage/car.svg"
        />
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "../../../../assets/scss/variables";
@import "./Header.scss";
</style>
