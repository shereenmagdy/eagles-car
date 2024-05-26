import { ref } from "vue";

export const data = ref([
  {
    id: 0,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 1,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car2.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
  {
    id: 2,
    image_car: new URL(
      `../../../../assets/images/global/icons/global/carRental/car1.svg`,
      import.meta.url
    ).href,
    numbrtFavorit: 4,
    turbo: 120,
    turbo2: 14,
    babyCarSeat: 16,
  },
]);
