<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { getPhotoAltTag } from '@/services/misc'
import { useHead } from '@unhead/vue'

import { OnClickOutside } from '@vueuse/components'

const router = useRoute()
const route = useRouter()
const photography = reactive({ items: [] as any[] })

const active_item_index = ref<number>(-1)
const active_item = computed(() => {
  return photography.items[active_item_index.value]
})

useHead({ title: `Paul Bowles ${router.params.title}` })

const fetchPhotography = async function () {
  setLoading(true)
  await getPhotoAltTag('' + router.params.title)
    .then((response: any) => {
      photography.items = response.data.results
      setLoading(false)
    })
    .catch((error: any) => {
      setLoading(false)
      setError(error)
    })
}

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

function changeIndex(direction: 1 | -1) {
  active_item_index.value += direction;
  active_item_index.value = (active_item_index.value + photography.items.length) % photography.items.length; // wrap around if out of bounds
}

function goToNextImage() {
  changeIndex(1)
}

function goToPreviousImage() {
  changeIndex(-1)
}


onMounted(async () => {
  await fetchPhotography()
})

</script>

<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-6xl font-heading uppercase w-1/2 md:w-auto">{{ router.params.title }}</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <p class="my-10" v-if="router.params.title === 'Paul Bowles Archive at Fotostiftung Schweiz'">
        The earliest photographs by Paul Bowles that we have records of date back to the 1940s.
        Bowles used to carry a camera with him on his excursions and travels. His photographic work
        represents a personal record of the landscapes he visited, as well as of social life,
        friends and acquaintances. The photographs by Paul Bowles and some portraits of him taken
        between 1940 and 1970 reproduced here are held by the Fotostiftung Schweiz in Winterthur at
        "The Paul Bowles Archive."
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          :class="`w-full h-64 bg-cover group/image ${item.id == 68 ? '' : 'bg-center'} rounded-xl cursor-pointer transition-transform hover:scale-105 relative overflow-hidden`"
          :style="`background-image: url(${item.image_featured})`" v-for="(item, index) in photography.items"
          :key="item.id" @click="active_item_index = index">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="opacity-0 group-hover/image:opacity-100 tranisiton-opacity bg-gradient-to-t from-black/90 absolute inset-0 text-white">
            </div>
            <p v-if="isNaN(item.title)"
              class="opacity-0 translate-y-10 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all text-sm text-center absolute bottom-0 inset-x-0 text-white pb-1 px-1">
              {{ item.title.split(" ").slice(1, item.title.length).join(" ") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center text-center z-50"
    v-if="active_item !== undefined">
    <OnClickOutside @trigger="active_item_index = -1"
      class="text-center px-10 md:px-0 md:w-2/3  cursor-pointer text-white space-y-2">
      <button class="cursor-pointer text-xl absolute right-0 top-0 p-4 text-center" @click="active_item_index = -1">
        <p>close</p>
      </button>
      <img :src="active_item?.image_featured" class="w-full max-h-[80vh] object-cover h-auto rounded-xl cursor-default" />
      <p v-if="isNaN(active_item?.title)" class="text-white"> {{ active_item.title.split(" ").slice(1,
        active_item.title.length).join(" ") }}
      </p>
      <div class="flex items-center gap-4 justify-center">
        <button @click="goToPreviousImage()">
          Previous Image
        </button>
        <button @click="goToNextImage()">
          Next Image
        </button>
      </div>
    </OnClickOutside>
  </div>
</template>
