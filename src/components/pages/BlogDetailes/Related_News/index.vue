<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";
import { defineProps } from "vue";

// props
let props = defineProps(["Bloges"]);

// data
let bloges = ref();

//i18n
const { t } = useI18n();
//onMounted
onMounted(() => {
  //AOS
  bloges.value = props.Bloges;
  AOS.init();
});
</script>
<template>
  <!--Related_News-->
  <div class="lines_title">
    <div class="line"></div>
    <h4>{{ t("Related_News") }}</h4>
    <div class="line"></div>
  </div>
  <div v-if="props.Bloges">
    <div
      class="card"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-out"
      v-for="blog in bloges"
      :key="blog.id"
    >
      <div class="row">
        <div class="col-lg-5">
          <img :src="blog.cover" name="file_name" />
        </div>
        <div class="col-lg-7">
          <div class="content">
            <h6>{{ blog.title }}</h6>
            <span>13 - 9 - 2000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-if="!props.Bloges"></Loading>
  <div class="lines_title mt-5">
    <div class="line"></div>
    <h4>{{ t("Popular_News") }}</h4>
    <div class="line"></div>
  </div>
  <div v-if="props.Bloges">
    <div
      class="card"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-out"
      v-for="blog in bloges"
      :key="blog.id"
    >
      <div class="row">
        <div class="col-lg-5">
          <img :src="blog.cover" name="file_name" />
        </div>
        <div class="col-lg-7">
          <div class="content">
            <h6>{{ blog.title }}</h6>
            <span>13 - 9 - 2000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-if="!props.Bloges"></Loading>
</template>
<style scoped lang="scss">
@import "../../../../assets/scss/variables";
.MostFaster {
  overflow-y: hidden;
  margin: 150px 0px;
  .row {
    overflow-y: hidden;
  }
  .date {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    span {
      margin: 0px 10px;
    }
  }
  .image img {
    width: 100%;
    margin: 20px 0px 50px;
  }
  .para {
    margin-bottom: 50px;
  }
  h2 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .social_media {
    padding: 0px;
    display: flex;
    justify-content: end;
    align-items: center;
    list-style-type: none;
    margin: 0px 20px;
    img {
      width: 50px;
      height: 45px;
      background: #f8f8f8;
      margin-left: 15px;
      padding: 10px;
      border-radius: 8px;
    }
  }
  .lines_title {
    margin: auto;
    width: max-content;
    margin: 20px auto;
    align-items: center;
    color: var(--orange-text-color);
    display: flex;
    .line {
      background: var(--orange-text-color);
      width: 50px;
      height: 2px;
      margin: 0px 10px;
    }
    h4 {
      margin-bottom: 0px;
      font-size: 20px;
    }
  }
  .card {
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0px 4px 50px 0px #0000000d;

    img {
      width: 100%;
    }
    .content {
      span {
        color: #777777;
        font-size: 15px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .MostFaster {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
    aside {
      margin-top: 100px;
      img {
        width: 90%;
        margin-bottom: 20px;
      }
      .content {
        text-align: center;
      }
    }
  }
}

/****is-ar****/
.is-ar {
  .MostFaster {
  }
}
</style>
