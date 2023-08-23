<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted, reactive, watch } from 'vue';
import { fetchMusicPhotoAlt, fetchOnPaulBowlesMusic } from "@/services/music";
import { useThemeStore } from '@/stores/theme';

const router = useRoute()

const music = reactive({ items: [] })


const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function(val: string) {
  useThemeStore().updateError(val)
}
const getMusic = async function() {
  try {
    let response;
    if (router.params.title === "On Paul Bowles's Music") {
      response = await fetchOnPaulBowlesMusic();
    } else if (router.params.title === "Paul Bowles's Music") {
      response = await fetchMusicPhotoAlt("Paul Bowles Music");
    }else {
      response = await fetchMusicPhotoAlt(router.params.title);
    }
    music.items = response.data.results
    setLoading(false)
  } catch(error) {
    setError(error)
    console.log(error)
  }
}

watch(router, () => {
  setLoading(true)
  getMusic()
})

onMounted(async () => {
  await getMusic();
})
</script>
<template>
  <div class="">
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-6xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link to="/music" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center pt-28 lg:px-16 2xl:px-20 text-xl lg:text-2xl"
        v-if="music.items.length !== 0"
      >
        <router-link
          :to="`/music/${router.params.title === 'Paul Bowles\'s Music' ? 'music/' : 'book/'}${item.title}`"
          class="flex flex-col items-center gap-3"
          v-for="item in music.items" :key="item.id"
        >
          <div class="bg-primary-light w-80 px-20 py-28 rounded-md flex justify-center items-center">
            <icon-music />
          </div>
          {{ item.title }}
        </router-link>
      </div>
      <div class="py-20" v-else>
        Nothing here
      </div>
    </div>
  </div>
</template>