import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
// import { UseCars } from "../Cars/index.ts";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";
const toast = useToast();
// const Cars = UseCars();
export const UseProfile = defineStore("Profile", () => {
  const i18n = useI18n();
  let Profile = ref({});
  let Counteries = ref();
  let Years = ref();
  let Models = ref();
  let Colors = ref();
  let FuelTypes = ref();
  let Doors = ref();
  let Transmissions = ref();
  let Brands = ref();
  let ImageProfile = ref();
  let Borrowings = ref([]);
  let BorrowingsConfirmed = ref([]);

  // is_waiting
  let is_waiting = ref(false);
  // is_waiting_verify
  let is_waiting_verify = ref(false);
  // is_waitingChangePassword
  let is_waitingChangePassword = ref(false);
  let AccountVerified = ref({
    title: "",
    transmission: "",
    brand: "",
    model: "",
    year: "",
    mileage: "",
    door: "",
    color: "",
    fuelType: "",
    seats: "",
    plate_number: "",
    expiration_date: "",
    description: "",
    license: "",
    insurance: "",
    identity_back: "",
    identity_face: "",
    Short_term: 0,
    long_term: 0,
    with_driver: 0,
    Featurer1: "",
    Featurer2: "",
    Featurer3: "",
    media: [],
    country_id: null,
    price: 0,
  });
  // "title[en]": "",
  // "properties[transmission]": "",
  // "properties[brand]": "",
  // "properties[model]": "",
  // "properties[year]": "",
  // "properties[door]": "",
  // "properties[color]": "",
  // "properties[fuelType]": "",
  //Get profile
  async function get_profile() {
    const response = await callServer({
      url: "api/auth/profile",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Profile.value = data.data;
        if (Profile.value) {
          console.log(
            "Profile.value.user.image.original_url",
            Profile.value.user.image.original_url
          );
          ImageProfile.value = Profile.value.user.image.original_url;
        }
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get countries
  async function get_countries() {
    const response = await callServer({
      url: "api/countries",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Counteries.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Years
  async function get_years() {
    const response = await callServer({
      url: "api/years",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Years.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Models
  async function get_models() {
    const response = await callServer({
      url: "api/models",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Models.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Colors
  async function get_colors() {
    const response = await callServer({
      url: "api/colors",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Colors.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get fuel-types
  async function get_fuel_types() {
    const response = await callServer({
      url: "api/fuel-types",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        FuelTypes.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get get_doors
  async function get_doors() {
    const response = await callServer({
      url: "api/doors",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Doors.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get borrowings
  async function borrowings() {
    const response = await callServer({
      url: "api/user/borrowings",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Borrowings.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get borrowingsconfirmed
  async function getborrowingsconfirmed() {
    const response = await callServer({
      url: "api/user/borrowings/confirmed",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        BorrowingsConfirmed.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get transmissions
  async function get_transmissions() {
    const response = await callServer({
      url: "api/doors",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Transmissions.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get transmissions
  async function get_brands() {
    const response = await callServer({
      url: "api/brands",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Brands.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  // set_updateProfile
  async function set_updateProfile(data, ImageProfile1) {
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/profile",
      method: "POST",
      data,
      type: "",
      auth: true,
    });
    if (response.ok) {
      ImageProfile.value = ImageProfile1;
      is_waiting.value = false;
      toast.success("Successfully  ... ");
    } else {
      let errors = null;
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_waiting.value = false;
      throw errors;
    }
  }
  // set_ChangePassword
  async function set_ChangePassword(data) {
    is_waitingChangePassword.value = true;
    const response = await callServer({
      url: "api/auth/profile/change-password",
      method: "POST",
      data,
      auth: true,
    });
    if (!response.ok) {
      let errors = null;
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_waitingChangePassword.value = false;
      throw errors;
    } else {
      toast.success("Successfully  ... ");
      is_waitingChangePassword.value = false;
      get_profile();
    }
  }
  // profile_verify
  async function profile_verify(data) {
    is_waiting_verify.value = true;
    const response = await callServer({
      url: "api/auth/profile/verify",
      method: "POST",
      type: "",
      auth: true,
      data,
    });
    if (!response.ok) {
      let errors = null;
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_waiting_verify.value = false;
      throw errors;
    } else {
      toast.success("Successfully  ... ");
      is_waiting_verify.value = false;
    }
  }
  // set_ChangePassword
  async function add_cars() {
    is_waiting.value = true;
    let data = new FormData();
    // if (i18n.locale.value == "en") {
    //   // data.append("title[en]", AccountVerified.value.title);
    //   data.append("short_description[en]", AccountVerified.value.description);
    //   data.append("features[0][en]", AccountVerified.value.Featurer1);
    //   data.append("features[1][en]", AccountVerified.value.Featurer2);
    //   data.append("features[2][en]", AccountVerified.value.Featurer3);
    // } else {
    //   // data.append("title[ar]", AccountVerified.value.title);
    //   data.append("short_description[ar]", AccountVerified.value.description);
    //   data.append("features[0][ar]", AccountVerified.value.Featurer1);
    //   data.append("features[1][ar]", AccountVerified.value.Featurer2);
    //   data.append("features[2][ar]", AccountVerified.value.Featurer2);
    // }
    // data.append("title[ar]", AccountVerified.value.title);
    data.append("title[en]", AccountVerified.value.title);
    // data.append("description[ar]", AccountVerified.value.description);
    data.append("description[en]", AccountVerified.value.description);
    data.append(
      "short_description[en]",
      AccountVerified.value.description.slice(0, 20)
    );
    // data.append("features.0.ar", AccountVerified.value.Featurer1);
    // data.append("features.1.ar", AccountVerified.value.Featurer2);
    // data.append("features.2.ar", AccountVerified.value.Featurer2);
    data.append("features.0.en", AccountVerified.value.Featurer1);
    data.append("features.1.en", AccountVerified.value.Featurer2);
    data.append("features.2.en", AccountVerified.value.Featurer3);
    data.append("available", 1);
    data.append("features[0][en]", AccountVerified.value.Featurer1);
    data.append("features[1][en]", AccountVerified.value.Featurer2);
    data.append("features[2][en]", AccountVerified.value.Featurer3);
    data.append("properties[transmission]", AccountVerified.value.transmission);
    data.append("properties[brand]", AccountVerified.value.brand);
    data.append("properties[model]", AccountVerified.value.model);
    data.append("properties[year]", AccountVerified.value.year);
    data.append("mileage", AccountVerified.value.mileage);
    data.append("price", AccountVerified.value.price);
    data.append("properties[door]", AccountVerified.value.door);
    data.append("properties[color]", AccountVerified.value.color);
    data.append("properties[fuelType]", AccountVerified.value.fuelType);
    data.append("seats", AccountVerified.value.seats);
    data.append("plate_number", AccountVerified.value.plate_number);
    data.append("expiration_date", AccountVerified.value.expiration_date);
    data.append("license", AccountVerified.value.license);
    data.append("insurance", AccountVerified.value.insurance);
    data.append("identity_back", AccountVerified.value.identity_back);
    data.append("identity_face", AccountVerified.value.identity_face);
    data.append("short_term", AccountVerified.value.Short_term);
    data.append("with_driver", AccountVerified.value.with_driver);
    data.append("long_term", AccountVerified.value.long_term);
    data.append("country_id", AccountVerified.value.country_id);
    // for (let x = 0; x < AccountVerified.value.media.length; x++) {
    //   data.append(`media[${x}]`, AccountVerified.value.media[x]);
    // }
    for (let x in AccountVerified.value.media) {
      console.log(`media[${x}]`, AccountVerified.value.media[x]);
      data.append(`media[${x}]`, AccountVerified.value.media[x]);
    }
    for (let key in AccountVerified.media) {
      console.log(
        "AccountVerified.value.media",
        AccountVerified.value.media[key]
      );
      data.append("media[0]", AccountVerified.value.media[key]);
    }

    const response = await callServer({
      url: "api/user/cars",
      method: "POST",
      type: "",
      data,
      auth: true,
    });
    if (!response.ok) {
      let errors = null;
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_waiting.value = false;
      this.router.push("/profile");
      throw errors;
    } else {
      toast.success("Successfully  ... ");
      AccountVerified.value = {
        title: "",
        transmission: "",
        brand: "",
        model: "",
        year: "",
        mileage: "",
        door: "",
        color: "",
        fuelType: "",
        seats: "",
        plate_number: "",
        expiration_date: "",
        description: "",
        license: "",
        insurance: "",
        identity_back: "",
        identity_face: "",
        Short_term: 0,
        long_term: 0,
        with_driver: 0,
        Featurer1: "",
        Featurer2: "",
        Featurer3: "",
        media: [],
        country_id: null,
        price: 0,
      };
      is_waiting.value = false;
      get_profile();
      // Cars.get_Cars();
    }
  }
  return {
    get_profile,
    Profile,
    set_updateProfile,
    get_countries,
    get_years,
    is_waiting,
    is_waiting_verify,
    Counteries,
    Years,
    profile_verify,
    Models,
    get_models,
    Colors,
    get_colors,
    get_fuel_types,
    FuelTypes,
    Doors,
    get_doors,
    Transmissions,
    get_transmissions,
    Brands,
    get_brands,
    set_ChangePassword,
    is_waitingChangePassword,
    AccountVerified,
    ImageProfile,
    borrowings,
    Borrowings,
    getborrowingsconfirmed,
    BorrowingsConfirmed,
    add_cars,
  };
});
