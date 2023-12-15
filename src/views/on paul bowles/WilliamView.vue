<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: `Williams Burroughs on Paul Bowles` })

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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">William S. Burroughs</h1>
        <router-link
          to="#back"
          @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform"
        >
          <icon-back />
        </router-link>
      </div>
      <div
        class="sticky top-0 my-10 py-5 bg-background-light dark:bg-background-dark head flex gap-10"
      >
        <img
          src="@/assets/imgs/William-Burroughs.png"
          class="md:w-1/3 h-auto transition-all"
          alt="William S. Burroughs"
        />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">
          William S. Burroughs
        </h1>
      </div>
      <div class="text-justify">
        Paul Bowles is one of the most impeccably, almost inhumanly reserved men I have ever known,
        reminiscent of the subject of Edwin Arlington Robinson's poem, 'The Man Flamonde' — 'How was
        it that his charm revealed/Somehow the surface of a shield?'
        <p class="my-10">
          His writing is equally distinguished and special — the typhoid dream from The Sheltering
          Sky and the hashish delirium at the dead-end of Let It Come Down — these are among my
          favourite passages in contemporary writing.
        </p>
        <p class="mb-10">
          The end of The Sheltering Sky is a classic that can take its rightful place alongside the
          end of Fitzgerald's The Great Gatsby or the end of Joyce's story, 'The Dead'. As the
          crazed nymphomaniac Kit wanders away into the Native Quarter, the streetcar 'made a wide
          U-turn and stopped; it was the end of the line'. According to Bernardo Bertolucci, whose
          film version of The Sheltering Sky was released in late 1990, this ending is too heavy a
          note of despair for the visual end of a film; but for a book, it is masterful.
        </p>
        <p class="mb-10">
          There is about Paul's writing, at its best, a palpable darkness, like underexposed film,
          that fills the narrow North African streets, always darker and darkening... I am forever
          indebted to Paul, for his writing, which drew me to Tangier in 1953; and for his cherished
          friendship, then and since. I salute him at eighty-two years, as I did at forty-five.
        </p>
        <p class="text-right font-bold font-heading">
          William S. Burroughs<br />
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
