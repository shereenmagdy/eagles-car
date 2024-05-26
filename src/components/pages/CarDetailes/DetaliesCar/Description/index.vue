<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, watch } from "vue";
import AOS from "aos";
import { defineProps } from "vue";

// useI18n
const { t } = useI18n();
const i18n = useI18n();
// defineProps
let props = defineProps(["Car"]);
let lengthMediaCar = ref(0);
//showNumberCar
let showNumberCar = ref(1);

//showImageSrc
let showImageSrc = ref();

//ListsCar
// const ListsCar = ref([
//   {
//     id: 0,
//     image_car: new URL(
//       `../../../../../assets/images/global/icons/global/cardDetailes/carSlider1.svg`,
//       import.meta.url
//     ).href,
//   },
//   {
//     id: 1,
//     image_car: new URL(
//       `../../../../../assets/images/global/icons/global/cardDetailes/carSlider2.svg`,
//       import.meta.url
//     ).href,
//   },
//   {
//     id: 2,
//     image_car: new URL(
//       `../../../../../assets/images/global/icons/global/cardDetailes/carSlider3.svg`,
//       import.meta.url
//     ).href,
//   },
//   {
//     id: 3,
//     image_car: new URL(
//       `../../../../../assets/images/global/icons/global/cardDetailes/carSlider4.svg`,
//       import.meta.url
//     ).href,
//   },
//   {
//     id: 4,
//     image_car: new URL(
//       `../../../../../assets/images/global/icons/global/cardDetailes/carSlider5.svg`,
//       import.meta.url
//     ).href,
//   },
// ]);

//showImage
const showImage = (index) => {
  console.log(index);
  showImageSrc.value = props.Car.media[index];
  showNumberCar.value = index + 1;
};
const isShowDesc = ref(false);
const showDescription = () => {
  isShowDesc.value = !isShowDesc.value;
};
onMounted(() => {
  AOS.init();
});
watch(props, (newQuestion) => {
  showImageSrc.value = newQuestion.Car.media[0];
  lengthMediaCar = newQuestion.Car.media.length;
});
</script>
<template>
  <div class="Description" v-if="props.Car">
    <div class="ImageShow" v-if="showImageSrc">
      <img :src="showImageSrc.cover" />
    </div>
    <p class="showNumberCar text-end">
      <img
        src="../../../../../assets/images/global/icons/global/cardDetailes/images-icon.svg"
      />
      {{ showNumberCar }}/{{ lengthMediaCar }}
    </p>
    <ul class="ListCars" v-if="props.Car.media">
      <li class="" v-for="(item, index) in props.Car.media" :key="item.id">
        <img :src="item.cover" @click="showImage(index)" />
      </li>
    </ul>
    <h5>Description</h5>
    <p v-if="props.Car && props.Car.description">
      <span v-if="!isShowDesc">{{ props.Car.short_description }}</span>
      <span v-else v-html="props.Car.description"></span>
    </p>
    <a @click="showDescription()" class="color-main">{{ t("Show_more") }}</a>
    <h5>Features</h5>
    <ul
      class="Features"
      v-if="props.Car && props.Car.features && props.Car.features.length != 0"
    >
      <li v-for="feature in props.Car.features" :key="feature">
        <span></span>{{ i18n.locale.value == "en" ? feature.en : feature.ar }}
      </li>
    </ul>
    <div>
      <div
        class="Attachments"
        v-if="
          props.Car && props.Car.documents && props.Car.documents.length != 0
        "
      >
        <h5>Attachments</h5>
        <div v-for="document in props.Car.documents" :key="document">
          <a :href="document.original_url" class="color-main">
            <img
              src="@/assets/images/global/icons/global/cardDetailes/pdf.svg"
            /><span class="mx-2">{{ document.file_name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../../../assets/scss/variables";
.DetaliesCar {
  margin: 100px 0px;
  .ImageShow {
    width: 100%;
    height: 450px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .ListCars {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0px;
    list-style-type: none;
    li {
      cursor: pointer;
      padding: 10px;
      height: 200px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
  h5 {
    font-weight: bold;
    margin-top: 50px;
  }
  .Features {
    padding: 10px 0px 0px;
    li {
      display: inline-block;
      width: 33%;
      margin-bottom: 15px;
      span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: var(--orange-text-color);
        border-radius: 100%;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
  .Attachments {
    > div {
      margin-bottom: 15px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
  .DetaliesCar {
    .ImageShow {
      height: auto;
      margin-bottom: 30px;
    }
    .ListCars li {
      padding: 5px;
    }
    .Features li {
      width: 100%;
    }
  }
}

/*ar version */
.is-ar {
}
</style>
