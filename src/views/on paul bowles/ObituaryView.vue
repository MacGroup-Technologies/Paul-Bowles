<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: `The Economist on Paul Bowles` })

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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">the economist</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div class="sticky top-0 my-10 py-5 bg-background-light dark:bg-background-dark head flex gap-10">
        <img src="@/assets/imgs/Paul-Bowles-obituary.png" class="md:w-1/3 h-auto transition-all"
          alt="Paul Bowles obituary via The Economist" />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">the economist</h1>
      </div>
      <div class="text-justify">
        <h2 class="uppercase font-heading text-4xl">
          Paul Bowles, “the only American existentialist,” died on November 18th, aged 88
        </h2>
        <div class="my-10">
          When he was six weeks old, Paul Bowles was undressed by his father and placed naked in a
          wicker cot on the third-storey windowsill of a brownstone in Queens during a snowstorm.
          Only the intervention of his maternal grandmother, who heard his cries of distress and
          rushed to the rescue, saved “the only American existentialist” from certain death in
          babyhood.
          <p class="mb-5">
            This may or may not have actually happened. Young Paul so hated his father Claude, a New
            York dentist whose “mere presence meant misery,” that he was prepared to believe him
            capable of anything, even attempted infanticide. It was also just the sort of horror
            story that excited Paul Bowles's imagination.
          </p>
          <p class="mb-5">
            A fascination with macabre cruelty suffuses his fiction—a fascination initially inspired
            in him by the tales of Edgar Allan Poe he read as a boy. Indeed, so enthralled was young
            Bowles by Poe, that he enrolled as a student at the University of Virginia in
            Charlottesville only because his hero had gone there.
          </p>
          <p class="mb-5">
            As a composer of ballet music and the incidental music for films and plays, including
            Tennessee Williams's The Glass Menagerie and Sweet Bird of Youth, Mr Bowles continued to
            be influenced by American music, particularly the music of his early patron, and perhaps
            lover, Aaron Copland. But in his politics and, except for Poe, in his writing he
            increasingly sought inspiration from elsewhere, especially from the writers, artists and
            intellectuals he got to know in Paris and Berlin in the early 1930s. They included Gide,
            Auden, Isherwood, Cocteau and Gertrude Stein.
          </p>
          <p class="mb-5">
            As a then very impressionable youth, he veered to the Stalinist left. Such was his
            zealotry, he commissioned, at his own expense, 15,000 stickers for distribution in
            Mexico that called for the death of the exiled Trotsky.
          </p>
          <p class="mb-5">
            When he was six weeks old, Paul Bowles was undressed by his father and placed naked in a
            wicker cot on the third-storey windowsill of a brownstone in Queens during a snowstorm.
            Only the intervention of his maternal grandmother, who heard his cries of distress and
            rushed to the rescue, saved “the only American existentialist” from certain death in
            babyhood.
          </p>
          <p class="mb-5">
            This may or may not have actually happened. Young Paul so hated his father Claude, a New
            York dentist whose “mere presence meant misery,” that he was prepared to believe him
            capable of anything, even attempted infanticide. It was also just the sort of horror
            story that excited Paul Bowles's imagination.
          </p>
          <p class="mb-5">
            A fascination with macabre cruelty suffuses his fiction—a fascination initially inspired
            in him by the tales of Edgar Allan Poe he read as a boy. Indeed, so enthralled was young
            Bowles by Poe, that he enrolled as a student at the University of Virginia in
            Charlottesville only because his hero had gone there.
          </p>
          <p class="mb-5">
            As a composer of ballet music and the incidental music for films and plays, including
            Tennessee Williams's The Glass Menagerie and Sweet Bird of Youth, Mr Bowles continued to
            be influenced by American music, particularly the music of his early patron, and perhaps
            lover, Aaron Copland. But in his politics and, except for Poe, in his writing he
            increasingly sought inspiration from elsewhere, especially from the writers, artists and
            intellectuals he got to know in Paris and Berlin in the early 1930s. They included Gide,
            Auden, Isherwood, Cocteau and Gertrude Stein.
          </p>
          As a then very impressionable youth, he veered to the Stalinist left. Such was his
          zealotry, he commissioned, at his own expense, 15,000 stickers for distribution in Mexico
          that called for the death of the exiled Trotsky.
        </div>
        <h2 class="uppercase font-heading text-4xl">Dark ideas in a bright light</h2>
        <div class="my-10">
          After the second world war, Mr Bowles, by then relatively apolitical, left America to live
          in Morocco. There, in Tangiers, he wrote The Sheltering Sky, a classic often listed among
          the great novels of the 20th century. As succinctly summarised by the author himself, it
          is “an adventure story in which the adventures take place on two planes simultaneously: in
          the actual desert, and in the inner desert of the spirit.”
          <p class="my-5">
            For some reason, the novel is more highly regarded in Europe than America. It may be
            that Mr Bowles's bleak world is more accessible to societies that experienced the full
            horrors of two world wars. Like other atheistic existentialists, Mr Bowles put no store
            in a compassionate God, let alone the innate goodness of man. His characters are, as a
            British critic, Melvyn Bragg, says, “acted upon rather than acting for themselves”;
            often westerners at the mercy of unpredictable events in incomprehensible Arab lands.
          </p>
          <p class="my-5">
            When Mr Bowles handed in the manuscript of The Sheltering Sky to Doubleday, the New York
            publishing house said it “unhesitatingly rejected it.” The author, it complained, had
            contracted for a novel and produced something else. After coming out first in England,
            the book was eventually published in the United States in 1949 amid much critical
            acclaim, orchestrated by a rave review by Tennessee Williams in the New York Times.
          </p>
          <p class="my-5">
            For 40 years, this marked the peak of Mr Bowles's career as a writer. Other novels as
            well as collections of sometimes Gothic short stories followed, but his literary fame
            was eclipsed by his cult status. Most unfairly, he and his wife, Jane, an author in her
            own right and a late convert to Catholicism, came to be seen as mere celebrities. In the
            public imagination, they personified the louche life of the “Tangerines”—a colony of
            drug-addicted, sexually predatory and generally decadent western would-be writers and
            intellectuals in Tangiers.
          </p>
          <p class="my-5">
            Most of the leading lights of the American “Beat Generation” called at Mr Bowles'
            apartment in Tangiers. So did visiting journalists in search of a quote and a colourful
            personality. He nearly always treated them courteously, yet he gave little of himself
            away. His autobiography, Without Stopping, was just as reticent. In reviewing it,
            William Burroughs, the author of The Naked Lunch and a close friend, mischievously
            retitled it “Without Telling.”
          </p>
          <p class="my-5">
            His books continued to be read in Europe but in the United States his literary
            reputation was remaindered by the time his wife, a lesbian to whom he was devoted, died
            in 1973. The label he was stuck with, “the only American existentialist,” served to
            confirm the foreignness of his ideas in the minds of his fellow Americans.
          </p>
          <p class="my-5">
            Cult status seemed to be his lot when Bernardo Bertolucci, an Italian film director,
            rescued his literary reputation. Mr Bertolucci's film version of The Sheltering Sky,
            starring John Malkovich and with Mr Bowles himself in a cameo role, opens the story out
            and romanticises the characters. Mr Bowles thought it “awful” but it inspired Americans
            again to read his long forgotten masterwork.
          </p>
          <p class="my-5">
            The rest of Mr Bowles's fiction remains largely neglected. He seems destined, like
            Malcolm Lowry (Under the Volcano) and Jack Kerouac (On the Road), to be remembered
            mainly for one novel. Mr Bertolucci's 1990 film gave it legs, but it is a great one.
          </p>
          <p class="text-right my-5 font-heading font-bold">
            This article appeared in the obituary section of  the Economist (print edition),<br />
            November 27, 1999, under the headline "Paul Bowles."
          </p>
        </div>
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
