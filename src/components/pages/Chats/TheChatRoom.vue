<template>
  <div class="TheChatRoom" v-if="props.chatShow">
    <div class="row info_ChatRoom">
      <div class="col-lg-12">
        <img class="img_profile" :src="props.chatShow.image" />
        <h5 class="name">{{ props.chatShow.name }}</h5>
      </div>
    </div>
    <Chating :Chat="props.chatShow.Chat" />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { defineProps } from "vue";
import Chating from "./Chating.vue";
const { t } = useI18n();
const props = defineProps(["chatShow"]);
</script>

<style scoped lang="scss">
.TheChatRoom {
  margin-bottom: 10px;
  margin-right: 5px;
  // padding: 17px 5px;

  .info_ChatRoom {
    border: 0px;
    width: 100%;
    margin: 0px;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
    .name {
      font-size: 17px;
      font-weight: 500;
      margin-top: 10px;
    }

    p {
      font-size: 14px;
      margin: 10px 0px;
      color: #aaa;
      margin-top: -9px;
      font-size: 12px;
    }
    .chips_sec {
      text-align: left;
      .chips {
        background-color: #1c92ed2b;
        color: #1c92ed;
        padding: 6px;
        border-radius: 20px;
      }
    }
  }
}
</style>
