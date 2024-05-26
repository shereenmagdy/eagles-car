<script setup lang="ts">
const props = defineProps<{
  type: "send" | "end" | "sub_button" | "send_gray";
}>();
</script>
<template>
  <section class="simple-button" :class="{ [type]: type }">
    <slot></slot>
  </section>
</template>
<style lang="scss">
.simple-button {
  button,
  .btn {
    min-width: max-content;
    padding: 15px;
    border: none;
    border-radius: 3px;
    svg {
      width: 18px;
      height: 20px;
    }
  }
  &.send,
  &.send_blue {
    button,
    .btn {
      background: var(--orange-text-color);
      color: var(--white-color);
      min-width: max-content;
    }
  }
  &.send_gray {
    button,
    .btn {
      background: #f3f3f3;
    }
  }
  &.end {
    button,
    .btn {
      background: var(--second-background);
      color: var(--text-gray-color);
      min-width: max-content;
    }
  }
  &.sub_button {
    button,
    .btn {
      background: #f3f3f3;
      min-width: max-content;
    }
  }
}
</style>
