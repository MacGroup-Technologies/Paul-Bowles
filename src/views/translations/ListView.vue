<script lang="ts" setup>
import { getTranslations } from '@/services/translations';
import { onMounted, reactive } from 'vue';
import TranslationModal from '@/components/TranslationModal.vue';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { useThemeStore } from '@/stores/theme';
import { getUrl } from '@/services/misc';

import { useHead } from '@unhead/vue'
useHead({ title: `Paul Bowles' Library` })


let pagination = reactive({
  next: null,
  previous: null,
  page: null
});
const translations = reactive({ items: [] });
const modal = reactive({ opened: false, data: {} })

const getStepUrl = async function(url: string) {
  setLoading(true);
  try {
    const response = await getUrl(url)
    pagination.next = response.data.next
    pagination.previous = response.data.previous
    translations.items = response.data.results
    setLoading(false);
  } catch (error) {
    console.log(error);
    setError(error);
  }
}

const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function(val: string) {
  useThemeStore().updateError(val)
}

const openModal = function(item:Object) {
  modal.opened = true;
  modal.data = item;
}

const fetchTranslations = async function() {
  try {
    const response = await getTranslations();
    pagination.next = response.data.next
    pagination.previous = response.data.previous
    translations.items = response.data.results
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  await fetchTranslations();
})

</script>

<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">translations</h1>
        <router-link to="/translation" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
    </div>
    <div
      class="py-10 lg:px-16 2xl:px-20"
    >
      <div class="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-4 w-full">
        <div class="w-full flex flex-col" v-for="item in translations.items" :key="item.id">
          <img
            :src="'https://res.cloudinary.com/dbrvleydy/' + item.cover_image"
            class="w-1/2 md:w-3/4 h-64 rounded-[22px] fancy-img my-0 mx-5 md:mx-auto cursor-pointer"
            @click="openModal(item)"
          />
          <div class="px-5 md:px-0 mt-5">
            <h2 class="font-semibold">{{ item.title }}</h2>
            <p class="mt-2">
              {{ item.description }}
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
          :icon="ArrowLeft"
          :disabled="pagination.previous === null"
          @click="getStepUrl(pagination.previous)"
        >
          Prev
        </el-button>
        <el-button
          type="primary"
          size="large"
          :disabled="pagination.next === null"
          @click="getStepUrl(pagination.next)"
        >
          Next
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </el-button-group>
    </div>
  </div>
  <translation-modal v-if="modal.opened" :item="modal.data" @close="modal.opened = false" />
</template>

<style lang="scss" scoped>
.fancy-img {
  background-color: #E0E3FF;
  border: none;
  outline: none;
  transition: box-shadow 300ms ease-in-out;

  &:hover {
    box-shadow: 20px -20px 1px #EDC2CF,
                -20px 20px 1px #BEDDF3;
  }
}
</style>