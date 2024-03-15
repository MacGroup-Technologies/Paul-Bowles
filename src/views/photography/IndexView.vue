<script lang="ts" setup>
import { reactive } from 'vue';
import { useHead } from '@unhead/vue'

useHead({ title: `Paul Bowles's Photography` })
import Potrait from '@/assets/imgs/CherieNutting.jpg';
import PaulBowlesArchieve from '@/assets/imgs/PaulBowlesArchive.jpg';


const photography = reactive([
  {
    id: 2,
    title: 'Paul Bowles Archive at Fotostiftung Schweiz',
    image: PaulBowlesArchieve,
  },
  {
    id: 0,
    title: 'Portraits by Cherie Nutting',
    image: Potrait,
  },
])

</script>
<template>
  <div class="">
    <div
      class="mt-16 min-h-[400px] md:h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center">
      <img src="@/assets/imgs/mobile-covers/Photography.png"
        class="md:hidden absolute top-0 right-0 w-full h-full object-cover" />
      <img src="@/assets/imgs/photography.png" class="max-md:hidden absolute top-0 right-0 w-full h-full object-cover" />
      <div class="cover__overlay" />
      <div class="h-full md:w-2/3 flex flex-col justify-center items-start relative">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-title font-mono uppercase">Photography</h1>
          <p class="md:w-2/3 dark:text-white text-subtitle mt-5">
            A selection of travel photography by Bowles, and portraits of Bowles, relatives, and friends.
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <router-link :to="'/photography/' + encodeURI(item.title)"
          class="group/image block p-2 bg-primary-light rounded-3xl transition-transform hover:-translate-y-3"
          v-for="(item, index) in photography" :key="index">
          <div class="w-full h-[500px] bg-center bg-no-repeat bg-cover rounded-3xl"
            :style="`background-image: url(${item.image})`" />
          <h2 class="text-background-dark m-5 mt-7">
            {{ item.title }}
            <span v-if="item.id == 0"
              class="md:group-hover/image:opacity-100 md:opacity-0 transition-opacity block text-sm">
              Photo of Paul Bowles and Cherie Nutting by Jeffrey Miller
            </span>
          </h2>
        </router-link>
      </div>
    </div>
  </div>
</template>
