<script setup>
import { ref } from "vue";
import Tabs from "./SubTab/index.vue";
import AllRequests from "./AllRequests/index.vue";
import ConfirmedRequest from "./ConfirmedRequest/index.vue";
import { UseProfile } from "@/stores/Profile/index";
import { onMounted } from "vue";

//Bloges
const Profile = UseProfile();

//itemChooseAddCar
const itemChooseAddCar = ref("All_Requests");

//ChooseTabAccount
const ChooseTabAccount = (nameTab) => {
  console.log("ChooseTab==", nameTab);
  itemChooseAddCar.value = nameTab;
};
//onMounted
onMounted(() => {
  Profile.borrowings();
  Profile.getborrowingsconfirmed();
});
</script>
<template>
  <Tabs
    @ChooseTabAccount="ChooseTabAccount"
    :itemChooseAddCar="itemChooseAddCar"
  ></Tabs>
  <!--AllRequests-->
  <div v-if="itemChooseAddCar == 'All_Requests'">
    <AllRequests
      v-if="Profile.Borrowings"
      @ChooseTabAccount="ChooseTabAccount"
      :Borrowings="Profile.Borrowings"
    />
  </div>
  <!--ConfirmedRequest-->
  <div v-if="itemChooseAddCar == 'Confirmed_request'">
    <ConfirmedRequest
      v-if="Profile.BorrowingsConfirmed"
      :BorrowingsConfirmed="Profile.BorrowingsConfirmed"
      @ChooseTabAccount="ChooseTabAccount"
    />
  </div>
</template>
