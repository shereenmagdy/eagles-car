<script setup>
import { ref } from "vue";
import Tabs from "./SubTab/index.vue";
import Promotions from "./Promotions/index.vue";
import Payement from "./Payement/index.vue";

//itemChooseAddCar
const itemChooseAddCar = ref("Promotions");

//ChooseTabAccount
const ChooseTabAccount = (nameTab) => {
  console.log("ChooseTab==", nameTab);
  itemChooseAddCar.value = nameTab;
};
</script>
<template>
  <Tabs
    @ChooseTabAccount="ChooseTabAccount"
    :itemChooseAddCar="itemChooseAddCar"
  ></Tabs>
  <!--Promotions-->
  <Promotions
    v-if="itemChooseAddCar == 'Promotions'"
    @ChooseTabAccount="ChooseTabAccount"
  />
  <!--Payement-->
  <Payement
    v-if="itemChooseAddCar == 'Payement'"
    @ChooseTabAccount="ChooseTabAccount"
  />
</template>
