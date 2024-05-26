<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="Loading-spinner text-center">
    <div class="card mt-3">
      <div class="card-body">
        <div
          class="spinner-border text-warning"
          style="width: 30px; height: 30px; margin: 50px"
          role="status"
        >
          <!-- <span class="sr-only">Loading...</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
