<script setup lang="ts">
import AOS from "aos";
import { onMounted, ref } from "vue";
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

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    old_password: Yup.string().required(t("requiredFiled")),
    password_confirmation: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required(t("requiredFiled")),
    password: Yup.string().required(t("requiredFiled")),
  }),
});

//login ,password
const old_password = defineInputBinds("old_password");
const password = defineInputBinds("password");
const password_confirmation = defineInputBinds("password_confirmation");
// input password type
const passwordFieldoldPass = ref("password");
// input password type
const passwordFieldoldPassNew = ref<string>("password");
// input password type
const passwordFieldNewRewrite = ref<string>("password");

// show/hide new password
const switchVisibility = () => {
  passwordFieldoldPass.value =
    passwordFieldoldPass.value === "password" ? "text" : "password";
};
// show/hide new password
const switchVisibilityNewPass = () => {
  passwordFieldoldPassNew.value =
    passwordFieldoldPassNew.value === "password" ? "text" : "password";
};
// show/hide new password
const switchVisibilityNewRewrite = () => {
  passwordFieldNewRewrite.value =
    passwordFieldNewRewrite.value === "password" ? "text" : "password";
};
// handel submit
let onSubmit = handleSubmit((values) => {
  try {
    Profile.set_ChangePassword(JSON.stringify(values));
  } catch (err) {
    console.log(err);
  }
});
// onMounted
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="box my-5">
    <h4>{{ t("Change_password") }}</h4>
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-10">
        <form @submit.prevent="onSubmit">
          <div class="form row">
            <div class="col-md-4 passwordField">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  :type="passwordFieldoldPass"
                  id="old_password"
                  name="old_password"
                  :placeholder="t('Old_Password')"
                  v-bind="old_password"
                  :class="{ 'is-invalid': errors.old_password }"
                /><img
                  src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                  @click="switchVisibility"
                  class="pass_icon"
                  v-if="passwordFieldoldPass == 'password'"
                /><img
                  src="@/assets/images/global/icons/global/eye-slash.svg"
                  @click="switchVisibility"
                  class="pass_icon"
                  v-else
                />
                <div class="invalid-feedback">{{ errors.old_password }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-4 passwordField">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  :type="passwordFieldoldPassNew"
                  id="password"
                  name="password"
                  :placeholder="t('New_Password')"
                  v-bind="password"
                  :class="{ 'is-invalid': errors.password }"
                /><img
                  src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                  @click="switchVisibilityNewPass"
                  class="pass_icon"
                  v-if="passwordFieldoldPassNew == 'password'"
                /><img
                  src="@/assets/images/global/icons/global/eye-slash.svg"
                  @click="switchVisibilityNewPass"
                  class="pass_icon"
                  v-else
                />
                <div class="invalid-feedback">
                  {{ errors.password }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4 passwordField">
              <SimpleInput>
                <!-- <label>Email <span class="text-red">*</span> </label> -->
                <input
                  :type="passwordFieldNewRewrite"
                  id="password_confirmation"
                  name="password_confirmation"
                  :placeholder="t('Rewrite_new_Password')"
                  v-bind="password_confirmation"
                  :class="{ 'is-invalid': errors.password_confirmation }"
                /><img
                  src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                  @click="switchVisibilityNewRewrite"
                  class="pass_icon"
                  v-if="passwordFieldNewRewrite == 'password'"
                /><img
                  src="@/assets/images/global/icons/global/eye-slash.svg"
                  @click="switchVisibilityNewRewrite"
                  class="pass_icon"
                  v-else
                />
                <div class="invalid-feedback">
                  {{ errors.password_confirmation }}
                </div>
              </SimpleInput>
            </div>
            <div class="col-md-4">
              <SimpleButton type="send" class="register_lab">
                <button type="submit" v-if="!Profile.is_waitingChangePassword">
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
</style>
