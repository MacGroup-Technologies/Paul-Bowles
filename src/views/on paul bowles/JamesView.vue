<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: `James Purdy on Paul Bowles` })

const route = useRouter()
let header = document.getElementsByClassName('head')
window.addEventListener('scroll', function () {
  let window_top = this.scrollY
  if (window_top == 0) {
    header[0].classList.remove('resize')
  } else {
    header[0].classList.add('resize')
  }
})
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">James Purdy</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div class="sticky top-0 my-10 py-5 bg-background-light dark:bg-background-dark head flex gap-10">
        <img src="@/assets/imgs/James-Purdy-main.png" class="md:w-1/3 h-auto transition-all rounded-xl"
          alt="James Purdy" />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">
          James Purdy
        </h1>
      </div>
      <div class="text-justify">
        Carl Van Vechten invited me to meet Paul Bowles one evening. I was at the beginning of my own career as a writer,
        and was a bit nervous at meeting so mysterious and legendary a figure as Mr Bowles. My apprehension was put at an
        end when I met him. He seemed like a quiet, very dignified and kind man, perhaps like a doctor of medicine. It was
        also heartening to learn that he admired my first book, 63: Dream Palace, which had recently appeared for the
        first time in England. 
        <p class="my-10">
          Since our meeting in Carl Van Vechten's house, we have been in steady correspondence. One of the most
          interesting things about Paul Bowles is his reserve and distance. Since my meeting with him so long ago nothing
          has changed that reserve and distance. His letters and our infrequent meetings are always like the first time,
          framed in the same cordial but distant and formal character as that of our first meeting in New York City.
        </p>
        <p class="text-right font-heading">
          James Purdy <br />
          Paul Bowles by His Friends, Peter Owen, London, 1992
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.resize {
  padding-top: 100px;

  & img {
    width: 200px;
    height: auto;
  }

  & .hidden {
    display: block;
  }
}
</style>
