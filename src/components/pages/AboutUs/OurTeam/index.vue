<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref, defineProps } from "vue";
import AOS from "aos";
const { t } = useI18n();
const i18n = useI18n();
const props = defineProps(["team"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <section class="OurTeam">
    <div class="container">
      <div class="info">
        <h6 class="color-main">{{ t("More_info") }}</h6>
        <h2>{{ t("Our_Team") }}</h2>
        <ul class="list">
          <li v-for="person in props.team" :key="person.id">
            <img :src="person.image.cover" />
            <div
              class="info_par"
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              <h5>
                {{
                  i18n.locale.value == "en" ? person.name.en : person.name.ar
                }}
              </h5>
              <p>{{ person.title.en }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.OurTeam {
  text-align: center;
  margin-top: 50px;
  height: auto;
  .list {
    height: auto;
    overflow-y: hidden;
    padding-bottom: 50px;
    padding-top: 20px;
    list-style-type: none;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    li {
      width: 33%;
      text-align: center;
      position: relative;
      img {
        width: 90%;
        height: 90%;
      }
      .info_par {
        text-align: left;
        position: absolute;
        bottom: 20px;
        color: white;
        left: 50px;
        p {
          color: #d1d1d1;
        }
      }
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
  .OurTeam {
    .list {
      flex-direction: column;
      li {
        margin-bottom: 20px;
      }
    }
  }
}

/*ar version */
.is-ar {
  .OurTeam .list li .info_par {
    text-align: right;
    right: 50px;
    left: auto;
  }
}
</style>
