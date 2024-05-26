<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Moreinfo">
    <div class="row">
      <div
        class="col-lg-6 info"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <h6 class="color-main">{{ t("More_info") }}</h6>
        <h2 class="header_title">{{ t("about_us_page") }}</h2>
        <h5 class="header_title my-3">
          <span class="color-main"> {{ t("Eagles_Car") }} </span>
          {{ t("messabout1") }}
        </h5>
        <p>{{ t("paragabout1") }}</p>
        <h5>{{ t("paraabout2") }}</h5>
      </div>
      <div class="col-lg-6">
        <div class="imageBackgrouind">
          <span class="squer"></span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.Moreinfo {
  overflow-y: hidden;
  .row {
    width: 100% !important;
    max-width: 100% !important;
    overflow-y: hidden;
    --bs-gutter-x: 0px;
    > div {
      padding: 0px;
      margin: 0px;
    }
    .info {
      margin: 50px 0px;
      background: url("../../../../assets/images/global/icons/global/aboutus/backgroundInfo.svg")
        no-repeat center center;
      background-size: cover;
      padding-left: 10%;
      h5 {
        font-weight: 400;
        line-height: 1.7;
        font-size: 18px;
        span {
          margin-right: 10px;
        }
      }
      p {
        line-height: 2.2;
        width: 90%;
      }
    }
    .imageBackgrouind {
      position: relative;
      height: 95%;
      width: 80%;
      margin-left: auto;
      background: url("../../../../assets/images/global/icons/global/aboutus/car.svg")
        no-repeat center center;
      background-size: cover;
      .squer {
        width: 70px;
        height: 70px;
        position: absolute;
        bottom: -25px;
        left: -25px;
        z-index: -1;
        background: #f4a71d;
      }
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
  .Moreinfo .row {
    margin-bottom: 100px;
    .imageBackgrouind {
      height: 500px;
      margin: auto;
    }
  }
}

/*ar version */
.is-ar {
  .Moreinfo .row {
    .info {
      padding-left: 0%;
      padding-right: 10%;
      padding-bottom: 100px;
    }
    .imageBackgrouind {
      margin-left: 0px;
      margin-right: auto;
      .squer {
        left: auto;
        right: -25px;
        bottom: -25px;
      }
    }
  }
}
</style>
