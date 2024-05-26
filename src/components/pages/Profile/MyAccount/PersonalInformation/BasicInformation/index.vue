<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
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
const props = defineProps(["Profile", "Counteries"]);
// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, resetForm, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    first_name: Yup.string().required(t("requiredFiled")),
    last_name: Yup.string().required(t("requiredFiled")),
    nationality_id: Yup.number().required(t("requiredFiled")),
    location: Yup.string().required(t("requiredFiled")),
    email: Yup.string()
      .email(t("requiredFiledemail"))
      .required(t("requiredFiled")),
    identity: Yup.string().min(12).max(12).required(t("requiredFiled")),
    birthday: Yup.string().required(t("requiredFiled")),
    phone: Yup.string().required(t("requiredFiled")),
    secondary_phone: Yup.string().required(t("requiredFiled")),
  }),
});

//data useForm
const first_name = defineInputBinds("first_name");
const last_name = defineInputBinds("last_name");
const nationality_id = defineInputBinds("nationality_id");
const location = defineInputBinds("location");
const email = defineInputBinds("email");
const identity = defineInputBinds("identity");
const birthday = defineInputBinds("birthday");
const phone = defineInputBinds("phone");
const secondary_phone = defineInputBinds("secondary_phone");

const image = ref();
const imageUrl = ref();
// fileSelected
let fileSelected = (event) => {
  const file = event.target.files.item(0);
  const reader = new FileReader();
  reader.addEventListener("load", imageLoaded);
  reader.readAsDataURL(file);
  image.value = file;
};
let imageLoaded = (event) => {
  imageUrl.value = event.target.result;
};
// handel submit
let onSubmit = handleSubmit(async (values) => {
  try {
    let formdata = new FormData();
    let data = {
      first_name: values.first_name,
      last_name: values.last_name,
      nationality_id: values.nationality_id,
      location: values.location,
      email: values.email,
      identity: values.identity,
      birthday: values.birthday,
      phone: values.phone,
      secondary_phone: values.secondary_phone,
    };
    for (let key in data) {
      formdata.append(key, data[key]);
    }
    formdata.append("image", image.value);
    await Profile.set_updateProfile(formdata, imageUrl.value);
  } catch (err) {
    console.log(err);
  }
});

// watch props update
watch(props, (newValue) => {
  resetForm({
    values: {
      first_name: newValue.Profile.first_name
        ? newValue.Profile.first_name
        : "",
      last_name: newValue.Profile.last_name ? newValue.Profile.last_name : "",
      nationality_id: newValue.Profile.nationality
        ? newValue.Profile.nationality.id
        : 1,
      location: newValue.Profile.location ? newValue.Profile.location : "",
      email: newValue.Profile.email ? newValue.Profile.email : "",
      identity: newValue.Profile.identity ? newValue.Profile.identity : "",
      birthday: newValue.Profile.birthday ? newValue.Profile.birthday : "",
      phone: newValue.Profile.phone ? newValue.Profile.phone : "",
      secondary_phone: newValue.Profile.secondary_phone
        ? newValue.Profile.secondary_phone
        : "",
    },
  });
  imageUrl.value = newValue.Profile.image
    ? newValue.Profile.image.original_url
    : "";
});
</script>
<template>
  <div class="box">
    <h4>{{ t("Basic_information") }}</h4>
    <div class="row">
      <div class="col-lg-2">
        <div class="profile_img">
          <img :src="imageUrl" v-if="imageUrl" />
          <img src="@/assets/images/global/icons/global/man.svg" v-else />
          <button class="btn btn-upload">+</button>
          <input
            type="file"
            accept="image/*"
            @change="fileSelected"
            class="imgfileType"
          />
        </div>
      </div>
      <div class="col-lg-10">
        <form @submit.prevent="onSubmit">
          <div class="form mt-4 row">
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  v-bind="first_name"
                  :placeholder="t('FirstName')"
                  :class="{ 'is-invalid': errors.first_name }"
                />

                <div class="invalid-feedback">{{ errors.first_name }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  v-bind="last_name"
                  :placeholder="t('LastName')"
                  :class="{ 'is-invalid': errors.last_name }"
                />

                <div class="invalid-feedback">{{ errors.last_name }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4 selectForm">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <select
                  id="Expiration_Date"
                  name="Expiration_Date"
                  v-bind="nationality_id"
                  :class="{ 'is-invalid': errors.nationality_id }"
                >
                  <option value="" disabled selected>
                    {{ t("Nationality") }}
                  </option>
                  <option
                    :value="country.id"
                    v-for="country in props.Counteries"
                    :key="country.id"
                  >
                    {{ country.title }}
                  </option></select
                ><img
                  src="@/assets/images/global/icons/global/arrow-down.svg"
                />
                <div class="invalid-feedback">{{ errors.nationality_id }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-bind="email"
                  :placeholder="t('Email')"
                  :class="{ 'is-invalid': errors.email }"
                  class="disabled"
                  disabled
                />

                <div class="invalid-feedback">{{ errors.email }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="identity"
                  name="identity"
                  v-bind="identity"
                  :placeholder="t('ID')"
                  :class="{ 'is-invalid': errors.identity }"
                />

                <div class="invalid-feedback">{{ errors.identity }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  v-bind="birthday"
                  :placeholder="t('Date_of_birth')"
                  :class="{ 'is-invalid': errors.birthday }"
                />

                <div class="invalid-feedback">{{ errors.birthday }}</div>
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
                  :placeholder="t('Primary_phone_number')"
                  :class="{ 'is-invalid': errors.phone }"
                />

                <div class="invalid-feedback">
                  {{ errors.phone }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  type="text"
                  id="secondary_phone"
                  name="secondary_phone"
                  v-bind="secondary_phone"
                  :placeholder="t('Secondary_phone_number')"
                  :class="{ 'is-invalid': errors.secondary_phone }"
                />

                <div class="invalid-feedback">
                  {{ errors.secondary_phone }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> 
                  v-bind="location"-->
                <input
                  type="text"
                  id="location"
                  name="location"
                  v-bind="location"
                  :placeholder="t('Location')"
                  :class="{ 'is-invalid': errors.location }"
                />
                <div class="invalid-feedback">{{ errors.location }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleButton type="send">
                <button type="submit" v-if="!Profile.is_waiting">
                  {{ t("Save_changes") }}
                </button>
                <button type="submit" disabled v-else>
                  {{ t("wait") }}
                </button>
              </SimpleButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../_stylingProfile.scss";
.profile_img {
  position: relative;
  width: 100px;
  margin: auto;
  height: 100px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .btn-upload {
    background: #f4a71d;
    color: white;
    padding: 5px;
    width: 35px;
    /* height: 20px; */
    border-radius: 100%;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  .imgfileType {
    position: absolute;
    opacity: 0;
    right: 0px;
    bottom: -12px;
    width: 35px;
    height: 35px;
    padding: 5px;
    top: auto;
    cursor: pointer;
    z-index: 999;
  }
}
.disabled {
  background: #ddd !important;
}
.LightOff .disabled {
  background: rgba(77, 77, 77, 0.7490196078) !important;
}
</style>
