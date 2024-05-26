<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
import { UseCars } from "@/stores/Cars";
import { UseContactus } from "@/stores/Contactus/index";
//Bloges
const Cars = UseCars();
const Contactusg = UseContactus();
onMounted(() => {
  AOS.init();
  Cars.get_brand_car();
  Contactusg.get_socialMedia();
});
</script>
<template>
  <Footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="Logo">
            <router-link to="#">
              <img src="../../../assets//images//global/icons/global/logo.svg"
            /></router-link>
          </div>
          <p>
            {{ t("paraFooter") }}
          </p>
          <ul class="social_media">
            <li v-for="soical in Contactusg.socialMedia" :key="soical.id">
              <a :href="'https://' + soical.link" target="_blank">
                <img :src="soical.image.cover"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>{{ t("About") }}</h5>
          <ul class="about_us">
            <li>
              <router-link to="/about-us">
                <img
                  src="../../../assets/images/global/icons/global/Homepage/icons/Frame.svg"
                />
                {{ t("About_us") }}</router-link
              >
            </li>
            <li>
              <router-link to="/terms_conditions">
                <img
                  src="../../../assets/images/global/icons/global/Homepage/icons/Frame.svg"
                />
                {{ t("Terms_conditions") }}</router-link
              >
            </li>
            <li>
              <router-link to="/privacy-policy">
                <img
                  src="../../../assets/images/global/icons/global/Homepage/icons/Frame.svg"
                />
                {{ t("privacy_policy") }}</router-link
              >
            </li>
            <li>
              <router-link to="/how-it-works">
                <img
                  src="../../../assets/images/global/icons/global/Homepage/icons/Frame.svg"
                />
                {{ t("How_works") }}</router-link
              >
            </li>
            <li>
              <router-link to="/support">
                <img
                  src="../../../assets/images/global/icons/global/Homepage/icons/Frame.svg"
                />
                {{ t("Support") }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-2">
          <h5>{{ t("Top_cars") }}</h5>
          <ul class="about_us">
            <li v-for="(brand, index) in Cars.Brands" :key="brand.id">
              <router-link :to="'/favourit-car/' + brand.slug" v-if="index < 5">
                <img
                  src="../../../assets/images/global/icons/global/Homepage/icons/Frame.svg"
                />
                {{ brand.title }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-3 text-center">
          <h5 class="mb-4">{{ t("Join_community") }}</h5>
          <div class="app">
            <router-link to="#">
              <img
                src="../../../assets/images/global/icons/global/Homepage/google-app-download.svg"
            /></router-link>
          </div>
          <div class="app">
            <router-link to="#">
              <img
                src="../../../assets/images/global/icons/global/Homepage//ios-app-btn.svg"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </Footer>
</template>
<style scoped lang="scss">
/****media****/
Footer {
  padding: 70px 0px;
  background: #010103;
  .row {
    .Logo a {
      color: white;
      font-size: 30px;
      font-weight: 700;
    }
    p {
      color: white;
      padding: 10px 0px;
      padding-right: 40px;
    }
    h5 {
      color: #fff;
      margin-bottom: 10px;
    }
    ul {
      padding: 0px;
      list-style: none;
    }
    .social_media {
      li {
        display: inline-block;
        text-align: left;
        margin-right: 30px;
      }
    }
    .about_us {
      li {
        display: block;
        text-align: left;
        padding-top: 10px;
        margin-right: 30px;
        a,
        h5 {
          color: #fff;
        }
        img {
          padding-right: 5px;
        }
      }
      li a::before {
        background-image: url("../../../assets/images/global/icons/global/Homepage/icons/Frame.svg");
        width: 10px;
        height: 10px;
      }
    }
    .app {
      text-align: center;
      a img {
        width: 60%;
        margin-bottom: 20px;
      }
    }
  }
}
.social_media {
  margin: 0px;
  padding: 0px;
  display: flex;
  li {
    padding: 0px;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 992px) {
  Footer {
    text-align: center;
    .row {
      > div {
        margin-top: 50px;
      }
      ul {
        padding: 0px 20px;
      }
      .app a img {
        width: 40%;
      }
    }
  }
}

/*ar version */
.is-ar {
  Footer .row .about_us li,
  Footer .row .about_us li {
    text-align: right;
    margin-right: 0px;
    margin-left: 30px;
  }
  Footer .row p {
    padding-right: 0px;
    padding-left: 40px;
  }
  Footer .row .about_us li a img {
    transform: scaleX(-1);
  }
}
</style>
