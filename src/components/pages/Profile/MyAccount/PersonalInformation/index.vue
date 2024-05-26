<script setup lang="ts">
import BasicInformation from "./BasicInformation/index.vue";
import PasswordChange from "./PasswordChange/index.vue";
import { UseProfile } from "@/stores/Profile/index";
import { onMounted } from "vue";

//Bloges
const Profile = UseProfile();

//onMounted
onMounted(() => {
  Profile.get_profile();
  Profile.get_countries();
});
</script>
<template>
  <BasicInformation
    v-if="Profile.Profile"
    :Profile="Profile.Profile.user"
    :Counteries="Profile.Counteries"
  />
  <PasswordChange />
</template>
