<script lang="ts" setup>
import { useRouter } from 'vue-router'

import { useHead } from '@unhead/vue'

useHead({ title: `Tennessee Williams on Paul Bowles` })

const route = useRouter()
let header = document.getElementsByClassName('head');
window.addEventListener('scroll', function () {
  let window_top = this.scrollY;
  if (window_top == 0) {
    header[0].classList.remove('resize');
  } else {
    header[0].classList.add('resize');
  }
});
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">
          an allegory of man and his sahara - Tennessee Williams
        </h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div
        class="sticky top-0 my-10 py-5 bg-background-light dark:bg-background-dark head flex max-md:flex-col max-md:items-center gap-10">
        <img src="@/assets/imgs/Tennessee-Williams.png" class="md:w-1/3 h-auto transition-all" alt="Tennessee Williams" />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">
          an allegory of man and his sahara - Tennessee Williams
        </h1>
      </div>
      <div class="md:text-justify">
        <p class="mb-10">
          After several literary seasons given over, mostly, to the frisky antics of kids, precociously knowing and
          singularly charming, but not to be counted on for those gifts that arrive by no other way than the experience
          and contemplation of a truly adult mind, now is obviously the perfect time for a writer with such a mind to
          engage our attention. That is precisely the event to be celebrated in the appearance of The Sheltering Sky, Paul
          Bowles's first novel.
        </p>
        <p class="mb-10">
          It has been a good while since first novels in America have come from men in their middle or late thirties (Paul
          Bowles is thirty-eight). Even in past decades the first novel has usually been written during the writers' first
          years out of college. Moreover, because success and public attention operate as a sort of pressure cooker or
          freezer, there has been a discouraging tendency for the talent to bake or congeal at a premature level of inner
          development.
        </p>
        <p class="mb-20">
          In America, the career almost invariably becomes an obsession. The "get-ahead" principle, carried to such an
          extreme, inspires our writers to enormous efforts. A new book must come out every year. Otherwise they get
          panicky, and the first thing you know they belong to Alcoholics Anonymous or have embraced religion or have
          plunged headlong into some political activity with nothing but an inchoate emotionalism to bring to it or be
          derived from it. I think that this stems from a misconception of what it meant to be a writer or any kind of
          creative artist. They feel it is something to adopt in the place of actual living, without understanding that
          art is a by-product of existence.
        </p>
        <p class="mb-10">
          Paul Bowles has deliberately rejected that kind of rabid professionalism. Better known as a composer than a
          writer, he has not allowed his passion for either form of expression to interfere with his growth into
          completeness of personality. Now this book has come at the meridian of the man and artist. And, to me very
          thrillingly, it brings the reader into sudden, startling communion with a talent of true sophistication of a
          sort that I had begun to fear was to be found nowadays only among the insurgent novelists of France, such as
          Jean Genet and Albert Camus and Jean-Paul Sartre.
        </p>
        <p class="mb-10">
          With the hesitant exception of one or two war books by returning soldiers, The Sheltering Sky alone of the books
          that I have recently read by American authors appears to bear the spiritual imprint of recent history in the
          western world. Here the imprint is not visible upon the surface of the novel. It exists far more significantly
          in a certain philosophical aura that envelops it.
        </p>
        <p class="mb-10">
          There is a curiously double level to this novel. The surface is enthralling as narrative. It is impressive as
          writing. But above that surface is the aura that I spoke of, intangible and powerful, bringing to mind one of
          those clouds that you have seen in summer close to the horizon and dark in color and now and then silently
          pulsing with interior flashes of fire. And that is the surface of the novel that has filled me with such
          excitement.
        </p>
        <p class="mb-10">
          The story itself is a chronicle of startling adventure against a background of the Sahara and Arab-populated
          regions of the African continent, a portion of the world seldom dealt with by first-rate writers who actually
          know it. Paul Bowles does know it, and much better, for instance, than it was known by André Gide. He probably
          knows it better than Albert Camus. For Paul Bowles has been going to Africa, off and on, since about 1930. It
          thrills him, but for some reason it does not upset his nervous equilibrium. He does not remain in the coastal
          cities. At frequent intervals he takes journeys into the most mysterious recesses of the desert and mountain
          country of North Africa, involving not only hardship but peril.
        </p>
        <p class="mb-10">
          The Sheltering Sky is the chronicle of such a journey. Were it not for the fact that the chief male character,
          Port Moresby, succumbs to an epidemic fever during the course of the story, it would not be hard to identify him
          with Mr. Bowles himself. Like Mr. Bowles, he is a member of the New York intelligentsia who became weary of
          being such a member and set out to escape it in remote places. Escape it he certainly does. He escapes
          practically all the appurtenances of civilized modern life. Balanced between fascination and dread, he goes
          deeper and deeper into this dreamlike “awayness.”
        </p>
        <p class="mb-10">
          From then on the story is focused upon the continuing and continually more astonishing adventures of his wife,
          Kit, who wanders on like a body in which the rational mechanism is gradually upset and destroyed. The liberation
          is too intense, too extreme, for a nature conditioned by and for a state of civilized confinement. Her primitive
          nature, divested one by one of its artificial reserves and diffidences, eventually overwhelms her, and the end
          of this novel is as wildly beautiful and terrifying as the whole panorama that its protagonists have crossed.
        </p>
        <p class="mb-10">
          In this external aspect the novel is, therefore, an account of startling adventure. In its interior aspect, The
          Sheltering Sky is an allegory of the spiritual adventure of the fully conscious person into modern experience.
          This is not an enticing way to describe it. It is a way that might suggest the very opposite kind of a novel
          from the one that Paul Bowles has written. Actually this superior motive does not intrude in explicit form upon
          the story, certainly not in any form that will need to distract you from the great pleasure of being told a
          first-rate story of adventure by a really first-rate author.
        </p>
        <p class="mb-10">
          I suspect that a good many people will read this book and be enthralled by it without once suspecting that it
          contains a mirror of what is most terrifying and cryptic within the Sahara of moral nihilism, into which the
          race of man seems to be wandering blindly.
        </p>
        <p class="text-right mb-10 font-bold font-heading">
          Tennessee Williams<br />
          New York Times Book Review, December 4, 1949
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
