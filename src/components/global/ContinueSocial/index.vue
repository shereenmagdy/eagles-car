<script lang="ts" setup>
import Facebook from "./Facebook.vue";
import Google from "./Google.vue";
import { useI18n } from "vue-i18n";
import { defineProps } from "vue";

// props
let props = defineProps(["type"]);

// i18n
const { t } = useI18n();
</script>

<template>
  <GoogleLogin :callback="callback" />
  <div class="ContinueWith">
    <p>{{ t("ContinueWith") }} :</p>
    <div class="card">
      <img src="@/assets/images/global/icons/global/Email.svg" />
      <p>{{ t("Google") }}</p>
      <div class="SignInButton">
        <Google :typeLogin="props.type" />
      </div>
    </div>
    <div class="card">
      <img src="@/assets/images/global/icons/global/facebook.svg" />
      <p>{{ t("facebook") }}</p>
      <div class="SignInButton">
        <Facebook :typeLogin="props.type" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../Login/AuthSyling.scss";
</style>
