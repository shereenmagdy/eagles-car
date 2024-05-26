<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import { onMounted } from "vue";
import AOS from "aos";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { UseContactus } from "@/stores/Contactus/index";

//Contactus
const Contactusg = UseContactus();
//i18n
const { t } = useI18n();
// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    name: Yup.string().required(t("requiredFiled")),
    phone: Yup.string().required(t("requiredFiled")),
    email: Yup.string().required(t("requiredFiled")),
    subject: Yup.string().required(t("requiredFiled")),
    message: Yup.string().required(t("requiredFiled")),
  }),
});

//data useForm
const name = defineInputBinds("name");
const phone = defineInputBinds("phone");
const email = defineInputBinds("email");
const subject = defineInputBinds("subject");
const message = defineInputBinds("message");
// handel submit
let onSubmit = handleSubmit(async (values) => {
  try {
    Contactusg.sendContactMessage(JSON.stringify(values));
  } catch (err) {
    console.log(err);
  }
});

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="row">
      <div class="">
        <SimpleInput>
          <input
            type="text"
            id="exampleFormControlInput1"
            :placeholder="t('Name')"
            v-bind="name"
            :class="{ 'is-invalid': errors.name }"
          />
          <img
            src="../../../../../assets/images/global/icons/global/contactUs/user.svg"
          />
          <div class="invalid-feedback">
            {{ errors.name }}
          </div></SimpleInput
        >
      </div>
      <div class="row p-0 m-0">
        <div class="col-md-6">
          <SimpleInput>
            <input
              type="tel"
              :placeholder="t('Mobile_number')"
              v-bind="phone"
              :class="{ 'is-invalid': errors.phone }"
            /><img
              src="../../../../../assets/images/global/icons/global/contactUs/mobile_form.svg"
            />
            <div class="invalid-feedback">
              {{ errors.phone }}
            </div></SimpleInput
          >
        </div>
        <div class="col-md-6">
          <SimpleInput>
            <input
              type="email"
              id="Email"
              :placeholder="t('Email')"
              v-bind="email"
              :class="{ 'is-invalid': errors.email }"
            /><img
              src="../../../../../assets/images/global/icons/global/contactUs/sms_form.svg"
            />
            <div class="invalid-feedback">
              {{ errors.email }}
            </div></SimpleInput
          >
        </div>
      </div>
      <div class="">
        <SimpleInput>
          <input
            type="text"
            id="Subject"
            :placeholder="t('Subject')"
            v-bind="subject"
            :class="{ 'is-invalid': errors.subject }"
          /><img
            src="../../../../../assets/images/global/icons/global/contactUs/edit-2.svg"
          />
          <div class="invalid-feedback">
            {{ errors.subject }}
          </div></SimpleInput
        >
      </div>
      <div class="">
        <SimpleInput>
          <textarea
            id="exampleFormControlTextarea1"
            rows="3"
            :placeholder="t('message')"
            v-bind="message"
            :class="{ 'is-invalid': errors.message }"
          ></textarea
          ><img
            src="../../../../../assets/images/global/icons/global/contactUs/message-2.svg"
          />
          <div class="invalid-feedback">
            {{ errors.message }}
          </div></SimpleInput
        >
      </div>
    </div>
    <SimpleButton type="send">
      <button type="submit">
        {{ t("send") }}
      </button>
      <!-- <button type="submit" disabled v-else>
        {{ t("wait") }}
      </button> -->
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
      padding-left: 39px !important;
      padding-top: 13px;
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
