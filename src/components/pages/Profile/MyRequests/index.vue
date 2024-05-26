<script setup>
import { ref } from "vue";
import Tabs from "./SubTab/index.vue";
import AllRequests from "./AllRequests/index.vue";
import ConfirmedRequest from "./ConfirmedRequest/index.vue";

//itemChooseAddCar
const itemChooseAddCar = ref("All_Requests");

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
  <!--AllRequests-->
  <AllRequests
    v-if="itemChooseAddCar == 'All_Requests'"
    @ChooseTabAccount="ChooseTabAccount"
  />
  <!--ConfirmedRequest-->
  <ConfirmedRequest
    v-if="itemChooseAddCar == 'Confirmed_request'"
    @ChooseTabAccount="ChooseTabAccount"
  />
</template>
