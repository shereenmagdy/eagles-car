<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { defineProps } from "vue";

// useI18n
const { t } = useI18n();

// defineProps
let props = defineProps(["Car"]);
</script>
<template>
  <div class="specificationsCar">
    <h4 class="mb-4">{{ props.Car.title }}</h4>
    <hr />
    <div class="row m-0 p-0">
      <div class="col-lg-8 d-flex align-items-center">
        <p class="priceCar">{{ props.Car.price }} LE</p>
        <span>
          (per <span v-if="props.Car.per == 1">hour</span>
          <span v-else-if="props.Car.per == 2">day</span>
          <span v-else-if="props.Car.per == 3">week </span>
          <span v-else-if="props.Car.per == 4">month</span>
          <span v-else-if="props.Car.per == 5">year</span>)
        </span>
        <!-- <p>
          <img
            src="../../../../../assets/images/global/icons/global/cardDetailes/star.svg"
          />Add to favorites
        </p> -->
      </div>
      <div class="col-lg-4 m-0 p-0">
        <div class="buttons">
          <SimpleButton type="send" v-if="props.Car.available == 1">
            <button to="/" type="submit" class="btn">
              {{ t("Available") }}
            </button></SimpleButton
          >
        </div>
      </div>
    </div>
    <div class="information" v-if="props.Car.properties">
      <div class="row" v-for="proper in props.Car.properties">
        <div class="col-sm-6">{{ proper.title }}</div>
        <div class="col-sm-6">{{ proper.value }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.specificationsCar {
  h6 {
    font-size: 14px;
    span {
      font-size: 22px;
      vertical-align: super;
      font-weight: 700;
    }
  }
  p img {
    vertical-align: sub;
  }
  .buttons {
    text-align: right;
    .rating_number {
      background: black;
      color: white;
      border-radius: 8px;
      padding: 8px 0px;
      margin-right: 10px;
      width: 70px;
      text-align: center;
    }
    button {
      height: 44px;
      padding: 5px 10px;
      background: #44c308;
      border-radius: 8px;
      color: white;
    }
  }
  .information {
    background: #fafafa;
    padding: 25px 8px 18px 40px;
    border-radius: 8px;
    margin-top: 20px;
    .row {
      margin-bottom: 10px;
      div:first-child {
        font-weight: bold;
      }
    }
  }
  .Send_request {
    width: 100%;
    a {
      width: 100%;
      margin-top: 20px;
    }
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
