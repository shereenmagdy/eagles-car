<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import BlogDetailes from "@/components/pages/BlogDetailes/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import { UseBloges } from "@/stores/Bloges/index";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

//Bloges
const route = useRoute();

//Bloges
const Bloges = UseBloges();

//onMounted
onMounted(() => {
  Bloges.get_Bloges();
  Bloges.get_Blog(route.params.slug);
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="most_fast"></Header>
    <BlogDetailes
      :Blog="Bloges.Blog"
      v-if="Bloges.Blog.slug"
      :Bloges="Bloges.Bloges"
    ></BlogDetailes>
    <Loading v-if="!Bloges.Blog.slug"></Loading>
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
