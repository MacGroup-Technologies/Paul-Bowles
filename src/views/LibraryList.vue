<script lang="ts" setup>
import { reactive, onMounted, onUpdated } from 'vue';
import { useHead } from '@unhead/vue'
import { useThemeStore } from '@/stores/theme';
import { fetchLibrary } from '@/services/library';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import TranslationModal from '@/components/TranslationModal.vue';

useHead({ title: `Paul Bowles's Library` })

const route = useRoute();

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
function getNextPage() {
  return PAGE_URL + `?page=${Number(route.query.page || 1) + 1}`;
}
function getPreviousPage() {
  return PAGE_URL + `?page=${Number(route.query.page) - 1 || 1}`;
}


function fetchPageData() {
  setLoading(true);
  fetchLibrary(Number(route.query.page) || 1).then(response => {
    library.items = response.data.results;
    pagination.next = response.data.next;
    pagination.previous = response.data.previous;
    setLoading(false);
  });
}

onBeforeRouteUpdate((to, from) => {
  if (to !== from) {
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
    <div class="py-10 lg:px-16 2xl:px-20">
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

