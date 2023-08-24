<script lang="ts" setup>
import { useRouter } from 'vue-router'

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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">Bowles and i - Rodrigo Rey Rosa</h1>
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
          src="@/assets/imgs/Rey-Rosa.png"
          class="md:w-1/3 h-auto transition-all"
          alt="Rodrigo Rey Rosa"
        />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">
          Bowles and i - Rodrigo Rey Rosa
        </h1>
      </div>
      <div class="text-justify">
        It’s been 29 years since I first set foot in Tangier. “It looks like Sicily, with a touch of
        Greece and the south of Spain, without the camels,” I thought, half-asleep, pressing my head
        against the window of an old school bus that was taking me, together with 50 or so North
        American students, from the Boukhalef Airport to the American School of Tangier, on the rue
        Cristophe Colomb, which now goes by a name out of the Arabian Nights, Haruner Rashid.
        Willows, poplars and Roman cypresses lined either side of the road that was leading us
        through the hills and fields; poppies rose above the ripening wheat, oleander betrayed the
        wetness beneath the dried-up streams, and the palm trees shone in the sun, the Atlantic’s
        dark blue horizon in the distance. I don’t know why, but all of this filled me with a sense
        of well-being, as though I were under the effect of some drug; during that sleepy trek in a
        decrepit school bus, and after the flight from New York, already Tangier held the promise of
        adventure. Most of the students were fledgling painters or photographers from New York City,
        but some of us were aspiring writers who wanted to show our work to an author whose
        impressive body of work I had only begun reading three or four weeks before setting out on
        this trip, a man whose name the students uttered with an almost fearful reverence: Paul
        Bowles.
        <p class="my-10">
          In Advertisements for Myself from 1959, Norman Mailer, the cranky old know-it-all,
          proclaimed: “Paul Bowles opened the world of Hip. He let in the murder, the drugs, the
          incest, the death of the Square.” And the caustic Gore Vidal, so fastidious in his taste,
          wrote the following in his introduction to Bowles’s Collected Stories in 1979: “The short
          stories of Paul Bowles are among the best ever written by an American... As Webster saw
          the skull beneath the skin, so Bowles has glimpsed what lies back of our sheltering
          sky...an endless flux of stars so like those atoms which make us up that in our
          apprehension of this terrible infinity, we experience not only horror but likeness.”
        </p>
        <p class="my-10">
          That afternoon, after a light snack in the school’s dining hall and an inaugural speech
          delivered by some professor or other, the students were assigned their rooms, and I’m
          almost sure everyone fell asleep. The dream that accompanied my first Tangier siesta
          seemed like a good omen, although it wasn’t particularly pleasant. It was a vivid dream,
          and now, over a quarter of a century later, I remember it clearly. It belonged to a
          category of dream I’d call “of an invisible presence,” a type of dream I often have. The
          dream is static. The dreamer finds himself in a room identical to the one in which he is
          sleeping. The dream reproduces the circumstances, the reality, of the sleeper exactly. But
          suddenly he senses something wrong: the dreamer knows he’s not alone, even though he hears
          and sees nothing. There’s someone there, beyond his field of vision, in total silence. The
          dreamer feels observed. He wants to turn over, face that presence, which may be hostile.
          He lacks the strength to turn over (he is facing the wall), he tries to open his eyes, but
          he can’t lift his eyelids either. It is then that he realizes he is dreaming. He wants to
          yell, but no sound leaves his mouth–in the distance, you can hear the crickets, the call
          of a muezzin, the whistling wind. Finally he awakens, opens his eyes, turns around. The
          room, as expected, is identical to the one in the dream. No one is there. And yet…
        </p>
        <p class="my-10">
          One afternoon, two or three days after our arrival, we saw Paul Bowles for the first time.
          He was accompanied by a tall Moroccan man who carried his round, balding head erect. They
          were crossing the sports field that separated the American School from the student dorms,
          where the writing workshop was supposed to take place. Bowles at 70 was a thin man, with
          perfectly white hair, an unruly tuft of it glimmered beneath the 3 o’clock sun. They both
          walked quickly, but in a dignified manner. I don’t remember how the Moroccan, who was
          Bowles’s driver and trusted friend, was dressed. The American writer wore various tones of
          beige and white, and sunglasses with tortoiseshell frames and opaque lenses, which lent
          him a distant, modern flair; there was a mineral, almost metallic, dryness about him, it
          seems to me now. Disheartened, I sensed that my initial forays into narrative fiction,
          their outmoded style–a style that undoubtedly revealed (that I undoubtedly wanted to
          reveal) the influence of Jorge Luis Borges–couldn’t possibly interest this “hard-line
          existentialist,” which is how my older colleagues had referred to Bowles.
        </p>
        <p class="my-10">
          I think it was during that first session, though it could have been a week later, when
          Bowles declared that he did not consider himself an expert, that he didn’t believe you
          could teach anyone how to write fiction. If he had accepted the offer to lead this
          workshop despite his skepticism, it was because the school director had succeeded in
          convincing him that there were people willing to pay money so that he would read their
          manuscripts and give his opinion about them, and that was all he was prepared to do. And
          then he added that he wouldn’t have done it had it not been because he needed the money,
          because he wasn’t what you could call in the least a rich man. Someone may have asked him
          if he hadn’t made a lot of money with his books. What I know for sure is that Bowles made
          it clear that the literary success of a book (the only kind of success that should concern
          a serious writer) was no guarantee of profit, and while books sometimes provided just
          enough to get by, they only rarely enriched those who had written them. “If some of you
          are under the impression that I can teach you to write best-sellers that will make you
          lots of money, you’re in the wrong place,” he said with a smile.
        </p>
        <p class="my-10">
          For our introductions, he asked us to mention, in addition to our birthplace and how long
          we had been writing seriously, our favorite books or authors. I can’t remember the authors
          I mentioned other than Borges, but I do remember that this reference caught his attention.
          Moreover, the fact that I was from Guatemala led him to approach me after class and tell
          me, in Spanish, that he had traveled throughout Guatemala and Mexico, and that if English
          wasn’t my native language, I could write in Spanish, which he had no difficulty reading.
          Borges was also an author he admired and he had read his work in Spanish, he added, and,
          as I was to learn later, he had been the first to translate a Borges story into English.
        </p>
        <p class="my-10">
          At the next session, Bowles suggested that we meet in his apartment, which was close to
          the school, instead of the student dorms. He told us he could offer us a cup of tea while
          we discussed our work, and I don’t believe anyone was opposed to the idea. Abdelouahaid,
          his driver, could pick up the older members at the school (the majority of my colleagues
          were over 50) and take them to the Itesa Building; the younger ones could walk.
        </p>
        <p class="my-10">
          The Itesa Building–where Bowles had lived since the 1950s and where he remained until two
          weeks prior to his death in 1999 at age 88–was on the slope of a hill surrounded by barren
          fields that brought to mind the countryside, with goats and sheep grazing here and there,
          but a countryside under threat from the homes and buildings that were sprouting in every
          direction like a plague of mushrooms. It was an Italian-style apartment building with
          smooth, wide marble stairways built in the 50s. Bowles’s apartment, on whose door I
          knocked for the first time one afternoon at the start of the sacred and fearsome month of
          Ramadan, was on the fourth and last floor. Nowadays other buildings block the view, but in
          the early 1980s you could still see, toward the north, a blue patch of the Strait of
          Gibraltar (an inverted triangle that rose up between Marshan Hill–covered with small
          Moroccan homes like Legos in all the possible shades of white–and Monteviejo–a hillside
          made green by the gardens of the European residences), which the people of Tangier
          affectionately call la coupe de champagne. 
        </p>
        <p class="my-10">
          “There are places in the world that contain more magic than others”–Bowles once wrote
          something like that. Be that as it may, for me that small apartment, its thick curtains
          almost always drawn, its Berber rugs, its walls covered floor to ceiling with books, its
          handful of striking pieces of African art, the collection of Moroccan drums and qasbas
          (always available in case a jilali came to visit and felt like playing some music), the
          smell of sandalwood incense combined with burning kif or the scent of tea –this place
          contained more magic than any other I had known until then.
        </p>
        <p class="my-10">
          At first, Paul and I talked mostly about Borges’s fiction, about Bioy (who I hadn’t yet
          read), and also about traveling through Central America. I don’t recall us speaking about
          my writing (fortunately), and though Bowles had ceased being just an author whose work I
          admired and a “hard-line existentialist,” I still didn’t believe that, beyond those
          pleasant conversations aided by kif and tea, he would take an interest in my attempts at
          narrative. When I expressed my desire to visit the Moroccan interior –especially the
          Rif–Bowles encouraged me. He told me I could miss a few workshop sessions, that he didn’t
          think I would be interested in hearing what everyone had to say about each other’s work,
          especially considering that they wrote in English and about life in the United States, and
          he even loaned me maps of northern Morocco for the trip. So I took my leave and concluded,
          with the naïveté of a 21-year-old I should admit, that it was all for the best. I told
          myself that next time I would skip the workshop sessions in English and–I assume I
          consoled myself in this manner–at least I would get to know a bit of Morocco. I visited
          the Rif, I walked among the unending fields of cannabis in the unstable Ketama region, and
          I returned to Tangier satisfied with my little adventure, believing I had accomplished
          everything I had set out to do in that place. A few days before returning to New York,
          Bowles asked me, in that formal tone of his, if I would let him translate the stories, or
          rather, the prose poems that I had shown him during the workshop. A publishing house in
          New York that specialized in extravaganzas had requested a contribution from him for its
          catalogue, but he didn’t have anything to send them at the moment. It seemed to him, he
          told me, that if he translated what I had written, they just might be interested in
          publishing them. Of course I gave him my permission, and we agreed that he would send his
          translation to my address in New York so I could review it and, if it was to my liking, we
          could submit the work to Red Ozier Press, the small publishing house for rare books. That
          is how our long collaboration began, a necessarily asymmetrical collaboration, given the
          fact that a reluctant master translating the work of an apprentice is never the equivalent
          of the latter translating the work of the master, no matter how valiant the effort.
        </p>
        <p class="my-10">
          1998 was the last year I spent a significant amount of time in Tangier. King Hassan II was
          about to die, and his son would bring about many changes, most of them purely cosmetic.
          But the outside world had changed as well, and those changes were evident in the life of
          the city. There were female police officers in the street, new settlements of migrants
          from the countryside appeared with increasing frequency, and ghettos sprung up, inhabited
          by immigrants from other parts of Africa, for whom Tangier was the last stop before
          setting out to breach Europe’s fortress. Truly, the city would be transformed to such a
          degree that, of the Tangier of the 1980s, one could repeat what Bowles had written when
          comparing the city he had discovered in the 1930s to the one he saw anew in the 1950s:
          “…only the wind remains.” 
        </p>
        <p class="my-10">
          I stayed, like so many times before during the fifteen years that I persisted in visiting
          the city, in the Atlas Hotel, built in Art Deco style around the same time as the Itesa
          Building, and where I had begun writing the only novel of mine that takes place in
          Tangier, The African Shore. It was winter and the heating at the Atlas was still
          deficient, so when I was invited to stay for the remainder of my visit in a 19th century
          European mansion surrounded by gardens in the Monteviejo–and with views of the cliffs
          overlooking the Pillars of Hercules and the town of Tarifa embedded in the Spanish coast–I
          considered myself the most fortunate Guatemalan on the whole of the African continent. 
        </p>
        <p class="my-10">
          By then Paul had become an emaciated old man in chronic convalescence, confined to his
          bedroom and unable to read due to cataracts, although always full of wit. His aesthetic
          activity was limited almost exclusively to listening to music–which sometimes entered his
          room in the form of the calls of the muezzin from the three or four mosques nearby, whose
          voices recalled the modulation of flamenco singers, or from the drums and rhaita solos
          during the nights of Ramadan.
        </p>
        <p class="my-10">
          Here is a list of memories–written haphazardly–of the things we talked about during all
          those years at the Itesa with Paul: The discipline of traveling. Conrad and the sea. The
          sounds of the jungle and the desert. Graham Greene, Norman Lewis, R.B. Cunninghame
          Grahame. Westermarck. Raymond Chandler, Patricia Highsmith. Moroccan fatalism. Jane
          Bowles. Kafka, Ivy Compton-Burnett, Gertrude Stein, Flannery O’Connor, François Augiéras.
          The feeling that the body is an obstacle. The idea of death as a final liberation. The
          effects of kif. The inventive talent of Mohammed Mrabet. The disadvantages of alcohol.
          Fiction writing as a controlled dream. Style as instrument. The physical act of
          writing–placing pen to paper–as a propitiatory ritual or the source of so-called
          inspiration.  
        </p>
        <p class="my-10">
          I’ve since lost the notebook where I jotted down on paper the traces of a dream I had one
          morning, but if I hadn’t written them perhaps I would have lost the memory of the dream as
          well, one of the last dreams I had in Tangier, one that I’ll attempt to describe now.
        </p>
        <p class="my-10">
          I was staying again in that magnificent home in the Monteviejo neighborhood in Tangier,
          with its gardens and view of the Strait. The owner, Claude-Nathalie Thomas, who translated
          Paul’s work into French, had loaned it to me in her absence, and I was alone. It was
          winter, and in my second-story bedroom in that house on the road to Sidi Masmoudi, a fire
          of olive and eucalyptus wood burned merrily in the small fireplace. Downstairs, in the
          entrance hall and small courtyard with its glass ceiling, the full moon of November in the
          year 2000 coldly lit 98 cardboard boxes stacked upon the black-and-white checkerboard
          floor of ceramic or marble. The boxes, numbered and labeled by my own hand, contained the
          books, notebooks and papers belonging to the library and desk of Paul Bowles, who had died
          one year earlier, having bequeathed to me this incredible inheritance. A day or two later
          I would have to transport these boxes from Tangier to Spanish territory, and it would be
          necessary to sneak past the vigilant customs agents on both sides of the Strait. Under no
          circumstances were they to become aware that those papers and books were anything more
          than a bunch of dusty old volumes and scribblings, and not the personal library and
          literary legacy of a celebrated author. In other words, an inheritance. And the general
          opinion was that an inheritance left in Muslim lands by a North American nazrani to a
          Guatemalan one would not easily leave Moroccan territory.
        </p>
        <p class="my-10">
          I dreamt that I awoke in that house, in the room with the fireplace, and a fire was
          burning in the dream as well. I walked out into the hall and looked downstairs at the
          center of the courtyard. Suddenly I was down there, without having taken any stairs, among
          the boxes of books and papers, only in the dream they were now open. On the circular black
          tile that marked the exact center of the courtyard, there was a life-sized metallic bust
          upon another metallic pedestal, a bust of Paul, an elderly but upright Paul, with the tuft
          of hair over his forehead and with a slightly haughty expression. But now the boxes have
          caught fire, and I realize that it is a cremation ceremony. I think: “Of course, Paul
          asked to be cremated.” Now Abdelouahaid, in whose company I had first seen Paul 20 years
          earlier, is at my side. We both watch the flames incredulously, filled with sadness. We
          hear a scream, a horrible scream of pain. It is coming, unbelievably, from the bust.
          Abdelouahaid and I look at each other, and it is he who says, although I was already
          thinking the same thing: “It’s Paul, he’s inside. We have to get him out!” We pass through
          the burning boxes to reach the bust, which is smoking and looks as though it is about to
          melt. Abdelouahaid sees (and I see that he sees) some metal buttons along the nape and
          back of the bust. We rush to unfasten them. Inside the bust, suddenly liberated, stands an
          old and very weak Paul, staggering and unsteady in his camel-hair robe, the Paul to whom I
          had said my last farewell on the eve of his death in the Italian Hospital a year earlier.
          Abdelouahaid and I place his arms on our shoulders and lead him through the flames; we
          exit through the hallway, where we can already see the starry night of Tangier, the
          silhouettes of the Roman cypresses beyond the Moorish arch of the magnificent house at
          Monteviejo with its grand doorway, which is wide open.
        </p>
        <p class="my-10 font-bold font-heading">Rodrigo Rey Rosa</p>
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
