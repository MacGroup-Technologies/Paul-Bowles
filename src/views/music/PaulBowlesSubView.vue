<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, watch, ref } from 'vue'
import { fetchMusicAlt } from '@/services/music'
import { useThemeStore } from '@/stores/theme'
import { useHead } from '@unhead/vue'
import { isEmpty } from 'lodash'
import type { MusicCollectionItem, MusicItem } from '@/utils/types'

const router = useRoute()
const route = useRouter()

useHead({ title: `Paul Bowles ${router.params.title}` })

const music = reactive({ items: [] as MusicItem[] })
const player = reactive({ item: {} as any })
const collections = reactive({ items: [] as MusicCollectionItem[] })
const playing_collection = ref()

const audio = document.getElementsByTagName('audio') as any
const playState = ref('pause')

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}
const getMusic = async function () {
  try {
    const response = await fetchMusicAlt(router.params.title)
    music.items = response.data.results

    const matches_file_music_route = router.params.title === 'Film Music'
    const matches_incidental_music_route = router.params.title == "Incidental Music"

    let film_music = [] as MusicItem[]
    const _collections = [] as any[]

    if (matches_file_music_route || matches_incidental_music_route) {
      response.data.results.map((music_item: MusicItem, index: number) => {
        music_item.attachment_url.split(",").forEach((url: string, index: number) => {
          const item = { ...music_item, attachment_url: url, title: `${music_item.title} part ${index + 1}`, id: music_item.id + index + 1 }
          film_music.push(item)
        })
        music.items = film_music
        if (matches_incidental_music_route) {
          _collections.push({ title: music_item.title, items: { items: film_music } })
          film_music = []
        }
      })
    }

    if (!matches_incidental_music_route) {
      _collections.push({ id: "1", items: music })
    }
    collections.items = _collections;

    setLoading(false)
  } catch (error: any) {
    setError(error)
    console.log(error)
  }
}

const playMusic = function (title) {
  console.log("hello")
  playing_collection.value = title
  if (playState.value === 'play') {
    audio[0].play()
    playState.value = 'pause'
  } else {
    audio[0].pause()
    playState.value = 'play'
  }
}

watch(
  () => player.item,
  () => {
    playState.value = 'pause'
  },
  { deep: true }
)

watch(route, async () => {
  setLoading(true)
  await getMusic()
})

