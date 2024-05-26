<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { onMounted } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="CarRental">
    <div class="container">
      <h2 class="mb-4">
        {{ t("view_detailes") }}
      </h2>
      <SimpleButton type="send">
        <button to="/" type="submit" class="btn">
          {{ t("View") }}
        </button></SimpleButton
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../../../assets/scss/variables";
.CarRental {
  padding-top: 100px;
  background: url("../../../../assets/images/global/icons/global/aboutus/CarRental.svg")
    no-repeat center center;
  background-size: cover;
  height: max-content;
  width: 100%;
  height: 447px;
  text-align: center;
  h2 {
    color: white;
    line-height: 2;
    width: 300px;
    margin: auto;
  }
  button {
    width: 200px;
  }
}

/****media****/

@media screen and (max-width: 992px) {
  header {
    h2 {
      width: auto;
    }
  }
}
</style>
