<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import Blogs from "@/components/pages/Blogs/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import NotFound from "@/components/pages/NotFound/index.vue";
import Loading from "@/components/global/Loading/index.vue";
import { UseBloges } from "@/stores/Bloges/index";
import { onMounted } from "vue";

//Bloges
const Bloges = UseBloges();

//onMounted
onMounted(() => {
  Bloges.get_Bloges();
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Blogs"></Header>
    <Blogs :Bloges="Bloges.Bloges" v-if="Bloges.Bloges.length != 0"></Blogs>
    <div v-if="Bloges.Bloges.length == 0">
      <Loading v-if="!Bloges.unfouned"></Loading>
      <NotFound v-else />
    </div>
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
