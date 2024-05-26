<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import FavouritCar from "@/components/pages/FavouritCar/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { UseCars } from "@/stores/Cars";
const route = useRoute();
//Bloges
const Cars = UseCars();
//onMounted
onMounted(() => {
  Cars.get_brand_car_info(route.params.slug);
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header :TiltePage="route.params.slug"></Header>
    <!-- <pre v-if="Cars.BrandInfo">{{ Cars.BrandInfo }}</pre> -->
    <FavouritCar
      v-if="Cars.BrandInfo != 0"
      :BrandInfo="Cars.BrandInfo"
    ></FavouritCar>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
