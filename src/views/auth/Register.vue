<script setup lang="ts">
import Register from "@/components/global/register/register.vue";
</script>
<template>
  <section class="auth">
    <Register></Register>
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
