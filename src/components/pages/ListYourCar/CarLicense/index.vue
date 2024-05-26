<script setup lang="ts">
import { ref, defineEmits, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { UseProfile } from "@/stores/Profile/index";
import { useRouter } from "vue-router";
//Bloges
const Profile = UseProfile();
const router = useRouter();

// emit
let emits = defineEmits(["ChooseTabAccount"]);
//i18n
const { t } = useI18n();

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds, resetForm } = useForm({
  validationSchema: Yup.object({
    country_id: Yup.string().required(t("requiredFiled")),
    Plate_number: Yup.string().required(t("requiredFiled")),
    License_expiration_date: Yup.string().required(t("requiredFiled")),
  }),
});

//Car_title
const country_id = defineInputBinds("country_id");
const Plate_number = defineInputBinds("Plate_number");
const License_expiration_date = defineInputBinds("License_expiration_date");
const license = ref();
const Insurance = ref();
const identity_face = ref();
const identity_back = ref();
// fileSelected
let fileSelected = (event) => {
  license.value = event.target.files.item(0);
}; // fileSelected
let fileSelectedIdentity_back = (event) => {
  identity_back.value = event.target.files.item(0);
}; // fileSelected
let fileSelectedIdentity_face = (event) => {
  identity_face.value = event.target.files.item(0);
};
// fileSelectedInsurance
let fileSelectedInsurance = (event) => {
  Insurance.value = event.target.files.item(0);
};
// handel submit
let onSubmit = handleSubmit((values) => {
  Profile.AccountVerified.country_id = values.country_id;
  Profile.AccountVerified.plate_number = values.Plate_number;
  Profile.AccountVerified.expiration_date = values.License_expiration_date;
  Profile.AccountVerified.license = license.value;
  Profile.AccountVerified.insurance = Insurance.value;
  Profile.AccountVerified.identity_back = identity_back.value;
  Profile.AccountVerified.identity_face = identity_face.value;
  emits("ChooseTabAccount", "Photo_and_prices");
});

const ChooseTabGoToMyCar = () => {
  router.push("/");
};
//onMounted
onMounted(() => {
  Profile.get_countries();
  if (Profile.AccountVerified) {
    resetForm({
      values: {
        Plate_number: Profile.AccountVerified.plate_number,
        License_expiration_date: Profile.AccountVerified.expiration_date,
        insurance_yearly_cost: Profile.AccountVerified.insurance_yearly_cost,
        insurance_excess_value: Profile.AccountVerified.insurance_excess_value,
      },
    });
    license.value = Profile.AccountVerified.license;
    identity_back.value = Profile.AccountVerified.identity_back;
    identity_face.value = Profile.AccountVerified.identity_face;
  }
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="box">
      <h4>{{ t("Car_license") }}</h4>
      <div>
        <div class="row mx-0 px-0">
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                id="Expiration_Date"
                name="Expiration_Date"
                v-bind="country_id"
                :class="{ 'is-invalid': errors.country_id }"
              >
                <option value="" disabled selected>
                  {{ t("Country") }}
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
                {{ errors.country_id }}
              </div>
            </SimpleInput>
          </div>
          <!-- <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <input
                type="text"
                id="country_id"
                name="country_id"
                v-bind="country_id"
                :placeholder="t('country_id')"
                required
                :class="{ 'is-invalid': errors.country_id }"
              />

              <div class="invalid-feedback">
                {{ errors.country_id }}
              </div>
            </SimpleInput>
          </div> -->
          <!-- <div class="col-md-4">
            <SimpleInput>
              <input
                type="text"
                id="City"
                name="City"
                v-bind="City"
                :placeholder="t('City')"
                required
                :class="{ 'is-invalid': errors.City }"
              />
              <div class="invalid-feedback">{{ errors.City }}</div>
            </SimpleInput>
          </div> -->
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <input
                type="text"
                id="Plate_number"
                name="Plate_number"
                :placeholder="t('Plate_number')"
                v-bind="Plate_number"
                required
                :class="{ 'is-invalid': errors.Plate_number }"
              />
              <div class="invalid-feedback">{{ errors.Plate_number }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-2">
            <SimpleInput>
              <input
                name="License_expiration_date"
                v-bind="License_expiration_date"
                placeholder="Expiration Date"
                class="textbox-n"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                required
                :class="{ 'is-invalid': errors.License_expiration_date }"
              />
              <div class="invalid-feedback">
                {{ errors.License_expiration_date }}
              </div>
            </SimpleInput>
          </div>
        </div>
      </div>
    </div>
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Upload_Papers_car_license") }}</h5>
          <p>{{ t("messageIdentity_document") }}</p>
        </div>
        <SimpleInput class="upload">
          <SimpleButton type="send" class="">
            <img
              src="@/assets/images/global/icons/global/profile/document-upload-white.svg"
            />
            {{ t("upload") }}</SimpleButton
          >
          <input type="file" @change="fileSelected" />
        </SimpleInput>
      </div>
    </div>
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Insurance") }}</h5>
          <p>{{ t("messageIdentity_document") }}</p>
        </div>
        <SimpleInput class="upload">
          <SimpleButton type="send" class="">
            <img
              src="@/assets/images/global/icons/global/profile/document-upload-white.svg"
            />
            {{ t("upload") }}</SimpleButton
          >
          <input type="file" @change="fileSelectedInsurance" />
        </SimpleInput>
      </div>
    </div>
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Identity_document_face") }}</h5>
          <p>{{ t("messageIdentity_document") }}</p>
        </div>
        <SimpleInput class="upload">
          <SimpleButton type="send" class="">
            <img
              src="@/assets/images/global/icons/global/profile/document-upload-white.svg"
            />
            {{ t("upload") }}</SimpleButton
          >
          <input type="file" @change="fileSelectedIdentity_face" />
        </SimpleInput>
      </div>
    </div>
    <div class="Upload_Papers">
      <div class="content">
        <div class="">
          <h5>{{ t("Identity_document_back") }}</h5>
          <p>{{ t("messageIdentity_document") }}</p>
        </div>
        <SimpleInput class="upload">
          <SimpleButton type="send" class="">
            <img
              src="@/assets/images/global/icons/global/profile/document-upload-white.svg"
            />
            {{ t("upload") }}</SimpleButton
          >
          <input type="file" @change="fileSelectedIdentity_back" />
        </SimpleInput>
      </div>
    </div>
    <div class="col-12 text-center mb-5 mt-5 direction_ar">
      <SimpleButton type="sub_button">
        <button @click="ChooseTabGoToMyCar">
          {{ t("Finish_later") }}
        </button>
      </SimpleButton>
      <SimpleButton type="send">
        <button type="submit">
          {{ t("Next_step") }}
        </button>
        <!-- <button type="submit" value="" disabled selected v-else>
                  {{ t("wait") }}
                </button> -->
      </SimpleButton>
    </div>
  </form>
</template>
<style scoped lang="scss">
@import "../../Profile/stylingProfile";
.simple-button.sub_button,
.simple-button.send {
  width: max-content;
  display: inline-block;
  text-align: center;
  width: 30% !important;
  margin: 0px 10px;
}
.simple-button.sub_button button,
.simple-button.send button {
  width: 100%;
}
</style>
