<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive, watch } from 'vue';
import { fetchMusicBookAlt } from "@/services/music";
import { useThemeStore } from '@/stores/theme';

const router = useRoute()
const route = useRouter()

const music = reactive({ items: [] })


const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function(val: string) {
  useThemeStore().updateError(val)
}
const getMusic = async function() {
  try {
    const response = await fetchMusicBookAlt(router.params.title);
    music.items = response.data.results
    setLoading(false)
  } catch(error) {
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
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-8xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link to="#back" @click.prevent="route.go(-1)" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div v-if="music.items.length !== 0">
        <pre class="mt-10 text-justify">
          {{ music.items[0].description }}
        </pre>
        <div class="mt-10 flex items-start gap-10">
          <div class="" v-for="img in music.items[0].image" :key="img.id">
            <img :src="img.image" class="w-auto h-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
pre {
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>