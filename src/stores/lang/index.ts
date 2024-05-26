import { defineStore } from "pinia";

export const useLang = defineStore("Lang", () => {
  let Thelang = localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "en";

  // Followers
  function changeLayout() {
    let language = localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en";
    Thelang = localStorage.getItem("lang");
    let body = document.getElementsByTagName("html")[0];
    console.log("language", language);
    localStorage.setItem("lang", language);
    document.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", language);
    if (language == "en") {
      body.classList.add("is-en");
      body.classList.remove("is-ar");
    } else {
      body.classList.add("is-ar");
      body.classList.remove("is-en");
    }
  }

  return {
    Thelang,
    changeLayout,
  };
});