onMounted(async () => {
  await getMusic()
    .then(() => {
    })

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
          <div class="" v-if="router.params.title === 'Songs'">
            Paul Bowles wrote about one hundred songs for piano and voice, using lyrics written by
            himself and by other authors such as Tennessee Williams, William Saroyan, Federico
            García Lorca, Gertrude Stein and Jane Bowles.
            <br />
            <!-- <el-button class="bg-primary text-lg mt-5" type="primary" style="padding: 30px 30px;" size="large">
              <svg class="h-10 w-auto mr-5" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.6922 0C11.95 0 0 11.6394 0 25.9984C0 40.3575 11.95 51.9969 26.6922 51.9969C41.4344 51.9969 53.3844 40.3575 53.3844 25.9984C53.3876 11.6394 41.4344 0 26.6922 0ZM38.9354 37.5012C38.4573 38.2681 37.4309 38.5071 36.6468 38.0414C30.377 34.3096 22.4879 33.4683 13.1963 35.536C12.3006 35.7347 11.4081 35.1882 11.2041 34.3189C11.0001 33.4465 11.5579 32.5772 12.4568 32.3785C22.6249 30.1152 31.346 31.0901 38.384 35.2752C39.1681 35.7378 39.4135 36.7375 38.9354 37.5012ZM42.2026 30.4195C41.6002 31.3726 40.3188 31.6738 39.3402 31.087C32.1683 26.7932 21.2288 25.5483 12.7405 28.0568C11.6408 28.3797 10.4773 27.7774 10.1427 26.7063C9.81115 25.6352 10.4327 24.5051 11.5292 24.1791C21.2256 21.3135 33.2776 22.7013 41.5141 27.6346C42.4959 28.2214 42.8019 29.4695 42.2026 30.4195ZM42.4831 23.049C33.88 18.0722 19.6861 17.6159 11.4718 20.0437C10.1522 20.4349 8.75927 19.7084 8.35765 18.4231C7.95921 17.1377 8.7019 15.781 10.0215 15.3898C19.4502 12.6018 35.1263 13.142 45.0299 18.867C46.2157 19.5532 46.6046 21.0465 45.9033 22.1983C45.1989 23.3533 43.6657 23.7351 42.4831 23.049Z"
                  fill="white" />
              </svg>
              Open On Spotify
            </el-button> -->
          </div>
          <div class="" v-else-if="router.params.title === 'Works for Piano'">
            This selection contains some of Paul Bowles’s music inspired by Latin American themes.
            The outstanding Sonata for Two Pianos has been described as one of the best kept secrets
            of American piano music.
            <br />
            <!-- <el-button class="bg-primary text-lg mt-5" type="primary" style="padding: 30px 30px;" size="large">
              <svg class="h-10 w-auto mr-5" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.6922 0C11.95 0 0 11.6394 0 25.9984C0 40.3575 11.95 51.9969 26.6922 51.9969C41.4344 51.9969 53.3844 40.3575 53.3844 25.9984C53.3876 11.6394 41.4344 0 26.6922 0ZM38.9354 37.5012C38.4573 38.2681 37.4309 38.5071 36.6468 38.0414C30.377 34.3096 22.4879 33.4683 13.1963 35.536C12.3006 35.7347 11.4081 35.1882 11.2041 34.3189C11.0001 33.4465 11.5579 32.5772 12.4568 32.3785C22.6249 30.1152 31.346 31.0901 38.384 35.2752C39.1681 35.7378 39.4135 36.7375 38.9354 37.5012ZM42.2026 30.4195C41.6002 31.3726 40.3188 31.6738 39.3402 31.087C32.1683 26.7932 21.2288 25.5483 12.7405 28.0568C11.6408 28.3797 10.4773 27.7774 10.1427 26.7063C9.81115 25.6352 10.4327 24.5051 11.5292 24.1791C21.2256 21.3135 33.2776 22.7013 41.5141 27.6346C42.4959 28.2214 42.8019 29.4695 42.2026 30.4195ZM42.4831 23.049C33.88 18.0722 19.6861 17.6159 11.4718 20.0437C10.1522 20.4349 8.75927 19.7084 8.35765 18.4231C7.95921 17.1377 8.7019 15.781 10.0215 15.3898C19.4502 12.6018 35.1263 13.142 45.0299 18.867C46.2157 19.5532 46.6046 21.0465 45.9033 22.1983C45.1989 23.3533 43.6657 23.7351 42.4831 23.049Z"
                  fill="white" />
              </svg>
              Open On Spotify
            </el-button> -->
          </div>
          <p class="" v-else-if="router.params.title === 'Incidental Music'">
            In 1992, Bowles composed incidental music for Eurypides’s Hippolytus of Athens (presented by the American
            School of
            Tangier). This is Bowles’s first composition using a synthesizer. Oscar Wilde’s Salomé was followed in 1993,
            also presented by the American School of Tangier and composed on a synthesizer.
          </p>
          <div class="" v-else-if="router.params.title === 'Film Music'">
            In 1944, Bowles composed music for the documentary film Congo, with a script by John Latouche.
            <br />
            <!-- <el-button class="bg-primary text-lg mt-5" type="primary" style="padding: 30px 30px;" size="large">
              <svg class="h-10 w-auto mr-5" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.6922 0C11.95 0 0 11.6394 0 25.9984C0 40.3575 11.95 51.9969 26.6922 51.9969C41.4344 51.9969 53.3844 40.3575 53.3844 25.9984C53.3876 11.6394 41.4344 0 26.6922 0ZM38.9354 37.5012C38.4573 38.2681 37.4309 38.5071 36.6468 38.0414C30.377 34.3096 22.4879 33.4683 13.1963 35.536C12.3006 35.7347 11.4081 35.1882 11.2041 34.3189C11.0001 33.4465 11.5579 32.5772 12.4568 32.3785C22.6249 30.1152 31.346 31.0901 38.384 35.2752C39.1681 35.7378 39.4135 36.7375 38.9354 37.5012ZM42.2026 30.4195C41.6002 31.3726 40.3188 31.6738 39.3402 31.087C32.1683 26.7932 21.2288 25.5483 12.7405 28.0568C11.6408 28.3797 10.4773 27.7774 10.1427 26.7063C9.81115 25.6352 10.4327 24.5051 11.5292 24.1791C21.2256 21.3135 33.2776 22.7013 41.5141 27.6346C42.4959 28.2214 42.8019 29.4695 42.2026 30.4195ZM42.4831 23.049C33.88 18.0722 19.6861 17.6159 11.4718 20.0437C10.1522 20.4349 8.75927 19.7084 8.35765 18.4231C7.95921 17.1377 8.7019 15.781 10.0215 15.3898C19.4502 12.6018 35.1263 13.142 45.0299 18.867C46.2157 19.5532 46.6046 21.0465 45.9033 22.1983C45.1989 23.3533 43.6657 23.7351 42.4831 23.049Z"
                  fill="white" />
              </svg>
              Open On Spotify
            </el-button> -->
          </div>
        </div>

        <div v-for="(collection, collection_index) in collections.items" class="mb-12" :key="collection_index">
          <div class="px-10 mb-5 font-bold">
            <h1 class="font-mono font-semibold uppercase text-3xl lg:text-4xl">{{ collection.title }}</h1>
          </div>

          <div class="">
            <div class="flex flex-row gap-3 font-bold px-10 mb-3">
              <div class="px-8" />
              <div class="w-full">Title</div>
            </div>
            <div
              class="flex flex-row md:items-center gap-3 md:gap-0 mb-3 py-5 cursor-pointer px-10 rounded-xl transition hover:bg-white hover:text-black hover:shadow"
              :class="{ 'bg-white text-black shadow': item.title === player.item.title }"
              v-for="(item, index) in collection.items.items" :key="item.id"
              @click="() => { playing_collection = collection.title; player.item = item }" :id="item.slug">
              <div class="w-10" v-if="item.title !== player.item.title">{{ index + 1 }}</div>
              <div class="w-10 flex items-center justify-center" @click="playMusic(collection.title)" v-else>
                <svg v-if="playState !== 'play'" width="40" height="40" viewBox="0 0 40 40" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M39.2008 19.9998C39.2008 25.092 37.1779 29.9756 33.5772 33.5763C29.9765 37.177 25.0929 39.1998 20.0008 39.1998C14.9086 39.1998 10.025 37.177 6.42433 33.5763C2.82363 29.9756 0.800781 25.092 0.800781 19.9998C0.800781 14.9076 2.82363 10.0241 6.42433 6.42335C10.025 2.82266 14.9086 0.799805 20.0008 0.799805C25.0929 0.799805 29.9765 2.82266 33.5772 6.42335C37.1779 10.0241 39.2008 14.9076 39.2008 19.9998ZM12.8008 15.1998C12.8008 14.5633 13.0536 13.9528 13.5037 13.5027C13.9538 13.0527 14.5643 12.7998 15.2008 12.7998C15.8373 12.7998 16.4477 13.0527 16.8978 13.5027C17.3479 13.9528 17.6008 14.5633 17.6008 15.1998V24.7998C17.6008 25.4363 17.3479 26.0468 16.8978 26.4969C16.4477 26.9469 15.8373 27.1998 15.2008 27.1998C14.5643 27.1998 13.9538 26.9469 13.5037 26.4969C13.0536 26.0468 12.8008 25.4363 12.8008 24.7998V15.1998ZM24.8008 12.7998C24.1643 12.7998 23.5538 13.0527 23.1037 13.5027C22.6536 13.9528 22.4008 14.5633 22.4008 15.1998V24.7998C22.4008 25.4363 22.6536 26.0468 23.1037 26.4969C23.5538 26.9469 24.1643 27.1998 24.8008 27.1998C25.4373 27.1998 26.0477 26.9469 26.4978 26.4969C26.9479 26.0468 27.2008 25.4363 27.2008 24.7998V15.1998C27.2008 14.5633 26.9479 13.9528 26.4978 13.5027C26.0477 13.0527 25.4373 12.7998 24.8008 12.7998Z"
                    fill="#06050C" />
                </svg>

                <svg v-else width="20" height="30" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.10986 0.336285C2.80867 0.135336 2.45858 0.019922 2.09694 0.00235559C1.7353 -0.0152108 1.37567 0.0657291 1.05642 0.236541C0.737176 0.407353 0.47029 0.661628 0.284238 0.972238C0.0981847 1.28285 -5.41651e-05 1.63814 2.24048e-08 2.00021V9.99985C-5.41651e-05 10.3619 0.0981847 10.7172 0.284238 11.0278C0.47029 11.3384 0.737176 11.5927 1.05642 11.7635C1.37567 11.9343 1.7353 12.0153 2.09694 11.9977C2.45858 11.9801 2.80867 11.8647 3.10986 11.6638L9.10959 7.66396C9.3835 7.48132 9.60808 7.23389 9.7634 6.94362C9.91873 6.65336 10 6.32924 10 6.00003C10 5.67082 9.91873 5.3467 9.7634 5.05644C9.60808 4.76617 9.3835 4.51874 9.10959 4.33611L3.10986 0.336285Z"
                    fill="#06050C" />
                </svg>
              </div>
              <div class="px-5">
                <div class="bg-primary bg-opacity-10 p-2 rounded">
                  <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_879_9479)">
                      <path
                        d="M34.166 3.41699H13.666C11.7868 3.41699 10.2493 4.95449 10.2493 6.83366V27.3337C10.2493 29.2128 11.7868 30.7503 13.666 30.7503H34.166C36.0452 30.7503 37.5827 29.2128 37.5827 27.3337V6.83366C37.5827 4.95449 36.0452 3.41699 34.166 3.41699ZM30.7493 11.9587H25.6243V21.3545C25.6243 23.712 23.711 25.6253 21.3535 25.6253C18.996 25.6253 17.0827 23.712 17.0827 21.3545C17.0827 18.997 18.996 17.0837 21.3535 17.0837C22.3273 17.0837 23.1985 17.4082 23.916 17.9549V8.54199H30.7493V11.9587ZM6.83268 10.2503H3.41602V34.167C3.41602 36.0462 4.95352 37.5837 6.83268 37.5837H30.7493V34.167H6.83268V10.2503Z"
                        fill="#4D5AD6" />
                    </g>
                    <defs>
                      <clipPath id="clip0_879_9479">
                        <rect width="41" height="41" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="w-full">
                <h2> {{ item.title }} </h2>
                <!-- <p class="text-sm" v-if="router.params.title === 'Film Music'">Synthesizer played by Paul Bowles.
                </p> -->
              </div>
            </div>
            <div class="bg-black bg-opacity-10 md:w-1/3 p-5 rounded" v-if="!isEmpty(player.item) && playing_collection == collection.title" :key="player.item.id">
              <div class="mb-3 flex items-center justify-between gap-5">
                <div class="bg-primary bg-opacity-10 p-2 rounded">
                  <svg width="31" height="31" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_879_9479)">
                      <path
                        d="M34.166 3.41699H13.666C11.7868 3.41699 10.2493 4.95449 10.2493 6.83366V27.3337C10.2493 29.2128 11.7868 30.7503 13.666 30.7503H34.166C36.0452 30.7503 37.5827 29.2128 37.5827 27.3337V6.83366C37.5827 4.95449 36.0452 3.41699 34.166 3.41699ZM30.7493 11.9587H25.6243V21.3545C25.6243 23.712 23.711 25.6253 21.3535 25.6253C18.996 25.6253 17.0827 23.712 17.0827 21.3545C17.0827 18.997 18.996 17.0837 21.3535 17.0837C22.3273 17.0837 23.1985 17.4082 23.916 17.9549V8.54199H30.7493V11.9587ZM6.83268 10.2503H3.41602V34.167C3.41602 36.0462 4.95352 37.5837 6.83268 37.5837H30.7493V34.167H6.83268V10.2503Z"
                        fill="#4D5AD6" />
                    </g>
                    <defs>
                      <clipPath id="clip0_879_9479">
                        <rect width="41" height="41" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold line-clamp-1"
                  :class="{ 'text-red-500': player.item.attachment_url === 'null' }">
                  {{ player.item.title }}
                </h3>
                <div class="w-10 flex items-center justify-center cursor-pointer" @click="playMusic(collection.title)">
                  <svg v-if="playState !== 'play'" width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M39.2008 19.9998C39.2008 25.092 37.1779 29.9756 33.5772 33.5763C29.9765 37.177 25.0929 39.1998 20.0008 39.1998C14.9086 39.1998 10.025 37.177 6.42433 33.5763C2.82363 29.9756 0.800781 25.092 0.800781 19.9998C0.800781 14.9076 2.82363 10.0241 6.42433 6.42335C10.025 2.82266 14.9086 0.799805 20.0008 0.799805C25.0929 0.799805 29.9765 2.82266 33.5772 6.42335C37.1779 10.0241 39.2008 14.9076 39.2008 19.9998ZM12.8008 15.1998C12.8008 14.5633 13.0536 13.9528 13.5037 13.5027C13.9538 13.0527 14.5643 12.7998 15.2008 12.7998C15.8373 12.7998 16.4477 13.0527 16.8978 13.5027C17.3479 13.9528 17.6008 14.5633 17.6008 15.1998V24.7998C17.6008 25.4363 17.3479 26.0468 16.8978 26.4969C16.4477 26.9469 15.8373 27.1998 15.2008 27.1998C14.5643 27.1998 13.9538 26.9469 13.5037 26.4969C13.0536 26.0468 12.8008 25.4363 12.8008 24.7998V15.1998ZM24.8008 12.7998C24.1643 12.7998 23.5538 13.0527 23.1037 13.5027C22.6536 13.9528 22.4008 14.5633 22.4008 15.1998V24.7998C22.4008 25.4363 22.6536 26.0468 23.1037 26.4969C23.5538 26.9469 24.1643 27.1998 24.8008 27.1998C25.4373 27.1998 26.0477 26.9469 26.4978 26.4969C26.9479 26.0468 27.2008 25.4363 27.2008 24.7998V15.1998C27.2008 14.5633 26.9479 13.9528 26.4978 13.5027C26.0477 13.0527 25.4373 12.7998 24.8008 12.7998Z"
                      fill="#06050C" />
                  </svg>

                  <svg v-else width="20" height="30" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.10986 0.336285C2.80867 0.135336 2.45858 0.019922 2.09694 0.00235559C1.7353 -0.0152108 1.37567 0.0657291 1.05642 0.236541C0.737176 0.407353 0.47029 0.661628 0.284238 0.972238C0.0981847 1.28285 -5.41651e-05 1.63814 2.24048e-08 2.00021V9.99985C-5.41651e-05 10.3619 0.0981847 10.7172 0.284238 11.0278C0.47029 11.3384 0.737176 11.5927 1.05642 11.7635C1.37567 11.9343 1.7353 12.0153 2.09694 11.9977C2.45858 11.9801 2.80867 11.8647 3.10986 11.6638L9.10959 7.66396C9.3835 7.48132 9.60808 7.23389 9.7634 6.94362C9.91873 6.65336 10 6.32924 10 6.00003C10 5.67082 9.91873 5.3467 9.7634 5.05644C9.60808 4.76617 9.3835 4.51874 9.10959 4.33611L3.10986 0.336285Z"
                      fill="#06050C" />
                  </svg>
                </div>
              </div>
              <audio controls controlslist="nodownload" class="w-full"
                autoplay>
                <source :src="player.item.attachment_url" type="audio/mpeg" />
                <div class="text-red-500 font-bold p-5 border-red-300">
                  Your device does not support audio
                </div>
              </audio>
            </div>
          </div>
        </div>
      </template>
      <div class="my-24 opacity-75" v-else>Nothing here, yet</div>
    </div>
  </div>
</template>
