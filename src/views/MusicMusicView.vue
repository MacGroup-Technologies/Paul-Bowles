<!-- <script lang="ts" setup>
import { useRoute } from "vue-router";

const router = useRoute()

</script> -->
<template>
  <div class="">
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-8xl font-serif uppercase">Paul Bowles Music</h1>
        <router-link to="/music" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div
      class="flex gap-20 2xl:gap-48 justify-between text-center pt-28 lg:px-16 2xl:px-20 text-xl lg:text-2xl"
    >
      <router-link to="/music/songs" class="flex flex-col items-center gap-3">
        <div class="bg-primary-light w-80 px-20 py-28 rounded-md flex justify-center items-center">
          <icon-music />
        </div>
        Songs
      </router-link>
      <router-link to="/music/piano" class="flex flex-col items-center gap-3">
        <div class="bg-primary-light w-80 px-20 py-28 rounded-md flex justify-center items-center">
          <icon-music />
        </div>
        Works for Piano
      </router-link>
      <router-link to="/music/orchestra" class="flex flex-col items-center gap-3">
        <div class="bg-primary-light w-80 px-20 py-28 rounded-md flex justify-center items-center">
          <icon-music />
        </div>
        Chamber Works and Orchestra
      </router-link>
    </div>
    </div>
  </div>
</template>