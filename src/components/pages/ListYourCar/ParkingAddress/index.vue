<script setup lang="ts">
import { ref, defineEmits, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { UseProfile } from "@/stores/Profile/index";
import { useForm } from "vee-validate";
import * as Yup from "yup";
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
    Featurer1: Yup.string().required(t("requiredFiled")),
    Featurer2: Yup.string().required(t("requiredFiled")),
    Featurer3: Yup.string().required(t("requiredFiled")),
  }),
});
const Featurer1 = defineInputBinds("Featurer1");
const Featurer2 = defineInputBinds("Featurer2");
const Featurer3 = defineInputBinds("Featurer3");
// handel submit
let onSubmit = handleSubmit(async (values) => {
  Profile.AccountVerified.Featurer1 = values.Featurer1;
  Profile.AccountVerified.Featurer2 = values.Featurer2;
  Profile.AccountVerified.Featurer3 = values.Featurer3;
  await Profile.add_cars();
  router.push("/profile");
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
        Featurer1: Profile.AccountVerified.Featurer1,
        Featurer2: Profile.AccountVerified.Featurer2,
        Featurer3: Profile.AccountVerified.Featurer3,
      },
    });
  }
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="box mt-3 mb-3 Insurance">
      <h4>{{ t("Features") }}</h4>
      <div class="row">
        <div class="col-md-6 pr-0">
          <SimpleInput>
            <input
              type="text"
              name="Market_value_your_car"
              v-bind="Featurer1"
              placeholder="----"
              :class="{ 'is-invalid': errors.Featurer1 }"
            />
            <div class="invalid-feedback">{{ errors.Featurer1 }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-6 pr-0">
          <SimpleInput>
            <input
              type="text"
              name="Market_value_your_car"
              v-bind="Featurer2"
              placeholder="----"
              :class="{ 'is-invalid': errors.Featurer2 }"
            />
            <div class="invalid-feedback">{{ errors.Featurer2 }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-6 pr-0">
          <SimpleInput>
            <input
              type="text"
              name="Market_value_your_car"
              v-bind="Featurer3"
              placeholder="----"
              :class="{ 'is-invalid': errors.Featurer3 }"
            />
            <div class="invalid-feedback">{{ errors.Featurer3 }}</div>
          </SimpleInput>
        </div>
      </div>
    </div>
    <div class="col-12 text-center mb-5 mt-5 direction_ar">
      <SimpleButton type="sub_button">
        <button @click="ChooseTabGoToMyCar()">
          {{ t("Finish_later") }}
        </button>
      </SimpleButton>
      <SimpleButton type="send">
        <button type="submit" v-if="!Profile.is_waiting">
          {{ t("Publish") }}
        </button>
        <button type="submit" disabled v-else>
          {{ t("wait") }}
        </button>
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
