<script lang="ts" setup>
import { useHead } from '@unhead/vue'
useHead({ title: `Paul Bowles' Translations` })
</script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:bg-background-dark relative bg-[url('@/assets/imgs/translation.png')]">
      <div
        class="h-full z-10 bg-background-light dark:bg-background-dark bg-opacity-60 dark:bg-opacity-60 flex flex-col justify-center items-start"
      >
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-5xl md:text-8xl font-mono uppercase text-black dark:text-white-shade">Translations</h1>
          <p class="md:w-2/3 text-primary text-3xl mt-5">
            Paul Bowles translated into English numerous works from the French, Spanish and
            Moghrebi.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 mt-8 md:mt-3">
          <a
            href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] text-black border-black dark:border-white-shade dark:text-white-shade hover:opacity-75"
          >
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
    </div>
    <a name="content" />
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      Paul Bowles was an active translator since his youth and rendered into English numerous works
      from French, Spanish and Moghrebi (Moroccan vernacular). Alongside a few samples of Bowles’s
      work as translator, this section features a recording of Ahmed Yacoubi telling one of his
      stories to Bowles in the Moroccan vernacular from Fez. Thanks to professor Abdelaziz Jadir, we
      also present a transcription of Yacoubi’s story both in Arabic and Latin characters.
    </div>
    <div class="px-5 pb-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:pb-20">
      Paul Bowles was an active translator since his youth and rendered into English numerous works
      from French, Spanish and Moghrebi (Moroccan vernacular). Alongside a few samples of Bowles’s
      work as translator, this section features a recording of Ahmed Yacoubi telling one of his
      stories to Bowles in the Moroccan vernacular from Fez. Thanks to professor Abdelaziz Jadir, we
      also present a transcription of Yacoubi’s story both in Arabic and Latin.
    </div>
    <div class="px-5 pb-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:pb-20">
      <router-link to="/translation/list">
        <el-button type="primary" size="large" class="bg-primary" style="padding: 30px 35px;">Proceed to Translations</el-button>
      </router-link>
    </div>
  </div>
</template>
