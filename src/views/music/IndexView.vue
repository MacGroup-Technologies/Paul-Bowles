<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Paul Bowles's Music` })

const music = [
  {
    title: "Paul Bowles's Music",
    link: 'paul-bowles-music'
  },
  {
    title: "Musical Portraits",
    link: 'musical-portraits'
  },
  {
    title: "On Paul Bowles's Music",
    link: 'on-paul-bowless-music'
  },
  {
    title: "Paul Bowle's Musical Works",
    link: 'paul-bowless-musical-works'
  },
]
</script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-white/80 dark:from-black/80 md:from-55% to-transparent flex flex-col justify-center items-start">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-8xl font-mono uppercase">Music</h1>
          <p class="md:w-2/3 text-primary text-3xl mt-10">
            Bowles composed orchestral works, piano pieces, and numerous songs.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 mt-8 md:mt-3">
          <a href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75">
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img src="@/assets/imgs/imagehero-4.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-right-top" />
    </div>
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <a name="content" />
      Paul Bowles wrote music that encompassed a broad variety of genres, including scores for
      theater, opera, ballet, and chamber music; soundtracks for art films; piano compositions and
      experimental sound recordings, particularly those of a style often referred to as musique concrete.
      concrète.
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-20 2xl:gap-48 justify-between py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl">
      <router-link :to="'/music/' + encodeURI(item.link)" class="flex flex-col items-center gap-3"
        v-for="(item, index) in music" :key="index">
        <img src="@/assets/imgs/music-thumbnail.png" alt="">
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>
