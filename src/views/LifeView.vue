<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Paul Bowles's Life` })
</script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-white/80 dark:from-black/80 md:from-55% to-transparent flex flex-col justify-center items-start">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-title font-mono uppercase">Life</h1>
          <p class="md:w-2/3 dark:text-white text-subtitle mt-5">
            A night with thunder in the sky he packed his bag and left…
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20">
          <a href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75">
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img src="@/assets/imgs/imageimage.png" class="absolute top-0 right-0 w-full h-full object-cover " />
    </div>
    <a name="content" />
    <div class="px-5 py-10 lg:px-16 2xl:px-20 grid place-items-stretch gap-5 grid-cols-1 md:grid-cols-2">
      <router-link to="/biography"
        class="block bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
        <div class="flex justify-center items-center bg-primary-light rounded-xl">
          <img src="@/assets/imgs/Biography-Thumbnail.png" />
        </div>
        <div class="py-5 px-3">
          <h2 class="font-heading text-3xl">Synthetic Biography</h2>
        </div>
      </router-link>
      <router-link to="/chronology"
        class="block bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
        <div class="flex justify-center items-center bg-primary-light rounded-xl">
          <img src="@/assets/imgs/Chronology-Thumbnail.png" />
        </div>
        <div class="py-5 px-3">
          <h2 class="font-heading text-3xl">Chronology</h2>
          <p class="mt-2">December 30, 1910 &mdash; November 18th, 1999</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
