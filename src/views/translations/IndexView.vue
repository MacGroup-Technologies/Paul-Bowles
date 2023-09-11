<script lang="ts" setup>
import { useHead } from '@unhead/vue'
useHead({ title: `Paul Bowles' Translations` })
</script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-55% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-5xl md:text-8xl font-mono uppercase">Translations</h1>
          <p class="md:w-2/3 text-primary text-3xl mt-5">
            Paul Bowles translated into English numerous works from the French, Spanish and
            Moghrebi.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 mt-8 md:mt-3">
          <a
            href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75"
          >
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img
        src="@/assets/imgs/translation.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
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
        <el-button type="primary" size="large">Proceed to Translations</el-button>
      </router-link>
    </div>
  </div>
</template>
