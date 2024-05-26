<script setup lang="ts">
import OTPRegisterion from "@/components/global/OTPRegisterion/index.vue";
</script>
<template>
  <section class="auth">
    <OTPRegisterion></OTPRegisterion>
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
