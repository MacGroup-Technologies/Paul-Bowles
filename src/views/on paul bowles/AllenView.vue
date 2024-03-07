<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: `Allen Ginsberg on Paul Bowles` })

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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">Allen Ginsberg</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div
        class="sticky top-0 my-10 py-5 bg-background-light dark:bg-background-dark head flex max-md:flex-col max-md:items-center gap-10">
        <img src="@/assets/imgs/Allen-Ginsberg.png" class="md:w-1/3 h-auto transition-all" alt="Allen Ginsberg" />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">Allen Ginsberg</h1>
      </div>
      <div class="">
        <h2 class="uppercase font-heading text-4xl">
          Allen Ginsberg to Jack Kerouac, May 31, 1957
        </h2>
        <p class="my-10">
          "Paul Bowles arrived three weeks ago and came calling, with (Ahmed) Yacoubi, who is a
          young, handsome, good humored Arab about twenty-five, sits in Paris Cafe relaxing in
          sports shirt bought in India and whistles at girls. Bowles laid on us some Tanganyika T
          and said Kenya was armed starving concentration camp for natives. Peter (Orlovsky) and I
          been over visiting his place and all very friendly, he took me out to escargot and talked
          about Gertrude Stein and we went over his house and (Alan) Ansen fell asleep on the couch
          at 3 AM and he played Indian music on tape and rolled huge bombers and talked medicine
          with Bill....Bowles wears nylon suits and is very intelligent and sounds like Bill Keck
          (sic), tho' he's small and has nervous stomach and Bill is going to teach him opium and he
          has blonde close hair..."
        </p>
        <h2 class="uppercase font-heading text-4xl">
          Allen Ginsberg to Jack Kerouac, May 31, 1957
        </h2>
        <p class="my-10">
          "...Gave Bowles my last copy (of Howl). He's been very nice, dug the poetry, still follows
          little magazines where he can get them. Add him perhaps to your list —next time you send
          out a list of works. He isn't sinister; his life is safe and rather comfortable; but I
          suspect he would like to make it on wilder greater level. He reads WCW (William Carlos
          Williams) and would maybe order Kora In Hell.
        </p>
        <p class="text-right font-heading">Allen Ginsberg</p>
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
