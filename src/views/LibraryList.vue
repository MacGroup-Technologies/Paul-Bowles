<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import { useHead } from '@unhead/vue'
import { useThemeStore } from '@/stores/theme';
import { fetchLibrary } from '@/services/library';
import { getUrl } from '@/services/misc';

import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import TranslationModal from '@/components/TranslationModal.vue';

useHead({ title: `Paul Bowles' Library` })

const modal = reactive({ opened: false, data: {} });
const library = reactive({ items: [] as any });
const pagination = reactive({
  next: null,
  previous: null,
  page: null,
});

const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function(val: string) {
  useThemeStore().updateError(val)
}

const getStepUrl = async function(url: any) {
  setLoading(true);
  try {
    const response = await getUrl(url)
    pagination.next = response.data.next
    pagination.previous = response.data.previous
    library.items = response.data.results
    setLoading(false);
    window. scrollTo({ top: 0, behavior: "smooth" });
  } catch (error: any) {
    console.log(error);
    setError(error);
  }
}

const openModal = async function (item: any) {
  modal.opened = true;
  modal.data = item;
}

const fetchLibraryData = async function () {
  setLoading(true);
  try {
    const response = await fetchLibrary();
    library.items = response.data.results;
    pagination.next = response.data.next;
    pagination.previous = response.data.previous;
    setLoading(false);
  } catch (error: any) {
    console.log(error);
    setError(error);
  }
};

onMounted(async () => {
  await fetchLibraryData();
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
    <div
      class="py-10 lg:px-16 2xl:px-20"
    >
      <div class="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-4 w-full">
        <div class="w-full flex flex-col" v-for="item in library.items" :key="item.id">
          <img
            v-if="item.image_urls === ''"
            src="@/assets/imgs/Image-thumbnail.png"
            class="w-1/2 md:w-3/4 h-64 rounded-[22px] fancy-img my-0 mx-5 md:mx-auto cursor-pointer"
            @click="openModal(item)"
          />
          <img
            v-else
            :src="item.image_urls.split('|')[0]"
            class="w-1/2 md:w-3/4 h-64 rounded-[22px] fancy-img my-0 mx-5 md:mx-auto cursor-pointer"
            @click="openModal(item)"
          />
          <div class="px-5 md:px-0 mt-5">
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
        <el-button
          type="primary"
          size="large"
          class="bg-primary"
          :icon="ArrowLeft"
          :disabled="pagination.previous === null"
          @click="getStepUrl(pagination.previous)"
        >
          Prev
        </el-button>
        <el-button
          type="primary"
          size="large"
          class="bg-primary"
          :disabled="pagination.next === null"
          @click="getStepUrl(pagination.next)"
        >
          Next
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </el-button-group>
    </div>
    <translation-modal v-if="modal.opened" :item="modal.data" @close="modal.opened = false" />
  </div>
</template>