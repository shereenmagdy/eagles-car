import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseContactus = defineStore("Contactus", () => {
  let ContactInformation = ref([]);
  let socialMedia = ref([]);
  let is_waitingSend = ref(false);

  async function get_ContactInformation() {
    const response = await callServer({
      url: "api/contact-info",
    });
    if (response.ok) {
      response.json().then((data) => {
        ContactInformation.value = data.data;
      });
    } else {
      response.json().then((data) => {
        for (let key in data.errors) {
          toast.error(data.errors[key][0]);
        }
      });
    }
  }
  async function get_socialMedia() {
    const response = await callServer({
      url: "api/social-media",
    });
    if (response.ok) {
      response.json().then((data) => {
        socialMedia.value = data.data;
      });
    } else {
      response.json().then((data) => {
        for (let key in data.errors) {
          toast.error(data.errors[key][0]);
        }
      });
    }
  }
  // sendContactMessage
  async function sendContactMessage(data) {
    is_waitingSend.value = true;
    const response = await callServer({
      url: "api/contact-us",
      method: "POST",
      data,
    });

    if (response.ok) {
      toast.success("Successfully Send Reuest... ");
    } else {
      is_waitingSend.value = false;
      response.json().then((data) => {
        for (let key in data.errors) {
          toast.error(data.errors[key][0]);
        }
      });
    }
  }
  return {
    get_ContactInformation,
    ContactInformation,
    get_socialMedia,
    sendContactMessage,
    is_waitingSend,
    socialMedia,
  };
});
