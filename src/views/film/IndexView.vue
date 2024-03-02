<script lang="ts" setup>
import IconVideo from "@/components/icons/IconVideo.vue"
import { useHead } from '@unhead/vue'

useHead({ title: `Paul Bowles's Films` })
</script>
<template>
  <div class="">
    <div
      class="h-screen bg-background-light dark:primary dark:bg-background-dark relative bg-[url('@/assets/imgs/mobile-covers/Film.png')] lg:bg-[url('@/assets/imgs/imagehero-1.png')]"
      style="background-size:cover;">
      <div
        class="h-full z-10 bg-background-light dark:bg-background-dark bg-opacity-60 dark:bg-opacity-60 flex flex-col justify-center items-start">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-title font-mono uppercase text-black dark:text-white-shade">Film</h1>
          <p class="md:w-2/3 dark:text-white text-subtitle mt-5">
            Excerpts from a documentary and an experimental film, and a selected filmography.
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <router-link to="/clips/two-clips"
          class="block bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
          <div class="flex justify-center items-center p-12 bg-primary-light rounded-xl">
            <icon-video />
          </div>
          <div class="py-10 px-3">
            <h2 class="font-heading text-3xl">Two Clips</h2>
          </div>
        </router-link>
        <router-link to="/clips/documentaries"
          class="block bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
          <div class="flex justify-center items-center p-12 bg-primary-light rounded-xl">
            <icon-video />
          </div>
          <div class="py-10 px-3">
            <h2 class="font-heading text-3xl">A short selection of films based on the works of Paul Bowles/Documentaries
            </h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
