<script lang="ts" setup>
import { useHead } from '@unhead/vue'
useHead({ title: "Paul Bowles Music" })

const music = [
  {
    title: 'Songs',
    link: 'Songs'
  },
  {
    title: 'Works for Piano',
    link: 'Works for Piano'
  },
  {
    title: 'Chamber Works and Ochestra',
    link: 'Chamber Works and Orchesta'
  },
  {
    title: 'Film Music',
    link: 'Film Music'
  },
  {
    title: 'Incidental Music',
    link: 'Incidental Music'
  }
]
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-6xl font-heading uppercase">Paul bowles music</h1>
        <router-link to="/music" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-20 2xl:gap-48 justify-between py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl"
      >
        <router-link
          :to="'/music/paul-bowles-music/' + encodeURI(item.link)"
          class="flex flex-col items-center gap-3 text-center"
          v-for="(item, index) in music"
          :key="index"
        >
          <div
            class="bg-primary-light w-80 px-20 py-28 rounded-md flex justify-center items-center"
          >
            <icon-music />
          </div>
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>
