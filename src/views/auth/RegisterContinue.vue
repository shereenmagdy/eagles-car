<script setup lang="ts">
import RegisterContinue from "@/components/global/RegisterContinue/index.vue";
</script>
<template>
  <section class="auth">
    <RegisterContinue></RegisterContinue>
  </section>
</template>
<style lang="scss">
@import "../../assets/scss/variables";
.auth {
  width: 100%;
  height: 100%;
  position: relative;
  // padding: {
  //   bottom: var(--padding-between-sections);
  // }
  @media screen and (max-width: map-get($grid, xl)) {
    aside {
      display: none;
    }
  }
}
</style>
