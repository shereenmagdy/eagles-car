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
  <section class="rental">
    <div class="row">
      <div
        class="col-lg-6 rental_sec"
        data-aos="fade-up-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <h2>{{ t("rentaltitle") }}</h2>
        <p>{{ t("rentalMessage") }}</p>
        <SimpleButton type="send">
          <router-link to="/car-rental" type="submit" class="btn">
            {{ t("book_ride") }}
            <img
              src="../../../../assets/images/global/icons/global/Homepage/check.svg" /></router-link
        ></SimpleButton>
      </div>
      <div class="col-lg-6 p-0">
        <div class="imageRental">
          <img
            src="../../../../assets/images/global/icons/global/Homepage/rental.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
/****media****/
.rental {
  height: auto;
  .row {
    overflow-y: hidden;
    margin: 0px !important;
    background: #2d2d2d;
    .imageRental {
      background: url("../../../../assets/images/global/icons/global/Homepage/rental.svg")
        no-repeat center center;
      background-size: cover;

      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        display: none;
      }
    }
    .rental_sec {
      padding: 50px 0% 50px 8%;
      color: white;
      .simple-button.send .btn {
        margin-top: 20px;
        img {
          margin: 0px 10px;
        }
      }
      h2 {
        font-size: 40px;
        color: white;
        width: 65%;
        font-weight: 700;
        margin-bottom: 10px;
      }
      p {
        color: white;
      }
    }
  }
}
/*media" */
@media screen and (max-width: 992px) {
  .rental {
    .row {
      .rental_sec {
        padding: 23px;
        h2 {
          font-size: 20px;
          width: 100%;
        }
      }
      .imageRental {
        background: none;
        img {
          display: block;
        }
      }
    }
  }
}
/*ar version */
.is-ar {
  .rental {
    .row .rental_sec {
      padding: 50px 8% 50px 0%;
    }
  }
}
</style>
