<script setup>
import { onMounted, ref, defineProps } from "vue";
import TheChatRoom from "./TheChatRoom.vue";

//chatShow
const chatShow = ref();

//chatInformation
const props = defineProps(["chatInformation"]);
//chooseChat
const chooseChat = (item) => {
  chatShow.value = item;
};
//onMounted
onMounted(() => {
  if (props.chatInformation) {
    chatShow.value = props.chatInformation[0];
  }
});
</script>

<template>
  <div class="Chats">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-5">
          <div v-if="props.chatInformation">
            <div v-for="Tab in props.chatInformation" :key="Tab.id">
              <div
                class="content"
                :class="Tab == chatShow ? 'active' : ''"
                @click="chooseChat(Tab)"
              >
                <div class="message-Chats">
                  <span class="icon"><img :src="Tab.image" /></span>
                  <p>{{ Tab.name }}</p>
                </div>
                <span class="time">{{ Tab.time }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8" v-if="chatShow">
          <TheChatRoom :chatShow="chatShow" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Chats {
  padding: 100px 0px;
  .content {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    background: rgba(249, 249, 249, 1);
    border-bottom: 1px solid rgb(237, 237, 237);
    padding: 20px;

    .message-Chats {
      p {
        display: inline-block;
        font-size: 16px;
        padding: 0px;
        margin: 0px;
      }
      .icon {
        border-radius: 100%;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .time {
      color: rgba(146, 146, 146, 1);
      font-size: 12px;
      padding: 10px 0px;
    }
  }
  .content:hover,
  .active {
    background: rgba(236, 236, 255, 1);
    cursor: pointer;
  }
}
.is-ar {
  .Chats .content .message-Chats .icon {
    margin-right: 0px;
    margin-left: 10px;
  }
}
</style>
