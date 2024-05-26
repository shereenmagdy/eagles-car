<template>
  <VueDatePicker
    v-model="date"
    :min-date="startDate"
    :max-date="endDate"
    :disabled="!startDate ? true : false"
    prevent-min-max-navigation
    :dark="Light.Light == 'off' ? true : false"
  />
</template>
<script setup lang="ts">
//  range auto-range="30"    auto-apply
import { ref, defineProps, watch } from "vue";
import { useLight } from "@/stores/light";
const Light = useLight();

const date = ref();
let props = defineProps(["checkIn"]);

const startDate = ref<Date>();
const endDate = ref<Date>();

const addMonths = (date) => {
  const day = date.getDate() + 1;
  const month = date.getMonth() + 3;
  const year = date.getFullYear();
  let result = new Date(date);
  result.setMonth(result.getMonth() + 3);
  if (result.getDate() !== day) {
    result.setDate(0);
  }
  return result;
};
watch(props, (newValue) => {
  console.log("checkIn = ", newValue.checkIn);
  startDate.value = props.checkIn;
  endDate.value = addMonths(new Date(startDate.value));
});
</script>
