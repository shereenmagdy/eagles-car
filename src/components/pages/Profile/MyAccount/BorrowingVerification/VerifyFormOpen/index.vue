<script setup lang="ts">
import { ref, defineProps, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { UseProfile } from "@/stores/Profile/index";

//Bloges
const Profile = UseProfile();
//i18n
const { t } = useI18n();

// props
const props = defineProps(["Years", "Counteries", "Profile"]);

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, resetForm, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    license_number: Yup.string().required(t("requiredFiled")),
    issuance_date: Yup.string().required(t("requiredFiled")),
    expiration_date: Yup.string().required(t("requiredFiled")),
    country_id: Yup.string().required(t("requiredFiled")),
    phone: Yup.string().required(t("requiredFiled")),
    years: Yup.string().required(t("requiredFiled")),
    drugs: Yup.string().required(t("requiredFiled")),
  }),
});

//login ,password
const license_number = defineInputBinds("license_number");
const issuance_date = defineInputBinds("issuance_date");
const expiration_date = defineInputBinds("expiration_date");
const country_id = defineInputBinds("country_id");
const phone = defineInputBinds("phone");
const drugs = defineInputBinds("drugs");
const years = defineInputBinds("years");

// Driver_license
const Driver_license = ref();
const Driver_licenseName = ref();
const identity_face = ref();
const identity_back = ref();
const identity_face_error = ref();
const identity_back_error = ref();
const F = ref();
// handel submit
let onSubmit = handleSubmit(async (values) => {
  identity_face_error.value = "";
  identity_back_error.value = "";
  if (identity_face.value) {
    if (identity_back.value) {
      let formdata = new FormData();
      let data = {
        license_number: values.license_number,
        issuance_date: values.issuance_date,
        expiration_date: values.expiration_date,
        country_id: values.country_id,
        phone: values.phone,
        drugs: values.drugs,
        years: values.years,
      };
      for (let key in data) {
        formdata.append(key, data[key]);
      }
      formdata.append("identity_face", identity_face.value);
      formdata.append("identity_back", identity_back.value);
      formdata.append("license", Driver_license.value);
      await Profile.profile_verify(formdata);
    } else identity_back_error.value = "this field required";
  } else identity_face_error.value = "this field required";
});
// fileSelected
let fileSelected = (event) => {
  const file = event.target.files.item(0);
  Driver_license.value = event.target.files.item(0);
  Driver_licenseName.value = event.target.files.item(0).name;
};
// fileSelected
let fileSelectedface = (event) => {
  const target = event.target as HTMLInputElement;
  if (target && target.files) {
    identity_face.value = target.files[0];
  }
};
let fileSelectedback = (event) => {
  const target = event.target as HTMLInputElement;
  if (target && target.files) {
    identity_back.value = target.files[0];
  }
};

