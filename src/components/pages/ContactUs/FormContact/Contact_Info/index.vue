<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, defineProps } from "vue";
import AOS from "aos";
const { t } = useI18n();
const i18n = useI18n();
// props
let props = defineProps(["ContactInformation", "socialMedia"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="Contact_Info">
    <h3>{{ t("Contact_Info") }}</h3>
    <ul class="list_contact" v-if="props.ContactInformation">
      <li v-for="info in props.ContactInformation" :key="info.id">
        <img :src="info.image.cover" />
        {{ i18n.locale.value == "en" ? info.title.en : info.title.ar }}
      </li>
      <!-- <li>
        <a
          :href="'https://wa.me/' + props.ContactInformation[1].link"
          target="_blank"
        >
          <img
            src="@//assets/images/global/icons/global/contactUs/mobile.svg"
          />
          {{
            i18n.locale.value == "en"
              ? props.ContactInformation[1].title.en
              : props.ContactInformation[1].title.ar
          }}
        </a>
      </li>
      <li>
        <a
          target="_blank"
          :href="'https://' + props.ContactInformation[0].link"
        >
          <img src="@//assets/images/global/icons/global/contactUs/sms.svg" />
          {{
            i18n.locale.value == "en"
              ? props.ContactInformation[0].title.en
              : props.ContactInformation[0].title.ar
          }}
        </a>
      </li> -->
    </ul>
    <h6>{{ t("Social_media_contacts") }}</h6>
    <ul class="Social_media_contacts" v-if="props.socialMedia">
      <li v-for="soical in props.socialMedia" :key="soical.id">
        <a :href="'https://' + soical.link" target="_blank">
          <img :src="soical.image.cover"
        /></a>
      </li>
      <!-- <li>
        <a :href="'https://' + props.socialMedia[1].link" target="_blank">
          <img src="@//assets/images/global/icons/global/contactUs/twitter.svg"
        /></a>
      </li>
      <li>
        <a :href="'https://' + props.socialMedia[2].link" target="_blank">
          <img
            src="@//assets/images/global/icons/global/contactUs/instagram.svg"
        /></a>
      </li>
      <li>
        <a :href="'https://' + props.socialMedia[3].link" target="_blank">
          <img src="@//assets/images/global/icons/global/contactUs/youtube.svg"
        /></a>
      </li> -->
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.Contact_Info {
  h3,
  h6 {
    font-weight: 700;
  }
  ul {
    list-style-type: none;
    padding: 0px;
  }
  .list_contact {
    display: block;
    margin: 20px 0px;
    li {
      margin-bottom: 20px;
      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
    }
  }
  .Social_media_contacts {
    margin-top: 20px;
    li {
      display: inline-block;
      border: 1px solid #e7e7e7;
      background: #fcfdff;
      border-radius: 100%;
      padding: 10px;
      margin-right: 20px;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
/****media****/

@media screen and (max-width: 1240px) {
}
@media screen and (max-width: 1210px) {
}
@media screen and (max-width: 992px) {
}

/*ar version */
.is-ar {
  .Contact_Info {
    .list_contact {
      li {
        a {
          img {
            margin-right: 0px;
            margin-left: 10px;
          }
        }
      }
    }
    .Social_media_contacts {
      li {
        margin-left: 20px;
        margin-right: 0px;
      }
    }
  }
}
</style>
