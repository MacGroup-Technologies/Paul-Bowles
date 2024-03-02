<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { getMorrocanMusic } from '@/services/misc'
import { useHead } from '@unhead/vue'
import { isEmpty } from 'lodash'

useHead({ title: `Paul Bowles's Morrocan Music` })

const music = reactive({ items: [] as any[] })
const player = reactive({ item: {} as any })

const audio = document.getElementsByTagName('audio') as any
const playState = ref('pause')

// const audio = ref(null) as any

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const fetchMoroccanMusic = async function () {
  await getMorrocanMusic()
    .then(async (response: any) => {
      music.items = response.data.results
      setLoading(false)
    })
    .catch((error: any) => {
      console.log(error)
      setError(error)
    })
  setLoading(false)
}

const playMusic = function () {
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

onMounted(async () => {
  await fetchMoroccanMusic()
})
</script>
<template>
  <div class="">
    <div
      class="h-screen bg-background-light dark:bg-background-dark relative flex items-center bg-[url('@/assets/imgs/mobile-covers/moroccan-music.png')] lg:bg-[url('@/assets/imgs/MoroccanMusic.png')]"
      style="background-size:cover;background-position:center,center;">
      <div
        class="h-full  z-10 bg-gradient-to-r from-white/80 dark:from-black/80 md:from-55% to-transparent flex flex-col justify-center items-start">
        <div class="p-5 lg:px-16 2xl:px-20 mt-38">
          <h1 class="text-title font-mono uppercase text-black dark:text-white-shade">Moroccan Music</h1>
          <p class="md:w-1/2 dark:text-white text-subtitle mt-5">
            In 1959 Paul Bowles traveled extensively across Morocco recording its traditional music.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20">
          <a href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] text-black border-black dark:border-white-shade dark:text-white-shade hover:opacity-75">
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
    </div>
    <a name="content" />
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <p class="mb-10">
        During a four-month field project sponsored by the Library of Congress with a grant from the
        Rockefeller Foundation, Paul Bowles traveled by car throughout Morocco in July 1959, to make
        recordings of the musical heritage of Morocco. Mohammed Larbi Djilali worked as guide and
        interpreter.
      </p>
      <div class="" v-if="music.items.length !== 0">
        <div
          class="flex flex-row md:items-center gap-3 md:gap-0 mb-3 py-5 cursor-pointer md:px-10 rounded-xl transition hover:bg-white hover:text-black hover:shadow"
          :class="{ 'bg-white text-black shadow': item.title === player.item.title }" v-for="(item, index) in music.items"
          :key="item.id" @click="player.item = item">
          <div class="w-10" v-if="item.title !== player.item.title">{{ index + 1 }}</div>
          <div class="w-10 flex items-center justify-center" @click="playMusic()" v-else>
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
            {{ item.title }}
          </div>
        </div>
        <div class="bg-black bg-opacity-10 md:w-1/3 p-5 rounded" v-if="!isEmpty(player.item)" :key="player.item.id">
          <div class="mb-3 flex items-center gap-5">
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
            <div class="w-10 flex items-center justify-center cursor-pointer" @click="playMusic()">
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
          <audio controls class="w-full" controlslist="nodownload" autoplay>
            <source :src="player.item.attachment_url" type="audio/mpeg" />
            <div class="text-red-500 font-bold p-5 border-red-300">Your device does not support audio</div>
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>
