<script lang="ts" setup>
import { reactive, onMounted, onUpdated } from 'vue';
import { useHead } from '@unhead/vue'
import { useThemeStore } from '@/stores/theme';
import { fetchLibrary } from '@/services/library';
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';

import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import TranslationModal from '@/components/TranslationModal.vue';

useHead({ title: `Paul Bowles's Library` })

const route = useRoute();
const router = useRouter();

const modal = reactive({ opened: false, data: {} });
const library = reactive({ items: [] as any });
const pagination = reactive({
  next: null,
  previous: null,
  page: null,
});


const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const openModal = async function (item: any) {
  modal.opened = true;
  modal.data = item;
}

const PAGE_URL = window.location.pathname;
const PAGE_QUERY = route.query.query;

function getNextPage() {
  return PAGE_URL + `?page=${Number(route.query.page || 1) + 1}&query=${route.query.query || ''}`;
}

function getPreviousPage() {
  return PAGE_URL + `?page=${Number(route.query.page) - 1 || 1}&query=${route.query.query || ''}`;
}

const filter = reactive({
  keyword: route.query.query || '',
  page: Number(route.query.page) || 1,
});

const filterLibrary = async function () {
  const _route = { path: PAGE_URL, query: { query: filter.keyword } }
  if (filter.keyword) {
    router.push(_route);
  }
}

function clearFilters() {
  router.push({ path: PAGE_URL, query: { query: '' } });
}

function fetchPageData() {
  setLoading(true);
  fetchLibrary(filter.page, filter.keyword as string).then((response: any) => {
    library.items = response.data.results;
    pagination.next = response.data.next;
    pagination.previous = response.data.previous;
    setLoading(false);
  });
}

onBeforeRouteUpdate((to, from) => {
  if (to !== from) {
    filter.keyword = to.query.query || '';
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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">library</h1>
        <router-link to="/library" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
    </div>
    <div class="mx-5 mb-10 lg:mx-16 2xl:mx-20 p-10 rounded-xl text-xl bg-white z-10 sticky top-20">
      <el-form :model="filter" ref="formRef" @submit.prevent="filterLibrary()">
        <div class="flex flex-col md:flex-row gap-5">
          <el-input v-model="filter.keyword" class="md:w-2/3" size="large"
            placeholder="Author, Title, Genre, Language, Year of Publication, or Keyword" />
          <el-button v-if="!route.query.query || route.query.query !== filter.keyword" class="md:w-auto bg-primary"
            type="primary" size="large" @click="() => filterLibrary()">Search</el-button>
          <el-button v-if="route.query.query" type="primary" size="large" class="bg-primary" @click="clearFilters">
            Clear filters
          </el-button>
        </div>
      </el-form>
    </div>
    <div class="py-10 lg:px-16 2xl:px-20">
      <template v-if="library.items.length === 0">
        <div class="space-y-2 text-center">
          <p>No item to display</p>
          <div v-if="filter.keyword" class="space-y-2 text-sm">
            <p>try clearing your filter to get more results</p>
            <el-button type="primary" size="large" class="bg-primary" @click="clearFilters">
              Clear filters
            </el-button>
          </div>
        </div>
      </template>
      <div class="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-4 w-full">
        <div class="w-full flex flex-col px-10 md:px-0" v-for="item in library.items" :key="item.id">
          <img v-if="item.image_urls === ''" src="@/assets/imgs/library-thumbnail.png"
            class="w-full h-auto md:w-3/4 md:h-64 rounded-[22px] fancy-img my-0 md:mx-auto cursor-pointer"
            @click="openModal(item)" />
          <div v-else class="flex flex-col flex-1 max-h-[256px] justify-center cursor-pointer" @click="openModal(item)">
            <div class=" flex-1 flex items-center mx-auto justify-center relative overflow-hidden w-[210px] rounded-3xl">
              <img :src="item.image_urls.split('|')[0]"
                class="absolute inset-0 object-center h-full blur-sm scale-[200%]  object-cover" />
              <img :src="item.image_urls.split('|')[0]" class="relative max-h-[200px] m-1 " />
            </div>
          </div>
          <div class="px-5 md:px-0 mt-5 text-center">
            <h2 class="font-semibold">{{ item.title }}</h2>
            <p class="mt-2">
              {{ item.author }}
            </p>
          </div>
        </div>
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
    <translation-modal v-if="modal.opened" :item="modal.data" @close="modal.opened = false" />
  </div>
</template>

