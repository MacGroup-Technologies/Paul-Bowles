<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: `Patricia Highsmith on Paul Bowles` })

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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">
          a north african encounter - Patricia Highsmith
        </h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div
        class="sticky top-0 my-10 py-5 bg-background-light dark:bg-background-dark head flex max-md:flex-col max-md:items-center gap-10">
        <img src="@/assets/imgs/Patricia-Highsmith.png" class="md:w-1/3 h-auto transition-all" alt="Patricia Highsmith" />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">
          a north african encounter - Patricia Highsmith
        </h1>
      </div>
      <div class="">
        <p class="mb-10">
          Paul Bowles has his own way of doing things. It is hard to imagine a New Yorker falling in
          love with Tangier and choosing to spend most of his life there, in a city where the
          telephone (Paul's anyway) doesn't work because of inefficient repair jobs; in a building
          where the lift works when it wants to, and the concierge is said to be illiterate in any
          language; where the two dozen post-boxes on an inner wall downstairs have long ago been
          rendered useless by hammer or axe. Paul takes a walk twice a day, and on at least one of
          his walks picks up his post at the Socco. He is not the recluse that is rumoured. With
          regular and balanced meals and a glass of water as beverage, Paul is still going strong.
        </p>
        Perhaps it is the fatalism and the otherness of Morocco, depressing and dismaying to so
        many, that attracts Paul. One has the feeling that Paul Bowles sees life as it is:
        meaningless in the long run, sees humans as indifferent to suffering and death as is mother
        nature herself. Paul looks at this steadily, and tells it simply.
        <p class="my-10">
          August 1988
          <br /><br />
          I went to Tangier for the first time. A friend had said to me: 'I hope you see Paul Bowles
          when you're there because Tangier without Paul wouldn't be Tangier.' Certainly it wouldn't
          for American writers, young writers from all over, who may not have an introduction, or
          may lack the audacity to ask where Paul lives, the courage to knock, once they find out.
          Knock is what one must do, because he's cut his telephone off: the repair jobs were never
          adequate, and the telephone bills had to be paid anyway. 'Or you can't leave the country,'
          says Paul. 
        </p>
        <p class="mb-10">
          As it happened, my hostess was not in when I arrived, and Paul lives in the same
          five-storey building. Ringing her bell brought no response. 'You want Paul' —, said one of
          the two Moroccan women, dwellers in the building, who had accompanied me to my hostess's
          apartment door. They thought that I surely wanted Paul. All, such as I, want Paul. I knew
          him slightly from years back, when I lived in New York, and he knows my hostess. So I was
          admitted by a Moroccan who happened to be in Paul's apartment at the time, and Paul
          hospitably received me, even though he was having a solitary dinner then. 
        </p>
        <p class="mb-10">
          Tangier to me might well be Mars, Jupiter or the moon. The tempo of existence, as I was to
          learn in the next days, the connection with others — all this is different. As so it was
          odd that first evening, and later, to hear Paul speaking in more or less the same accent
          as mine, yet to realize that his existence is so different. 
        </p>
        <p class="mb-10">
          He has an efficient-looking tape-recorder in his bedroom, into which he records people
          speaking Arabic, and later translates it. In his entrance hall a stack of some ten old,
          dusty and perhaps nostalgic suitcases seems in slight danger of toppling. It’s a darkish
          apartment, well curtained, full of personal atmosphere, shelves of books, as if he wants
          to draw within himself a concentration of his thoughts and experiences. This contrasts
          oddly with his openness to outsiders, rank strangers. He listens, he translates, he cares
          about them. He finds time for them. But he is perhaps more selective than I know. When I
          encounter him walking in the neighbourhood — as I did several times in the week I was
          there — he is always in the company of a young writer or two. It is as if these strangers,
          writers, young people gather round Paul, saying: 'Tell us about life, about your life.
          What does life mean? What does my life mean?' 
        </p>
        <p class="mb-10">
          Paul sees life with a reality and an honesty. He is open-eyed to human sadism, to
          merciless killing of man or beast by beast or man, open-minded to the meaninglessness of
          it all. Maybe that is why the young people and the not-so-young cluster round him,
          knocking on his door, slipping notes under it. ‘Can we talk with you, Paul? Tell us the
          truth.’ 
        </p>
        <p class="mb-10">
          Now back in the antipodes (Switzerland), where I live, I think of question after question
          I'd like to ask Paul, and shall by letter. He will have the patience to answer. He gives a
          lot to other people.
        </p>
        <p class="text-right font-bold mb-10 font-heading">
          Patricia Highsmith
          <br />
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
