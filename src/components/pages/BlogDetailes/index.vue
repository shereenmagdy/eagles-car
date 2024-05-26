<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import { useI18n } from "vue-i18n";
import { defineProps } from "vue";
import Related_News from "./Related_News/index.vue";

// props
let props = defineProps(["Blog", "Bloges"]);

// data
let data = ref();

//i18n
const { t } = useI18n();
//onMounted
onMounted(() => {
  //AOS
  data.value = props.Bloges;
  AOS.init();
});
</script>
<template>
  <!--MostFaster-->
  <div class="MostFaster">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="date">
            <img src="../../../assets/images/global/icons/global/date.svg" />
            <span> {{ Blog.created_at }}</span>
          </div>
          <div class="image">
            <img
              v-if="Blog.media.length != 0"
              :src="Blog.media[0].cover"
              :name="Blog.media[0].file_name"
              :alt="Blog.media[0].file_name"
            />
          </div>
          <div class="para m">
            {{ Blog.description }}
          </div>
          <!-- <h2>{{ t("egypt_Free") }}</h2>
          <div class="para">
            <p>
              For many first-time travellers to India, one of the greatest
              pleasures is discovering its amazing street food. Surprisingly,
              there’s infinitely more to subcontinental cuisine than the rather
              bland offerings of tikka masala and chicken korma. Street food,
              whether sweet or savoury, fiery or mild another content in this
              place
            </p>
          </div>
          <div class="para">
            <p>
              For many first-time travellers to India, one of the greatest
              pleasures is discovering its amazing street food. Surprisingly,
              there’s infinitely more to subcontinental cuisine than the rather
              bland offerings of tikka masala and chicken korma. Street food,
              whether sweet or savoury, fiery or mild, is eaten by all and it’s
              not unknown for there is lively debate amongst friends and family
              about which is the best. As well as giving your stomach a treat,
              trying street food helps support hard-working vendors, many of
              whom have been plying their trade with great skill for many years.
              So here’s our guide to the best street food of northern India –
              try each one with a steaming cup of the nation’s rocket-fuel,
              masala chai.
            </p>
          </div> -->
          <ul class="social_media">
            <li>
              <ShareNetwork
                network="facebook"
                :url="
                  'https://eagles-car.com/blog-detailes/' + $route.params.slug
                "
                :title="$route.params.slug + 'Detailes'"
                description="this is blog-detaile "
                quote="The hot reload is so fast it\'s near instant. - Evan You"
              >
                <img
                  src="../../../assets/images/global/icons/global/MostFaster/facebook.svg"
                />
              </ShareNetwork>
            </li>
            <li>
              <ShareNetwork
                network="twitter"
                :url="
                  'https://eagles-car.com/blog-detailes/' + $route.params.slug
                "
                :title="$route.params.slug + 'Detailes'"
                description="this is blog-detaile "
                quote="The hot reload is so fast it\'s near instant. - Evan You"
              >
                <img
                  src="../../../assets/images/global/icons/global/MostFaster/twitter.svg"
                />
              </ShareNetwork>
            </li>
            <li>
              <ShareNetwork
                network="WhatsApp"
                :url="
                  'https://eagles-car.com/blog-detailes/' + $route.params.slug
                "
                :title="$route.params.slug + 'Detailes'"
                description="this is blog-detaile "
                quote="The hot reload is so fast it\'s near instant. - Evan You"
              >
                <img
                  src="../../../assets/images/global/icons/global/MostFaster/whatsapp.svg"
                />
              </ShareNetwork>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <aside>
            <Related_News :Bloges="props.Bloges" />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../../assets/scss/variables";
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
