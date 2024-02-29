<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Archives` })
</script>
<template>
  <div class="">
    <div
      class="h-screen bg-background-light dark:primary dark:bg-background-dark relative bg-[url('@/assets/imgs/archive.png')]"
      style="background-size:cover;">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-white/80 dark:from-black/80 md:from-55% to-transparent flex flex-col justify-center items-start">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-title font-mono uppercase text-black dark:text-white-shade">Archives</h1>
          <p class="md:w-2/3 dark:text-white text-subtitle mt-1">
            Scores, manuscripts, letters—and links to archival collections at the universities of Delaware and Texas.
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
    <div class="px-5 py-10 lg:px-16 2xl:px-20 grid place-items-stretch gap-5 grid-cols-1 md:grid-cols-2">
      <a target="_blank" href="https://norman.hrc.utexas.edu/fasearch/findingAid.cfm?eadid=00141"
        class="flex flex-col bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
        <div class="flex flex-1 justify-center bg-primary rounded-xl">
          <img src="https://www.hrc.utexas.edu/images-root/logos/harry-ransom-center-logo.png" class="py-20" />
        </div>
        <div class="py-5 px-3">
          <h2 class="font-heading text-3xl">Paul Bowles:</h2>
          <p class="mt-2">An Inventory of His Collection at the Harry Ransom Center</p>
        </div>
      </a>
      <a target="_blank" href="https://findingaids.lib.udel.edu/repositories/2/resources/2228"
        class="flex flex-col bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
        <div class="flex justify-center flex-1 bg-primary rounded-xl">
          <img src="https://library.udel.edu/static/img/ud-logo-head.png" class="py-20" />
        </div>
        <div class="py-5 px-3">
          <h2 class="font-heading text-3xl">Paul Bowles collection</h2>
          <p class="mt-2">University of Delaware</p>
        </div>
      </a>
    </div>
  </div>
</template>
