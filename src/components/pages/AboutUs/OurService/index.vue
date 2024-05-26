<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const props = defineProps(["services"]);

//i18n
const { t } = useI18n();
//onMounted
onMounted(() => {
  //AOS
  AOS.init();
});
</script>
<template>
  <!--MostFaster-->
  <div class="Our_Service">
    <div class="row px-0">
      <div
        class="col-lg-6 pt-5 info"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <h6 class="color-main">{{ t("More_info") }}</h6>
        <h2 class="header_title">{{ t("Our_Service") }}</h2>
        <ul>
          <li v-for="service in props.services" :key="service.id">
            <img
              src="../../../../assets/images/global/icons/global/aboutus/right.svg"
              class="right_mark"
            />
            <p class="color-main">
              {{
                i18n.locale.value == "en" ? service.title.en : service.title.ar
              }}
            </p>
          </li>
        </ul>
      </div>
      <div class="col-lg-6 px-0">
        <div class="background"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.Our_Service {
  background: black;
  height: auto;
  h2 {
    color: #fff;
  }
  .info {
    margin: 50px 0px 100px;
    padding-left: 8%;
    padding-right: 2%;
    ul {
      padding: 0px;
      margin-top: 50px;
      li {
        margin: 15px 0px;
        display: flex;
        img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
        p {
          color: #fff;
        }
        .color-main {
          color: #f4a71d;
        }
      }
    }
  }
  .background {
    background: url("../../../../assets/images/global/icons/global/aboutus/car-3.svg")
      center center;
    background-size: cover;
    height: 100%;
    width: 100%;
  }
}
@media screen and (max-width: 992px) {
  .Our_Service {
    .row {
      width: 90%;
      margin: auto;
    }
  }
}
//version ar
.is-ar {
  .Our_Service {
    .info {
      padding-left: 2%;
      padding-right: 10%;
      ul li img {
        margin-right: 0px;
        margin-left: 10px;
      }
    }
  }
}
</style>
