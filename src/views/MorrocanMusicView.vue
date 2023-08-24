<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { getMusicTag, getBookTag } from "@/services/misc";


const music = reactive({items: {}})
const book = reactive({items: {}})

const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function(val: string) {
  useThemeStore().updateError(val)
}

const fetchMoroccanMusic = async function() {
  await  getMusicTag("Moroccan Music").then(async (response) => {
    music.items = response.data.results
    await getBookTag("Moroccan Music").then((response) => {
      book.items = response.data.results
    })
    setLoading(false)
  }).catch((error) => {
    console.log(error)
    setError(error);
  })
}


onMounted(() => {
  fetchMoroccanMusic()
})
</script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-50% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 mt-24 lg:px-16 2xl:px-20">
          <h1 class="text-5xl md:text-8xl font-mono uppercase">moroccan music</h1>
          <p class="md:w-1/2 text-primary text-3xl mt-5">
            In 1959 Paul Bowles traveled extensively across Morocco recording its traditional music.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 mt-5">
          <a
            href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75"
          >
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img
        src="@/assets/imgs/MoroccanMusic.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <a name="content" />
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <p class="mb-10">
        During a four-month field project sponsored by the Library of Congress with a grant from the Rockefeller Foundation, Paul Bowles traveled by car throughout Morocco in July 1959, to make recordings of the musical heritage of Morocco. Mohammed Larbi Djilali worked as guide and interpreter.
      </p>
      <div class="" v-if="music.items.length !== 0">
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
      <div class="mt-20 md:flex gap-5 items-center" v-if="book.items.length !== 0">
        <div class="flex items-center md:w-1/2 gap-5" v-for="item in book.items" :key="item.id">
          <img :src="'https://res.cloudinary.com/dbrvleydy/' + item.cover_image" class="w-52 h-auto" />
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>