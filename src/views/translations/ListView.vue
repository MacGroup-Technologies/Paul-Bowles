<script lang="ts" setup>
import { getTranslations, getTranslationsByQuery } from '@/services/translations';
import { onMounted, reactive, ref } from 'vue';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { useThemeStore } from '@/stores/theme';
import { getUrl } from '@/services/misc';

import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router';
useHead({ title: `Paul Bowles's Library` })

const route = useRoute();


let pagination = reactive({
  next: null,
  previous: null,
  page: null
});
const translations = reactive({ items: [] as any });
const formRef = ref(null);
const filter = reactive({
  keyword: '',
  category: '' as any,
});

const getStepUrl = async function (url: any) {
  setLoading(true);
  try {
    const response = await getUrl(url)
    pagination.next = response.data.next
    pagination.previous = response.data.previous
    translations.items = response.data.results
    setLoading(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error: any) {
    console.log(error);
    setError(error);
  }
}

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const fetchTranslations = async function () {
  try {
    const response = await getTranslations();
    pagination.next = response.data.next
    pagination.previous = response.data.previous
    translations.items = response.data.results
    setLoading(false);
  } catch (error) {
    console.log(error);
  }

  setLoading(false);
}

const filterTranslations = async function () {
  setLoading(true);
  try {
    const response = await getTranslationsByQuery(filter.category);
    pagination.next = response.data.next
    pagination.previous = response.data.previous
    translations.items = response.data.results
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
}

onMounted(async () => {
  if (route.query.category) {
    filter.category = route.query.category;
    await filterTranslations()
  } else {
    await fetchTranslations();
  }
})

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
    <div class="mx-5 mb-10 lg:mx-16 2xl:mx-20 p-10 rounded-xl text-xl bg-white sticky top-20">
      <el-form :model="filter" ref="formRef" @submit.prevent="filterTranslations()">
        <div class="flex flex-col md:flex-row gap-5">
          <el-input v-model="filter.keyword" class="md:w-2/3" size="large" placeholder="Author, Title, or Keyword" />
          <el-select class="md:w-1/3" v-model="filter.category" size="large">
            <el-option value="" label="All" />
            <el-option value="From Moghrebi" label="From Moghrebi" />
            <el-option value="From Spanish" label="From Spanish" />
            <el-option value="From French" label="From French" />
          </el-select>
          <el-button class="md:w-auto bg-primary" type="primary" size="large"
            @click="filterTranslations()">Search</el-button>
        </div>
      </el-form>
    </div>
    <div class="py-10 lg:px-16 2xl:px-20">
      <div class="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-4 w-full">
        <router-link :to="`/translation/${item.id}`" class="w-full flex flex-col" v-for="item in translations.items"
          :key="item.id">
          <div class="flex-1 flex items-center justify-center w-2/3 md:w-3/4 h-full rounded-[22px] fancy-img my-0 mx-5 md:mx-auto cursor-pointer">
          <img v-if="item.image_urls === ''" src="@/assets/imgs/Image-thumbnail.png" />
          <img v-else :src="item.image_urls.split(',')[0]" />
          </div>
          <div class="px-5 md:px-0 mt-5">
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
        <el-button type="primary" size="large" class="bg-primary" :icon="ArrowLeft"
          :disabled="pagination.previous === null" @click="getStepUrl(pagination.previous)">
          Prev
        </el-button>
        <el-button type="primary" size="large" class="bg-primary" :disabled="pagination.next === null"
          @click="getStepUrl(pagination.next)">
          Next
          <el-icon class="el-icon--right">
            <ArrowRight />
          </el-icon>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>
