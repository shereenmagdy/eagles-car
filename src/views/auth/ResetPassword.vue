<script setup lang="ts">
import ResetPassword from "@/components/global/ResetPassword/index.vue";
</script>
<template>
  <section class="auth">
    <ResetPassword></ResetPassword>
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
