<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, defineProps } from "vue";
import AOS from "aos";
const { t } = useI18n();
const i18n = useI18n();
const props = defineProps(["ourvision"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Vision">
    <div class="backgorund_img">
      <img
        src="../../../../assets/images/global/icons/global/aboutus/vision.svg"
      />
    </div>
    <div
      class="car2"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <img
        src="../../../../assets/images/global/icons/global/aboutus/car-2.svg"
      />
    </div>
    <div class="container">
      <div
        class="info"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <h6 class="color-main">{{ t("More_info") }}</h6>
        <h2 class="color-main">
          {{
            i18n.locale.value == "en"
              ? props.ourvision.title.en
              : props.ourvision.title.ar
          }}
        </h2>
        <p class="">
          {{
            i18n.locale.value == "en"
              ? props.ourvision.description.en
              : props.ourvision.description.ar
          }}
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.Vision {
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  text-align: left;
  padding: 100px 0px;
  height: 800px;
  .backgorund_img {
    position: absolute;
    z-index: -1;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    padding-top: 10%;
    padding-left: 30px;
    margin-right: auto;
    width: 70%;
    p {
      line-height: 2.5;
      color: #ffffff;
    }
    h2 {
      font-weight: 700;
    }
  }
  .car2 {
    position: absolute;
    z-index: 100000;
    top: 60px;
    right: 0px;
    width: 25%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
  .Vision {
    height: 100%;
    .backgorund_img {
      background: #03031f;
      height: 100%;
    }
    .info {
      padding-top: 40px;
      padding-left: 30px;
      margin-right: auto;
      width: 100%;
    }
    .car2 {
      width: 15%;
    }
  }
}
@media screen and (max-width: 990px) {
  .Vision {
    height: 100%;
    .backgorund_img {
      background: #03031f;
      height: 100%;
    }
    .info {
      padding-top: 40px;
      padding-left: 30px;
      margin-right: auto;
      width: 100%;
    }
    .car2 {
      width: 35%;
    }
  }
}

/*ar version */
.is-ar {
  .Vision .info {
    padding-left: auto;
    padding-right: 30px;
    margin-right: 0px;
    margin-left: auto;
    text-align: right;
  }
  .car2 {
    left: 0px;
    right: auto;
  }
  .backgorund_img img,
  .car2 img {
    transform: scaleX(-1);
  }
}
</style>
