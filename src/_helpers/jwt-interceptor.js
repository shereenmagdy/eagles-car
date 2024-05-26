import axios from "axios";

import env from "/env";
import { accountService } from "@/_services";

export function jwtInterceptor() {
  axios.interceptors.request.use((request) => {
    // add auth header with jwt if account is logged in and request is to the api url
    const account = accountService.accountValue;
    const isLoggedIn = account?.token;
    const isApiUrl = request.url.startsWith(env.VUE_APP_API_URL);
    console.log("env.VUE_APP_API_URL", env.VUE_APP_API_URL);
    if (isLoggedIn && isApiUrl) {
      request.headers.common.Authorization = `Bearer ${account.token}`;
    }

    return request;
  });
}
