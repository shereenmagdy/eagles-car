<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";
import loading from "@/components/global/Loading/index.vue";
let props = defineProps(["support"]);
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
  <div class="support">
    <div class="container">
      <div class="row" v-if="props.support">
        <div class="col-lg-12" v-if="i18n.locale.value == 'en'">
          <h5>
            {{
              props.support && props.support.title && props.support.title.en
                ? props.support.title.en
                : ""
            }}
          </h5>
          <p>
            {{
              props.support &&
              props.support.description &&
              props.support.description.en
                ? props.support.description.en
                : ""
            }}
          </p>
        </div>
        <div class="col-lg-12 text-start" v-else>
          <h5>
            {{
              props.support && props.support.title && props.support.title.ar
                ? props.support.title.ar
                : ""
            }}
          </h5>
          <p class="text-start">
            {{
              props.support &&
              props.support.description &&
              props.support.description.ar
                ? props.support.description.ar
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
.support {
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
    h6 {
      color: var(--orange-text-color);
      margin-top: 20px;
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
  .Terms_conditions .row p {
    width: 90%;
  }
}
</style>
