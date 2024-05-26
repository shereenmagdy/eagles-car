<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import SearchingReaults from "@/components/pages/SearchingReault/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import NotFound from "@/components/pages/NotFound/index.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { UseCars } from "@/stores/Cars";
const route = useRoute();
//Bloges
const Cars = UseCars();
//onMounted
onMounted(() => {
  let data = { query: route.params.slug };
  Cars.FillterCars(data);
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header :TiltePage="route.params.slug"></Header>
    <div v-if="Cars.CarsFillter">
      <SearchingReaults
        v-if="Cars.CarsFillter.length != 0"
        :CarsFillter="Cars.CarsFillter"
      ></SearchingReaults>
      <NotFound v-else />
    </div>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
