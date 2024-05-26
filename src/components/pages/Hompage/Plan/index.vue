<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="plan">
    <div class="container">
      <h6 class="color-main">{{ t("PlanTitle") }}</h6>
      <h2 class="header_title">{{ t("headerTitle") }}</h2>
      <div class="row flex mt-5">
        <div
          class="col-md-3"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          <div class="img-div">
            <img
              src="../../../../assets/images/global/icons/global/Homepage/car-door.svg"
            />
          </div>
          <h5>{{ t("Select_Car") }}</h5>
          <p>
            {{ t("par1") }}
          </p>
        </div>
        <div class="col-md-1">
          <img
            src="../../../../assets/images/global/icons/global/Homepage/border.png.svg"
          />
        </div>
        <div
          class="col-md-3"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
        >
          <div class="img-div">
            <img
              src="../../../../assets/images/global/icons/global/Homepage/customer-service.svg"
            />
          </div>
          <h5>{{ t("Contact_Operator") }}</h5>
          <p>
            {{ t("par2") }}
          </p>
        </div>
        <div class="col-md-1">
          <img
            src="../../../../assets/images/global/icons/global/Homepage/border.png.svg"
          />
        </div>
        <div
          class="col-md-3"
          data-aos="fade-down"
          data-aos-offset="400"
          data-aos-easing="ease-in-out"
        >
          <div class="img-div">
            <img
              src="../../../../assets/images/global/icons/global/Homepage/car-key.svg"
            />
          </div>
          <h5>{{ t("Let_Drive") }}</h5>
          <p>
            {{ t("par3") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.plan {
  margin-top: 200px;
  text-align: center;
  padding-bottom: 100px;
  .container {
    margin: auto;
    max-width: 71.5%;
    .row.flex {
      align-items: baseline;
      justify-content: center;
      > div {
        margin: 0px;
        padding: 0px;
        .img-div {
          background: #f8f8f8;
          padding: 20px;
          width: 50%;
          border-radius: 10px;
          margin: auto;
          img {
            width: 50px;
          }
        }
        h5 {
          margin-top: 20px;
          font-weight: 700;
        }
        p {
          color: #817f91;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}

/****media****/

@media screen and (max-width: 992px) {
  .plan {
    .container {
      max-width: 100%;
      .row.flex > div {
        .img-div {
          margin: 30px auto;
        }
        img {
          width: max-content;
        }
      }
    }
  }
}
</style>
