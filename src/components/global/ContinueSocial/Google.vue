<script lang="ts">
import { inject, toRefs } from "vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const Vue3GoogleOauth = inject("Vue3GoogleOauth");
export default {
  props: ["typeLogin"],
  data() {
    return {
      user: "",
      authStore: useAuthStore(),
      router: useRouter(),
    };
  },
  methods: {
    // handle Click SignIn
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        // Login by Google
        if (this.$props.typeLogin == "Login") {
          this.authStore.loginSocialMedia.access_token =
            googleUser.getAuthResponse().access_token;
          await this.authStore.registerGoogle(this.authStore.loginSocialMedia);
        }

        // register by Google
        if (this.$props.typeLogin == "Register") {
          this.authStore.registerSocialMedia.access_token =
            googleUser.getAuthResponse().access_token;
          this.router.push("/register-continue/Google");
        }
        this.authStore.registertionResetFun();
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
  },
  setup(props) {
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    return {
      Vue3GoogleOauth,
    };
  },
};
</script>

<template>
  <button
    @click="handleClickSignIn"
    :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
  >
    sign in
  </button>
</template>
<style lang="scss">
@import "../Login/AuthSyling.scss";
</style>
