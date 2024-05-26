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
let props = defineProps(["Mostpopular"]);
const swiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="Blogs">
    <div class="container">
      <div class="row">
        <h6 class="color-main p-0">{{ t("New_information") }}</h6>
        <h3>{{ t("most_popular") }}</h3>
        <swiper
          :slides-per-view="4"
          :space-between="0"
          :breakpoints="swiperOptions.breakpoints"
          class="blogs_list row"
          v-if="props.Mostpopular.length != 0"
        >
          <swiper-slide v-for="list in props.Mostpopular" :key="list.id">
            <router-link :to="'/car-detalies/' + list.slug">
              <img :src="list.media[0].cover" v-if="list.media.length" />
              <div class="info">
                <!-- <span>{{ list.date }}</span> -->
                <h5>{{ list.title }}</h5>
                <p>{{ list.short_description.substr(0, 70) }}</p>
              </div></router-link
            ></swiper-slide
          >
          ...
        </swiper>
        <!-- <ul class="blogs_list row">
          <li
            class="col-lg-3 col-md-6"
            v-for="list in props.Bloges"
            :key="list.id"
          >
            <router-link :to="'/blog-detailes/' + list.slug">
              <img :src="list.media.cover" />
              <div
                class="info"
                data-aos="zoom-in-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-out"
              >
                <h5>{{ list.title }}</h5>
                <p>{{ list.short_description.substr(0, 70) }}</p>
              </div></router-link
            >
          </li>
        </ul> -->
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
/****media****/
.Blogs {
  margin-top: 150px;
  margin-bottom: 150px;
  .container {
    max-width: 95%;
    .row {
      overflow-x: hidden;
      margin: 0px !important;
      h3 {
        font-weight: 700;
        padding: 0px;
        margin-bottom: 50px;
      }

      .blogs_list,
      .swiper {
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        overflow: hidden;

        li,
        .swiper-slide {
          position: relative;
          padding: 5px;
          height: 400px;
          margin: 4px 0px;
          // margin-right: 42px !important;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .info {
            position: absolute;
            bottom: 0px;
            padding: 15px;
            span {
              color: #d8d8d8;
              font-size: 14px;
            }
            p {
              color: #d8d8d8;
              font-size: 14px;
            }
            h5 {
              color: white;
              margin: 10px 0px;
            }
          }
        }
      }
    }
  }
}
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
