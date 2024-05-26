<script setup>
import { ref, defineEmits, defineProps, onMounted } from "vue";
import { useI18n } from "vue-i18n";
//i18n
const { t } = useI18n();
// emit
let props = defineProps(["itemChooseAddCar"]);

// emit
let emits = defineEmits(["ChooseTabAccount"]);
let AccountListIcons = ref([
  {
    id: 0,
    image_icon: new URL(
      `@/assets/images/global/icons/global/profile/like-dislike.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `@/assets/images/global/icons/global/profile/like-dislike-active.svg`,
      import.meta.url
    ).href,
    title: "All_Requests",
  },
  {
    id: 1,
    image_icon: new URL(
      `@/assets/images/global/icons/global/profile/like-shapes.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `@/assets/images/global/icons/global/profile/like-shapes-active.svg`,
      import.meta.url
    ).href,
    title: "Confirmed_request",
  },
]);
const ChooseTabAccountFun = (value) => {
  emits("ChooseTabAccount", value);
};
</script>

<template>
  <ul class="SubTab">
    <li
      v-for="item in AccountListIcons"
      :key="item.id"
      :class="props.itemChooseAddCar == item.title ? 'subActive' : ''"
      @click="ChooseTabAccountFun(item.title)"
    >
      <div class="content">
        <img :src="item.image_icon" class="normal" />
        <img :src="item.image_icon_active" class="activeImage" />
        <h5>{{ t(item.title) }}</h5>
      </div>
    </li>
  </ul>
</template>
<style scoped lang="scss">
@import "../../Tabs/styling.scss";
.SubTab {
  margin: 0px auto 20px;
}
</style>
