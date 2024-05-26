<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";
import loading from "@/components/global/Loading/index.vue";
let props = defineProps(["privacyPolicy"]);
//i18n
const { t } = useI18n();
const i18n = useI18n();
//onMounted
onMounted(() => {
  //AOS
  AOS.init();
});
</script>
<template>
  <!--MostFaster-->
  <div class="PrivacyPolicy">
    <div class="container">
      <div class="row" v-if="props.privacyPolicy">
        <div class="col-lg-12" v-if="i18n.locale.value == 'en'">
          <h5>
            {{
              props.privacyPolicy &&
              props.privacyPolicy.title &&
              props.privacyPolicy.title.en
                ? props.privacyPolicy.title.en
                : ""
            }}
          </h5>
          <p>
            {{
              props.privacyPolicy &&
              props.privacyPolicy.description &&
              props.privacyPolicy.description.en
                ? props.privacyPolicy.description.en
                : ""
            }}
          </p>
        </div>
        <div class="col-lg-12 text-start" v-else>
          <h5>
            {{
              props.privacyPolicy &&
              props.privacyPolicy.title &&
              props.privacyPolicy.title.ar
                ? props.privacyPolicy.title.ar
                : ""
            }}
          </h5>
          <p class="text-start">
            {{
              props.privacyPolicy &&
              props.privacyPolicy.description &&
              props.privacyPolicy.description.ar
                ? props.privacyPolicy.description.ar
                : ""
            }}
          </p>
        </div>
      </div>
      <loading v-else></loading>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../assets/scss/variables";
.PrivacyPolicy {
  overflow-y: hidden;
  margin: 150px 0px;
  .row {
    overflow-y: hidden;
    p {
      width: 80%;
      margin: 5px;
      line-height: 2.3;
      text-align: left;
    }
    h5 {
      margin-bottom: 40px;
    }
    h5,
    h6 {
      color: var(--orange-text-color);
    }
    ul {
      margin-bottom: 30px;
      li {
        margin-bottom: 15px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .PrivacyPolicy .row p {
    width: 90%;
  }
}
</style>
