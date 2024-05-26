<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import "vue3-carousel/dist/carousel.css";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="DownloadApp">
    <div class="container">
      <div class="row">
        <div class="col-md-6 info">
          <h2 class="header_title">{{ t("DownloadTitle") }}</h2>
          <p>{{ t("Downloadparagrah") }}</p>
          <div
            class="apps"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
          >
            <router-link to="/">
              <img
                src="../../../../assets/images/global/icons/global/Homepage/google-app-download.svg"
            /></router-link>
            <router-link to="/">
              <img
                src="../../../../assets/images/global/icons/global/Homepage/ios-app-btn.svg"
            /></router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="image_mobile"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
          >
            <img
              src="../../../../assets/images/global/icons/global/Homepage/background_App.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
/****media****/
.DownloadApp {
  background: #f9f9f9;
  margin-top: 150px;
  .container {
    overflow-y: hidden;
    .row {
      align-items: center;
      display: flex;
      .image_mobile {
        width: 85%;
        margin-left: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        h2 {
          padding-top: 100px;
          width: 70%;
        }
        p {
          margin: 20px 0px 30px;
        }
        .apps {
          justify-content: start;
          display: flex;
          a {
            padding-bottom: 100px;
            margin-right: 20px;
            width: 30%;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
/*media" */
@media screen and (max-width: 992px) {
  .DownloadApp {
    .container .row {
      .info .apps {
        flex-direction: column;
        justify-content: center;
        a {
          width: 40%;
          padding-bottom: 30px;
          margin: auto;
        }
      }
      .image_mobile {
        margin: auto;
      }
    }
  }
}
/*ar version */
.is-ar {
  .DownloadApp .container .row .image_mobile {
    margin-left: 0px;
    margin-right: auto;
  }
  .DownloadApp .container .row .info .apps a {
    margin-right: 0px;
    margin-left: 20px;
  }
}
</style>
