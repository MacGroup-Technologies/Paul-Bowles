<script lang="ts" setup>
import { useHead } from "@unhead/vue"

useHead({ title: "Writings" })
</script>
<template>
  <div class="">
    <div
      class="mt-16 min-h-[400px] md:h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center">
      <img src="@/assets/imgs/imagehero-3.png" class="absolute top-0 right-0 w-full h-full object-cover" />
      <div class="cover__overlay" />
      <div class="h-full md:w-2/3 flex flex-col justify-center items-start relative">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-title font-mono uppercase">Writings</h1>
          <p class="md:w-2/3 dark:text-white text-subtitle mt-5">
            "His short stories are among the best ever written by an American". Gore Vidal
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 max-md:hidden">
          <a href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75">
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
    </div>
    <a name="content" />
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      By the time of his death in Tangier, Morocco, in 1999, Paul Bowles had become a legendary figure in modern literary
      culture. The range of his literary work includes poems, short stories, novels, travel writing, essays, music
      criticism, autobiography, and translations.
      <div class="mt-5 md:mt-10">
        <router-link to="/writings/list">
          <el-button type="primary" size="large" class="bg-primary" style="padding: 30px 35px;">Proceed to
            Writings</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
