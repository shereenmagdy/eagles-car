<script setup>
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import AddCarContent from "./AddCarContent/index.vue";
import AllRequests from "./AllRequests/index.vue";
import ConfirmedRequest from "./ConfirmedRequest/index.vue";
import { UseCars } from "@/stores/Cars/index";
import Tabs from "./SubTab/index.vue";
//i18n
const { t } = useI18n();
const Cars = UseCars();
//i18n
const AddCar = ref(false);
//itemChooseAddCar
const itemChooseAddCar = ref("All_Car");

//ChooseTabAccount
const ChooseTabAccount = (nameTab) => {
  console.log("ChooseTab==", nameTab);
  itemChooseAddCar.value = nameTab;
};
//ChooseTabAccount
const GoToMyCar = () => {
  AddCar.value = false;
  itemChooseAddCar.value = "All_Car";
  Cars.get_user_Cars();
  Cars.get_Cars_confirmed();
};
onMounted(() => {
  Cars.get_user_Cars();
  Cars.get_Cars_confirmed();
});
</script>
<template>
  <div class="myCar">
    <Tabs
      v-if="!AddCar"
      @ChooseTabAccount="ChooseTabAccount"
      :itemChooseAddCar="itemChooseAddCar"
    ></Tabs>
    <span v-if="!AddCar">
      <!--AllRequests-->
      <div v-if="itemChooseAddCar == 'All_Car'">
        <div v-if="Cars.CarsUser.length > 0">
          <AllRequests
            @ChooseTabAccount="ChooseTabAccount"
            :Cars="Cars.CarsUser"
          />
          <button @click="AddCar = true" class="plusListYourCar">+</button>
        </div>
        <div class="text-center mb-5" v-else>
          <img
            src="@/assets/images/global/icons/global/profile/drunk_driving-cuate.svg"
          />
          <h6>{{ t("Add_car") }}</h6>
          <p>{{ t("messageAdd_car") }}</p>
          <SimpleButton type="send">
            <button class="btn" @click="AddCar = true">
              {{ t("add") }}
            </button></SimpleButton
          >
        </div>
      </div>
      <div v-if="itemChooseAddCar == 'Confirmed_Car'">
        <ConfirmedRequest
          v-if="Cars.CarsConfirmed.length > 0"
          @ChooseTabAccount="ChooseTabAccount"
          :Cars="Cars.CarsConfirmed"
        />
        <div class="text-center mb-5" v-else>
          <img
            src="@/assets/images/global/icons/global/profile/drunk_driving-cuate.svg"
          />
          <h6>{{ t("Add_car") }}</h6>
          <p>{{ t("messageAdd_car") }}</p>
          <SimpleButton type="send">
            <button class="btn" @click="AddCar = true">
              {{ t("add") }}
            </button></SimpleButton
          >
        </div>
      </div>
    </span>
    <AddCarContent v-else @GoToMyCar="GoToMyCar" />
  </div>
</template>
<style lang="scss" scoped>
@import "../stylingProfile.scss";
.simple-button.send button,
.simple-button.send .btn {
  padding: 15px 30px;
  width: max-content !important;
  height: max-content !important;
  border-radius: 8px;
}
.myCar {
  position: relative;
}
.plusListYourCar {
  background: #f4a71d;
  border-radius: 100%;
  margin-left: 15px;
  padding: 10px 17px;
  color: white;
  font-size: 20px;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 40px;
  top: 20px;
  border: 0px;
}
.box {
  display: flex;
  overflow: visible;
  width: 95%;
  margin: 50px auto 70px;
  padding: 30px 10px;
  .img_div {
    position: relative;
    overflow: visible;
    width: 572px;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      right: 20px;
      bottom: -50px;
      transform: scale(1.2);
    }
  }
  .end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .per_week {
      vertical-align: sub;
      font-size: 13px;
    }
    // .buttons {
    //   display: flex;
    //   .simple-button button {
    //     width: 150px !important;
    //   }
    // }
  }
  .content {
    margin-left: 50px;
    width: 100%;
    hr {
      background: white;
      height: 1px;
      border-color: #b1b1b1;
    }
  }
}
.plus {
  cursor: pointer !important;
  width: 80px;
  height: 80px;
  font-size: 33px;
  margin-left: auto;
  border-radius: 100%;
  color: white;
  background: #f4a71d;
  text-align: center;
  padding: 15px;
  margin-bottom: 40px;
}
.simple-button.send .btn.btn-Edit {
  background: rgba(244, 167, 29, 0.1);
  color: rgba(244, 167, 29, 1);
}
@media screen and (max-width: 992px) {
  .box {
    width: 100%;
    text-align: center;
    flex-direction: column;
    .img_div {
      width: 100%;
      margin-bottom: 50px;
      text-align: center;
      img {
        position: relative;
        top: 0px;
        right: 0px;
        width: 200px;
        text-align: center;
      }
    }
    .content {
      margin-left: 0px;
    }
    .end {
      display: block;
      button {
        margin-top: 20px;
      }
    }
  }
  .plus {
    width: 50px;
    height: 50px;
    margin: auto auto 50px;
    font-size: 30px;
    padding: 5px;
  }
}
//.is-ar
.is-ar {
  .box .content {
    margin-right: 50px;
    text-align: right;
  }
  .plus {
    margin-left: 0px;
    margin-right: auto;
  }
}
</style>
