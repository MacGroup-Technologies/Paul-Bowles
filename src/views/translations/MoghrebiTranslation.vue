<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { useThemeStore } from '@/stores/theme';

import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router';
import { getTranslationsById } from '../../services/translations';

import ImageViewerModal from '@/components/ImageViewerModal.vue';

const tabs = "arabic, english".split(", ")
const current_tab = ref("arabic")

const modal = reactive({ opened: false, items: {}, active_index: 0 });
const openModal = async function (items: string[], active_index = 0) {
  modal.opened = true;
  modal.items = items;
  modal.active_index = active_index
}

const is_text_expanded = ref(false)

// translations that show the tabs and other translation logics for languages
const has_translations = ["5165", "4864"]

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
          <div class="absolute inset-0 opacity-60 blur-md"
            :style="`background-image:url('${translation.img.split(',')[0]}')`" style="background-position:center" />
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
      <div v-if="translation.data.attachment_url?.split(',')[0].endsWith('.mp3')" class="space-y-2 mt-4 ">
        <p>Listen to audio:</p>
        <audio controls controlslist="nodownload" class="w-full">
          <source :src="translation.data.attachment_url.split(',')[0]" type="audio/mpeg" />
          <div class="text-red-500 font-bold p-5 border-red-300">Your device does not support audio</div>
        </audio>
      </div>


      <div class="my-10 text-2xl md:text-justify ">
        <p v-html="translation.data.blocks_rows_0_text" v-if="translation.data.blocks_rows_0_text !== ''" />
        <p v-html="translation.data.blocks_0_column_1" v-else />
        <p v-if="route.params.id === '5165'" class="mt-5">
          Below, we offer a glimse into the first pages of the manuscript:
        </p>
        <p v-else-if="route.params.id === '5200'" class="mt-5">
          Below, we offer a glimse into the first pages of the corrected typescript:
        </p>
      </div>

      <div v-if="has_translations.includes(route.params.id)"
        class="mx-auto w-full max-sm:text-center font-bold max-sm:flex flex-col mt-12 border-b dark:border-white/20 border-black/20">
        <label v-for="tab in tabs" class="px-8 py-4 inline-block !cursor-pointer capitalize"
          :class="{ 'bg-black/20 dark:bg-white/20': tab == current_tab, 'dark:hover:bg-white/10 dark:hover:text-white hover:bg-black/10': tab !== current_tab }">
          Transcription in {{ tab }}
          <input name="current_tab" type="radio" @change="is_text_expanded = false" v-model="current_tab" :value="tab"
            hidden>
        </label>
        <span class="w-full">
          <a href="#published-text" class="px-8 py-4 inline-block !cursor-pointer capitalize">
            Published text
          </a>

        </span>
      </div>

      <div class="text-2xl py-10 flex gap-10 flex-col md:flex-row justify-between items-start md:text-justify"
        :class="{ 'max-h-[15lh] m-2 p-2 overflow-auto': route.params.id == '4864' && is_text_expanded == false }">

        <div v-if="!has_translations.includes(route.params.id) || current_tab == 'arabic'" class="text-right">
          <p v-html="translation.data.blocks_1_column_3" />
        </div>

        <div v-if="!has_translations.includes(route.params.id)">
          <p v-html="translation.data.blocks_1_column_2" />
          <p v-html="translation.data.blocks_rows_4_text" />
        </div>

        <div v-else-if="!has_translations.includes(route.params.id) || current_tab == 'english'" class="">
          <p v-html="translation.data.blocks_1_column_1" />
        </div>


      </div>
      <div v-if="route.params.id === '4864'" class="flex justify-center">
        <button v-if="is_text_expanded == true" @click="is_text_expanded = false" class="border p-4 m-4">{{ current_tab
          ===
          'english' ? "Read less" :
          "قراءة أقل" }}</button>
        <button v-else @click="is_text_expanded = true" class="border p-4 m-4">{{ current_tab === 'english' ? `Show full
          text` : `إظهار النص الكامل` }}</button>
      </div>

      <div class="grid md:grid-cols-3 pb-5 scrollbar-thin scrollbar-thumb-primary gap-10" id="published-text"
        v-if="translation.img.split(',').length !== 0 && translation.img !== ''">
        <img @click="() => openModal(translation.img.split(','), index)" :src="img" class="cursor-pointer object-cover"
          v-for="(     img, index     ) in      translation.img.split(',')     " :key="index" lazy />
      </div>
    </div>
  </div>
  <image-viewer-modal v-if="modal.opened" :items="(modal.items as any)" :active_index="modal.active_index"
    @close="modal.opened = false" />
</template>
