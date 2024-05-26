<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import DetaliesCar from "@/components/pages/sendRequest/DetaliesCar/index.vue";
import ClientsTestimonials from "@/components/pages/Hompage/ClientsTestimonials/index.vue";
import CardsDetailes from "@/components/pages/CarDetailes/CardsDetailes/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { UseCars } from "@/stores/Cars/index";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

//Bloges
const route = useRoute();

//Bloges
const Cars = UseCars();

//onMounted
onMounted(() => {
  Cars.get_Car(route.params.slug);
  Cars.get_Cars();
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="sendRequest"></Header>
    <DetaliesCar :Car="Cars.Car" v-if="Cars.Car"></DetaliesCar>
    <CarRental></CarRental>
    <Footer></Footer>
  </section>
</template>
<style lang="scss">
@import "../../assets/scss/variables";
.auth {
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (max-width: map-get($grid, xl)) {
    aside {
      display: none;
    }
  }
}
</style>
