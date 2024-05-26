<script lang="ts">
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { inject, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const Vue3GoogleOauth = inject("Vue3GoogleOauth");

export default {
  name: "HelloWorld",
  components: { SimpleButton },
  props: {
    msg: String,
  },

  data() {
    return {
      user: "",
      router: useRouter(),
      authStore: useAuthStore(),
    };
  },

  methods: {
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.user = "";
        this.authStore.logOut();
      } catch (error) {
        console.error(error);
      }
    },
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    // i18n
    const { t } = useI18n();

    const handleClickLogin = () => {};
    return {
      t,
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
};
</script>

<template>
  <SimpleButton type="send">
    <button
      class="btn logout"
      @click="handleClickSignOut"
      :disabled="!Vue3GoogleOauth.isAuthorized"
    >
      {{ t("Logout") }}
    </button></SimpleButton
  >
</template>
<style lang="scss" scoped>
@import "./NavbarStyling.scss";
</style>
