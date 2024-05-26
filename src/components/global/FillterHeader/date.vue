<template>
  <VueDatePicker
    v-model="date"
    :min-date="new Date()"
    :dark="Light.Light == 'off' ? true : false"
  ></VueDatePicker>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, defineEmits, watch } from "vue";
import { useLight } from "@/stores/light";
const Light = useLight();
let emit = defineEmits(["AddDateFirst"]);
const date = ref(new Date());
// const disabledDates = computed(() => {
//   const today = new Date();

//   const tomorrow = new Date(today);
//   tomorrow.setDate(tomorrow.getDate() - 1);

//   const afterTomorrow = new Date(tomorrow);
//   afterTomorrow.setDate(tomorrow.getDate() + 1);

//   return [tomorrow, afterTomorrow];
// });
watch(date, (newValue) => {
  console.log("date.value = ", newValue);
  emit("AddDateFirst", newValue);
});
</script>
