<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/pages/Hompage/Header/index.vue";
import Plan from "@/components/pages/Hompage/Plan/index.vue";
import AboutCompany from "@/components/pages/Hompage/AboutCompany/index.vue";
import Booking from "@/components/pages/Hompage/Booking/index.vue";
import Rental from "@/components/pages/Hompage/Rental/index.vue";
import Blogs from "@/components/pages/Hompage/Blogs/index.vue";
import BrandCars from "@/components/pages/Hompage/BrandCars/index.vue";
import MostPopular from "@/components/pages/Hompage/MostPopular/index.vue";
import ClientsTestimonials from "@/components/pages/Hompage/ClientsTestimonials/index.vue";
import FAQ from "@/components/pages/Hompage/FAQ/index.vue";
import DownloadApp from "@/components/pages/Hompage/DownloadApp/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { UseBloges } from "@/stores/Bloges/index";
import { UseHomepage } from "@/stores/homepage/index";
// import Loading from "@/components/global/Loading/index.vue";
import { onMounted, ref } from "vue";
import { UseProfile } from "@/stores/Profile";
import { UseCars } from "@/stores/Cars";
const checkIn = ref<Date>();
//Bloges
const Bloges = UseBloges();
//Bloges
const Cars = UseCars();
//Bloges
const Homepage = UseHomepage();
//Bloges
const Profile = UseProfile();

//onMounted
onMounted(() => {
  Bloges.get_Bloges();
  Cars.get_most_popular();
  Cars.get_brand_car();
  Homepage.get_faqs();
  Homepage.get_testimonials();
  Homepage.get_services();
  if (localStorage.getItem("access_token")) {
    Profile.get_profile();
  }
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header></Header>
    <BrandCars :Brands="Cars.Brands"></BrandCars>
    <Plan></Plan>
    <AboutCompany></AboutCompany>
    <Booking></Booking>
    <MostPopular :Mostpopular="Cars.mostpopular"></MostPopular>
    <Rental></Rental>
    <Blogs :Bloges="Bloges.Bloges"></Blogs>
    <ClientsTestimonials
      v-if="Homepage.testimonials.length > 0"
      :testimonials="Homepage.testimonials"
    ></ClientsTestimonials>
    <FAQ :faqs="Homepage.faqs"></FAQ>
    <DownloadApp></DownloadApp>
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
