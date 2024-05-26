<script setup>
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { ref, defineProps } from "vue";
import { useI18n } from "vue-i18n";

//i18n
const { t } = useI18n();
const props = defineProps(["Cars"]);
//i18n
</script>
<template>
  <div class="AllRequests">
    <div>
      <ul>
        <li v-for="item in props.Cars" :key="item.id">
          <div class="box">
            <div class="img_div" v-if="item.media.length > 0">
              <img :src="item.media[0].cover" />
            </div>
            <div class="content">
              <div class="title">
                <h3>
                  {{ item.title }}
                </h3>
                <span v-if="item.status == 0" class="Pending"> Pending</span>
                <span v-else-if="item.status == 1" class="accepted">
                  Accepted</span
                >
                <span v-else class="Refused"> Refused</span>
              </div>
              <p v-html="item.short_description"></p>
              <hr />
              <div class="end">
                <span
                  ><strong>{{ item.price }} LE</strong>
                  <span>
                    (per <span v-if="item.per == 1">hour</span>
                    <span v-else-if="item.per == 2">day</span>
                    <span v-else-if="item.per == 3">week </span>
                    <span v-else-if="item.per == 4">month</span>
                    <span v-else-if="item.per == 5">year</span>)
                  </span></span
                >
                <div class="buttons">
                  <SimpleButton type="send">
                    <router-link
                      class="btn"
                      @click="AddCar = true"
                      :to="'/car-detalies/' + item.slug"
                    >
                      {{ t("View") }}
                    </router-link></SimpleButton
                  >
                  <!-- <SimpleButton type="send">
                    <button class="btn" @click="AddCar = true">
                      {{ t("view") }}
                    </button></SimpleButton
                  > -->
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../stylingProfile.scss";
.AllRequests {
  padding-bottom: 100px;
  .simple-button.send button,
  .simple-button.send .btn {
    padding: 15px 30px;
    width: max-content !important;
    height: max-content !important;
    border-radius: 8px;
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
}
//.is-ar
.is-ar {
  .box .content {
    margin-right: 50px;
    text-align: right;
  }
}
</style>
