<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components'
import { ref } from 'vue'
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'

defineProps<{
  item: any
}>()

const img = ref(null)
</script>
<template>
  <div class="z-50 fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 flex justify-center items-center">

    <OnClickOutside @trigger="$emit('close')">
      <div
        class="overflow-y-auto mx-5 md:mx-0 h-[90vh] md:w-[60vw] bg-background-light dark:bg-background-dark rounded-xl">
        <div
          class="py-5 px-5 md:px-20 inline-flex items-center gap-3 text-black dark:text-white-shade hover:text-opacity-80 cursor-pointer"
          @click="$emit('close')">
          Close <span class="inline-block pt-[2px] w-10 bg-black dark:bg-white-shade" />
        </div>
        <div class="py-5 md:py-3 px-5 md:px-20 grid place-items-start gap-10 grid-cols-1 md:grid-cols-2 h-[65%]">
          <div>
            <VueMagnifier :src="img ?? item.image_urls.split('|')[0]" width="500" class="rounded-2xl"
              v-if="item.image_urls.split('|')[0] !== ''" />
            <img v-else src="@/assets/imgs/Image-thumbnail.png" class="w-full h-auto rounded-[22px]" />
            <div class="py-5 md:py-3 px-5 md:px-20 w-full flex gap-5 overflow-auto scrollbar-thin scrollbar-thumb-primary"
              v-if="item.image_urls.split('|').length > 1 && item.image_urls.split('|')[0] !== ''">
              <img :src="imgs"
                class="bg-primary bg-opacity-20 inline w-32 rounded-xl cursor-pointer hover:-translate-y-2 transition-transform"
                :class="{ '-translate-y-1 bg-opacity-70': img == imgs }"
                v-for="(imgs, index) in item.image_urls.split('|')" :key="index" @click="img = imgs" />
            </div>
          </div>
          <div class="pb-10 md:pb-0">
            <h1 class="text-xl font-semibold">{{ item.title }}</h1>
            <p class="mt-3 text-justify" v-html="item.inscription.replaceAll('/', '')" />
            <div class="mt-5">
              <div class="" v-if="item.publisher"><b>PUBLISHER:</b> {{ item.publisher }}</div>
              <div class="" v-if="item.genre"><b>PLACE OF PUBlICATION:</b> {{ item.place_of_publication }}</div>
              <div class="" v-if="item.genre"><b>PUBlICATION DATE:</b> {{ item.date_of_publication }}</div>
              <div class="" v-if="item.isbn"><b>ISBN:</b> {{ item.isbn }}</div>
              <div class="" v-if="item.language"><b>LANGUAGES:</b> {{ item.language }}</div>
              <div class="" v-if="item.translator"><b>TRANSLATOR:</b> {{ item.translator }}</div>
              <div class="" v-if="item.genre"><b>GENRE:</b> {{ item.genre }}</div>
              <div class="" v-if="item.library_tags">
                <b>TAGS:</b> {{ item.library_tags }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OnClickOutside>
  </div>
</template>
