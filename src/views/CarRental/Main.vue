<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import CarRental from "@/components/pages/CarRental/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import NotFound from "@/components/pages/NotFound/index.vue";
import { UseCars } from "@/stores/Cars/index";
import { onMounted } from "vue";

//Bloges
const Cars = UseCars();

//onMounted
onMounted(() => {
  Cars.get_Cars();
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Car_rental"> </Header>
    <CarRental :Cars="Cars.Cars" v-if="Cars.Cars.length != 0"></CarRental>
    <div v-if="Cars.Cars.length == 0">
      <Loading v-if="!Cars.unfounedCars"></Loading>
      <NotFound v-else />
    </div>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
