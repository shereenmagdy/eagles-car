<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="about-company">
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <h6 class="color-main">{{ t("about") }}</h6>
        <h2>{{ t("aboutTitle") }}</h2>
        <p class="mt-4">{{ t("aboutparagrah") }}</p>
        <SimpleButton type="send">
          <router-link to="/about-us" type="submit" class="btn">
            {{ t("learn_more") }}
            <img
              src="../../../../assets/images/global/icons/global/Homepage/arrow.svg" /></router-link
        ></SimpleButton>
      </div>
      <div class="col-lg-8 col-md-6 about-sec-img p-0">
        <img
          src="../../../../assets/images/global/icons/global/Homepage/about_header.svg"
        />

        <router-link
          to="/"
          class="video"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          <img
            src="../../../../assets/images/global/icons/global/Homepage/play-cricle.svg"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.about-company {
  .row {
    padding-left: 7%;
    margin: 0px;
    padding-bottom: 100px;
    h2 {
      padding-right: 50px;
      font-weight: 700;
    }
    .simple-button {
      margin-top: 30px;
      img {
        margin: 0px 10px;
      }
    }
    .about-sec-img {
      position: relative;
      img {
        width: 80%;
        margin-left: auto;
        display: block;
        border-radius: 8px;
      }
      .video {
        background: #f4a71d;
        position: absolute;
        z-index: 2;
        left: 15%;
        border-radius: 10px;
        bottom: -10px;
        box-shadow: 0px 0px 6px 8px #f4a71d33;
        padding: 20px 30px;
        img {
          width: 40px;
        }
      }
    }
  }
  padding-bottom: 50px;
}
/*media" */

@media screen and (max-width: 1409px) {
  .about-company .row .about-sec-img {
    margin-top: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .about-company .row .about-sec-img .video {
    left: -35px;
  }
}
@media screen and (max-width: 494px) {
  .about-company .row .about-sec-img .video {
    left: 2px;
    bottom: 2px;
    padding: 10px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}

/*ar version */
.is-ar {
  .about-company .row {
    padding-left: 0%;
    padding-right: 7%;
    h2 {
      padding-right: 0px;
      padding-left: 50px;
    }
    .about-sec-img {
      img {
        margin-left: 0px;
        margin-right: auto;
      }
      .video {
        right: 15%;
        left: auto;
      }
      .whatsapp {
        right: auto;
        left: 20px;
      }
    }
    .simple-button.send .btn img {
      transform: scaleX(-1);
    }
  }
}
</style>
