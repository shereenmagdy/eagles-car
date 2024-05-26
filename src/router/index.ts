import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
//Auth pages
import Auth from "../views/auth/Main.vue";
import ForgetPassword from "../views/auth/ForgetPassword.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";
import RegisterContinue from "../views/auth/RegisterContinue.vue";
import OTP from "../views/auth/OTP.vue";
import OTPRegisterion from "../views/auth/OTPRegisterion.vue";
import Register from "../views/auth/Register.vue";

//Hompage
import HomePage from "../views/HomePage/Main.vue";

//Blogs page
import Blogs from "../views/Blogs/Main.vue";

//AboutUs page
import AboutUs from "../views/AboutUs/Main.vue";

//ContactUs page
import ContactUs from "../views/ContactUs/Main.vue";

//PrivacyPolicy page
import PrivacyPolicy from "../views/PrivacyPolicy/Main.vue";

//BlogDetailes page
import BlogDetailes from "../views/BlogDetailes/Main.vue";

//Support page
import Support from "../views/Support/Main.vue";

//Terms_conditions page
import Terms_conditions from "../views/Terms_conditions/Main.vue";

//HowItWorks page
import HowItWorks from "../views/HowItWorks/Main.vue";

//FavouritCar page
import FavouritCar from "../views/FavouritCar/Main.vue";

//PrivacyPolicy page
import SearchingReaults from "../views/SearchingReaults/Main.vue";

//CarRental page
import CarRental from "../views/CarRental/Main.vue";

//CarDetailes page
import CarDetailes from "../views/CarDetailes/Main.vue";

//sendRequest page
import sendRequest from "../views/sendRequest/Main.vue";

//profile page
import Profile from "../views/Profile/Main.vue";

//Notification page
import Notification from "../views/Notification/Main.vue";

//Chats page
import Chats from "../views/Chats/Main.vue";

//ListYourCar page
import ListYourCar from "../views/ListYourCar/Main.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` الصفحه الرئيسيه - Eagles car`;
      } else {
        document.title = "Home page - Eagles car";
      }
    },
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: ForgetPassword,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` تعين كلمه مرور جديده  - Eagles car`;
      } else {
        document.title = "Forget Password page - Eagles car";
      }
      if (localStorage.getItem("access_token")) {
        return `/`;
      }
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` تسجيل الدخول جديد - Eagles car`;
      } else {
        document.title = "Register Page - Eagles car";
      }
      if (localStorage.getItem("access_token")) {
        return `/`;
      }
    },
  },
  {
    path: "/register-continue",
    name: "RegisterContinue",
    component: RegisterContinue,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `مواصله تسجيل الدخول جديد  - Eagles car`;
      } else {
        document.title = "Register Continue Page - Eagles car";
      }
      if (localStorage.getItem("access_token")) {
        return `/`;
      }
    },
  },
  {
    path: "/register-continue/:nameRegister",
    name: "RegisterContinue",
    component: RegisterContinue,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `مواصله تسجيل الدخول جديد  - Eagles car`;
      } else {
        document.title = "Register Continue Page - Eagles car";
      }
      if (localStorage.getItem("access_token")) {
        return `/`;
      }
    },
  },
  {
    path: "/otp-authentication",
    name: "OTP",
    component: OTP,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `مصادقة OTP  - Eagles car`;
      } else {
        document.title = "Otp Authentication Page - Eagles car";
      }
      if (localStorage.getItem("access_token")) {
        return `/`;
      }
    },
  },
  {
    path: "/otp-registerion",
    name: "OTPRegisterion",
    component: OTPRegisterion,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `مصادقة OTP  - Eagles car`;
      } else {
        document.title = "Otp Authentication Page - Eagles car";
      }
      if (localStorage.getItem("access_token")) {
        return `/`;
      }
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `إعادة تعيين كلمة المرور  - Eagles car`;
      } else {
        document.title = "Reset password Page - Eagles car";
      }
      if (localStorage.getItem("access_token")) {
        return `/`;
      }
    },
  },
  {
    //Blogs
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `المدونات - Eagles car`;
      } else {
        document.title = "Blogs Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //AboutUs
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `نبذه عنا - Eagles car`;
      } else {
        document.title = "About Us Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //AboutUs
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `اتصل بنا - Eagles car`;
      } else {
        document.title = "Contact Us Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //BlogDetailes
    path: "/blog-detailes/:slug",
    name: "BlogDetailes",
    component: BlogDetailes,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `Most Faster - Eagles car`;
      } else {
        document.title = "Most Faster Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //PrivacyPolicy
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` سياسة الخصوصية - Eagles car`;
      } else {
        document.title = "Privacy Policy Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //Terms_conditions
    path: "/terms_conditions",
    name: "Terms_conditions",
    component: Terms_conditions,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` البنود و الظروف - Eagles car`;
      } else {
        document.title = "Terms and Conditions Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //Support
    path: "/support",
    name: "Support",
    component: Support,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `الدعم - Eagles car`;
      } else {
        document.title = "Support Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //HowItWorks
    path: "/how-it-works",
    name: "HowItWorks",
    component: HowItWorks,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `كيف تعمل - Eagles car`;
      } else {
        document.title = "How It Works Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //FavouritCar
    path: "/favourit-car/:slug",
    name: "FavouritCar",
    component: FavouritCar,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `السيارة المفضلة - Eagles car`;
      } else {
        document.title = "Favourit Car Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //SearchingReaults
    path: "/search-results/:slug",
    name: "SearchingReaults",
    component: SearchingReaults,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `نتيحه البحث  - Eagles car`;
      } else {
        document.title = "Searching Reaults Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //CarRental
    path: "/car-rental",
    name: "CarRental",
    component: CarRental,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `تاجير سيارة - Eagles car`;
      } else {
        document.title = "Car Rental Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //CardsDetailes
    path: "/car-detalies/:slug",
    name: "CarDetailes",
    component: CarDetailes,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `تفاصيل السيارة  - Eagles car`;
      } else {
        document.title = "Car Detailes Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    //CardsDetailes
    path: "/send-request/:slug/:id",
    name: "sendRequest",
    component: sendRequest,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `تفاصيل السيارة  - Eagles car`;
      } else {
        document.title = "Send Request Page - Eagles car";
      }
      // if (!localStorage.getItem("access_token")) {
      //   return `/login`;
      // }
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = `  حسابك السخصى - Eagles car`;
      } else {
        document.title = "Profile Page - Eagles car";
      }
    },
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` الإشعارات - Eagles car`;
      } else {
        document.title = "Notification Page - Eagles car";
      }
    },
  },
  {
    path: "/Chats",
    name: "Chats",
    component: Chats,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` الرسائل - Eagles car`;
      } else {
        document.title = "Chats Page - Eagles car";
      }
    },
  },
  {
    path: "/ListYourCar",
    name: "ListYourCar",
    component: ListYourCar,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` قائمة سيارتك - Eagles car`;
      } else {
        document.title = "List Your Car Page - Eagles car";
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: Auth,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` تسجيل الدخول - Eagles car`;
      } else {
        document.title = "Login Page - Eagles car";
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
