<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import DetaliesCar from "@/components/pages/CarDetailes/DetaliesCar/index.vue";
import CardsDetailes from "@/components/pages/CarDetailes/CardsDetailes/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { UseCars } from "@/stores/Cars/index";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

//Bloges
const route = useRoute();

//Bloges
const Cars = UseCars();
const cardLimit = ref([]);

//onMounted
onMounted(async () => {
  await Cars.get_Car(route.params.slug);
  await Cars.get_Cars();
}); //watch page
watch(Cars, (newpage) => {
  cardLimit.value = [];
  if (newpage.Cars.length > 3) {
    cardLimit.value.push(newpage.Cars[0]);
    cardLimit.value.push(newpage.Cars[1]);
    cardLimit.value.push(newpage.Cars[2]);
  } else {
    cardLimit.value = newpage.Cars;
  }
});
watch(route, (newpage) => {
  Cars.get_Car(newpage.params.slug);
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Car_details"></Header>
    <DetaliesCar :Car="Cars.Car" v-if="Cars.Car"></DetaliesCar>
    <CarRental></CarRental>
    <CardsDetailes :Cars="cardLimit" v-if="Cars.Car != 0"></CardsDetailes>
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
