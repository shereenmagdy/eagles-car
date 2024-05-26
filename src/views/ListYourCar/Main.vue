<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import CarInformation from "@/components/pages/ListYourCar/CarInformation/index.vue";
import CarLicense from "@/components/pages/ListYourCar/CarLicense/index.vue";
import PhotoPrices from "@/components/pages/ListYourCar/PhotoPrices/index.vue";
import ParkingAddress from "@/components/pages/ListYourCar/ParkingAddress/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { ref } from "vue";

//itemChooseAddCar
const itemChooseAddCar = ref("Car information");

//ChooseTabAccount
const ChooseTabAccount = (nameTab) => {
  itemChooseAddCar.value = nameTab;
};
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="List_your_car"></Header>
    <div class="container mt-5">
      <CarInformation
        v-if="itemChooseAddCar == 'Car information'"
        @ChooseTabAccount="ChooseTabAccount"
      />
      <CarLicense
        v-if="itemChooseAddCar == 'Car_license'"
        @ChooseTabAccount="ChooseTabAccount"
      />
      <PhotoPrices
        v-if="itemChooseAddCar == 'Photo_and_prices'"
        @ChooseTabAccount="ChooseTabAccount"
      />
      <ParkingAddress
        v-if="itemChooseAddCar == 'Features'"
        @ChooseTabAccount="ChooseTabAccount"
      />
    </div>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
