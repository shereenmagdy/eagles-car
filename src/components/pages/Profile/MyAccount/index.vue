<script setup lang="ts">
import AOS from "aos";
import { onMounted } from "vue";
import Tabs from "./SubTab/index.vue";
import PersonalInformation from "./PersonalInformation/index.vue";
import BorrowingVerification from "./BorrowingVerification/index.vue";
import { ref } from "vue";
const itemChooseAccount = ref<String>("Personal_information");
const ChooseTabAccount = (nameTab: String) => {
  console.log("ChooseTab", nameTab);
  itemChooseAccount.value = nameTab;
};
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="profile"> </Header>
    <div
      class="container"
      data-aos="zoom-in-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <Tabs @ChooseTabAccount="ChooseTabAccount"></Tabs>
      <p v-if="itemChooseAccount == 'Personal_information'">
        <PersonalInformation />
      </p>
      <p v-else>
        <BorrowingVerification />
      </p>
    </div>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
