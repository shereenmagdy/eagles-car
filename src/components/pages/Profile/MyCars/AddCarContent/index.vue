<script setup>
import { ref, defineEmits } from "vue";
import Tabs from "./SubTab/index.vue";
import CarInformation from "./CarInformation/index.vue";
import CarLicense from "./CarLicense/index.vue";
import PhotoPrices from "./PhotoPrices/index.vue";
import ParkingAddress from "./ParkingAddress/index.vue";
const itemChooseAddCar = ref("Car_information");
// emit
let emits = defineEmits(["GoToMyCar"]);
const ChooseTabAccount = (nameTab) => {
  console.log("ChooseTab==", nameTab);
  itemChooseAddCar.value = nameTab;
};
const ChooseTabGoToMyCar = () => {
  emits("GoToMyCar");
};
</script>
<template>
  <Tabs
    @ChooseTabAccount="ChooseTabAccount"
    :itemChooseAddCar="itemChooseAddCar"
  ></Tabs>
  <CarInformation
    v-if="itemChooseAddCar == 'Car_information'"
    @ChooseTabAccount="ChooseTabAccount"
    @ChooseTabGoToMyCar="ChooseTabGoToMyCar"
  />
  <CarLicense
    v-if="itemChooseAddCar == 'Car_license'"
    @ChooseTabAccount="ChooseTabAccount"
    @ChooseTabGoToMyCar="ChooseTabGoToMyCar"
  />
  <PhotoPrices
    v-if="itemChooseAddCar == 'Photo_and_prices'"
    @ChooseTabAccount="ChooseTabAccount"
    @ChooseTabGoToMyCar="ChooseTabGoToMyCar"
  />
  <ParkingAddress
    v-if="itemChooseAddCar == 'Features'"
    @ChooseTabGoToMyCar="ChooseTabGoToMyCar"
    @ChooseTabAccount="ChooseTabAccount"
  />
</template>
