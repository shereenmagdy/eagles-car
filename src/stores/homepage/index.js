import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseHomepage = defineStore("Homepage", () => {
  let faqs = ref({});
  let testimonials = ref({});
  let services = ref([]);
  let team = ref([]);
  let termsConditions = ref({});
  let privacyPolicy = ref({});
  let support = ref({});
  let ourCompany = ref({});
  let ourvision = ref({});

  // is_waiting
  let is_waiting = ref(false);
  //Get faqs
  async function get_faqs() {
    const response = await callServer({
      url: "api/faqs",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        faqs.value = data.data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get testimonials
  async function get_testimonials() {
    const response = await callServer({
      url: "api/testimonials",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        testimonials.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get testimonials
  async function get_services() {
    const response = await callServer({
      url: "api/services",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        services.value = data.data.services;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get team
  async function get_team() {
    const response = await callServer({
      url: "api/team",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        team.value = data.data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get team
  async function get_pages(slug) {
    const response = await callServer({
      url: "api/pages/" + slug,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        if (slug == "terms-and-conditions") {
          termsConditions.value = data.data.page;
        } else if (slug == "privacy-policy") {
          privacyPolicy.value = data.data.page;
        } else if (slug == "support") {
          support.value = data.data.page;
        } else if (slug == "our-company") {
          ourCompany.value = data.data.page;
        } else if (slug == "our-vision") {
          ourvision.value = data.data.page;
        }
      });
    } else {
      toast.error("Has Error");
    }
  }
  return {
    get_faqs,
    faqs,
    is_waiting,
    testimonials,
    get_testimonials,
    services,
    get_services,
    get_team,
    get_pages,
    team,
    termsConditions,
    privacyPolicy,
    support,
    ourCompany,
    ourvision,
  };
});
