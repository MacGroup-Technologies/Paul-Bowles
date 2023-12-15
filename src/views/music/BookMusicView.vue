<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive, watch } from 'vue';
import { fetchMusicBookAlt } from "@/services/music";
import { useThemeStore } from '@/stores/theme';
import { useHead } from '@unhead/vue'
import type { MusicCollectionItem } from '@/utils/types'

const router = useRoute()
const route = useRouter()

useHead({ title: `Paul Bowles ${router.params.title}` })
const music = reactive({ items: [] as MusicCollectionItem[] & any[] })


const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}
const getMusic = async function () {
  try {
    const response = await fetchMusicBookAlt(router.params.title);
    music.items = response.data.results
    setLoading(false)
  } catch (error: any) {
    setError(error)
    console.log(error)
  }
}

watch(route, async () => {
  setLoading(true)
  await getMusic()
})

onMounted(async () => {
  await getMusic();
})
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-6xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div v-if="music.items.length !== 0">
        <pre class="mt-10 text-justify">
          {{ music.items[0].description }}
        </pre>
        <div class="mt-10 grid dgrid-cols-2 md:grid-cols-5 gap-5">
          <div class="rounded overflow-hidden" v-for="img in music.items[0].image" :key="img.id">
            <img :src="'https://res.cloudinary.com/dbrvleydy/' + img.image" class="w-1/2 md:w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
