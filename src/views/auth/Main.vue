<script setup lang="ts">
import Login from "@/components/global/Login/LogIn.vue";
</script>
<template>
  <section class="auth">
    <Login></Login>
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
