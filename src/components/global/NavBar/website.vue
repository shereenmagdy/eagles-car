<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useAuthStore } from "@/stores/auth";
import signoutGoogle from "./signoutGoogle.vue";
import LogoutFacebook from "../ContinueSocial/logoutFacebook.vue";
import { defineProps, defineEmits, ref, onMounted } from "vue";
import { useLight } from "@/stores/light";
import NotificationPopup from "../NotificationPopup/index.vue";
import ChatPopup from "../ChatPopup/index.vue";
import { UseProfile } from "@/stores/Profile/index";

//Profile
const Profile = UseProfile();
// props
let props = defineProps(["Links", "lang", "ImageProfile"]);
let emit = defineEmits(["changeLang", "Logout", "LightFun"]);

// useLight
const Light = useLight();

// i18n
const { t } = useI18n();

//Login
const Login = ref();

//type
const type = localStorage.getItem("type");

// showNotification
const showNotification = ref(false);

// showNotification
const showChat = ref(false);

//Logout
const LogoutFun = () => {
  emit("Logout");
};
//changeLangEmit
const changeLangEmit = (lang_targe: String) => {
  emit("changeLang", lang_targe);
};
//LightFunEmit
const LightFunEmit = (value: String) => {
  emit("LightFun", value);
};
//onMounted page
onMounted(() => {
  Login.value = localStorage.getItem("access_token");
});
</script>

<template>
  <div class="website">
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
    <div
      class="navbar-btns navbar-btns-icons navbar-btns-icons-authonticaTION d-flex align-items-center"
    >
      <!-- register button -->
      <SimpleButton type="send">
        <router-link to="/register" class="btn btn-main" v-if="!Login">
          {{ t("Signup") }}
        </router-link></SimpleButton
      >
      <!-- login button -->
      <router-link to="/login" class="btn mx-4" v-if="!Login">{{
        t("Login")
      }}</router-link>
      <!-- profile  -->
      <div class="info-login" v-if="Login">
        <router-link to="/profile" class="profile_link">
          <img v-if="props.ImageProfile" :src="props.ImageProfile" />
          <img
            src="../../../assets/images/global/icons/global/man.svg"
            v-else
          />
        </router-link>
        <!-- <button
          class="btn notification"
          @click="(showNotification = !showNotification) && (showChat = false)"
        >
          <img
            src="../../../assets/images/global/icons/global/profile/notification-bing.svg"
          />
        </button>
        <button
          class="messages"
          @click="(showChat = !showChat) && (showNotification = false)"
        >
          <img
            src="../../../assets/images/global/icons/global/profile/messages.svg"
          />
        </button> -->
        <!-- <NotificationPopup v-if="showNotification" /><ChatPopup
          v-if="showChat"
        /> -->
        <router-link to="/ListYourCar" class="plusListYourCar">+</router-link>
      </div>
      <!-- lang -->
      <div class="lang">
        <button v-if="props.lang == 'ar'" @click="changeLangEmit('en')">
          <img src="@/assets/images/global/icons/global/flag-eng.svg" />
        </button>
        <button v-else @click="changeLangEmit('ar')">
          <img src="@/assets/images/global/icons/global/flag_eg.svg" />
        </button>
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
        <LogoutFacebook v-if="type == 'Facebook'" />

        <!--if signin or login by account-->
        <SimpleButton type="send" v-if="type == 'account'">
          <button class="btn logout" @click="LogoutFun">
            {{ t("Logout") }}
          </button>
        </SimpleButton>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
.navbar .navbar-btns-icons .info-login {
  margin-right: 25px;
  .profile_link img,
  .notification,
  .messages {
    border: 2px solid #f4a71d;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: transparent;
  }
  .notification,
  .messages {
    border: 2px solid #313131;
    margin-left: 15px;
  }
  .plusListYourCar {
    background: #f4a71d;
    border-radius: 100%;
    margin-left: 15px;
    padding: 10px 17px;
    color: white;
    font-size: 20px;
  }
}
.is-ar {
  .plusListYourCar {
    margin-left: 0px;
    margin-right: 15px;
  }
}
</style>
