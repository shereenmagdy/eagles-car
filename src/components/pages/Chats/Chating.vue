<template>
  <main id="app">
    <section ref="chatArea" class="chat-area" v-if="Chat">
      <div
        v-for="message in Chat"
        :key="message"
        class="message"
        :class="{
          'message-out': !message.admin,
          'message-in': message.admin,
        }"
      >
        <span>{{ message.created_at }}</span>
        <p>
          {{ message.content }}
        </p>
      </div>
    </section>

    <section class="chat-inputs">
      <!-- <button @click="clearAllMessages">Clear All</button> -->
      <form @submit.prevent="sendMessage()">
        <input
          v-model="youMessage"
          id="person2-input"
          type="text"
          :placeholder="t('Send_message')"
        />
        <button type="submit" class="submit_btn btn">
          <img src="@/assets/images/global/icons/global/send.svg" />
        </button>
      </form>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { ref } from "@vue/reactivity";
// import callServer from "@/assets/scripts/callServer/callServer";

const props = defineProps(["Chat"]);
let { t } = useI18n();
let youMessage = ref("");
let sendMessage = () => {
  // submit(youMessage.value);
  var currentDate = new Date().toLocaleString();
  props.Chat.push({
    content: youMessage.value,
    admin: null,
    created_at: currentDate,
  });
  youMessage.value = "";
};

// let submit = async (content) => {
//   let data = {
//     ticket_id: props.ticket_id,
//     content: content,
//   };
//   console.log("data", data);
//   await callServer({
//     url: "ticket/reply",
//     method: "POST",
//     auth: true,
//     data: data,
//   });
// };
const clearAllMessages = () => {
  messages.value = [];
};

// const submit = async () => {
//         let form= new FormData();
//         form.append("name", formData.value.name);
//         form.append("id_number", formData.value.id_number);
//         form.append("address",formData.value.address);
//         form.append("id_photo", formData.value.id_photo);
//       let response = await callServer({
//         url: "identity",
//         method: "POST",
//         auth: true,
//         data: form,
//             type: "",
//       });

//       await response.json().then((data) => {
//         if (data == "success") {
//           toast.success("تم بنجاح");
//           closing();
//         } else {
//           console.log("data.errors", data.errors);
//           if (data.errors.name) {
//             toast.error(data.errors.name[0]);
//           }
//           if (data.errors.id_photo) {
//             toast.error(data.errors.id_photo[0]);
//           }
//           if (data.errors.address) {
//             toast.error(data.errors.address[0]);
//           }
//           if (data.errors.id_number) {
//             toast.error(data.errors.id_number[0]);
//           }
//         }
//       });
//     };
</script>

<style scoped lang="scss">
body,
html {
  font-family: sans-serif;
  font-weight: 100;
  background: #7b4397;
  background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
  background: linear-gradient(to right, #dc2430, #7b4397);
}

.headline {
  text-align: center;
  font-weight: 100;
  color: white;
}
.chat-area {
  background: white;
  padding: 1em;
  overflow: overlay;
  max-width: 100%;
  max-height: 350px;
  min-height: 350px;
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: 0.5em;
  /*   margin-bottom: .5em; */
  font-size: 0.8em;
}
.message-out {
  margin-bottom: 0px;
  direction: rtl;
  width: 100%;
  p {
    background: rgba(231, 237, 243, 1);
    color: black;
    margin-bottom: 5px;
    max-width: 50%;
    width: max-content;
    padding: 0px;
    direction: ltr;
    // display: inline;
    padding: 13px;
    border-radius: 10px;
  }
}
.message-in {
  margin-bottom: 0px;
  direction: ltr;
  // display: flex;
  width: 100%;
  p {
    background: rgba(10, 10, 104, 0.1);
    color: rgba(0, 0, 0, 1);
    margin-bottom: 5px;
    max-width: 50%;
    width: max-content;
    padding: 0px;
    direction: rtl;
    // display: inline;
    padding: 13px;
    border-radius: 10px;
    text-align: end;
  }
}
.message-in,
.message-out {
  span {
    display: block;
    margin-bottom: 5px;
    text-align: revert;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.462);
  }
}
.chat-inputs {
  display: block;
  justify-content: space-between;
}
#person1-input {
  padding: 0.5em;
}
#person2-input {
  padding: 0.5em;
  width: 93%;
  background: rgba(246, 246, 246, 1);
  height: 48px;
  color: black;
  text-align: left;
  border: 0px;
  margin: 0px !important;
  border-radius: 8px 0px 0px 8px;
  &:focus-visible {
    outline: 0;
  }
}
.person2-form {
  text-align: center;
}
.submit_btn {
  background-color: rgba(244, 167, 29, 1);
  color: white;
  margin-right: 10px;
  vertical-align: revert;
  border-radius: 0px 8px 8px 0px;
  padding: 10px 8px 8px;
  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    outline: 0;
    background-color: rgba(244, 167, 29, 1);
    opacity: 90%;
    color: white;
  }
  img {
    width: 30px;
    height: 30px;
  }
}
//is-ar
.is-ar {
  #person2-input {
    border-radius: 0px 8px 8px 0px;
    text-align: right;
  }
  .submit_btn {
    border-radius: 8px 0px 0px 8px;
    margin-right: 0px;
    margin-left: 10px;
  }
}
</style>
