<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import AOS from "aos";
import { useForm } from "vee-validate";
import { UseCars } from "@/stores/Cars";
import * as Yup from "yup";
import { useRouter } from "vue-router";

//useI18n
const { t } = useI18n();
// router
const router = useRouter();
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

//Return_point
const Tab_choose = ref("Long");

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="FillterHeader">
    <!-- <ul class="tab">
      <li
        @click="Tab_choose = 'Long'"
        :class="Tab_choose == 'Long' ? 'active' : ''"
      >
        {{ t("long_term") }}
      </li>
      <li
        @click="Tab_choose = 'Short'"
        :class="Tab_choose == 'Short' ? 'active' : ''"
      >
        {{ t("short_term") }}
      </li>
    </ul> -->
    <!-- <Long_term v-if="Tab_choose == 'Long'" />
    <Short_term v-if="Tab_choose == 'Short'" /> -->
    <div
      class="card p-3"
      :class="Return_pointLong_term ? '' : 'withReturn_point'"
    >
      <h4 class="mb-4">{{ t("serach_car") }}</h4>
      <form @submit.prevent="onSubmit" class="mb-4">
        <div class="row">
          <div class="col-md-9">
            <SimpleInput>
              <input
                type="text"
                :placeholder="t('Search')"
                v-bind="query"
                class="mb-0"
                :class="{ 'is-invalid': errors.query }"
              />
              <div class="invalid-feedback">
                {{ errors.query }}
              </div></SimpleInput
            >
          </div>
          <div class="col-md-3 Reset">
            <div class="buttons">
              <label></label>
              <SimpleButton type="send" class="register_lab">
                <button type="submit">
                  {{ t("Search") }}
                  <img
                    src="@//assets/images/global/icons/global/Homepage/search-normal.svg"
                  /></button
              ></SimpleButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styleing.scss";
.tab {
  margin-bottom: 0px;
  padding: 0px;
  li {
    background: white;
    color: black;
    padding: 15px;
    cursor: pointer;
    display: inline-block;
    &:first-child {
      border-top-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
    }
  }
  .active {
    background-color: #f4a71d !important;
    color: white !important;
  }
}
.is-ar {
  .tab {
    li {
      &:first-child {
        border-top-right-radius: 8px;
        border-top-left-radius: 0px;
      }
      &:last-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 0px;
      }
    }
  }
}
input {
  height: 45px;
  border-radius: 8px !important;
}
.buttons {
  margin: auto;
  button {
    width: 100% !important;
    border-radius: 8px !important;
  }
}
button {
  text-align: center;
  padding: 10px;
  color: white;
  box-shadow: 0 10px 50px #f4a71e69;
  border-radius: 0;
  border: 0px;
  background: var(--orange-text-color);
  img {
    margin-right: 5px;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0px 10px;
  }
}
</style>

<style lang="scss">
.dp__clear_icon {
  top: 20px;
  left: auto;
  right: 19px;
}
.dp__input_icon {
  top: 20px;
  right: 0px;
  left: auto;
}
.is-ar {
  .dp__clear_icon {
    top: 20px;
    right: auto;
    left: 19px;
  }
  .dp__input_icon {
    top: 20px;
    left: 0px;
    right: auto;
  }
}
</style>
