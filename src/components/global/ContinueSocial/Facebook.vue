<template>
  <button class="btn btn-facebook" @click="login">
    <i class="fa fa-facebook mr-1"></i>
    Login with Facebook
  </button>
</template>

<script lang="ts" setup>
import { accountService } from "@/_services/account.service";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useI18n } from "vue-i18n";
import { defineProps } from "vue";

// props
let props = defineProps(["typeLogin"]);

//I18n
const { t } = useI18n();

//I18n
const account_service = accountService();

// login
const login = () => {
  account_service.login(props.typeLogin);
};
</script>
