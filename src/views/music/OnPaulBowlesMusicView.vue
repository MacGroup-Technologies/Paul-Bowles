<!-- eslint-disable no-irregular-whitespace -->
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

const route = useRoute()
const router = useRouter()

useHead({ title: 'On Paul Bowles Music: ' + route.params.title })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">
          {{ route.params.title }}
        </h1>
        <router-link to="#back" @click.prevent="router.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div class="mt-10" v-if="route.params.title === 'Berstein'">
        <b>Handwritten note by Leonard Bernstein to professor Lawrence J. Shifreen in a letter dated
          03/10/77</b>
        <p class="my-3">
          I have always regretted the fact that Paul stopped composing. He had a genuine gift, a
          highly original sense of how to “modernize” traditional materials. He has done the same
          thing with words in his precise and quasi-Victorian way of presenting the primitive and
          the shocking. He is a wonder, and I have learned a lot from him. (Copland still refers to
          the “Bowles style” that crops up now and then in my music.)
        </p>
        <p class="text-right"> L.B. </p>
      </div>
      <div class="mt-10 text-justify" v-else-if="route.params.title === 'Paul Bowles, Composer'">
        Paul Bowles once said, "I never wanted a career," contempt dripping from his inflection.
        That he managed to leave an indelible, if modest entry in the annals of American music—a
        distinction desperately but vainly coveted by many better-trained, more ambitious
        composers—represents the triumph of a keen intelligence and an uncanny aesthetic intuition
        over a disdain for the concept of authority.
        <br /><br />
        During the late 1920s and early 1930s, Bowles studied with Aaron Copland. They worked
        together for a year and half in New York, Berlin and Paris before traveling to Morocco in
        1931 at Gertrude Stein's suggestion. Here, under Copland's tutelage, Bowles worked on his
        first chamber piece, the Sonata for Oboe and Clarinet, finished later that year in Germany,
        and a solo-piano score not completed until 1933, Tamanar. The former displays the sort of
        wit and lyricism that would be hallmarks of his later musical style. By contrast, the latter
        shows him grappling with the dissonant avant garde severity of Copland's recent Piano
        Variations—providing our one glimpse of a Bowles that might have been had he sought renown
        as a modernist.
        <br /><br />
        Between 1931 and 1934, Bowles also studied with Roger Sessions, Virgil Thomson and Israel
        Citkowitz. Ever the reluctant student, however, he lacked the patience and discipline to
        continue any formal musical education and soon abandoned these studies. He never even gained
        solid knowledge of music's notational rules—for instance, how notes should be beamed
        together and, more important, how to decide whether to use sharps or flats in enharmonic
        passages—and, as a result, his manuscripts ever after could sometimes present a surprising
        appearance of musical illiteracy. Yet Bowles had a quality that cannot be taught, acutely
        summed up by Aaron Copland: "Paul never wrote a dull piece."
        <br /><br />
        Equally formative during these years of desultory apprenticeship were Bowles' travels to
        Guatemala, Mexico, Ceylon, southern India and the Sahara—for this rather nomadic life
        enabled him to explore his interest in the indigenous musical styles he encountered,
        fostering the use of folk rhythms and idioms in his compositions without quoting actual folk
        melodies. On a sojourn to Mexico in 1937, with a letter of introduction from Copland, Bowles
        visited the composer Silvestre Revueltas whose compositional style exerted some influence on
        his own.
        <br /><br />
        Upon returning to New York, Bowles joined a musical milieu that included Henry Brant, David
        Diamond, Citkowitz and other active members of the League of Composers. He now rapidly rose
        to prominence as a composer of incidental music for the theater. Providing material for
        three productions (1936-1938) by Orson Welles and John Houseman (Horse Eats Hat; Doctor
        Faustus and Too Much Johnson), he became New York's composer of choice for "literary" dramas
        by such writers as William Saroyan (the first two plays, My Heart's in the Highlands, 1939,
        and Love's Old Sweet Song, 1940), and Lillian Hellman (Watch on the Rhine, 1941), along with
        classic dramas by Shakespeare and John Ford. In subsequent years, his music accompanied
        Broadway productions of Giraudoux, Koestler, Werfel, Rostand, and four of Tennessee
        Williams's major plays, beginning with The Glass Menagerie (1944).
        <br /><br />
        Between his initial theater projects for Orson Welles, Bowles composed the ballet Yankee
        Clipper (1937), beginning an association with dance impresario Lincoln Kirstein. At this
        time he wrote soundtracks for documentary and experimental art films as well, and composed
        music under the aegis of the Work Projects Administration and the Federal Theatre Project.
        <br /><br />
        In 1941, Bowles began work on another commission for Kirstein: the Mexican-Indian
        ballet Pastorela; he also received a Guggenheim Fellowship to compose The Wind Remains,
        a zarzuela based on a text by Federico García Lorca. This was premiered in 1943 at the
        Museum of Modern Art in New York in collaboration with conductor Leonard Bernstein and
        choreographer and dancer Merce Cunningham. Several other Latin-inspired orchestral works
        followed during this period.
        <br /><br />
        By then, Bowles also enjoyed prominence as a music critic. Joining the staff of New
        York's Herald Tribune newspaper in 1942, he worked under the guidance of the senior critic,
        Virgil Thomson, covering jazz and folk music as well as art music while also contributing
        many articles on these topics to the periodical Modern Music. At the beginning of the
        post-war period, Bowles received a pair of commissions from the two-piano team of Gold and
        Fizdale (Arthur Gold and Robert Fizdale), who programmed some of the composer's earlier
        duets, and had made their own duo-piano transcriptions of several Bowles' solo pieces
        evoking Latin-American dance. Bowles responded with two of his finest concert scores:
        the Concerto for Two Pianos, <i>Winds and Percussion (1946-47)</i>, and the <i>Sonata for Two
          Pianos (1947)</i>. Composing these, he revealed in his autobiography Without Stopping, gave him
        a welcome respite from his work in the theater, which was becoming irksome.
        <br /><br />
        Increasingly dissatisfied, in fact, with the life of a composer of Gebrauchsmusik, Bowles
        departed New York permanently for Tangier, Morocco, in late 1947. Although strongly
        inclined to concentrate on prose, leaving the world of art-music and theater music
        altogether, he evidently hesitated about a complete break. So, after completing his first
        novel, The Sheltering Sky, in May 1948, he began work on an opera, Yerma (libretto by
        Lorca), for the famous torch singer Libby Holman. Encouraged, however, by the remarkable
        success of The Sheltering Sky upon its publication in 1949, Bowles became more active as a
        writer and translator than as a composer, and he did not complete Yerma until 1955. Still,
        the collaboration with Gold and Fizdale continued, resulting in two vintage Bowles
        pieces: Night Waltz (1949) and A Picnic Cantata (1953). Even as prose claimed more of his
        attention, Bowles took pleasure in seeking out folk music of exotic regions, and in 1959 he
        procured a Rockefeller grant for ethnomusicological research to record traditional music
        throughout northern and central Morocco, which culminated in a two-LP set issued by the
        Library of Congress.
        <br /><br />
        While the main body of Bowles' musical output was completed before 1948, he sporadically
        composed incidental theater music in later years. This included his last two dramatic
        collaborations with Tennessee Williams on music for the plays Sweet Bird of Youth, 1959,
        and The Milk Train Doesn't Stop Here Anymore, 1962; and nine scores for dramatic productions
        for The American School of Tangier, requested by the school's longtime headmaster Joseph A.
        McPhillips III. The first two (1966, 1969) for dramas by Sophocles and Euripides, the last
        for a 1997 staging of Peter Shaffer's The Royal Hunt of the Sun.
        <br /><br />
        Paul Bowles continued, moreover, to write songs throughout his life, setting texts in
        English, Spanish and French by Jane Bowles, Tennessee Williams, Gertrude Stein, Jean
        Cocteau, Lorca and others. Bowles' vocal works are unfailingly idiomatic. He stated that
        his aim was "distorting speech the least amount possible. Singing, it seems to me, should be
        an extension of speech."
        <br /><br />
        A "conversational" approach, in fact, pervades his overall compositional style, which is
        witty, aphoristic, economical and tuneful, evoking American jazz, Mexican dance rhythms,
        Spanish harmonies and Moroccan rhythms. The range of these ethnic influences is perhaps most
        fully represented by his piano works, which reveal him as a born miniaturist. Indeed, like
        many other composers who excel in songs, Bowles wrote almost exclusively in short forms. His
        operas are constructed as suites of songs, and his orchestral music, which tends to be at
        once concise and kaleidoscopic with its collage-like juxtapositions, displays little
        thematic development. His prose, by contrast, effortlessly encompasses extended forms—a
        disparity no less striking than that between the charm of his music and the mordancy of his
        fiction.
        <br /><br />
        Despite his success as a writer, Bowles always thought of himself primarily as a composer.
        Much of his music remained unpublished at the time of his death; nevertheless, it enjoyed a
        renaissance of interest during the final decade of his life, evidenced by numerous
        recordings and performances.
        <br /><br /><br />
        <p class="text-right">
        Irene Herrmann
        </p>
      </div>
      <div class="mt-10 text-justify" v-else-if="route.params.title === 'Virgil Thompson - Twelfth Night'">
        It is Mr. Bowles' gift as a composer to write theater music of pinpoint delicacy that is so precise in its
        functional design and so accurate. In its adjustment to the subject of each play it hits his audience squarely in
        both ears and rings the bell for the play at every music cue. With six musicians—flute, oboe, harp, imitation
        harpsichord, percussion and, very occasionally, a muted trumpet—he makes a rich and ancient-sounding ensemble that
        is more sufficient than a larger group would be of more disparate sonorities. He makes no effort to fill the house
        with noise or to dominate the applause between scenes. Even if the music gets lost for a moment or two, that is
        better than any unnecessary stridency. He keeps rigidly within his chosen limit, thereby gaining power. The Bowles
        formula was already complete in Dr. Faustus [1936]. He writes no brassy pit-music, no off-stage realistic
        sound-effects. He does what nearly every musician in the world would say, on principle, can't be done. He writes
        chamber-music to accompany large theatrical productions, and he aggravates his supposed error by putting that
        chamber-music down in the pit. In Dr. Faustus he used seven men under an apron. The reason his music does not
        disappear from all audibility lies in his choice of instruments and his manner of scoring. He uses only sharp and
        incisive timbres; he writes a true melodic part for each; and he never doubles, never upsets his sonorous
        equilibrium by making one line heavier than another.
        <br /><br />
        All his emphasis comes from contrast of tune and timbre, from structure and harmonic progress, never from weight.
        He leaves that to the actors. If they want to shout and whisper, that is their business. Mr. Bowles sets a play to
        music as a printer sets up an author's manuscript. He makes it clear and clean and comprehensible, frames it with
        appropriate initials and tailpieces. If Miss Hayes, Mr. Evans and Mr. Shakespeare did not each have such a
        faithful and absorbed public, Mr. Bowles might easily have walked away with Twelfth Night. For the play is, after
        all, a comedy with music. It has a musical beginning and a musical finale and songs all the way through. No one
        writing in the Broadway theater makes a song within a play so charmingly as Bowles does. He does not aim at song
        hits easily extractable from their context. He aims rather to concentrate a play's whole mood and presentation
        into brief musical moments. He avoids italianate melodic proportions. His songs could go on forever, so little
        have they the air of getting anywhere. They are as static as décor, as expressive as good costumes. Every member
        of the Twelfth Night cast and every scene of Shakespeare's play was aided and enhanced by the presence of this
        sumptuous and suitable music, every measure fit embroidered by hand. And when the whole stage joined in the final
        song it was as if the evening and its applause were being handed on a platter to Mr. Bowles as homage to his
        self-effacing and accurate workmanship in the preceding scenes.
        <br /><br /><br />
        <p class="text-right">
        Virgil Thompson,<br />
        New York Herald Tribune,<br /> 20 November 1940
        </p>
      </div>
      <div class="mt-10 text-justify" v-else-if="route.params.title === 'Lincoln Center Tribute'">
        In 1995, Paul Bowles was honored with a festival at Lincoln Center in New York. His music was performed by the Eos
        Orchestra, conducted by Jonathan Sheffer.
        <div class="flex gap-10 mt-10">
          <img src="@/assets/imgs/Lincoln_program.png" alt="Paul Bowles Lincoln Center Tribute Flier"
            class="w-auto h-auto" />
          <img src="@/assets/imgs/Lincoln_programA.png" alt="Paul Bowles Lincoln Center Tribute Program"
          class="w-auto h-auto" />
      </div>
    </div>
    <div class="mt-10 text-justify" v-else-if="route.params.title === 'Rey Rosa - The Return Trip'">
      <div class="text-right">
        Les sons rentreront dans<br />
        l'orgue et l'avenir<br />
        s'invaginera dans le passé<br />
        comme il a toujours fait.<br />
        <b>Henri Michaux</b>
      </div>
      <div class="mt-16">
        Imagine a situation involving a man with two lives moving in opposite directions simultaneously, one of which
        goes toward the future in usual fashion (from today to tomorrow, from childhood to maturity and on to old age),
        while the other life goes toward the past. Thus, inside the child born in 1910, there lived a man in his
        eighties.
        <br /><br />
        This would explain how in 1930 Gertrude Stein, after exchanging letters, was convinced that her correspondent
        was a gentleman of at least seventy. So that today we have an octogenarian in whom is imprisoned a child
        travelling into the past. And this explains how one forgets that he is old, and how being in his company
        provides a delight similar to that provoked, as if through contagion, by the presence of small children. More
        than half a century ago those attempting to educate him considered him a stubborn youth; they warned him that
        unless he studied music as tradition demanded, he would never succeed in being a composer. But they were unaware
        that this student needed no other teacher than himself, because in spite of his youthful appearance he had
        already made the return trip.
        <br /><br /><br />
        <p class="text-right">
        Rodrigo Rey Rosa, Tangier, 1995
        </p>
      </div>
    </div>
  </div>
</div></template>
