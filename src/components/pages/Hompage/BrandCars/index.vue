<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import AOS from "aos";
import { defineProps } from "vue";
const { t } = useI18n();
// props
let props = defineProps(["Brands"]);

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="BrandCars">
    <div class="container">
      <div class="row text-center">
        <h3>{{ t("byBrand") }}</h3>
        <ul class="listBrand" v-if="props.Brands != 0">
          <li v-for="brand in props.Brands" :key="brand.id">
            <router-link :to="'/favourit-car/' + brand.slug">
              <img :src="brand.media.cover" v-if="brand.media"
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.BrandCars {
  margin: 150px 0px;
  .row {
    overflow-x: hidden;
    margin: 0px !important;
    h3 {
      font-weight: 700;
      padding: 0px;
      margin-bottom: 50px;
    }
  }
  .listBrand {
    list-style-type: none;
    padding: 0px;
    width: 100%;
    justify-content: start;
    align-items: center;
    margin: auto;

    li {
      width: 11.5%;
      height: 137.5px;
      --widgets-spacing: 20px 20px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: rgba(255, 35, 35, 0.0588235294);
      border-radius: 10px 10px 10px 10px;
      box-shadow: 6px 7px 10px 0px rgba(43, 43, 43, 0.04);
      display: inline-block;
      margin-left: 12px;
      margin-bottom: 29px;
      img {
        width: 90%;
        height: 90%;
      }
      &:hover {
        transform: scale(0.9);
      }
    }
  }
}
/****media****/
// .Blogs {
//   margin-top: 150px;
//   margin-bottom: 150px;
//   .container {
//     max-width: 95%;
//     .row {
//       overflow-x: hidden;
//       margin: 0px !important;
//       h3 {
//         font-weight: 700;
//         padding: 0px;
//         margin-bottom: 50px;
//       }

//       .blogs_list,
//       .swiper {
//         padding: 0px;
//         margin: 0px;
//         list-style-type: none;
//         overflow: hidden;

//         li,
//         .swiper-slide {
//           position: relative;
//           padding: 5px;
//           height: 400px;
//           margin: 4px 0px;
//           // margin-right: 42px !important;
//           img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }
//           .info {
//             position: absolute;
//             bottom: 0px;
//             padding: 15px;
//             span {
//               color: #d8d8d8;
//               font-size: 14px;
//             }
//             p {
//               color: #d8d8d8;
//               font-size: 14px;
//             }
//             h5 {
//               color: white;
//               margin: 10px 0px;
//             }
//           }
//         }
//       }
//     }
//   }
// }
/*media" */
@media screen and (min-width: 1240px) {
  .Blogs {
    .container {
      max-width: 95%;
      margin-left: auto;
      margin-right: -30px;
    }
  }
  /*ar version */
  .is-ar {
    .Blogs {
      .container {
        margin-left: -30px;
        margin-right: auto;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .Blogs {
    text-align: center;
    .container {
      padding: 20px;
      ul li {
        img {
          height: auto;
        }
      }
      .row .blogs_list li .info {
        width: 100%;
      }
    }
  }
  .BrandCars .listBrand li[data-v-96097d3b] {
    width: 42%;
    margin: 2%;
    padding: 25px;
  }
}

/*ar version */
.is-ar {
  .Blogs .container .row .blogs_list li {
    padding-right: 5px;
    padding-left: 0px;
  }
  .Blogs .container .row .blogs_list {
    margin-right: -10px !important;
  }
}
</style>
<style>
.Blogs .swiper .swiper-wrapper {
  padding: 0px !important;
  margin: 0px !important;
}
</style>
