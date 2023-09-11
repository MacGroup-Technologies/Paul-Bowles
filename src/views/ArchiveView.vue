<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Archives` })
</script>
<template>
  <div class="">
    <div
      class="h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center"
    >
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-55% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-8xl font-mono uppercase">Archives</h1>
          <p class="md:w-2/3 text-primary text-3xl mt-1">
            Scores, manuscripts, letters—and links to archival collections at the universities of Delaware and Texas.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20">
          <a
            href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75"
          >
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img
        src="@/assets/imgs/archive.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <a name="content" />
  </div>
</template>