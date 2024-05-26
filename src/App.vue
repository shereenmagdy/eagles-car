<script setup lang="ts">
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useLang } from "@/stores/lang";
import { useLight } from "@/stores/light";
import { UseProfile } from "@/stores/Profile";

//Language
const Language = useLang();

//Language
const Light = useLight();

//loading
const loading = ref(true);

//Bloges
const Profile = UseProfile();
//onMounted
onMounted(() => {
  //onMounted
  Language.changeLayout();

  //Light
  Light.changeLight();

  //setTimeout
  setTimeout(function () {
    loading.value = false;
  }, 1000);
  if (localStorage.getItem("access_token")) {
    Profile.get_profile();
  }
});
</script>
<template>
  <div class="text-center loading" v-if="loading">
    <b-spinner label="Spinning"></b-spinner>
  </div>
  <router-view></router-view>
  <router-link to="/" class="whatsapp">
    <img src="@/assets/images/global/icons/global/Homepage/whatsapp.svg"
  /></router-link>
</template>
<style scoped lang="scss">
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: white;
  padding-top: 20%;
  background: black;
  color: var(--orange-text-color);
  span {
    width: 40px;
    height: 40px;
  }
}
.whatsapp {
  position: fixed;
  bottom: 10px;
  right: 20px;
  width: 60px;
  height: 60px;
  z-index: 999;
  img {
    width: 45px;
  }
}
</style>
