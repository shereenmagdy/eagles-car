<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
import { useLight } from "@/stores/light";
const Light = useLight();

//useI18n
const { t } = useI18n();

//Return_point
const Return_pointLong_term = ref(false);
const Pick_up = ref(new Date());
const Drop_of = ref();
//Return_point
const openLoc = ref(false);

//openLocation{z
const openLocation = (e) => {
  console.log("e.target.value", e.target.value);
  if (e.target.value) {
    openLoc.value = true;
  } else {
    openLoc.value = false;
  }
};
//onMounted
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div
    class="card p-3"
    :class="Return_pointLong_term ? '' : 'withReturn_point'"
  >
    <h4>{{ t("Book_car") }}</h4>
    <div class="row flex">
      <div class="Location">
        <label
          ><img
            src="@//assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Location") }}</label
        >
        <SimpleInput>
          <input
            type="text"
            :placeholder="t('Location')"
            class="form-control"
            name="Location"
            @input="openLocation($event)"
        /></SimpleInput>
      </div>
      <div v-if="Return_pointLong_term" class="Return_point">
        <label
          ><img
            src="@//assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Return_point") }}</label
        >
        <SimpleInput>
          <select
            type="text"
            :placeholder="t('Return_point')"
            class="form-control"
            name="Return_point"
          >
            <option>dsad</option>
          </select></SimpleInput
        >
      </div>
      <div>
        <label
          ><img src="@//assets/images/global/icons/global/date.svg" />{{
            t("Pick_up")
          }}</label
        >
        <VueDatePicker
          v-model="Pick_up"
          :min-date="new Date()"
          :dark="Light.Light == 'off' ? true : false"
        />
      </div>
      <div>
        <label
          ><img src="@//assets/images/global/icons/global/date.svg" />{{
            t("Drop_of")
          }}</label
        >
        <VueDatePicker
          v-model="Drop_of"
          :dark="Light.Light == 'off' ? true : false"
        />
      </div>
      <div class="mt-3 buttons">
        <label></label>
        <SimpleButton type="send" class="register_lab">
          <button type="submit">
            {{ t("Search") }}
            <img
              src="@//assets/images/global/icons/global/Homepage/search-normal.svg"
            /></button
        ></SimpleButton>
      </div>
    </div>
    <h6
      class="Return-point"
      @click="Return_pointLong_term = true"
      v-if="!Return_pointLong_term"
    >
      + {{ t("return_point") }}
    </h6>
    <div class="The_location" v-if="openLoc">
      <hr />
      <p>
        <img src="@//assets/images/global/icons/global/Homepage/location.svg" />
        Your location
      </p>
      <h5>Popular location</h5>
      <p>
        <img src="@//assets/images/global/icons/global/Homepage/location.svg" />
        Eltera street
      </p>
      <p>
        <img src="@//assets/images/global/icons/global/Homepage/location.svg" />
        Elsanawyea street
      </p>
      <p>
        <img src="@//assets/images/global/icons/global/Homepage/location.svg" />
        Elgomhoria street
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styleing.scss";
</style>