// emptyFileDriver_license
let emptyFileDriver_license = () => {
  Driver_licenseName.value = "";
  Driver_license.value = "";
};
onMounted(() => {
  resetForm({
    values: {
      license_number: props.Profile.user.license_number,
      issuance_date: props.Profile.user.issuance_date,
      expiration_date: props.Profile.user.expiration_date,
      country_id: props.Profile.user.country_id,
      phone: props.Profile.user.phone,
      years: props.Profile.user.years,
      drugs: props.Profile.user.drugs,
    },
  });
});
</script>
<template>
  <h5>{{ t("Driver_License") }}</h5>
  <form @submit.prevent="onSubmit">
    <div>
      <div class="form row mx-0 px-0">
        <div class="col-md-4 mx-0 px-0">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="text"
              id="license_number"
              name="license_number"
              v-bind="license_number"
              :placeholder="t('license_number')"
              required
              :class="{ 'is-invalid': errors.license_number }"
            />

            <div class="invalid-feedback">{{ errors.license_number }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              id="issuance_date"
              name="issuance_date"
              v-bind="issuance_date"
              :placeholder="t('issuance_date')"
              required
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              :class="{ 'is-invalid': errors.issuance_date }"
            />

            <div class="invalid-feedback">{{ errors.issuance_date }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              id="expiration_date"
              name="expiration_date"
              v-bind="expiration_date"
              :placeholder="t('expiration_date')"
              required
              :class="{ 'is-invalid': errors.expiration_date }"
            />

            <div class="invalid-feedback">{{ errors.Nationality }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4 mx-0 px-0">
          <SimpleInput>
            <select
              id="Expiration_Date"
              name="Expiration_Date"
              v-bind="country_id"
              :class="{ 'is-invalid': errors.country_id }"
            >
              <option value="" disabled selected>
                {{ t("Country_Issue") }}
              </option>
              <option
                :value="country.id"
                v-for="country in props.Counteries"
                :key="country.id"
              >
                {{ country.title }}
              </option>
            </select>

            <div class="invalid-feedback">{{ errors.country_id }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="text"
              id="phone"
              name="phone"
              v-bind="phone"
              :placeholder="t('Driver_Phone_Number')"
              required
              :class="{ 'is-invalid': errors.phone }"
            />

            <div class="invalid-feedback">{{ errors.phone }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-4">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <div
              class="upload_file"
              :class="{ 'is-invalid': errors.Driver_license }"
            >
              <div class="content">
                <span>
                  {{
                    Driver_licenseName
                      ? Driver_licenseName
                      : t("Driver_license")
                  }}
                </span>
                <img
                  src="../../../../../../assets/images/global/icons/global/profile/document-upload.svg"
                  v-if="!Driver_license"
                />
                <img
                  src="../../../../../../assets/images/global/icons/global/profile/forbidden-2.svg"
                  v-if="Driver_license"
                  @click="emptyFileDriver_license"
                />
              </div>
              <input
                type="file"
                @change="fileSelected"
                required
                v-if="!Driver_license"
              />
            </div>
            <div class="invalid-feedback">{{ errors.Driver_license }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-12 Identity_document">
          <div class="content">
            <div class="">
              <h5>{{ t("Identity_document") }}</h5>
              <p>{{ t("messageIdentity_document") }}</p>
            </div>
            <SimpleInput class="upload">
              <SimpleButton type="send" class="">
                <img
                  src="../../../../../../assets/images/global/icons/global/profile/document-upload-white.svg"
                />
                {{ t("upload") }}</SimpleButton
              >
              <input type="file" @change="fileSelectedface($event)" />
            </SimpleInput>
          </div>
        </div>
        <div class="invalid" v-if="identity_face_error && !identity_face">
          {{ identity_face_error }}
        </div>
        <div class="col-md-12 Identity_document">
          <div class="content">
            <div class="">
              <h5>{{ t("Identity_document") }}</h5>
              <p>{{ t("messageIdentity_document") }}</p>
            </div>
            <SimpleInput class="upload">
              <SimpleButton type="send" class="">
                <img
                  src="../../../../../../assets/images/global/icons/global/profile/document-upload-white.svg"
                />
                {{ t("upload") }}</SimpleButton
              >
              <input type="file" @change="fileSelectedback($event)" />
            </SimpleInput>
          </div>
        </div>
        <div class="invalid" v-if="identity_back_error && !identity_back">
          {{ identity_back_error }}
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <SimpleInput>
          <label class="py-3">{{ t("drivingEffect") }} </label>
          <select
            id="drugs"
            name="drugs"
            v-bind="drugs"
            required
            :class="{ 'is-invalid': errors.drugs }"
          >
            <option :value="1">yes</option>
            <option :value="0">no</option>
          </select>
          <div class="invalid-feedback">{{ errors.drugs }}</div>
        </SimpleInput>
      </div>
      <div class="col-md-6">
        <SimpleInput>
          <label class="py-3">{{ t("yearsDriving") }} </label>
          <!-- <select
            id="years"
            name="years"
            v-bind="years"
            required
            :class="{ 'is-invalid': errors.years }"
          >
            <option :value="year.id" v-for="year in Years" :key="year.id">
              {{ year.title }}
            </option>
          </select> --><input
            type="text"
            v-bind="years"
            name="years"
            required
            :class="{ 'is-invalid': errors.years }"
          />
          <div class="invalid-feedback">{{ errors.years }}</div>
        </SimpleInput>
      </div>
      <div class="col-md-12">
        <SimpleButton type="send" class="submit_button">
          <button type="submit" v-if="!Profile.is_waiting_verify">
            {{ t("Save_changes") }}
          </button>
          <button type="submit" disabled v-else>
            {{ t("wait") }}
          </button>
        </SimpleButton>
      </div>
    </div>
  </form>
</template>
<style scoped lang="scss">
@import "../../../_stylingProfile.scss";
.simple-input .upload_file {
  height: auto !important;
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 15px;
    align-content: center;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
.invalid {
  font-size: 14px;
  color: red;
  margin: 0px;
}
.Identity_document {
  background: #f9f9f9;
  margin: 10px 0px 0px;
}
.submit_button.send {
  width: 200px;
  margin: auto;
  button {
    padding: 15px;
    height: max-content !important;
  }
}
</style>
