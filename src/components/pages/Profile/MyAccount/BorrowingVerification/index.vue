<script setup lang="ts">
import AOS from "aos";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import VerifyFormOpen from "./VerifyFormOpen/index.vue";
import { UseProfile } from "@/stores/Profile/index";
//i18n
const { t } = useI18n();

//is_verify
const is_verify = ref("");
//is_verify
const Verify_form_open = ref(false);

//Bloges
const Profile = UseProfile();
const Profile2 = ref();

//onMounted
onMounted(() => {
  AOS.init();
  Profile.get_years();
  if (!Profile.Profile) {
    Profile.get_profile();
  }
});
</script>
<template>
  <div class="box">
    <div class="row" v-if="Profile.Profile">
      <div class="col-lg-12" v-if="Profile.Profile.user.verification !== 1">
        <div class="Account_verified Account_not_verified">
          <img
            src="@/assets/images/global/icons/global/profile/verify_error.svg"
          />
          <div class="content">
            <div>
              <h6>{{ t("Account_not_verified") }}</h6>
              <p>{{ t("messageAccount_not_verified") }}</p>
            </div>
            <SimpleButton type="send">
              <button
                class="btn"
                @click="Verify_form_open = true"
                v-if="!Verify_form_open"
              >
                {{ t("Verify") }}
              </button></SimpleButton
            >
          </div>
        </div>
      </div>
      <div class="col-lg-12" v-else>
        <div class="Account_verified">
          <img
            src="@/assets/images/global/icons/global/profile/is_verify.svg"
          />
          <div class="content">
            <div>
              <h6>Account is verified</h6>
            </div>
            <!-- <SimpleButton type="send">
              <button class="btn" @click="Verify_form_open = true">
                Edit
              </button></SimpleButton
            > -->
          </div>
        </div>
      </div>
    </div>
    <div class="Verify_form" v-if="Verify_form_open">
      <VerifyFormOpen
        :Years="Profile.Years"
        :Profile="Profile.Profile"
        v-if="Profile.Profile"
        :Counteries="Profile.Counteries"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../stylingProfile.scss";
.Account_verified {
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  background: #f9f9f9;
  .content {
    display: flex;
    width: 100%;
    padding: 0px 10px;
    align-items: center;
    justify-content: space-between;
    .simple-button.send button {
      width: 120px;
      height: 57px !important;
    }
    h6 {
      color: #44c308;
      font-weight: 500;
      margin-bottom: -3px;
    }
    p {
      margin: 0px;
      padding: 0px;
    }
  }
}
.Account_not_verified {
  .content h6 {
    color: #ff0000;
    font-weight: 500;
    margin-bottom: 10px;
  }
}
</style>
