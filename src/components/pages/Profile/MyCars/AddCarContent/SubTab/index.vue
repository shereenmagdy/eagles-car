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
      `@/assets/images/global/icons/global/profile/data.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `@/assets/images/global/icons/global/profile/data-active.svg`,
      import.meta.url
    ).href,
    title: "Car_information",
  },
  {
    id: 1,
    image_icon: new URL(
      `@/assets/images/global/icons/global/profile/money-forbidden.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `@/assets/images/global/icons/global/profile/money-forbidden-active.svg`,
      import.meta.url
    ).href,
    title: "Car_license",
  },
  {
    id: 2,
    image_icon: new URL(
      `@/assets/images/global/icons/global/profile/wallet-2.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `@/assets/images/global/icons/global/profile/wallet-2-active.svg`,
      import.meta.url
    ).href,
    title: "Photo_and_prices",
  },
  {
    id: 3,
    image_icon: new URL(
      `@/assets/images/global/icons/global/profile/star-svgrepo-com.active.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `@/assets/images/global/icons/global/profile/star-svgrepo-com.svg`,
      import.meta.url
    ).href,
    title: "Features",
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
@import "../../../Tabs/styling.scss";
.SubTab {
  margin: 0px auto 20px;
}
</style>
