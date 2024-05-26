<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import { defineProps } from "vue";

// props
let props = defineProps(["Bloges"]);

// data
let data = ref();
//page
let page = ref(1);

//blogs_list styling
let perPage = 10;

//data
// let data = ref([
//   {
//     id: 1,
//     date: "18 May 2022",
//     name: "Article name",
//     image: new URL(`./images/blog1.png`, import.meta.url).href,
//     paragraph: "Here it will include the data about this article",
//   },
//   {
//     id: 2,
//     date: "18 May 2022",
//     name: "Article name",
//     image: new URL(`./images/blog2.png`, import.meta.url).href,
//     paragraph: "Here it will include the data about this article",
//   },
//   {
//     id: 3,
//     date: "18 May 2022",
//     name: "Article name",
//     image: new URL(`./images/blog2.png`, import.meta.url).href,
//     paragraph: "Here it will include the data about this article",
//   },
//   {
//     id: 4,
//     date: "18 May 2022",
//     name: "Article name",
//     image: new URL(`./images/blog2.png`, import.meta.url).href,
//     paragraph: "Here it will include the data about this article",
//   },
// ]);

//paginatedData
let paginatedData = ref([]);

//nextPage
let nextPage = () => {
  if (page.value !== Math.ceil(data.value.length / perPage)) {
    page.value += 1;
  }
};

//backPage
let backPage = () => {
  if (page.value !== 1) {
    page.value -= 1;
  }
};

//goToPage
let goToPage = (numPage) => {
  console.log("numPage", numPage);
  page.value = numPage;
};

//onMounted
onMounted(() => {
  //AOS
  data.value = props.Bloges;
  AOS.init();
  console.log("props.Bloges =", data.value);
  //paginatedData
  paginatedData.value = data.value.slice(
    (page.value - 1) * perPage,
    page.value * perPage
  );
});

//watch page
watch(page, (newpage) => {
  paginatedData.value = data.value.slice(
    (newpage - 1) * perPage,
    newpage * perPage
  );
});
</script>
<template>
  <!--blogs_list-->

  <div class="Bloges_sec">
    <ul class="blogs_list row" v-if="props.Bloges.length != 0">
      <li
        v-for="item in paginatedData"
        :key="item.index"
        class="list col-lg-3 col-md-4"
      >
        <router-link :to="'/blog-detailes/' + item.slug">
          <!-- <img :src="item.image" /> -->
          <img :src="item.media.cover" />
          <div
            class="info"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
          >
            <!-- <span>{{ item.date }}</span> -->
            <h5>{{ item.title }}</h5>
            <p>{{ item.short_description.substr(0, 70) }}</p>
          </div></router-link
        >
      </li>
    </ul>

    <!--pagination-->

    <div class="pagination" v-if="paginatedData.length >= 10">
      <button
        @click="backPage"
        :class="page !== 1 ? 'show' : 'hidden'"
        class="button_backPage"
      >
        <img src="../../../assets/images/global/icons/global/arrow-left.svg" />
      </button>
      <button
        v-for="item in Math.ceil(data.length / perPage)"
        :key="item"
        @click="() => goToPage(item)"
        class="button_number_pages"
        :class="item == page ? 'active' : ''"
      >
        {{ item }}
      </button>
      <button @click="nextPage" class="button_nextPage">
        <img src="../../../assets/images/global/icons/global/arrow-right.svg" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
//blogs_list styling
.Bloges_sec {
  padding: 0px 50px;
  .blogs_list {
    margin: auto;
    margin-top: 150px;
    margin-bottom: 150px;
    padding: 0px;
    list-style-type: none;
    overflow: hidden;
    li {
      position: relative;
      padding: 5px;
      height: 400px;
      margin: 4px 0px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .info {
        position: absolute;
        padding: 15px;
        width: 97%;
        bottom: 5px;
        background: rgba(0, 0, 0, 0.312);
        height: 97%;
        /* padding-top: 10%; */
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: start;
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
  .pagination {
    margin-bottom: 150px;
    button {
      background: #ededed;
      color: black;
      border-radius: 8px;
      padding: 10px 16px;
      margin-right: 8px;
      border: 0px;
    }
    .active {
      background: #f4a71d;
      color: white;
    }
    .button_number_pages {
    }
    .button_backPage,
    .button_nextPage {
      background: white;
      padding: 0px;
      img {
        width: 20px;
      }
    }
  }
  .hidden {
    display: none;
  }
  .show {
    display: inline-block;
  }
  /****is-ar****/
  .is-ar {
    .pagination .button_backPage img,
    .pagination .button_nextPage img {
      transform: scaleX(-1);
    }
  }
}
</style>
