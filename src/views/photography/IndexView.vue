<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { fetchFilms } from '@/services/films';


const photography = reactive({items: []})

const fetchPhotography = async function() {
  setLoading(true)
  await fetchFilms("photography").then((response) => {
    photography.items = response.data.results
    setLoading(false)
  }).catch((error) => {
    setLoading(false)
    setError(error)
  })
}

const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function(val: string) {
  useThemeStore().updateError(val)
}

onMounted(async () => {
  await fetchPhotography();
})
</script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-50% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 mt-24 lg:px-16 2xl:px-20">
          <h1 class="text-5xl md:text-8xl font-mono uppercase">Photography</h1>
          <p class="md:w-1/2 text-primary text-3xl mt-5">
            A selection of travel photography by Bowles, and portraits of Bowles, relatives, and friends.
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
        src="@/assets/imgs/photography.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <a name="content" />
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <router-link :to="'/photography/' + encodeURI(item.title)" class="block p-2 bg-primary-light rounded-3xl transition-transform hover:-translate-y-3" v-for="item in photography.items" :key="item.id">
          <img :src="'https://res.cloudinary.com/dbrvleydy/' + item.image" class="w-full h-auto md:h-96 rounded-3xl" />
          <h2 class="text-background-dark m-5 mt-7">{{ item.title }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>