<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import Notification from "@/components/pages/Notification/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import Loading from "@/components/global/Loading/index.vue";
// import { UseBloges } from "@/stores/Bloges/index";
// import { onMounted } from "vue";

// //Bloges
// const Bloges = UseBloges();

// //onMounted
// onMounted(() => {
//   Bloges.get_Bloges();
// });
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Notification"></Header><Notification />
    <!-- <div v-if="Bloges.Bloges.length == 0">
      <Loading v-if="!Bloges.unfouned"></Loading>
      <p class="Not_Found" v-else>Not Found !</p>
    </div> -->
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
.Not_Found {
  margin: 100px auto;
  text-align: center;
  color: #aaa;
}
</style>
