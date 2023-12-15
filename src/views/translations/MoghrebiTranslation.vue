<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useThemeStore } from '@/stores/theme';

import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router';
import { getTranslationsById } from '../../services/translations';

import ImageViewerModal from '@/components/ImageViewerModal.vue';
import VueMagnifier from '@websitebeaver/vue-magnifier'

const modal = reactive({ opened: false, items: {}, active_index: 0 });
const openModal = async function (items: string[], active_index = 0) {
  modal.opened = true;
  modal.items = items;
  modal.active_index = active_index
}

const route = useRoute();
const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}
const translation = reactive({ data: {} as any, img: '' });

// const setError = function(val: string) {
//   useThemeStore().updateError(val)
// }

const fetchTranslationById = async function () {
  setLoading(true);
  try {
    const response = await getTranslationsById(route.params.id);
    translation.data = response.data;
    translation.img = response.data.image_urls
  } catch (error) {
    console.log(error);
  }

  setLoading(false);
}

onMounted(async () => {
  await fetchTranslationById();
})

useHead({ title: translation.data.title ?? 'Paul Bowles Translations' })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-start justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase md:w-2/3">
          {{ translation.data.title }}
        </h1>
        <router-link to="/translation/list" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
    </div>

    <div class="px-5 py-5 lg:px-16 2xl:px-20" v-if="translation.data.title !== ''">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex-1 overflow-hidden relative py-20">
          <div class="absolute inset-0 opacity-60 blur-md">
            <VueMagnifier class="translate-y-[-50%] scale-125" :src="translation.img.split(',')[0]" />
          </div>
          <div class="text-2xl text-center relative">
            <img v-if="translation.img === ''" src="@/assets/imgs/Image-thumbnail.png"
              class="w-auto h-auto rounded-[22px] fancy-img mb-2 mx-5 md:mx-auto cursor-pointer" />
            <b>Author:</b> {{ translation.data.author }}<br />
            <b>DATE:</b> {{ translation.data.date === '' ? translation.data.date_of_publication_w : translation.data.date
            }}<br />
            <b>PUBLISHER:</b> {{ translation.data.publisher }}<br />
            <b>PLACE OF PUBLICATION:</b> {{ translation.data.place_of_publication }}<br />
          </div>
        </div>
      </div>
      <div class="my-10 text-2xl">
        <p v-html="translation.data.blocks_rows_0_text" v-if="translation.data.blocks_rows_0_text !== ''" />
        <p v-html="translation.data.blocks_0_column_1" v-else />
      </div>
      <div class="text-2xl py-10 flex gap-10 flex-col md:flex-row justify-between items-start">
        <div class="md:w-1/3">
          <p v-html="translation.data.blocks_1_column_1" />
        </div>
        <div class="md:w-1/3">
          <p v-html="translation.data.blocks_1_column_2" />
        </div>
        <div class="md:w-1/3 text-right">
          <p v-html="translation.data.blocks_1_column_3" />
        </div>
      </div>
      <div
        class="flex items-center flex-col md:flex-row md:overflow-x-auto pb-5 scrollbar-thin scrollbar-thumb-primary gap-10"
        v-if="translation.img.split(',').length !== 0 && translation.img !== ''">
        <img @click="() => openModal(translation.img.split(','), index)" :src="img"
          class="cursor-pointer w-[200px] h-[200px] object-cover" v-for="(img, index) in translation.img.split(',')"
          :key="index" lazy />
      </div>
    </div>
  </div>
  <image-viewer-modal v-if="modal.opened" :items="modal.items" :active_index="modal.active_index"
    @close="modal.opened = false" />
</template>
