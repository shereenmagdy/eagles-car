<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";

//i18n
const { t } = useI18n();

onMounted(() => {
  AOS.init();
}); //notification
</script>
<template>
  <div
    class="NotificationPopup"
    data-aos="zoom-up"
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
  >
    <div class="row m-0 p-0">
      <div class="col-lg-12">
        <router-link to="/notification">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div></router-link
        >
      </div>
      <div class="col-lg-12">
        <router-link to="/notification">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div></router-link
        >
      </div>
      <div class="col-lg-12">
        <router-link to="/notification">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div></router-link
        >
      </div>
      <div class="col-lg-12 text-center pt-3 pb-3">
        <router-link to="/notification"
          ><span class="color-main">{{
            t("See_more_notifications")
          }}</span></router-link
        >
      </div>
    </div>
    <div></div>
  </div>
</template>
<style scoped lang="scss">
.NotificationPopup {
  position: absolute;
  z-index: 1000000;
  background: white;
  border-radius: 4px;
  width: 450px;
  height: 300px;
  right: 35%;
  overflow-y: auto;
  top: 55px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.348);
  .row > div {
    margin: 0px;
    padding: 0px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    border-bottom: 1px solid rgb(237, 237, 237);
    padding: 20px;
    .message-notification {
      p {
        display: inline-block;
        font-size: 16px;
        padding: 0px;
        margin: 0px;
      }
      .icon {
        border: 1px solid rgb(10, 10, 104);
        border-radius: 100%;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        margin-right: 10px;
        padding: 5px 0px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .time {
      color: rgba(146, 146, 146, 1);
      font-size: 12px;
      padding: 10px 0px;
    }
    &:hover {
      background: rgba(236, 236, 255, 1);
    }
  }
}
@media screen and (max-width: 993px) {
  .NotificationPopup {
    display: none;
  }
}
//.is-ar
.is-ar {
  .NotificationPopup {
    left: 30%;
    right: auto;
    .content .message-notification .icon {
      margin-right: 0px;
      margin-left: 10px;
    }
  }
}
</style>
