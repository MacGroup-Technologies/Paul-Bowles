<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Paul Bowles' Biography` })
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
          <h1 class="text-8xl font-mono uppercase">Biography</h1>
          <p class="md:w-2/3 text-primary text-3xl mt-5">
            A night with thunder in the sky he packed his bag and left...
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
        src="@/assets/imgs/paul-bowles.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <a name="content" />
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 text-justify">
      “A night with thunder in the sky he packed his bag and left,” Paul Bowles wrote in a short
      autobiographical piece in 1986&#8212;referring to an escape from his parents’ home in New York City
      to Paris in 1929, at the age of eighteen, after tossing a coin to decide whether he should
      travel to Europe or commit suicide. At the time he had already seen some of his poems
      published in <i>transition</i>, the experimental literary journal published in Paris from 1927
      till 1938, and he was also an aspiring composer. <br /><br />
      His long creative life oscillated between writing words&#8212;poems, short stories, novels,
      travel–and composing music–songs, piano pieces, concertos, ballets, scores for theater and
      film.
      <br /><br />
      Curiosity drove him to move across the surface of the earth, even when he had scarce material
      means, from Latin America to North Africa and South Asia, and both his literature and his
      music carry the marks of his extensive travels.
      <br /><br />
      A free and fearless spirit&mdash;as some of his friends described him&mdash;he experimented in several
      kinds of transgression, and in his work and private life he made few concessions to
      convention.
      <br /><br />
      Toward the end he liked to claim he had no ego, that the accidents in the life of a creative
      artist are of no import, that only the work matters.
    </div>
    <p class="px-5 lg:px-16 2xl:px-20 text-xl lg:text-2xl text-justify text-primary font-bold font-heading">
      Rodrigo Rey Rosa
    </p>
  </div>
</template>
