// import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseChats = defineStore("Chats", () => {
  //chatInformation
  const chatInformation = ref([
    {
      id: 0,
      image: new URL(
        `@/assets/images/global/icons/global/notification/notification.svg`,
        import.meta.url
      ).href,
      name: "Ahmed Mohamed",
      time: "10:00AM",
      Chat: [
        {
          admin: true,
          created_at: "1121212",
          content: "اهلا وسهلا",
        },
        {
          admin: true,
          created_at: "11/29/2023, 12:51:06 AM",
          content:
            "This is a message from you to someone else who is reading this message right now",
        },
      ],
    },
    {
      id: 1,
      image: new URL(
        `@/assets/images/global/icons/global/notification/man.svg`,
        import.meta.url
      ).href,
      name: "Mano ali",
      time: "09:00AM",
      Chat: [
        {
          admin: true,
          created_at: "11/29/2023, 12:51:06 AM",
          content:
            "This is a message from you to someone else who is reading this message right now",
        },
        {
          admin: true,
          created_at: "11/29/2023, 12:51:06 AM",
          content:
            "This is a message from you to someone else who is reading this message right now",
        },
      ],
    },
    {
      id: 2,
      image: new URL(
        `@/assets/images/global/icons/global/man.svg`,
        import.meta.url
      ).href,
      name: "Feo Osama",
      time: "04:00PM",
      Chat: [
        {
          admin: true,
          created_at: "11/29/2023, 11:00:09 AM",
          content: "cddsfsdfsdfsdf",
        },
        {
          admin: true,
          created_at: "11/29/2023, 12:51:06 AM",
          content: "rrrrrrwwwww",
        },
      ],
    },
  ]);
  // const chatInformation = ref([]);
  let unfounedChat = ref(true);
  return { chatInformation, unfounedChat };
});
