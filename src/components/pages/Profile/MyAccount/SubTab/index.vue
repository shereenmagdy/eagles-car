<script setup>
import { ref, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
//i18n
const { t } = useI18n();
// emit
let emits = defineEmits(["ChooseTabAccount"]);
let activeItemAccount = ref("Personal_information");
let AccountListIcons = ref([
  {
    id: 0,
    image_icon: new URL(
      `../../../../../assets/images/global/icons/global/profile/profile.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `../../../../../assets/images/global/icons/global/profile/profile-active.svg`,
      import.meta.url
    ).href,
    title: "Personal_information",
  },
  {
    id: 1,
    image_icon: new URL(
      `../../../../../assets/images/global/icons/global/profile/verify.svg`,
      import.meta.url
    ).href,
    image_icon_active: new URL(
      `../../../../../assets/images/global/icons/global/profile/verify-active.svg`,
      import.meta.url
    ).href,
    title: "User verification",
  },
]);
const ChooseTabAccountFun = (value) => {
  activeItemAccount.value = value;
  emits("ChooseTabAccount", value);
};
</script>

<template>
  <ul class="SubTab">
    <li
      v-for="item in AccountListIcons"
      :key="item.id"
      :class="activeItemAccount == item.title ? 'subActive' : ''"
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
