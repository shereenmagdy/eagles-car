<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { defineProps } from "vue";
import AOS from "aos";
const { t } = useI18n();
// props
let props = defineProps(["data"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="the_block">
    <div class="image_car" v-if="props.data.media.length > 0">
      <router-link :to="'/car-detalies/' + data.slug" type="submit" class="btn">
        <img :src="props.data.media[0].cover"
      /></router-link>
    </div>
    <div class="card">
      <router-link :to="'/car-detalies/' + data.slug" type="submit" class="btn">
        <div class="m-0 p-0">
          <div class="title">
            <h3>{{ props.data.title }}</h3>
            <div class="buttons">
              <!-- <div class="rating_number">
                <img
                  src="@/assets/images/global/icons/global/carRental/star.svg"
                />
                {{ props.data.per }}
              </div> -->
              <span class="available" v-if="data.available">
                {{ t("Available") }}
              </span>
            </div>
          </div>
          <p class="my-3">
            {{ data.short_description }}
          </p>
          <div class="row list">
            <div class="col-lg-4">
              <div class="content">
                <span>Power:</span>
                {{ data.power }}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="content">
                <span>Bag:</span>
                {{ data.bags }}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="content">
                <span>Seat:</span>
                {{ data.seats }}
              </div>
            </div>
          </div>
        </div></router-link
      >
      <hr />
      <div class="BookNow">
        <div>
          <h5>{{ data.price }} LE</h5>
          <span>
            (per <span v-if="data.per == 1">hour</span>
            <span v-else-if="data.per == 2">day</span>
            <span v-else-if="data.per == 3">week </span>
            <span v-else-if="data.per == 4">month</span>
            <span v-else-if="data.per == 5">year</span>)</span
          >
        </div>
        <SimpleButton type="send">
          <a href="https://wa.me/01032337327" target="_blank" class="btn p-2">
            {{ t("BookNow") }}
          </a></SimpleButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.the_block {
  .image_car a {
    margin: 0px;
    padding: 0px;
    display: block;
    height: 200px;
    img {
      width: 100%;
      margin: auto auto 20px;
      height: 100%;
    }
  }
  .card {
    border: 1px solid #e7e7e7 !important;
    border-top: 0px !important;
    margin-bottom: 30px;
    a {
      margin: 0px;
      padding: 20px 10px;
      display: block;
    }
    a:active {
      border: 0px;
    }
    a:focus {
      box-shadow: 0px 0px 0px;
    }
    .title {
      justify-content: space-between;
      align-items: center;
      display: flex;
      h3 {
        font-weight: 700;
        font-size: 20px;
      }
      .buttons {
        display: flex;
        align-items: center;
        .rating_number {
          background: black;
          color: white;
          border-radius: 8px;
          padding: 8px 0px;
          margin-right: 10px;
          width: 70px;
          text-align: center;
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .available {
          background: rgba(68, 195, 8, 1);
          color: white;
          border-radius: 8px;
          padding: 9px;
        }
        a {
          height: 44px;
          padding: 10px 10px;
          background: #44c308;
          border-radius: 8px;
          color: white;
          display: block;
          cursor: pointer !important;
        }
      }
    }
    p {
      color: #818181;
      text-align: left;
    }
    .list {
      margin: auto;
      border-radius: 4px;
      > div {
        text-align: center;
        padding: 0px;
        padding-right: 10px;
        .content {
          background: #fbfbfb;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
      > div:last-child {
        padding-right: 0px;
      }
    }
    .BookNow {
      align-items: center;
      justify-content: space-between;
      margin: 20px 0px;
      padding: 0px 20px;
      display: flex;
      h5 {
        display: inline-block;
        font-size: 18px;
      }
      span {
        font-size: 15px;
      }
      button {
        height: 50px;
      }
      a {
        color: white;
      }
      a:focus {
        box-shadow: none;
      }
    }
    hr {
      border: 1px solid;
      height: 0px;
      margin: 0px;
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
}

/*ar version */
.is-ar {
  .the_block .card .title .buttons .rating_number {
    margin-right: 0px;
    margin-left: 10px;
  }
  .the_block .card .list > div {
    padding-right: 0px;
    padding-left: 10px;
  }
  .the_block .card .list > div:last-child {
    padding-right: 0px;
    padding-left: 0px;
  }
  .the_block .card p {
    text-align: right;
  }
}
</style>
