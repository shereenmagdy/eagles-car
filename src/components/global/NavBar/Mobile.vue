<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { defineProps, defineEmits } from "vue";
import signoutGoogle from "./signoutGoogle.vue";
import { useLight } from "@/stores/light";

// props
let props = defineProps(["Links", "lang"]);

//Login
const Login = localStorage.getItem("access_token");

//type
const type = localStorage.getItem("type");

// emit
let emit = defineEmits([
  "changeLang",
  "changeshowMobile",
  "Logout",
  "LightFun",
]);
// useLight
const Light = useLight();
// i18n
const { t } = useI18n();

const changeLangEmit = (lang_targe: String) => {
  emit("changeLang", lang_targe);
};
//LightFunEmit
const LightFunEmit = (value: String) => {
  emit("LightFun", value);
};
const showMobile = () => {
  emit("changeshowMobile");
}; //Logout
const LogoutFun = () => {
  emit("Logout");
};
</script>

<template>
  <div class="mobile pb-5">
    <div class="mobile_sec">
      <div class="close">
        <button class="navbar-toggler" type="button" @click="showMobile()">
          X
        </button>
      </div>
      <div>
        <div class="navbar-nav">
          <ul class="list_links">
            <li v-for="link in props.Links" :key="link.id">
              <router-link
                :to="{ name: link.name }"
                class="nav-link active"
                href="#aboutUs"
              >
                {{ t(link.title) }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-btns">
        <SimpleButton type="send" v-if="!Login">
          <router-link to="/register" class="btn">
            {{ t("Signup") }}
          </router-link></SimpleButton
        >
        <router-link to="/login" class="btn btn-main" v-if="!Login">{{
          t("Login")
        }}</router-link>
        <!-- lang -->
        <div class="lang">
          <button v-if="props.lang == 'ar'" @click="changeLangEmit('en')">
            <img src="@/assets/images/global/icons/global/flag-eng.svg" />
          </button>
          <button v-else @click="changeLangEmit('ar')">
            <img src="@/assets/images/global/icons/global/flag_eg.svg" />
          </button>
        </div>
        <div class="info-login" v-if="Login">
          <router-link to="/profile" class="profile_link">
            <img src="../../../assets/images/global/icons/global/man.svg"
          /></router-link>
          <!-- <router-link class="btn notification" to="/notification">
            <img
              src="../../../assets/images/global/icons/global/profile/notification-bing.svg"
            />
          </router-link>
          <router-link class="btn messages" to="/Chats">
            <img
              src="../../../assets/images/global/icons/global/profile/messages.svg"
            />
          </router-link> -->
        </div>

        <!-- light button -->
        <div class="light">
          <div
            class="open"
            @click="LightFunEmit('off')"
            v-if="Light.Light == 'open'"
          >
            <img src="../../../assets/images/global/icons/global/moon.svg" />
          </div>
          <div
            class="off"
            @click="LightFunEmit('open')"
            v-if="Light.Light == 'off'"
          >
            <img src="../../../assets/images/global/icons/global/light.svg" />
          </div>
        </div>
        <!--if Login-->
        <div v-if="Login">
          <!--if signin or login by google-->
          <signoutGoogle v-if="type == 'Google'" />
          <!--if signin or login by facebook-->
          <LogoutFacebook v-if="type == 'facebook'" />
          <!--if signin or login by account-->
          <SimpleButton type="send" v-if="type == 'account'">
            <button class="btn logout" @click="LogoutFun">
              {{ t("Logout") }}
            </button>
          </SimpleButton>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
</style>
