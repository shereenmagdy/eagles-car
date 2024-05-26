<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
import { useForm } from "vee-validate";
import { UseCars } from "@/stores/Cars";
import * as Yup from "yup";
import { useRouter } from "vue-router";
// router
const router = useRouter();

//useI18n
const { t } = useI18n();
//UseCars
const Cars = UseCars();
// meta
const { meta } = useForm();

// formRegister
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    query: Yup.string().required(t("requiredFiled")),
  }),
});

//first_name ,last_name
const query = defineInputBinds("query");
// //Driver
// const Driver = ref(true);

let onSubmit = handleSubmit((values) => {
  if (values) {
    console.log("values", JSON.stringify(values));

    router.push("/search-results/" + values.query);
  }
});

//onMounted
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Fillter">
    <form @submit.prevent="onSubmit">
      <h4>{{ t("Search_filter") }} <span></span></h4>
      <div class="row">
        <!-- <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Car_condition") }}</label
        >
        <div class="choose_Car_condition">
          <div :class="Driver ? 'active' : ''" @click="Driver = true">
            {{ t("with_driver") }}
          </div>
          <div :class="!Driver ? 'active' : ''" @click="Driver = false">
            {{ t("Without_driver") }}
          </div>
        </div>
      </div> -->
        <div class="col-lg-12">
          <label
            ><img
              src="../../../../assets/images/global/icons/global/Homepage/location.svg"
            />{{ t("NameCarsOrBrands") }}</label
          >
          <SimpleInput>
            <input
              type="text"
              :placeholder="t('NameCarsOrBrands')"
              v-bind="query"
              class="mb-0"
              :class="{ 'is-invalid': errors.query }"
            />
            <div class="invalid-feedback">{{ errors.query }}</div></SimpleInput
          >
        </div>
        <!-- <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("title") }}</label
        >
        <SimpleInput>
          <select class="form-control">
            <option disabled selected value="">
              {{ t("title") }}
            </option>
            <option>anythink</option>
          </select></SimpleInput
        >
      </div> -->
        <!-- <div class="col-lg-12 range">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Year_model") }}</label
        >
        <div id="slider">
          <input
            class="bar"
            type="range"
            id="rangeinput"
            value="50"
            onchange="rangevalue.value=value"
          />
          <span class="highlight"></span>
          <output id="rangevalue">50</output>
        </div>
        <div class="info"><span>2018</span><span>2023</span></div>
      </div> -->
        <!-- <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Number_seat") }}</label
        >
        <SimpleInput>
          <select class="form-control">
            <option disabled selected value="">
              {{ t("Choose_Number_seat") }}
            </option>
            <option>anythink</option>
          </select></SimpleInput
        >
      </div>
      <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Price_range") }}</label
        >
        <div class="row p-0 m-0">
          <div class="col-lg-6 p-0 m-0">
            <SimpleInput>
              <select class="form-control">
                <option disabled selected value="">
                  {{ t("Minimum") }}
                </option>
                <option></option></select
            ></SimpleInput>
          </div>
          <div class="col-lg-6 px-1 m-0">
            <SimpleInput
              ><select class="form-control">
                <option disabled selected value="">
                  {{ t("Maximum") }}
                </option>
                <option></option></select
            ></SimpleInput>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <label
          ><img
            src="../../../../assets/images/global/icons/global/Homepage/location.svg"
          />{{ t("Rating") }}</label
        >
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="5">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="4">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="3">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="2">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="1">1 star</label>
        </div>
      </div>
      <div class="col-lg-12">
        <SimpleButton type="send" class="register_lab">
          <button type="submit">
            {{ t("Apply") }}
            <img
              src="../../../../assets/images/global/icons/global/Homepage/location.svg"
            /></button
        ></SimpleButton>
      </div>-->
        <div class="col-lg-12 Reset">
          <button class="color-main">{{ t("Reset_all") }}</button>
        </div>
      </div>
    </form>
  </section>
