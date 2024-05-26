<script setup lang="ts">
import ForgetPasswords from "@/components/global/ForgetPassword/index.vue";
</script>
<template>
  <section class="auth">
    <ForgetPasswords></ForgetPasswords>
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
