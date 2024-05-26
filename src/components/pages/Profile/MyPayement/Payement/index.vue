<script setup lang="ts">
import AOS from "aos";
import { useI18n } from "vue-i18n";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { onMounted } from "vue";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
//i18n
const { t } = useI18n();
// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    PromotionCode: Yup.string().required(t("requiredFiled")),
  }),
});

//PromotionCode
const PromotionCode = defineInputBinds("PromotionCode");

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="Payement">
          <img
            src="@/assets/images/global/icons/global/profile/empty-wallet-change.svg"
          />
          <div class="content">
            <div>
              <h6>{{ t("Use_fawery_payement") }}</h6>
              <p>{{ t("Ensure_account_payment_methods_ways") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <form @submit.prevent="onSubmit">
          <div class="form row">
            <div class="col-md-4">
              <SimpleInput>
                <h6>{{ t("Click_followed_button_copy_link") }}</h6>
                <input
                  type="text"
                  id="PromotionCode"
                  name="PromotionCode"
                  v-bind="PromotionCode"
                  :placeholder="t('link_fawry')"
                  required
                  :class="{ 'is-invalid': errors.PromotionCode }"
                />

                <div class="invalid-feedback">{{ errors.PromotionCode }}</div>
              </SimpleInput>
            </div>
            <div class="col-md-12 mb-5">
              <SimpleButton type="send">
                <button type="submit">
                  {{ t("Save") }}
                </button>
                <!-- <button type="submit" disabled v-else>
                  {{ t("wait") }}
                </button> -->
              </SimpleButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../stylingProfile.scss";
.Payement {
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  padding: 30px 20px;
  width: 100%;
  border-radius: 8px;
  background: #f9f9f9;
  p {
    margin-bottom: 0px;
  }
  img {
    margin-right: 10px;
  }
}
.simple-button.send button {
  width: 120px;
  height: 57px !important;
}
h6 {
  color: #0a0a68;
  font-size: 18px;
}
</style>
