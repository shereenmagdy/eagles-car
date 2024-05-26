<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import Header from "@/components/global/Header/index.vue";
import Chats from "@/components/pages/Chats/index.vue";
import Footer from "@/components/global/Footer/index.vue";
import NotFound from "@/components/pages/NotFound/index.vue";
import { UseChats } from "@/stores/Chat/index";
import { onMounted } from "vue";

//Bloges
const Chat = UseChats();

//onMounted
// onMounted(() => {
//   Chat.chatInformation;
// });
</script>
<template>
  <section class="Pages">
    <NavBar></NavBar>
    <Header TiltePage="Chats"> </Header>
    <Chats
      v-if="Chat.chatInformation.length != 0"
      :chatInformation="Chat.chatInformation"
    />
    <div v-else>
      <Loading v-if="!Chat.unfounedChat"></Loading>
      <NotFound v-else />
    </div>
    <Footer></Footer>
  </section>
</template>
<style lang="scss"></style>
