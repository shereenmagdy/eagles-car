<template>
  <SimpleButton type="send">
    <button class="btn logout" @click="logout()">
      <span> {{ t("Logout") }}</span>
    </button></SimpleButton
  >
</template>

<script lang="ts" setup>
import { accountService } from "@/_services/account.service";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useI18n } from "vue-i18n";

//I18n
const { t } = useI18n();

//I18n
const account_service = accountService();

const logout = () => {
  account_service.logout();
};
</script>
<style lang="scss">
@import "../NavBar/NavbarStyling";
</style>
