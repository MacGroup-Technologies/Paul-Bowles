<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, watch } from 'vue'
import { fetchMusicAlt } from '@/services/music'
import { useThemeStore } from '@/stores/theme'

const router = useRoute()
const route = useRouter()

const music = reactive({ items: [] })
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
  } catch (error) {
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
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-8xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link
          to="#back"
          @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform"
        >
          <icon-back />
        </router-link>
      </div>
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
        {{ music.items }}
      </div>
      <div class="" v-else>
        <div class="px-10 mb-5 font-bold">List</div>
        <div class="flex font-bold px-10 mb-3">
          <div class="w-10">#</div>
          <div class="px-20" />
          <div class="w-full">Title</div>
          <div class="w-96">Time</div>
        </div>
        <div
          class="flex mb-3 py-5 cursor-pointer px-10 rounded-xl transition hover:bg-white hover:text-black hober:shadow"
          v-for="(item, index) in music.items"
          :key="item.id"
          @click="player.item = item"
        >
          <div class="w-10">{{ index + 1 }}</div>
          <div class="px-20" />
          <div class="w-full">
            {{ item.title }}
          </div>
          <div class="w-auto">{{ item.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
pre {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
