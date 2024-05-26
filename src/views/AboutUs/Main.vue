<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import Moreinfo from "@/components/pages/AboutUs/Moreinfo/index.vue";
import Mission from "@/components/pages/AboutUs/Mission/index.vue";
import Vision from "@/components/pages/AboutUs/Vision/index.vue";
import OurTeam from "@/components/pages/AboutUs/OurTeam/index.vue";
import OurService from "@/components/pages/AboutUs/OurService/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { UseHomepage } from "@/stores/homepage/index";
import { onMounted, ref } from "vue";
const Homepage = UseHomepage();
//onMounted
onMounted(() => {
  Homepage.get_team();
  Homepage.get_services();
  Homepage.get_pages("our-vision");
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="About_us"></Header>
    <Moreinfo></Moreinfo>
    <Mission></Mission>
    <Vision
      v-if="Homepage.ourvision.title"
      :ourvision="Homepage.ourvision"
    ></Vision>
    <OurTeam :team="Homepage.team" v-if="Homepage.team.length > 0"></OurTeam>
    <OurService
      :services="Homepage.services"
      v-if="Homepage.services.length > 0"
    ></OurService>
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
