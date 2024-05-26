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
    Car_title: Yup.string().required(t("requiredFiled")),
    Make: Yup.string().required(t("requiredFiled")),
    Model: Yup.string().required(t("requiredFiled")),
    years: Yup.string().required(t("requiredFiled")),
    Number_Seats: Yup.string().required(t("requiredFiled")),
    Number_Doors: Yup.string().required(t("requiredFiled")),
    Fuel_Type: Yup.string().required(t("requiredFiled")),
    Transmission: Yup.string().required(t("requiredFiled")),
    Mileage: Yup.string().required(t("requiredFiled")),
    color: Yup.string().required(t("requiredFiled")),
    Car_Description_message: Yup.string().required(t("requiredFiled")),
  }),
});

//Car_title
const Car_title = defineInputBinds("Car_title");
const Make = defineInputBinds("Make");
const Model = defineInputBinds("Model");
const years = defineInputBinds("years");
const Number_Seats = defineInputBinds("Number_Seats");
const Number_Doors = defineInputBinds("Number_Doors");
const Fuel_Type = defineInputBinds("Fuel_Type");
const Transmission = defineInputBinds("Transmission");
const Mileage = defineInputBinds("Mileage");
const color = defineInputBinds("color");
const Car_Description_message = defineInputBinds("Car_Description_message");
// handel submit
let onSubmit = handleSubmit((values) => {
  Profile.AccountVerified.title = values.Car_title;
  Profile.AccountVerified.transmission = values.Transmission;
  Profile.AccountVerified.brand = values.Make;
  Profile.AccountVerified.model = values.Model;
  Profile.AccountVerified.year = values.years;
  Profile.AccountVerified.mileage = values.Mileage;
  Profile.AccountVerified.door = values.Number_Doors;
  Profile.AccountVerified.color = values.color;
  Profile.AccountVerified.fuelType = values.Fuel_Type;
  Profile.AccountVerified.seats = values.Number_Seats;
  Profile.AccountVerified.description = values.Car_Description_message;
  emits("ChooseTabAccount", "Car_license");
});
const ChooseTabGoToMyCar = () => {
  router.push("/");
};
//onMounted
onMounted(() => {
  Profile.get_years();
  Profile.get_models();
  Profile.get_colors();
  Profile.get_fuel_types();
  Profile.get_doors();
  Profile.get_transmissions();
  Profile.get_brands();
  if (Profile.AccountVerified) {
    resetForm({
      values: {
        Car_title: Profile.AccountVerified.title,
        Car_Description_message: Profile.AccountVerified.description,
        Transmission: Profile.AccountVerified.transmission,
        Make: Profile.AccountVerified.brand,
        Model: Profile.AccountVerified.model,
        Mileage: Profile.AccountVerified.mileage,
        years: Profile.AccountVerified.year,
        Number_Doors: Profile.AccountVerified.door,
        color: Profile.AccountVerified.color,
        Fuel_Type: Profile.AccountVerified.fuelType,
        Number_Seats: Profile.AccountVerified.seats,
      },
    });
  }
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <div class="box">
      <h4>{{ t("Car_Information") }}</h4>
      <div>
        <div class="form row mx-0 px-0">
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <input
                type="text"
                id="Car_title"
                name="Car_title"
                v-bind="Car_title"
                :placeholder="t('Car_title')"
                required
                :class="{ 'is-invalid': errors.Car_title }"
              />

              <div class="invalid-feedback">{{ errors.Car_title }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Make"
                name="Make"
                v-bind="Make"
                required
                :class="{ 'is-invalid': errors.Make }"
              >
                <option value="" disabled selected>{{ t("Make") }}</option>
                <option
                  :value="Brand.id"
                  v-for="Brand in Profile.Brands"
                  :key="Brand.id"
                >
                  {{ Brand.title }}
                </option>
              </select>
              <div class="invalid-feedback">{{ errors.LastName }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Model"
                name="Model"
                v-bind="Model"
                required
                :class="{ 'is-invalid': errors.Model }"
              >
                <option value="" disabled selected>{{ t("Model") }}</option>
                <option
                  :value="Model.id"
                  v-for="Model in Profile.Models"
                  :key="Model.id"
                >
                  {{ Model.title }}
                </option>
              </select>
              <div class="invalid-feedback">{{ errors.Model }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                id="years"
                name="years"
                v-bind="years"
                required
                :class="{ 'is-invalid': errors.years }"
              >
                <option value="" disabled selected>{{ t("Year") }}</option>
                <option
                  :value="year.id"
                  v-for="year in Profile.Years"
                  :key="year.id"
                >
                  {{ year.title }}
                </option>
              </select>
              <div class="invalid-feedback">{{ errors.years }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <input
                type="number"
                id="Number_Seats"
                name="Number_Seats"
                v-bind="Number_Seats"
                required
                :placeholder="t('Number_Seats')"
                :class="{ 'is-invalid': errors.Number_Seats }"
              />
              <div class="invalid-feedback">{{ errors.Number_Seats }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Number_Doors"
                name="Number_Doors"
                v-bind="Number_Doors"
                required
                :class="{ 'is-invalid': errors.Number_Doors }"
              >
                <option value="" disabled selected>
                  {{ t("Number_Doors") }}
                </option>
                <option
                  :value="Door.id"
                  v-for="Door in Profile.Doors"
                  :key="Door.id"
                >
                  {{ Door.title }}
                </option>
              </select>
              <div class="invalid-feedback">{{ errors.Number_Doors }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <!-- <label>Email <span class="text-red">*</span> </label> -->
              <select
                type="text"
                id="Fuel_Type"
                name="Fuel_Type"
                v-bind="Fuel_Type"
                required
                :class="{ 'is-invalid': errors.Fuel_Type }"
              >
                <option value="" disabled selected>{{ t("Fuel_Type") }}</option>
                <option
                  :value="FuelType.id"
                  v-for="FuelType in Profile.FuelTypes"
                  :key="FuelType.id"
                >
                  {{ FuelType.title }}
                </option>
              </select>
              <div class="invalid-feedback">{{ errors.Fuel_Type }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <select
                type="text"
                id="Transmission"
                name="Transmission"
                v-bind="Transmission"
                required
                :class="{ 'is-invalid': errors.Transmission }"
              >
                <option value="" disabled selected>
                  {{ t("Transmission") }}
                </option>
                <option
                  :value="Transmission.id"
                  v-for="Transmission in Profile.Transmissions"
                  :key="Transmission.id"
                >
                  {{ Transmission.title }}
                </option>
              </select>
              <div class="invalid-feedback">{{ errors.Transmission }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4">
            <SimpleInput>
              <input
                type="number"
                id="Mileage"
                name="Mileage"
                v-bind="Mileage"
                required
                :class="{ 'is-invalid': errors.Mileage }"
                :placeholder="t('Mileage')"
              />
              <div class="invalid-feedback">{{ errors.Transmission }}</div>
            </SimpleInput>
          </div>
          <div class="col-md-4 mx-0 px-0">
            <SimpleInput>
              <select
                type="text"
                id="color"
                name="color"
                v-bind="color"
                required
                :class="{ 'is-invalid': errors.color }"
              >
                <option value="" disabled selected>
                  {{ t("Color") }}
                </option>
                <option
                  :value="Color.id"
                  v-for="Color in Profile.Colors"
                  :key="Color.id"
                >
                  {{ Color.title }}
                </option>
              </select>
              <div class="invalid-feedback">{{ errors.Transmission }}</div>
            </SimpleInput>
          </div>
        </div>
      </div>
    </div>
    <div class="box my-5">
      <h4>{{ t("Car_Description") }}</h4>
      <div class="row mx-0 px-0">
        <div class="col-md-12 mx-0 px-0">
          <SimpleInput>
            <textarea
              id="Car_Description_message"
              name="Car_Description_message"
              v-bind="Car_Description_message"
              :placeholder="t('Car_Description_message')"
              required
              :class="{ 'is-invalid': errors.Car_Description_message }"
              rows="5"
              cols="50"
            >
            </textarea>

            <div class="invalid-feedback">
              {{ errors.Car_Description_message }}
            </div>
          </SimpleInput>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-12 text-center direction_ar">
        <SimpleButton type="sub_button">
          <button @click="ChooseTabGoToMyCar()">
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
@media screen and (max-width: 992px) {
  .simple-button.sub_button,
  .simple-button.send {
    min-width: max-content !important;
  }
}
</style>
