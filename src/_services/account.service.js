import { BehaviorSubject } from "rxjs";
import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";

// accountService
export const accountService = defineStore("account_Service", () => {
  // BehaviorSubject
  const accountSubject = new BehaviorSubject(null);

  // useAuthStore
  const authStore = useAuthStore();

  // login
  async function login(typeLogin) {
    // authResponse
    const { authResponse } = await new Promise(FB.login);

    // login
    if (typeLogin == "Login") {
      // make loginSocialMedia.access_token  = authResponse.accessToken
      authStore.loginSocialMedia.access_token = authResponse.accessToken;
      //localStorage
      // send loginSocialMedia.access_token to fun registerFacebook
      authStore.registerFacebook(authStore.loginSocialMedia).then(() => {
        // this.router.push("/");
      });
    }

    // Register
    if (typeLogin == "Register") {
      // make registerSocialMedia.access_token  = authResponse.accessToken
      authStore.registerSocialMedia.access_token = authResponse.accessToken;
      // go to /register-continue/Facebook
      this.router.push("/register-continue/Facebook");
    }
    // authResponse
    if (!authResponse) return;
  }

  // logout
  function logout() {
    // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
    FB.api("/me/permissions", "delete", null, () => FB.logout());
    // call stopAuthenticateTimer
    stopAuthenticateTimer();
    // accountSubject
    accountSubject.next(null);
    // removeItem removeItem
    localStorage.removeItem("access_token");
    // removeItem type
    localStorage.removeItem("type");
    // go to page login
    this.router.push("/login");
  }

  // authenticateTimeout
  let authenticateTimeout;

  // stopAuthenticateTimer
  function stopAuthenticateTimer() {
    // cancel timer for re-authenticating with the api
    clearTimeout(authenticateTimeout);
  }
  return { login, logout };
});
