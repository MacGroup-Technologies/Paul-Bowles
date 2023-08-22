<script lang="ts" setup>
import IconVideo from "@/components/icons/IconVideo.vue"
</script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-55% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-8xl font-mono uppercase">Film</h1>
          <p class="md:w-2/3 text-primary text-3xl mt-5">
            Excerpts from a documentary and an experimental film, and a selected filmography.
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
        src="@/assets/imgs/imagehero-1.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <a name="content" />
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="grid grid-cols-2 gap-5">
        <router-link to="/clips/two-clips" class="block bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
          <div class="flex justify-center items-center p-12 bg-primary-light rounded-xl">
            <icon-video />
          </div>
          <div class="py-10 px-3">
            <h2 class="font-heading text-3xl">Two Clips</h2>
          </div>
        </router-link>
        <router-link to="/clips/documentaries" class="block bg-white dark:bg-opacity-10 hover:-translate-y-2 transition-transform p-5 rounded-xl">
          <div class="flex justify-center items-center p-12 bg-primary-light rounded-xl">
            <icon-video />
          </div>
          <div class="py-10 px-3">
            <h2 class="font-heading text-3xl">A short selection of films based on the works of Paul Bowles/Documentaries</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>