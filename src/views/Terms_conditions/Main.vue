<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import Terms_conditions from "@/components/pages/Terms_conditions/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { UseHomepage } from "@/stores/homepage/index";
import loading from "@/components/global/Loading/index.vue";
// import Loading from "@/components/global/Loading/index.vue";
import { onMounted, ref } from "vue";
//Homepage
const Homepage = UseHomepage();
//onMounted
onMounted(() => {
  Homepage.get_pages("terms-and-conditions");
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Terms_conditions"></Header>
    <Terms_conditions
      v-if="Homepage.termsConditions"
      :termsConditions="Homepage.termsConditions"
    ></Terms_conditions
    ><loading v-if="!Homepage.termsConditions"></loading>
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
