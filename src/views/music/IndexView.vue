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
    title: "Paul Bowles's Musical Works",
    link: 'paul-bowless-musical-works'
  },
]
</script>
<template>
  <div class="">
    <div
      class="mt-16 min-h-[400px] md:h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center">
      <img src="@/assets/imgs/imagehero-4.png" class="absolute top-0 right-0 w-full h-full object-cover" />
      <div class="cover__overlay" />
      <div class="h-full md:w-2/3 flex flex-col justify-center items-start relative">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-title font-mono uppercase">Music</h1>
          <p class="md:w-2/3 dark:text-white text-subtitle mt-5">
            Bowles composed orchestral works, piano pieces, and numerous songs.
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
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <a name="content" />
      Paul Bowles wrote music that encompassed a broad variety of genres, including scores for
      theater, opera, ballet, and chamber music; soundtracks for art films; piano compositions and
      experimental sound recordings, particularly those of a style often referred to as musique concrete.
      concrète.
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-20 2xl:gap-48 justify-between py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl text-center">
      <router-link :to="'/music/' + encodeURI(item.link)" class="relative flex flex-col items-center gap-3"
        v-for="(item, index) in music" :key="index">

        <div class="relative inline-flex mx-auto">
          <img src="@/assets/imgs/music-thumbnail-blank.png" alt="">
          <div class="absolute grid place-items-center inset-0 px-2 cursor-pointer text-black">
            <p class="mt-auto pb-10"> {{ item.title }} </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
