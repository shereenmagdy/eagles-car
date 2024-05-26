<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import { onMounted } from "vue";
import AOS from "aos";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { UseProfile } from "@/stores/Profile/index";
import { UseCars } from "@/stores/Cars/index";
import { useRoute } from "vue-router";
//Bloges
const Profile = UseProfile();
//Bloges
const route = useRoute();

//Bloges
const Cars = UseCars();

//i18n
const { t } = useI18n();
// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    start_date: Yup.string().required(t("requiredFiled")),
    return_date: Yup.string().required(t("requiredFiled")),
    receipt_hour: Yup.string().required(t("requiredFiled")),
    return_hour: Yup.string().required(t("requiredFiled")),
    name: Yup.string().required(t("requiredFiled")),
    phone: Yup.string().required(t("requiredFiled")),
    nationality: Yup.string().required(t("requiredFiled")),
    location: Yup.string().required(t("requiredFiled")),
  }),
});

//data useForm
const start_date = defineInputBinds("start_date");
const return_date = defineInputBinds("return_date");
const receipt_hour = defineInputBinds("receipt_hour");
const return_hour = defineInputBinds("return_hour");
const name = defineInputBinds("name");
const phone = defineInputBinds("phone");
const nationality = defineInputBinds("nationality");
const location = defineInputBinds("location");
// handel submit
let onSubmit = handleSubmit(async (values) => {
  try {
    console.log("value = ", values, route.params.id);
    let data = {
      start_date: values.start_date,
      return_date: values.return_date,
      receipt_hour: values.receipt_hour,
      return_hour: values.return_hour,
      name: values.name,
      phone: values.phone,
      nationality: values.nationality,
      location: values.location,
      status: 0,
    };
    Cars.sendRequest(JSON.stringify(data), route.params.id);
  } catch (err) {
    console.log(err);
  }
});

onMounted(() => {
  AOS.init();
  Profile.get_countries();
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-md-12"><h3 class="mb-3">Request information</h3></div>
      <div class="col-md-6">
        <SimpleInput>
          <input
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            :placeholder="t('StartDate')"
            v-bind="start_date"
            :class="{ 'is-invalid': errors.start_date }"
          />
          <div class="invalid-feedback">
            {{ errors.start_date }}
          </div></SimpleInput
        >
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <input
            onfocus="(this.type='time')"
            onblur="(this.type='text')"
            :placeholder="t('Receipt Hour')"
            v-bind="receipt_hour"
            :class="{ 'is-invalid': errors.receipt_hour }"
          />
          <div class="invalid-feedback">
            {{ errors.receipt_hour }}
          </div></SimpleInput
        >
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <input
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            :placeholder="t('Return date')"
            v-bind="return_date"
            :class="{ 'is-invalid': errors.return_date }"
          />
          <div class="invalid-feedback">
            {{ errors.return_date }}
          </div></SimpleInput
        >
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <input
            onfocus="(this.type='time')"
            onblur="(this.type='text')"
            placeholder="Return hour"
            v-bind="return_hour"
            :class="{ 'is-invalid': errors.return_hour }"
          />
          <div class="invalid-feedback">
            {{ errors.return_hour }}
          </div></SimpleInput
        >
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <input
            type="text"
            id="name"
            :placeholder="t('name')"
            v-bind="name"
            :class="{ 'is-invalid': errors.name }"
          />
          <div class="invalid-feedback">
            {{ errors.name }}
          </div></SimpleInput
        >
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <vue-tel-input
            v-bind="phone"
            mode="international"
            :class="{ 'is-invalid': errors.phone }"
          ></vue-tel-input>
          <div class="invalid-feedback">{{ errors.phone }}</div></SimpleInput
        >
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <select
            id="exampleFormControlInput1"
            v-bind="nationality"
            :class="{ 'is-invalid': errors.nationality }"
          >
            <option value="" disabled selected>
              {{ t("Nationality") }}
            </option>
            <option
              :value="country.id"
              v-for="country in Profile.Counteries"
              :key="country.id"
            >
              {{ country.title }}
            </option>
          </select>
          <div class="invalid-feedback">
            {{ errors.nationality }}
          </div></SimpleInput
        >
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <input
            type="text"
            id="location"
            :placeholder="t('location')"
            v-bind="location"
            :class="{ 'is-invalid': errors.location }"
          />
          <div class="invalid-feedback">
            {{ errors.location }}
          </div></SimpleInput
        >
      </div>
    </div>
    <SimpleButton type="send">
      <button type="submit" v-if="!Profile.is_waitingSend">
        {{ t("Book_car") }}
      </button>
      <button type="submit" disabled v-else>
        {{ t("wait") }}
      </button>
    </SimpleButton>
  </form>
</template>
<style lang="scss" scoped>
form {
  /* simple-input */
  .simple-input {
    position: relative;
    margin-bottom: 25px !important;
    label {
      margin-bottom: 0;
    }
    text-align: initial;
    input,
    select {
      height: 60px !important;
    }
    input,
    select,
    textarea {
      text-align: left;
      background: #f9f9f9;
      width: 100%;
      margin-bottom: 0px !important;
      padding-top: 13px;
      border: 0px;
      border-radius: 8px;
      &:focus {
        border: 1px solid var(--orange-text-color);
      }
    }
    img {
      position: absolute;
      top: 15px;
      left: 10px;
      width: 25px;
      height: 25px;
    }
  }
  .simple-button.send button {
    width: 30%;
  }
}

/****media****/

@media screen and (max-width: 1240px) {
}
@media screen and (max-width: 1210px) {
}
@media screen and (max-width: 992px) {
}

/*ar version */
.is-ar {
  form {
    .simple-input {
      input,
      select,
      textarea {
        text-align: right;
        padding-right: 39px !important;
        padding-left: 10px !important;
      }
      img {
        right: 10px;
        left: auto;
      }
    }
  }
}
</style>
<style>
.vti__input {
  border: 0px !important;
  direction: ltr;
  margin: 0px !important;
  height: 54px;
  padding: 0px !important;
  border: 0px;
}
</style>