</template>
<style scoped lang="scss">
.Fillter {
  border: 1px solid #e7e7e7;
  width: 90%;
  margin: auto auto 100px;
  padding: 20px 10px;
  h4 {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    margin: 0px 0px 20px;
    span {
      width: 100px;
      display: block;
      height: 3px;
      background: rgba(244, 167, 29, 1);
      margin: auto;
      margin-top: 10px;
    }
  }
  .row {
    margin: auto;
    /* choose_Car_condition */
    .choose_Car_condition {
      display: flex;
      margin-bottom: 15px;
      text-align: center;
      cursor: pointer;
      > div {
        text-align: center;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #757575;
        width: 50%;
        &:first-child {
          margin-right: 10px;
        }
      }
      .active {
        border: 1px solid #f4a71d;
        color: #f4a71d;
      }
    }
    /* Rate */
    .rate {
      width: 100%;
      /* float: left; */
      height: 46px;
      display: flex;
      padding: 0 10px;
    }
    .rate:not(:checked) > input {
      position: absolute;
      top: -9999px;
    }
    .rate:not(:checked) > label {
      float: right;
      width: 1em;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: 30px;
      color: #ccc;
    }
    .rate:not(:checked) > label:before {
      content: "★ ";
    }
    .rate > input:checked ~ label {
      color: #ffc700;
    }
    .rate:not(:checked) > label:hover,
    .rate:not(:checked) > label:hover ~ label {
      color: #deb217;
    }
    .rate > input:checked + label:hover,
    .rate > input:checked + label:hover ~ label,
    .rate > input:checked ~ label:hover,
    .rate > input:checked ~ label:hover ~ label,
    .rate > label:hover ~ input:checked ~ label {
      color: #c59b08;
    }
    label {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 600;
      img {
        width: 20px;
        height: 20px;
        vertical-align: sub;
        margin-right: 2px;
      }
    }
    .range {
      .simple-input input {
        border: 0px;
      }
      .info {
        justify-content: space-between;
        display: flex;
        margin-top: -20px;
        margin-bottom: 15px;
        font-weight: 600;
      }
    }
    .simple-button button {
      border: 0px;
      width: 100%;
      margin-top: 10px;
    }
    .Reset {
      button {
        display: block;
        margin: auto;
        background: white;
        border: 0px;
        padding: 10px 0px;
        width: 100%;
        text-align: center;
        &hover {
          color: #c59b08;
        }
      }
      margin: 10px auto;
    }
  }
  .form-control {
    appearance: auto !important;
    border-radius: 0px;
    padding: 10px 5px !important;
    color: rgba(117, 117, 117, 1);
  }

  #slider {
    width: 100%;
    height: 13px;
    position: relative;
    margin: 0px 0px 22px;
  }
  #slider .bar {
    width: 100%;
    height: 5px;
    background-color: rgba(244, 167, 29, 1);
    position: relative;
    top: -4px;
    left: 4px;
    background: white;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
  }
  #slider .highlight {
    height: 2px;
    position: absolute;
    width: 90%;
    top: 6px;
    left: 17px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    background: rgb(231, 231, 231);
    margin: auto;
  }
  input[type="range"] {
    -webkit-appearance: none;
    background-color: red;
    height: 2px;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    top: 0px;
    z-index: 1;
    width: 20px;
    height: 20px;
    cursor: pointer;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;

    background-color: white;
    border: 2px solid rgba(244, 167, 29, 1);
  }
  input[type="range"]:hover ~ #rangevalue,
  input[type="range"]:active ~ #rangevalue {
    background-color: rgba(244, 167, 29, 1);
    opacity: 1;
    top: -75px;
  }
  /* Tool Tip */

  #rangevalue {
    color: white;
    font-size: 10px;
    text-align: center;
    font-family: Arial, sans-serif;
    display: block;
    color: #fff;
    margin: 20px 0;
    position: relative;
    left: 44.5%;
    padding: 10px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #222931),
      color-stop(100%, #181d21)
    );
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;

    background-color: rgba(244, 167, 29, 1);
    opacity: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
    top: -95px;
    width: 30px;
    height: 30px;
  }
  input[type="range"]:focus {
    outline: none;
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
}

/*ar version */
.is-ar {
  .Fillter .row .choose_Car_condition > div:first-child {
    margin-left: 10px;
    margin-right: 0px;
  }
  .Fillter #rangevalue {
    left: auto;
    right: 44.5%;
  }
}
</style>
