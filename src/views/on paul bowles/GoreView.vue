<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({ title: `Gore Vidal on Paul Bowles` })

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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">Gore Vidal</h1>
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
          src="@/assets/imgs/Gore-Vidal.png"
          class="md:w-1/3 h-auto transition-all"
          alt="Gore Vidal"
        />
        <h1 class="text-2xl md:text-4xl md:w-1/2 font-heading uppercase hidden">Gore Vidal</h1>
      </div>
      <div class="text-justify">
        <p class="mb-10">
          “Carson McCullers, Paul Bowles, Tennessee Williams are, at this moment at least, the three
          most interesting writers in the United States.” A quarter century has passed since I wrote
          that sentence in a piece on contemporary American writing.
        </p>
        <p class="mb-10">
          Six years ago when I reprinted those words in Homage to Daniel Says, I felt obliged to
          add: “This was written in 1952. McCullers was a good and fashionable novelist of the day
          (I cannot say that I have any great desire to read her again). Paul Bowles was as little
          known then as he is now. His short stories are among the best ever written by an American.
          Tennessee Williams, etc....” All in all, I still see no reason not to support my youthful
          judgment of Paul Bowles. As a short story writer, he has had few equals in the second half
          of the twentieth century. Obvious question: If he is so good, why is he so little known? 
        </p>
        <p class="mb-10">
          Great American writers are supposed not only to live in the greatest country in the world
          (the United States, for those who came in late), but to write about that greatest of all
          human themes: The American Experience. From the beginning of the Republic, this crude
          America First-ism has flourished. As a result, there is a strong tendency to misrepresent
          or under-value our three finest novelists: Henry James (who lived in England), Edith
          Wharton (who lived in France), Vladimir Nabokov (who lived in Switzerland, and who wasn't
          much of an American anyway despite an unnatural passion for our motels, so lyrically
          rendered in Lolita). 
        </p>
        <p class="mb-10">
          Paul Bowles has lived most of his life in Morocco. He seldom writes about the United
          States. On the other hand, he has shrewd things to say about Americans confronted with
          strange cultures and…. But, first, let us try to place Paul Bowles. 
        </p>
        <p class="mb-10">
          Born in 1910 he was brought up in New York City and New England. He attended the
          University of Virginia. When he was seventeen, the Paris-based avant-garde magazine
          transition published some of his poems. Bowles went to Paris, met Gertrude Stein, was
          influenced by the Surrealists. He quit school to become a writer. Except for Poe, his
          writing derives not from the usual Anglo-American tradition but from such “exotics” as
          Valéry, Roussel, Gide and, of course, the expatriate Miss Stein. Later, he was to put to
          his own uses oral Mexican and Moroccan folk-lore he listened as much as he read. 
        </p>
        <p class="mb-10">
          I suspect that Bowles's apparent foreignness has limited the number of doctoral theses
          that ought by now to have been devoted to one whose art far exceeds that of… well, name
          the great American writers of our day (a list that was as different yesterday as it will
          be tomorrow). For the American Academic, Bowles is still odd man out; he writes as if Moby
          Dick had never been written. Odder still, he is also a distinguished composer of music. In
          fact, he supported himself for many years by writing incidental music for such Broadway
          plays as The Glass Menagerie. It is curious that at a time when a number of serious
          critics have expressed the hope that literature might one day take on the attributes of
          the “highest” of all the arts, music, Bowles has been composing music as well as writing
          prose. I am certain that the first critic able to deal both with his music and his writing
          will find that Bowles's life work has been marvelous in a way not accessible to those of
          us who know only one or the other of the two art forms.
        </p>
        <p class="mb-10">
          In 1972, Paul Bowles wrote a memoir called Without Stopping. For those able to read
          between the lines, the book was pleasurable. For anyone else, it must have sounded a bit
          like Julius Caesar's account of the wars in Gaul. Although there is a good deal of
          information about various commanders and troop movements, we don't learn much about what
          the subject had in mind. But there are interesting asides; and the best sort of memoir is
          entirely to one side of the mere facts of a life. 
        </p>
        <p class="mb-10">
          We learn that Bowles originally wanted to be a writer, not a composer. But at a
          progressive school he had shown an aptitude for mathematics, cousin germane to music.
          Nevertheless, he preferred to arrange words rather than notes upon a page until Gertrude
          Stein read his poems. “She sat back and thought a moment. Then she said: ‘Well, the only
          trouble with all this is that it isn't poetry.”’ She found his images false; did not think
          much of his attempt to write in the Surreal manner, “without conscious intervention.”
          Later, she asked him if he had rewritten the poems. When he said no, “She was triumphant.
          ‘You see,’ she cried. ‘I told you you were no poet. A real poet, after one conversation,
          would have gone upstairs and at least tried to recast them, but you haven't even looked at
          them.”’ Bowles stopped writing. He turned to music.
        </p>
        <p class="mb-10">
          Between 1929 and 1945 he made a name as a composer. He married the odd, brilliant Jane
          Bowles. She was a writer. He was a composer. Together and separately, they were much
          admired. During the late thirties and forties they became central figures in the
          transatlantic (and Pan-American) world of the arts. Although unknown to the general
          public, the Bowleses were famous among those who were famous; and in some mysterious way
          the art-grandees wanted, if not the admiration of the Bowleses (seldom bestowed), their
          tolerance. 
        </p>
        <p class="mb-10">
          They lived in Mexico (the unknown Tennessee Williams made a pilgrimage to their house in
          Acapulco); they lived in New York, sharing a house with W. H. Auden and Benjamin Britten.
          After the Second War they moved for good to Tangier where Paul Bowles still lives. Jane
          Bowles died in Spain in 1973.
        </p>
        <p class="mb-10">
          In the spring of 1945, Charles Henri Ford asked Bowles to edit an issue of the magazine
          View. The subject was Central and South American culture. Bowles translated a number of
          Spanish writers; and wrote some texts of his own. In the course of “reading some
          ethnographic books with texts from the Arapesh or from the Tarahumara given in
          word-for-word translation... the desire came to me to invent my own myths, adopting the
          point of view of the primitive mind.” He resorted to “the old Surrealist method of
          abandoning conscious control and writing whatever words came from the pen.” The first of
          these stories was written “one rainy Sunday”; it is called “The Scorpion.”
        </p>
        <p class="mb-10">
          The story was well received, and Bowles went on writing. “The subject matter of the myths
          soon turned from ‘primitive’ to contemporary…. It was through this unexpected little gate
          that I crept back into the land of fiction writing. Long ago I had decided that the world
          was too complex for me ever to be able to write fiction; since I failed to understand
          life, I would not be able to find points of reference which the hypothetical reader might
          have in common with me.” He did not entirely proceed through that small gate until he
          wrote “A Distant Episode” and found that if life was no more understandable to him than
          before, prose was. He now possessed the art to depict his dreams. 
        </p>
        <p class="mb-10">
          During the next thirty years Paul Bowles wrote the thirty-nine short stories collected in
          this volume. They were published originally in three volumes: The Delicate Prey, 1950; The
          Time of Friendship, 1967; Things Gone and Things Still Here, 1977. Even before the first
          collection was published, three of the stories caused a great stir in the literary world.
          “Pages from Cold Point,” “The Delicate Prey” and “A Distant Episode” were immediately
          recognized as being unlike anything else in our literature. I have just re-read the three
          stories, with some nervousness. After all these years, I wondered if they would still
          “work.” In my youth I had admired D. H. Lawrence's novels. Now, I deeply dislike them. I
          was relieved to find that Bowles's art is still as disturbing as ever. I was surprised to
          note how the actual stories differ from my memory of them. I recalled a graphic
          description of a sixteen-year old boy's seduction of his father on a hot summer night in
          Jamaica. Over the years, carnal details had built up in my memory like a coral reef. Yet
          on re-reading “Pages From Cold Point,” nothing (and everything) happens. In his memoirs
          Bowles refers, rather casually, to this story as something he wrote aboard ship from New
          York to Casablanca: “a long story about a hedonist....” It is a good deal more than that.
          Both “The Delicate Prey” and “A Distant Episode” create the same sense of strangeness and
          terror that they did the first time I read them. “The Delicate Prey” turns on a Gidean
          acte gratuit: the slicing off of the boy's penis is not only like the incident on the
          train in Les Caves du Vatican but also presages the driving of a nail through a skull in
          Bowles's novel Let It Come Down. “A Distant Episode” seems to me to be more than ever
          emblematic of the helplessness of an over-civilized sensibility (the Professor's) when
          confronted with an alien culture. Captured by North African nomads, his tongue cut out, he
          is made into a clown, a toy. He is used to make his captors laugh. He appears to accept
          his fate. Something harsh is glimpsed in the lines of a story that is now plainer in its
          reverberations than it was when written. But then it is no longer news to anyone that the
          floor to this ramshackle civilization that we have built cannot bear much longer our
          weight. lt was Bowles's genius to suggest the horrors which lie beneath that floor, as
          fragile, in its way, as the sky that shelters us from a devouring vastness.
        </p>
        <p class="mb-10">
          The stories fall into rough categories. First: locale. Mexico and North Africa are the
          principal settings. Landscape is all-important in a Bowles story. Second: how the
          inhabitants of alien cultures regard the creatures of our civilized world, as in “Under
          the Sky.” Bowles goes even further in a beautiful story called “The Circular Valley” where
          human life is depicted as it must appear to the anima of a place. This spirit inhabits at
          will those human beings who visit its valley; feeds on their emotions; alters them during
          its occupancy. Third: the stories of transference. In “You Are Not I” a madwoman becomes
          her sane sister. In “Allal,” a boy exchanges personality with a snake. The intensity of
          these stories makes them more like waking dreams than so many words on a page. Identity is
          transferred in such a way that one wonders which, finally, is which? and what is what? The
          effect is rather like the Taoist story of the man who dreamed that he was a butterfly.
          When “he woke up with a start, he did not know whether he was Chuang Chou who had dreamed
          that he was a butterfly, or whether he was a butterfly dreaming that he was Chuang Chou.
          Between Chuang Chou and the butterfly there must be some distinction. This is what is
          called the transformation of things.” 
        </p>
        <p class="mb-10">
          There are a number of more or less realistic stories that deal with the plain
          incomprehension of Americans in contact with the natives of Mexico, North Africa,
          Thailand. One of the most amusing is “You Have Left Your Lotus Pods on the Bus.” An
          American goes on an excursion with some Buddhist priests. The day is filled with splendid
          misunderstandings. There is the man at the back of a crowded bus who never stops
          screaming. He is ignored by everyone except the American who wonders why no one shuts him
          up. At the end, the priests tell him that the “madman” is an employee of the bus company
          giving necessary warnings and advice to the driver. 
        </p>
        <p class="mb-10">
          In several stories white ladies respond not-so-ambiguously to dark-skinned youths. Bowles
          notes the sadism that sexual frustration can cause (“At Paso Rojo”). But where the
          ordinary writer would leave it at that, Bowles goes deeper into the human case and,
          paradoxically, he achieves his greatest effects when he concentrates entirely on surfaces.
          Although he seldom describes a human face, he examines landscape with the precision of a
          geologist. Bowles himself seems like one of those bright sharp-eyed birds that flit from
          story to story, staring with eyes that do not blink at desert, hills, sky. He records
          weather with all the solemnity of a meteorologist. He looks closely at food. As for his
          human characters, he simply lets them reveal themselves through what they say or do not
          say. Finally, he is a master of suggesting anxiety (are all the traveller's cheques lost
          or just mislaid?) and dread (will this desert prove to be the setting for a very special
          death?). Story after story turns on flight. It is no accident that Bowles called his
          memoir (with pride?) Without Stopping.
        </p>
        <p class="mb-10">
          Four stories were written to demonstrate that by using “kif-inspired motivations, the
          arbitrary would be made to seem natural, the diverse elements could be fused, and several
          people would automatically become one.” These pieces strike me as entirely uninhabited,
          and of no interest. Yet in other stories (inspired perhaps by smaller doses of kif) he
          does demonstrate the essential one-ness of the many as well as the interchangeability not
          only of personality but of all things. As Webster saw the skull beneath the skin, so
          Bowles has glimpsed what lies back of our sheltering sky... an endless flux of stars so
          like those atoms which make us up that in our apprehension of this terrible infinity, we
          experience not only horror but likeness. 
        </p>
        <p class="mb-10 font-bold font-heading">
          Gore Vidal<br />
          Introduction to Paul Bowles’s Collected Stories, 1939-1976, <br />published by Black Sparrow
          Press in 1979
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
