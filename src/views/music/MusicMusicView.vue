<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, watch } from 'vue'
import { fetchMusicAlt } from '@/services/music'
import { useThemeStore } from '@/stores/theme'
import type { MusicItem } from '@/utils/types'
import { useHead } from '@unhead/vue'

const router = useRoute()
const route = useRouter()

useHead({ title: `Paul Bowles ${router.params.title}` })

const music = reactive({ items: [] as MusicItem[] })

const player = reactive({ item: {} })

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}
const getMusic = async function () {
  try {
    let params
    if (router.params.title === 'Songs') {
      params = 'songs'
    } else {
      params = router.params.title
    }
    const response = await fetchMusicAlt(params)
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
  await getMusic()
})
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <template v-if="music.items.length !== 0">
        <div class="mt-10 mb-20">
          <p class="" v-if="router.params.title === 'Songs'">
            Paul Bowles wrote about one hundred songs for piano and voice, using lyrics written by
            himself and by other authors such as Tennessee Williams, William Saroyan, Federico García
            Lorca, Gertrude Stein and Jane Bowles. 
          </p>
          <p class="" v-else-if="router.params.title === 'Works for Piano'">
            This selection contains some of Paul Bowles’s music inspired by Latin American themes. The
            outstanding Sonata for Two Pianos has been described as one of the best kept secrets of
            American piano music.
          </p>
        </div>
        <div class="" v-if="router.params.title === 'Chamber Works and Orchestra'">
          <div class="mb-14" v-for="item in music.items" :key="item.id">
            <h2 class="uppercase text-4xl">{{ item.title }}</h2>
            <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 py-5 text-[20px]">
              <icon-music class="h-14 w-14 md:w-auto bg-primary-light p-3 rounded-lg" />
              <h3 class="w-full md:w-1/2">
                {{ item.title }}
              </h3>
              <div>
                {{ item.duration }}
              </div>
            </div>
            <p class="opacity-75 text-md">{{ item.description }}</p>
          </div>
        </div>
        <div class="" v-else>
          <div class="md:px-10 mb-5 font-bold">List</div>
          <div class="flex flex-col md:flex-row gap-3 md:gap-0 font-bold md:px-10 mb-3">
            <div class="w-10">#</div>
            <div class="px-20" />
            <div class="w-full">Title</div>
            <div class="w-96">Time</div>
          </div>
          <div
            class="flex flex-col md:flex-row gap-3 md:gap-0 mb-3 py-5 cursor-pointer md:px-10 rounded-xl transition hover:bg-white hover:text-black hober:shadow"
            v-for="(item, index) in music.items" :key="item.id" @click="player.item = item">
            <div class="w-10">{{ index + 1 }}</div>
            <div class="px-20" />
            <div class="w-full">
              {{ item.title }}
            </div>
            <div class="w-auto">{{ item.duration }}</div>
          </div>
        </div>
      </template>
      <div class="my-24 opacity-75" v-else>
        Nothing here, yet
      </div>
    </div>
  </div>
</template>
