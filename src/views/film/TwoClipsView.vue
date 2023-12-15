<script lang="ts" setup>
import { fetchTwoClips } from "@/services/films";
import { onMounted, reactive } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { useHead } from '@unhead/vue'

useHead({ title: `Two Clips` })


const clips = reactive({items: [] as any})
const pagination = reactive({
  next: null,
  previous: null
})


const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function(val: string) {
  useThemeStore().updateError(val)
}
const getTwoClips = async function () {
  try {
    const response = await fetchTwoClips();
    clips.items = response.data.results
    pagination.next = response.data.next
    pagination.previous = response.data.previous
    setLoading(false)
  } catch (error: any) {
    setError(error)
    console.log(error);
  }
}

onMounted(() => {
  getTwoClips()
})
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-6xl font-heading uppercase">two clips</h1>
        <router-link to="/clips" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
    </div>
    <div class="px-5 py-10 lg:px-16 2xl:px-20 grid place-items-stretch gap-5 grid-cols-1 md:grid-cols-2">
      <template v-for="item in clips.items" :key="item.id">
        <div class="block bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl" v-if="item.attachment_url">
          <div class="flex justify-center items-center bg-primary-light rounded-xl">
            <video class="w-full h-auto rounded-xl" preload="metadata" controls>
              <source :src="item.attachment_url + '#t=0.1'" type="video/mp4">
            </video>
          </div>
          <div class="py-5 px-3">
            <h2 class="font-heading text-3xl">{{ item.title }}</h2>
            <p class="mt-2">{{ item.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>