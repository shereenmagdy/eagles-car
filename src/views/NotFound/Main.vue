<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import NotFound from "@/components/pages/NotFound/index.vue";
import Footer from "@/components/global/Footer/index.vue";
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
    <Header TiltePage="404"></Header>
    <NotFound />
    <Footer></Footer>
  </section>
</template>
