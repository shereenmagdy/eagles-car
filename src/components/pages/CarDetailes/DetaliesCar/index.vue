<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import Description from "./Description/index.vue";
import specificationsCar from "./specificationsCar/index.vue";
import { defineProps } from "vue";
import loading from "../../../global/Loading/index.vue";
import AOS from "aos";

// useI18n
const { t } = useI18n();

// defineProps
let props = defineProps(["Car"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="DetaliesCar" v-if="props.Car">
    <div class="container">
      <div class="row">
        <div class="col-lg-8"><Description :Car="props.Car" /></div>
        <div class="col-lg-4"><specificationsCar :Car="props.Car" /></div>
      </div>
    </div>
  </div>
  <loading v-else></loading>
</template>
<style scoped lang="scss">
.DetaliesCar {
  margin: 100px 0px;
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
