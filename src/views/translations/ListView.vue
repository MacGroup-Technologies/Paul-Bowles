<script lang="ts" setup>
import { getTranslations } from '@/services/translations';
import { onMounted, reactive, ref, computed } from 'vue';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { useThemeStore } from '@/stores/theme';
import { useUserStore } from '@/stores/user';

import { useHead } from '@unhead/vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';

useHead({ title: `Paul Bowles's Library` })

const route = useRoute();
const router = useRouter();

let pagination = reactive({
  next: null,
  previous: null,
  page: null
});

const translations = reactive({ items: [] as any });

const formRef = ref(null);

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const PAGE_URL = window.location.pathname;

function getNextPage() {
  const url = new URL(PAGE_URL)
  "page, query, language".split(", ").forEach(filter => {
    if (filter === "page") {
      url.searchParams.set(filter, String(Number(route.query.page || 1) + 1))
    }
    else {
      if (route.query[filter]) {
        // @ts-ignore
        url.searchParams.set(filter, route.query[filter])
      }
    }
  })
  return url.toString();
}

function getPreviousPage() {
  const url = new URL(PAGE_URL)
  "page, query, language".split(", ").forEach(filter => {
    if (route.query[filter]) {
      if (filter === "page") {
        Number(route.query.page) - 1
      }
      else {
        // @ts-ignore
        url.searchParams.set(filter, route.query[filter])
      }
    }
  })
  return url.toString();
}

const filterLanguage = computed({
  get() {
    return useUserStore().filterLanguage
  },
  set(newValue) {
    useUserStore().setFilterLanguage(newValue);
  }
})

const filter = reactive({
  keyword: route.query.query || '',
  language: useUserStore().filterLanguage,
  page: Number(route.query.page) || 1,
});

const filterPageData = async function () {
  const _route = { path: PAGE_URL, query: { query: filter.keyword, language: filterLanguage.value } }
  if (filter.keyword || filterLanguage) {
    router.push(_route);
  }
}

function clearFilters() {
  router.push({ path: PAGE_URL, query: { query: '', language: "" } });
}

function fetchPageData() {
  setLoading(true);
  getTranslations(filter.page, filter.keyword as any, filterLanguage.value as any).then((response: any) => {
    translations.items = response.data.results
    pagination.next = response.data.next;
    pagination.previous = response.data.previous;
    setLoading(false);
  });
}

onBeforeRouteUpdate((to, from) => {
  if (to !== from) {
    filter.keyword = to.query.query || '';
    filterLanguage.value = to.query.language || '' as any;
    filter.page = Number(to.query.page) || 1;
    fetchPageData()
  }
})

onMounted(async () => {
  setLoading(true);
  try {
    fetchPageData();
  } catch (error: any) {
    console.log(error);
    setError(error);
  }
});

</script>

<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl md:text-6xl font-heading uppercase">translations</h1>
        <router-link to="/translation"
          class="hover:opacity-75 scale-50 md:scale-100 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
    </div>
    <div class="mx-5 mb-10 lg:mx-16 2xl:mx-20 p-10 rounded-xl text-xl bg-white z-10 sticky top-20">
      <el-form :model="filter" ref="formRef" @submit.prevent="filterPageData()">
        <div class="flex flex-col md:flex-row gap-5">
          <el-input v-model="filter.keyword" class="md:w-2/3" size="large" placeholder="Author, Title, or Keyword" />
          <div class="">
            <el-radio-group class="md:w-full" v-model="filterLanguage" size="large">
              <el-radio border value="" label="All Languages" />
              <el-radio border value="From Moghrebi" label="From Moghrebi" />
              <el-radio border value="From Spanish" label="From Spanish" />
              <el-radio border value="From French" label="From French" />
            </el-radio-group>
          </div>
          <el-button class="md:w-auto bg-primary" type="primary" size="large" @click="filterPageData()">Search</el-button>
          <el-button v-if="route.query.query" type="primary" size="large" class="bg-primary" @click="clearFilters">
            Clear filters
          </el-button>
        </div>
      </el-form>
    </div>
    <div class="py-10 lg:px-16 2xl:px-20">
      <div class="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-4 w-full">
        <router-link :to="`/translation/${item.id}`" class="w-full flex flex-col" v-for="item in translations.items"
          :key="item.id">
          <div v-if="item.image_urls === ''"
            class="flex-1 flex items-center justify-center w-2/3 md:w-3/4 max-h-[200px] h-full rounded-[22px] fancy-img my-0 mx-5 md:mx-auto cursor-pointer">
            <img src="@/assets/imgs/translations-thumbnail.png" class="max-h-[200px]" />
          </div>
          <div v-else class="flex flex-col flex-1  justify-center ">
            <div class=" flex-1 flex items-center mx-auto justify-center relative overflow-hidden w-[210px] rounded-3xl">
              <img :src="item.image_urls.split(',')[0]"
                class="absolute inset-0 object-center h-full blur-sm scale-[200%]  object-cover" />
              <img :src="item.image_urls.split(',')[0]" class="relative max-h-[200px] m-1 " />
            </div>
          </div>
          <div class="px-5 md:px-0 mt-5 text-center">
            <h2 class="font-semibold">{{ item.title }}</h2>
            <p class="mt-2">
              {{ item.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="my-24 mx-auto md:w-64 flex justify-center">
      <el-button-group>
        <router-link v-if="pagination.previous" :to="getPreviousPage()"
          class="el-button--primary el-button--large el-button">
          <el-icon class="el-icon--left">
            <ArrowLeft />
          </el-icon>
          Prev
        </router-link>
        <p v-else class="is-disabled el-button--primary el-button--large el-button">
          <el-icon class="el-icon--left">
            <ArrowLeft />
          </el-icon>
          Prev
        </p>

        <router-link v-if="pagination.next" :to="getNextPage()" class="el-button--primary el-button--large el-button">
          Next
          <el-icon class="el-icon--right">
            <ArrowRight />
          </el-icon>
        </router-link>
        <p v-else class="is-disabled el-button--primary el-button--large el-button">
          Next
          <el-icon class="el-icon--right">
            <ArrowRight />
          </el-icon>
        </p>
      </el-button-group>
    </div>
  </div>
</template>

<style scoped>
.el-radio-group {
  display: flex!important;
  flex-wrap: nowrap!important;
  overflow-x: auto;
  gap: 15px!important;
}

.el-radio {
  margin-right: 0!important;
}
</style>
