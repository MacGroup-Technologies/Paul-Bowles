<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

const router = useRoute()
const route = useRouter()

useHead({ title: `Paul Bowles ${router.params.title}` })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <template v-if="router.params.title === 'In the Tropics'">
        <div class="mt-10">
          <h2 class="italic text-md">Pages From a Journal</h2>
          <h2 class="">WINTER (1946), <i>MODERN MUSIC</i></h2>
        </div>
        <p class="my-10 text-justify">
          <i>Havana, June 1945</i>—Until now I had never slept in Havana, only wandered about during
          the daytime stopovers for the boat en route to Vera Cruz. I am already wondering why Cuba
          has recently been built up in legend as one of the world's most intensely musical
          countries. In 1932, I used to go nearly every day to the Sporting d'Eté to listen to Don
          Azpiazu's Orchestra, imported, according to the posters, directly from Havana. While I
          never liked the <i>maracas</i> very much, the rest of the percussion section won me over
          completely and was my introduction to West Indian music. It was gratifying later to learn
          that the <i>maracas</i> were the one Indian component of a drum section which otherwise
          derived totally from Negro sources. It seemed natural to believe that if Azpiazu's
          Orchestra had retained this much of its original vigor in transplantation to a spot like
          Monte Carlo, those playing groups which had remained behind in Cuba must be something
          pretty spectacular. And in the hills of Puerto Rico the following year, I heard improvised
          orchestras of <i>marimbula, cuatros,</i> and <i>guiro</i> which convinced me I would turn
          out to be right. Doubtless I was, then. But I waited too long to come here to Cuba. Music,
          along with everything else, is subject to the vagaries of fashion; and now in 1945,
          percussive frenzy is démodé and Havana is full of “Stormy Weather,” known as “Triste
          Lluvia.” A <i>bongó</i> is sometimes rapped timidly in the dining-room of the Hotel
          Nacional, where American tourists, unaware of the arrival of the new chic, still want to
          hear an occasional rumba or conga.
        </p>
        <p class="my-10 text-justify">
          <i>Havana</i>—Or do I exaggerate? This evening on the Muelle de Luz, waiting for the
          launch that carries late merrymakers across the harbor to Regla (where because of last
          night's murders there is a state of martial law), I came on a group of Negroes inventing
          an old-fashioned song with choral <i>estribillo</i>, the first I have heard since I
          arrived three weeks ago. Lacking drums, they used the wooden bench; in place of
          <i>claves</i> they used the palms of their hands. And being pleasantly drunk, they did not
          stop when they saw me.
        </p>
        <p class="my-10 text-justify">
          <i>Santiago de Cuba</i>—The Provincia de Oriente, they say, produces the finest music of
          Cuba. Here I am; where is it? I remember a group called El Cuarteto de Caney. El Caney
          lies just inland, half an hour above Santiago. I take a bus. There is a corner cantina at
          the intersection of two dusty roads. People ride up on horseback. Inside, a monstrous
          jukebox is roaring. The pieces are all from Hollywood's 1943 crop of musical films, with a
          few Agustin Lara and Maria Grever ballads sandwiched in. I inquire about the famous
          quartet and discover the sad secret of Cuba's popular music. As soon as a
          <i>conjunto</i> is at all well known it is exported to one of the hundred corners of the
          earth. “Aren't you sorry about that?” “No, it gives us fame out in the world, and anyway
          we like your music better, the <i>suin</i>.”
        </p>
        <p class="my-10 text-justify">
          <i>Camagüey</i>—Having missed the plane for Haiti in Santiago, I am waiting to go shipside
          here. This is the triumph of visual <i>cursilería</i>: every other store seems to be a
          gift shop dealing in glazed pottery figurines and poufs covered in rayon satin. Today is a
          holiday: the inauguration of the <i>fiesta guaracha</i>. The entire juvenile population,
          masked and attired in unimaginative approximations of Cuban rustic costume, storms
          screaming through the streets. And unexpectedly enough, out in a muddy suburb I found some
          music. A gang of white kids wandered from alley to alley, singing. In front of them,
          walking backwards in the manner of the Sudanese exhorters in the religious processions of
          North Africa, was a very young Negro. He extemporized the typical florid line of the verse
          while his flock provided the recurrent choral refrain: “Ah, eh, cómo va quedar?” The
          circumspect complexity of syncopation in the accompanying hand-clapping rhythms would have
          been the despair of a notating musicologist. This song continued a quarter of an hour as
          the impromptu procession moved from house to house, and then, the leader having apparently
          exhausted his ideas thereon, another was begun.
        </p>
        <p class="my-10 text-justify">
          <i>Havana</i>—Today some of the Grupo de la Renovación came to lunch: Ardévol, and with
          him his young disciples, the bland Cuban Harold Gramatges, and the fanatical looking
          Spaniard Julian Orbon. Ardévol himself is from Spain; the idea of “reform” in his movement
          is pro-neoclassicism and is directed principally against the Cuban-Impressionist
          influences of Caturla and Roldan. That such a group should be functioning in Cuba is a
          healthy sign; it would be more convincing if Ardévol were a Cuban. A similar state of
          affairs would exist here if Schoenberg were to announce the twelve-tone system as the new,
          true, American idiom. We sadly discussed the decline of Afro-Cuban folk music, and they
          all agreed that it was no longer to be found, save on the gramophone recordings of a
          decade or two ago. I still am unable to believe this.
        </p>
        <p class="my-10 text-justify">
          <i>Havana</i>—Each day my trip to witness a Lucumí rite, promised me by Lydia Cabrera, has
          had to be put off. Señorita Cabrera has collected and published a good many Afro-Cuban
          folktales and claims to have influence with various practicing <i>babalaos</i> of the
          cult. I finally went to Guanabacoa with her and spent the afternoon in a pink shack with
          the fetishes, but because we arrived there in a very large Rolls, and since a good many
          people seemed to be expecting us, I am inclined to discount the seriousness of the
          baffling proceedings which followed. Inasmuch as the drumming begins only after the
          sacrifices, and Señorita Cabrera preferred to leave just as the first victim, a white kid,
          was being dragged to the altar, I was obliged to miss that part of the rite which had
          promised to hold the greatest interest: the music. And so the young goat's outraged
          bleating mingled with the sound of the automobile horn and repeated farewells as we were
          hustled away; the drums were left to my imagination. The painter Wifredo Lam assured me
          that I had missed little of interest, since only the rival cult, the <i>ñàñigos</i>, have
          really good ritual music.
        </p>
        <p class="my-10 text-justify">
          <i>Havana</i>—That part of Marianao where the dancehalls are is a long, sad boulevard
          lined with one-story shanties. The roofs continue to the street to form a shelter over the
          sidewalk; you have to weave your way around the tables and chairs as you walk down the
          street. Here are professional singers armed with guitars, demanding that you listen to
          them perform their <i>guarachas</i>, rural ballads which somehow have until now escaped
          the wretched musical metamorphosis that has set in. The songs are distinctly Spanish in
          flavor; it is hard to find any trace of African elements there. Vocalizing is often
          reminiscent of cante <i>jondo</i>. Like the Mexican <i>corrido</i>, the subject matter is
          eclectic, sometimes deriving from the events and circumstances of the day. Behind the
          singers you can hear the insistent <i>claves</i> clicking inside the dancehalls and an
          occasional ecstatic trumpet phrase climbing above the confusion. Each dancehall has a
          jukebox and on Saturday nights an orchestra. These little bands make the nearest attempt I
          have heard so far to providing Afro-Cuban dance music. Many have retained the flute, all
          have trumpets and piano, a few (alas!) a saxophone, and most of them sport two drummers at
          least. They all play a great amount of international Latin American trash, but in between,
          if you wait long enough, you can hear some real Cuban music. Nothing, however, like the
          percussive orchestras that used to enliven certain nightclubs in Paris fifteen years ago.
          That day is apparently gone for good.
        </p>
        <p class="my-10 text-justify">
          <i>San Salvador</i>—It is beautifully cool and clear here after Belize. There is great
          excitement over the fact that, in a recent marimba contest between Guatemala and Salvador,
          the Salvadoreans came out ahead. My informant modestly added that perhaps the victory was
          “conceded as a courtesy; who knows?” Here, as in other parts of Central America, the
          marimba is the national instrument, one might even say the national pastime. Boys of eight
          can be seen pounding away (generally at the bass end) on the same instrument, along with
          old hands who show their prowess at trilling the melody up at the treble end. I have been
          in villages where the practicing kept up all night in some butcher's or cobbler's shop,
          because a fiesta was approaching and the <i>marimberos</i> (by day tailors or barbers or
          students) wanted to perfect their new repertory. When a village develops a really good
          marimba, the players are very much in demand throughout the region and can bring in more
          cash by going “on the road” as musicians than by remaining at their original professions.
          <br />
          I once stayed on a ranch in Costa Rica where my room, in the manner of the houses of hot
          lands, was separated from the adjacent rooms only by eight-foot partitions. In the next
          cubicle lived a foreman named Raúl, who spent all his leisure time fashioning a marimba.
          Each bamboo key had to be razor-pared down to its proper size, and each resonating gourd
          had to be hung below its corresponding note, tested, and cut away or replaced to insure
          the attainment of a maximum vibration when the bar above it was struck. Raúl had an
          excellent ear, and before I left he had completed a perfectly-tuned, three-octave
          chromatic marimba, which he promptly sold to an admiring <i>vaquero</i> from a neighboring
          ranch up the river. “I used to make a great many,” he said casually, “but now the fever is
          past, and I hope to learn soon how to make radios.”
        </p>
        <p class="my-10 text-justify">
          <i>Guatemala</i>—The marimbas here are objects of luxury, with cases enhanced by marquetry
          and box-shaped resonating chambers of varnished wood. Their visual aspect bespeaks a
          certain degree of mass production, and as a consequence they are less attractive to the
          eye. Performing ability, however, reaches its technical zenith here. Beside the capital,
          the larger towns like Quetzaltenango, Antigua, and Huehuetenango have impressive
          marimbas—the term is used to mean the band as well as the single instrument—in which
          several dozen men play, and there is always a drummer as well. The music itself is of
          scant interest, consisting of hackneyed numbers from the international popular repertory,
          new Mexican song hits, and examples of the so-called native form, the <i>son chapín</i>,
          which is quite as undistinguished as the rest, and whose name implies simply that it has
          been written by a Guatemalan.
        </p>
        <div class="my-10 text-justify">
          <i>Chichicastenango</i>—The dubious meaning our culture holds for the members of less
          evolved groups: this village, where during Holy Week in 1938 I heard some of the best
          autochthonous Indian music it had been my luck to encounter, has recently been presented
          with a loud but not very good radio, which is set up in the central <i>zócalo</i> opposite
          the temple with its famous steps containing the sacrificial ovens. Naturally the Indians
          from the neighboring countryside remain crowded around it for hours on end listening to a
          barbarous mélange of tropical static and soap operas in Spanish, a language which a few of
          them have learned. I stopped and pretended to listen awhile this afternoon; a record of
          American swing was being broadcast. From time to time a blurred riff peeked out from among
          the howls and crashing explosions of static. Feigning bewilderment, I asked the most
          sophisticated-looking group:
          <p class="mx-5">
            “What is it?”<br />
            “A gift from the government,” they said.<br />
            “Yes, but what's that noise?”<br />
            “A fight in the capital.”
          </p>
        </div>
      </template>
      <template v-else-if="router.params.title === 'Music'">
        <div class="mt-10">
          <h2 class="">MARCH (1946), <i>MADEMOISELLE</i></h2>
        </div>
        <div class="mt-10 text-justify">
          The expression “Latin American” in connection with music is likely to awaken in most minds
          the idea of a rumba or a samba, and a vague impression of palms and a wave-kissed beach.
          Certainly this kind of music exists in Latin America, but it by no means forms the more
          important part of Latin American music. At least half the music from south of the border
          (and the more “American” half, to be ethnographically correct) comes from the cold and
          often dreary regions of the cordillera stretching from Texas on down to Cape Horn, regions
          with neither palms nor languor, where most of the inhabitants would find a rumba or a
          samba a pretty strange-sounding piece of music.<br />
          &nbsp;&nbsp;In reality, “Latin American folk music” is too broad a term to mean much in
          any way except geographically. It is as if one were to speak of “European folk music.” The
          music of Ireland, southern Spain, and Albania, for instance, have little in common. Nor
          can a
          <i>son jaliciense</i> from Mexico be easily confused with a Cuban <i>conga</i> or a
          Panamanian <i>mejorana</i>. Each region makes its own music, unmistakable and distinct
          from that of the neighboring region; ethnical frontiers coincide no more with political
          ones on this side of the Atlantic than they do on the other.<br />
          &nbsp;&nbsp;There are two general categories in which most true Latin American music can
          be placed: that group in which the non-European elements are principally of Negro origin,
          and that group where these elements are Indian. In each case there is interaction of
          influences: European melodies have been Indianized, and melodies which were originally
          Indian have become Westernized. The same is true of the Negro division. Since both Negro
          and Indian music are basically linear, the one element which is alike in both cases is the
          purely European innovation of harmony, of which the same fundamental sort, often based on
          progressions of guitar chords, is to be found nearly everywhere one goes below the Rio
          Grande, insofar as the music uses it at all. Rhythm, melody, and sonority are the
          variables, and they vary considerably.<br />
          &nbsp;&nbsp;A third category could be made of that transplanted European music which has
          undergone no true hybridizing metamorphosis. This is to be found in practically all parts
          of Latin America; however, in spite of the differences which may exist between it and its
          Old World counterparts, unless a mixing of culture has taken place, there would seem to be
          no reason to consider it anything but displaced European material that has been deformed
          by regional tradition. This may seem arbitrary, and tantamount to saying that all truly
          American folk music contains extra-European elements, and as a matter of fact, I am
          inclined to believe that such is the case.
        </div>
        <div class="mt-10 text-justify">
          It is the basic change from the European to the American (read Negro and Indian)
          conception of rhythm which makes the great and immediately perceived difference between
          the music of the Old World and that of the New. So that, even though a given form can
          often be traced directly back to a sixteenth- or seventeenth-century Spanish or Portuguese
          song or dance, the rhythmical viewpoint with which it is approached on this side of the
          water effects a transformation of character.<br />
          &nbsp;&nbsp;It was far more imperative for the early colonizers, when they arrived here,
          to obliterate all vestiges of previous cultures than it was for them to try to deprive the
          already subjugated African slaves of their songs and rituals. And (fortunately for the
          colonizers) the Indians in general were less highly evolved culturally than the Negroes,
          so that their music, along with the other elements of their culture, was less strong and
          durable. Thus it is not surprising that the comparatively few Negroes brought to America's
          shores should have had such a tremendous effect upon its music. Wherever a few Negroes
          landed, traits of their music left their mark, and at the same time the Indian musical
          characteristics became less prominent.<br />
          &nbsp;&nbsp;This by no means implies mutually exclusive influences. Many of the music
          types here contain elements of both the African and autochthonous musical cultures. Thus,
          in Mexico, while the basic rhythm of the <i>son veracruzano</i> is clearly Indian, the
          vocalization contains much that is Negro. Or consider the Indian gourd-rattle used in the
          Negro music of Cuba—the ever-present <i>maracas</i>. It is unknown in Africa. On the other
          hand, the marimba, a purely African invention, has become the national instrument of
          Guatemala and El Salvador, where it has been highly developed, and where practically every
          Indian village has its marimba orchestra. But this more complex hybridization is rather
          the exception than the rule.<br />
          &nbsp;&nbsp;Generally speaking, it is in the islands and along the coasts, particularly on
          the Atlantic and Caribbean side of the two continents, that the Negro strain is strongest,
          and in the western highlands that the Indian material has proved most tenacious. The music
          of the Antilles and Brazil, places of extensive Negro infiltration, are especially rich in
          African traits, while in Mexico, Ecuador, and Peru, where the destruction of the
          indigenous culture proved most difficult because of the mountains and the fact that the
          cultures themselves were the most evolved and therefore the most resistant of the
          pre-Columbian systems, the Indian tradition has continued; one might say it has to an
          extent absorbed the Latin elements, carrying them from the lowlands and valleys back up
          into the mountain fastnesses, there to digest and transform them.
        </div>
        <div class="mt-10 text-justify">
          Comparatively very little pure Indian music remains to be heard now by the casual voyager
          down there. Almost all of it, even when native texts are used (and the number of
          indigenous spoken languages between Texas and Tierra del Fuego is stupendous), uses some
          variation of simple European harmony. In Peru some native instruments have been retained
          for the playing of hybrid music. In Mexico and Guatemala they have not; the Indian music
          one can hear there is largely restricted to the inevitable <i>chirimía</i> (high flute)
          and drum, which every rustic festival seems to call forth. (There are also the Yaqui and
          Seri rituals in northwestern Mexico, if one can get to them. And the <i>chirimías</i> of
          Guatemala are more rewarding because there are often several of them playing at once, and
          not in unison.) Almost always, nowadays, the pure Indian music is used in connection with
          religious observances, whereas the hybridized music may serve any purpose.<br />
          &nbsp;&nbsp;With the Negroes too, that music which approaches the greatest purity of style
          (that is, the music in which harmony has little or no place, and where the rhythms have
          retained the maximum complexity) is to be heard at religious ceremonies; here drums are
          used for the same purposes of facilitating the working of practical magic as they are back
          in West Africa. In Cuba there are <i>ñañiguismo</i> and the <i>Lucumi</i> cult, in Haiti
          the <i>Vodoun</i> and <i>Petro</i> rites, in Brazil it is <i>Macumba</i> or
          <i>Babacuê</i>, or one of many other local animist sects. In Trinidad, the Negroes have
          conserved certain song forms, such as the <i>leggo</i> and <i>kalender</i> (cf. the
          calinda of New Orleans's heyday), which are certainly remnants of such ceremonies, and in
          which the emphasis is all on percussive rhythm of a clearly African cast. The Calypso
          songs of that island vary in the degree of their Europeanization, those sung in patois
          usually being more conscious of rhythm than those in English.<br />
          In Latin America, as elsewhere, the radio and cinema are systematically exterminating folk
          music before its creators and consumers are in a position to participate in the creation
          or enjoyment of art music. What fills the gap? Commercial music. But there are still
          thousands of small villages in that part of our hemisphere where radios and projectors
          have yet to arrive, and where the people still make their own music just as they have for
          centuries, not for entertainment, but because it is an absolute essential to their living.
        </div>
      </template>
      <template v-else-if="router.params.title === 'Letter from Mexico'">
        <div class="mt-10">
          <h2 class="">NOVEMBER&mdash;DECEMBER (1941), <i>MODERN MUSIC</i></h2>
        </div>
        <p class="mt-10 mb-5 text-right italic">Mexico City, November 1</p>
        <div class="my-10 text-justify">
          The composer's opportunity to live solely from the music he writes, rare enough in the
          United States, is reduced to all but zero here in Mexico. Due to the absence of any
          royalty-collecting organization, even famous songwriters like Augustin Lara, Dominguez,
          Tata Nacho, Ruiz, and Marroquin are compelled to be constantly on the lookout for small
          radio jobs of arranging programs and accompanying singers. Lara receives a monthly stipend
          from XEW, the most important station, for writing and playing whatever music is required,
          but it can't matter very much to him if a song is a hit here, or in Cuba or the United
          States, since in any case he won't receive a centavo beyond his salary and those
          infinitesimal publisher's rights. (Practically all the serious composers are given
          pittances by the government for teaching classes or playing in the Orquesta Sinfónica.)
          During the past few months a local ASCAP, called the Sindicato de Autores, Compositores, y
          Editores de Música, has been formed, with the object of trying to persuade the officials
          of film and radio (even more commercial here than in the United States) that the
          inauguration of the system of <i>pequeño derecho</i> would not be amiss. Of course the
          officials scream injustice and regimentation. The composers have yet to receive their
          first royalty check, but they seem confident of success. The Sindicato would also make
          obligatory the drawing up of contracts for film and popular music, a procedure which might
          tend to protect the composers' interests, although not necessarily, as some of the film
          companies are fly-by-night outfits with which a contract is perfectly useless, since it
          has on occasion proven impossible for composers to collect even with names on dotted
          lines.<br />
          &nbsp;&nbsp;The Mexican radio is of such a technical and esthetic poverty as to make
          practically any American program, commercial or sustaining, seem the acme of good taste
          and talent. There are no professional arrangers anywhere, and the job is taken on in spare
          time by instrumentalists who know enough about how to put notes on paper to be able to
          make some parts. Scores are not bothered with. An arrangement costs from two to three
          dollars. Rehearsals are often considered superfluous, and when a one-hour commercial
          program is given a two-hour maximum rehearsal period, half the musicians are likely not to
          appear. Naturally composers want to have as little as possible to do with the radio.<br />
          &nbsp;&nbsp;So far there have been practically no cinema composers in Mexico who have
          turned out actual scores. The norm has consisted of untalented arrangements of standard
          tripe. Only two Mexicans have substantial lists of integrated film scores to their credit.
          One is Revueltas, who began with <i>Redes</i> and continued with a long list of
          documentaries and several feature films, the most important of which are
          <i>La Noche de los mayas, Bajo el signo de la muerte, Los de abajo, and Que viene mi
            marido!</i>
          The other man is Raul Lavista, who at the moment has a virtual monopoly on grade-A Mexican
          films (if indeed such can be said to exist). Lavista believes in Hollywood, has the
          greatest admiration for Max Steiner, and explains that the film people here have always
          preferred his music to that of Revueltas because he knew how to make concessions to
          popular taste, a thing Revueltas refused to do. The music for his four most recent films:
          <i>Viviré otra vez; El Hijo de cruz diabolo; Ay, qué tiempos; Señor Don Simon! and La Casa
            del rencor,</i>
          is decidedly nonexperimental and completely competent. He has to do all his own
          orchestration, as well as rehearse dancers and singers, conduct at recordings, and write
          lyrics if needed. The average price paid for an hour's score is the equivalent of five
          hundred dollars. Since feature films are made here on budgets comparable to those provided
          for short documentaries in the United States, practically no time is allotted for
          rehearsals. Fortunately the musicians are from the Orquesta Sinfónica, which eliminates
          some of the headaches. Deservedly or not, Lavista now receives the same credits and
          publicity accorded to the director of the film, a state of affairs inconceivable in
          Hollywood!
        </div>
        <div class="mb-10 text-center">. . .</div>
        <div class="my-10 text-justify">
          One event of the past symphonic season was the new Stravinsky symphony, which, even though
          the composer conducted, proved a balancing job a bit too difficult for the orchestra.
          Instruments supposed to pick up the line unnoticed would blurt boorishly in, apparently
          unaware that they were destroying the extremely delicate fabric. However, the reception
          was favorable. The other event was the good old-fashioned
          <i>succès de scandale</i> provoked by the world premiere of Copland's
          <i>Short Symphony</i>. The critics of the three large dailies were divided. One simply
          announced he considered it shameful that Chávez would stoop to conduct such a piece
          publicly just because it happened to be dedicated to him. Later I questioned this
          gentleman as to why he had so heartily hated the piece. “Copland is a Jew,” he replied,
          “and I never review Jewish music. Not even Ravel.<br />
          &nbsp;&nbsp;The Lener Quartet and Irma Gonzalez gave Virgil Thomson's Stabat Mater what
          was probably its best performance to date, in spite of Señorita Gonzalez's unrecognizable
          French. Chávez conducted Revueltas's <i>Janitzio</i>, to which I took an Indian from
          Noxtepec, in the mountains of Guerrero. His comment was: “How beautiful! It sounds just
          like a <i>cantina</i>.” A few nights ago a little orchestra with a long name, La Orquesta
          de Camera de la Sección Cultural por Radio (part of the at present much-beleaguered
          Secretaria de Educación Publica), played two Revueltas pieces. In spite of the uniformly
          bad execution, <i>8 x Radio</i> sounded well, perhaps because it is a pastiche of the kind
          of folk music one is accustomed to hear rendered with extremely indifferent technic.
          <i>Planos</i>, a larger orchestral piece arranged for nine instruments, was less happy.
          The vengeful dissonances came out watered and senseless, and the ostinato passages, which
          should have force, lacked dynamics and became monotonous.<br />
          &nbsp;&nbsp;The Revueltas family is not eager to have the work of its most illustrious
          member made known to the world at large. Victor had agreed to make an album consisting of
          <i>Homenaje a García Lorca</i> and the orchestral version of <i>Siete Canciones</i> with
          text by Lorca, the men had been rehearsed and everything was set, but the family refused
          permission. They were adamant also in not allowing Steinbeck and Kline to use Revueltas
          music for <i>The Forgotten Village</i> when it was suggested that a score be pieced
          together out of sections of various orchestral works. I have even heard it said that
          Koussevitzky had to forego playing a certain piece of Revueltas because he was unable to
          obtain the family's sanction.<br />
          &nbsp;&nbsp;The Orquesta Sinfónica offered a prize this year for the best new work by a
          Mexican composer. Prize: one hundred dollars. Conditions: ink score, and parts furnished
          by composer. Result: no entries.
        </div>
      </template>
      <template v-else-if="router.params.title === 'North African Music I'">
      <!-- <template v-else-if="router.params.title === 'North African Music'"> -->
        <div class="mt-10">
          <h2 class="">DECEMBER 27 (1942), <i>NEW YORK HERALD TRIBUNE</i></h2>
        </div>
        <div class="my-10 text-justify">
          From Agadir on the Atlantic across to the shores of Chott Djerid in Tunisia there are a
          lot of Americans just now. It is safe to assume that, if they stay there very long, they
          are going to hear a good deal of the music of these parts in spite of themselves, and even
          without paying visits to cafés and <i>quartiers réservés</i>. While they probably won't
          return knowing all the stanzas to the popular Tunisian, Algerian, or Moroccan songs of the
          epoch, still it is quite conceivable that among the musical by-products of the war will
          figure a song or so about North Africa. Something like “Fathma from Fez,” perhaps?<br />
          &nbsp;&nbsp;If one moves either coastwise around or inland across this part of the
          continent, one finds a varied supply of music. First of all, the Arabs have been more
          successful in imposing their religion and language than they have their music upon the
          native Hamitic Berbers. The Berber influence sticks through strongly in many songs whose
          words are in Arabic. Berbers are everywhere: It is Berber terrain, just as Mexico is
          Indian terrain, and a proportional amount of influence per century has been exerted and
          resisted. In urban zones the Berbers live as Arabs: in the remote country they live more
          or less as they did before the Arabs arrived.<br />
          &nbsp;&nbsp;If we go on the assumption that the present Arabic music is found where pure
          Arabic is spoken, we have to conclude that the true Arabic music of today is that of Egypt
          and Syria. By this token the material heard in northwestern Africa would not be strictly
          Arabic, although it abounds in examples of traditional Arabic vocalization, executed with
          wide variations.<br />
          &nbsp;&nbsp;The pieces with the greatest, and those with the smallest amount, of Arabic
          influence, are both to be found, strangely enough, in the same country: Morocco. This
          region's contact with Europe has been that of conqueror: in its decline it has been
          comparatively unmolested by industrial Europe. By virtue of this, also because it once had
          colonies in Mauretania and Senegal, and thus has a fair amount of admixture of Negro
          culture, it is richer in musical variety and interest than Algeria and Tunisia. In the
          latter countries there is plenty of music, but in Morocco music is inescapable.<br />
          &nbsp;&nbsp;Everywhere in Moroccan streets is found the <i>rhaita</i>—in Spain it still
          exists and is called <i>gaita</i>—the perfect outdoor instrument, an oboe of a stridency
          that permits it to be heard miles away, yet capable of executing the subtlest melodic
          figures. A special performing technique has been devised which permits the elongation of a
          phrase at will; gills are pierced in the neck of the player through which he draws air.
          Thus his cheeks can remain constantly inflated. The <i>rhaita</i> is used especially for
          wedding and circumcision processions, where it alternates with sung strophes, the whole
          being accompanied by the ubiquitous jar-shaped drum called the <i>darboukha</i>. There are
          also <i>rhaita</i> corps in the army bands, which play in between bugle tunes during
          parades; here no particular performing skill is required.<br />
          &nbsp;&nbsp;Outside the walls of the cities there is a continuous side-show of Negro
          Gnaoua cultists who torture themselves to rhythms supplied by large bronze castanets,
          magicians divining secrets from the earth through reed flutes, storytellers, snake
          charmers, performing and nonperforming mendicants, all of whom use music in their trade.
          And, most important, there are the Chleuh dancers.<br />
          &nbsp;&nbsp;These itinerant showmen, usually between the ages of eight and twenty, come
          down from the Atlas Mountains and circulate through the cities of central and southern
          Morocco. The Chleuhs have absorbed a minimum of Arabic culture; however, they seem at one
          time or another to have listened seriously to West African Negro music. The antiphonal
          element, so much a part of Negro song everywhere, is always present in their singing, as
          well as the tendency to drop the vocal line at the end of a phrase, in a heavily accented
          slur, to as much as an octave below. The word “guttural” is insufficient in describing the
          Chleuh articulation. It is really uvular; even when a word begins with a vowel sound, the
          Chleuh feels impelled to send the vowel sound off with a “rh.” The vocalization has its
          family ties with the South: it employs an excessively rapid tremolo not unlike that of the
          goat. This combined with Arabic ornamentations makes for a lively idiom. The scale is
          usually pentatonic but the intervals vary.<br />
          &nbsp;&nbsp;Instruments are primitive violins, often made from tortoise shells, strung
          with twisted horsehairs covered with resin. These are bowed, and the resultant grating
          noise follows closely the vocal line and seems to have the quality the singers strive to
          attain; it surely has been a modifying factor in determining the vocal tradition. There is
          also a plucked mandolin (<i>djimbri</i>) so tight that players can dance at the same time.
          It sounds like a loud banjo with paper between the strings. For percussion the Chleuhs
          like the piercing sound of the metal insides of an automobile wheel, or a piece of hollow
          pipe struck rapidly with small steel mallets. The smaller boys wear tiny cymbals attached
          to their fingers, which they play like castanets.<br />
          &nbsp;&nbsp;In 1931, I assisted at some evening music classes in Fez. It was so much fun
          that each year thereafter, on arriving in that city I made inquiries about them, but they
          seemed to have been disbanded for lack of pupils. That year there were about thirty, most
          of them at least middle-aged. I was the only nonparticipant in the music-making, which was
          led by an ancient gentleman playing a magnificent old rebab. Most of the men were playing
          modern violins whose guts had been replaced by silk strings, and they played them
          cello-wise, resting them on the floor against their folded legs. There were lutes,
          tambourines, and drums; no wind instruments. Everyone sang. Some pieces lasted as long as
          seventy minutes, and it was all in strict unison with complex basic rhythms.<br />
          &nbsp;&nbsp;This was classical Fassi music; they insist on calling it
          <i>musique andalouse</i>, considering it a trophy of war brought back from Granada. It is
          only in the more vulgar Fassi social-gathering music that the amazing improvisatory
          talents of these people become apparent. The result is a vocal and instrumental polyphony
          unlike anything else in the world. And while this peculiar music has very little to do
          with anything that can be heard in Spain today, yet Niño Marchena, probably the greatest
          male singer of <i>cante jondo</i>, used to visit Fez each year, stay in the recesses of
          the native medina, and spend his nights stretched out on a mattress listening to what the
          Fassi claim is the only real Andalusian music extant.<br />
          &nbsp;&nbsp;All of this betrays local influence. The only purely Arabic music one hears in
          North Africa, apart from the muezzin and what one can overhear coming from the inside the
          mosques, is in cafés and homes furnished with gramophones. These instruments, most of them
          equipped with lovely morning glory-shaped tin horns, are objects of great chic and can be
          rented by the hour or day for festive or family use. The proper music to play on them is
          that recorded in and imported from Egypt, Cairo being the cultural center of the Islamic
          world. In great favor still are the creations of Professor Abd el Wahab and Mlle. Ol
          Kalchoum. Flamenco records are popular, French music-hall songs fairly so, American swing
          not at all. Records of <i>musique andalouse</i> are unprocurable. Even the popular Fassi
          songs have fallen into disrepute. They are old-fashioned, you will be told at the record
          shops.
        </div>
      </template>
      <template v-else-if="router.params.title === 'Percussionists in Concert Led by John Cage'">
        <div class="mt-10">
          <h2 class="">FEBRUARY 8 (1943), <i>NEW YORK HERALD TRIBUNE</i></h2>
        </div>
        <p class="my-10 text-justify text-xl">
          A program of percussion music, last night at the Museum of Modern Art, directed by John
          Cage, presented by the League of Composers in association with the Museum of Modern Art.
          Assisting artist, Ruth Stuber Jeanne, marimba. Ensemble: Mary Anthony, Xenia Cage, David
          Campbell, Jean Campbell, Arthur Christie, Merce Cunningham, Renata Garve, Molly Howe,
          Cecil Kitcat, Helen Lanfer, Edward McLean, and Joan Palmer.
        </p>
        <div class="my-10 text-justify">
          The concert was good for the hearing; it was an ear massage. Fourteen persons, 125
          instruments, and about fifty sticks to hit them with. When things were not beaten or
          tapped they were shaken, rubbed, pulled, or immersed in water. There was an ominous
          audio-frequency oscillator, recorded sounds went on and off, and both thunder sheet and
          marimbula were equipped with electric pickups.<br />
          &nbsp;&nbsp;In percussion music so far there has been very little development other than
          rhythmical and that pertaining to the general sonorous architecture. Such things as melody
          and harmony, which involve the use of definite and related pitch, have been largely
          ignored. Henry Cowell's <i>Ostinato Pianissimo</i>, by virtue of the inclusion of a
          certain amount of both of these, proved to be more immediately enjoyable than some of the
          other numbers.<br />
          &nbsp;&nbsp;In the <i>Imaginary Landscape No. 3</i> of John Cage, the use of electrical
          instruments reminded one of Varèse's <i>Equatorial</i>, but the sonorous texture seemed
          better integrated. During the pieces by Roldan and Ardévol, one noticed the absence of a
          sustained sound; one thought of the human voice, perhaps because the music sounded very
          much like a complicated accompaniment to a “son” and one expected the arrival of a sound
          with some sort of carrying power.<br />
          &nbsp;&nbsp;In most of the music, the Oriental and African elements dominated. The effects
          quite clearly, if not consciously, strove to approximate those of the ritual music of the
          far parts of the world. Even the figures used by Mr. Cage in his delicate
          <i>Amores</i> for piano transformed with screws and clips were reminiscent of Bali, and
          often the passages of ensemble work were suggestive of the gamelan music of that same
          island.<br />
          &nbsp;&nbsp;Sometimes the level of excitement reached was below the obviously prodigious
          amount of energy expended to attain it. The complicated rhythmical juxtapositions then
          sounded neither complex nor simple, but desultory and accidental. But there were few of
          these dry spots. The music's principal aim was to achieve a maximum of sonorous effect,
          and the composers involved were adept at it.<br />
          &nbsp;&nbsp;It is not so much in themselves that concentrated manifestations like last
          night's are important, but rather, being in their very intensity the detonators of ideas,
          they indicate possible directions for Occidental art music to take.
        </div>
      </template>
      <template v-else-if="router.params.title === 'Recorded Popular Music'">
        <div class="mt-10">
          <h2 class="">MARCH 19 (1944), <i>NEW YORK HERALD TRIBUNE</i></h2>
        </div>
        <div class="my-10 text-justify">
          “Popular” here is used in a strict sense and can be construed as embracing all shades of
          non-art music, from the purely folk product to the purely commercial. Naturally it is not
          the passage of money between persons in payment for a piece which makes it commercial, but
          rather the impression the music gives of having been conceived with the idea of salability
          as the chief consideration. Involved here is the importance of distinguishing a popular
          idiom before it becomes self-conscious from the same idiom after the discovery of its
          exploitational possibilities. There is an element of truth in the former which is absent
          in the latter, and since truth is stranger than fiction (strangeness, like originality,
          being never so marketable as usualisms and repetition with minor variation), commercial
          music turns out to be as homogeneous as possible, and consequently not very
          interesting.<br />
          &nbsp;&nbsp;With regard to jazz (and swing), in view of the violent denunciations which
          are forthcoming from many directions whenever anyone opens his mouth to speak on the
          subject (a manifestation as encouraging in its healthiness as it is discouraging in its
          lack of objectivity), it would be well for this listener to declare his nonimplication in
          any tendency or school. He is not interested in bringing back the dead days of Storyville,
          nor in keeping jazz free from contaminating influences, nor yet in seeing it “raised” to
          any particular degree of sophistication. He judges it exactly as he does any other music—a
          Mozart sonata, a Chilean <i>triste, a java</i> in the Rue de Lappa: first, is the
          relationship between the means employed and the end achieved such as to arouse admiration?
          And second, does the music function as something which is fun to listen to?<br />
          &nbsp;&nbsp;It is, of course, a platitude to say that the piece is not made by the tune
          but by the quality of the arrangement (in swing), and the quality of the ensemble
          improvisation (in jazz), and certainly by the personnel of the performing organization in
          both cases. This means that it is not too important what music a band records. Whether
          this is one cause for, or one result of, a general dearth of good tunes is not very
          important either. Occasionally, there is a well-tuned melodic line by a not-so-well-known
          songwriter. One of these is <i>When They Ask About You,</i> by Sam Stept, recorded by
          Sonny Dunham on Hit, and fortunate in its vocalist. Another, more static, less convincing,
          and not nearly so fortunate in its singer, is <i>I'll Be Around</i>, by Alec Wilder, also
          by Dunham on Hit. Wilder's pieces for his octet with harpsichord are more amusing and
          personal.<br />
          &nbsp;&nbsp;Commodore has two records, both by the gang at Nick's, of which one is a
          twelve-inch and is labeled Panama and <i>That's a Plenty</i>, played by “Wild Bill”
          Davison and his Commodores. The other is <i>Ugly Chile</i> and <i>That Da&mdash;Da Strain</i>,
          and the group is billed as George Brunis and His Jazz Band. The ensemble is made up in
          both cases of George Brunis, trombone; Davison, trumpet; Pee Wee Russell, clarinet; Eddie
          Condon, guitar; Gene Schroeder, piano; Bob Casey, bass; and George Wettling, drums. My
          favorite of these is <i>Panama</i>, which has a fine tune that never palls. These numbers,
          like all true jazz, have the fascination and beauty of handmade objects which the
          perfection of machine-made goods (and careful arrangements) can seldom attain.<br />
          &nbsp;&nbsp;<i>Seldom</i> is used advisedly, since the greatest exception to the above
          statement is the work of Duke Ellington, whose magnificent arrangements are certainly of
          the most careful sort and yet leave the music absolutely fresh and unlabored. Ellington
          lovers had better begin worrying, for the recent release of his <i>Main Stem</i> and
          <i>Johnny Come</i> Lately marks the end of his records made before the ban in 1942, and no
          more will be forthcoming until differences are settled. <i>Main Stem</i> is a show-piece,
          with sections of superb orchestrational invention which far surpass anything being done
          these days. <i>Johnny Come Lately</i>, by the other arranging genius of the organization,
          Billy Strayhorn, is harmonically more exciting and boasts some wonderful cornet playing by
          Rex Stewart.<br />
          &nbsp;&nbsp;<i>Now I Know</i>, a pretentious tune, can be had sung by Pearl Bailey in a
          purple arrangement played by Cootie Williams on Hit (a far cry from the lost days when
          Cootie lent his name and talent to Ellington for the “Rug-Cutters” on Vocalion), or by
          Dinah Shore on Victor, accompanied by a rhythmless mixed chorus which sounds like a group
          of elderly kindergarten teachers soothing their charges with close harmony.<br />
          &nbsp;&nbsp;Decca gives out with Ella Fitzgerald singing
          <i>When My Sugar Walks Down the Street</i>, the same old piece I had a record of in grade
          school and improved now by a slower tempo and Ella's expressive little voice. If you must
          have that stirring marching song Mairzy Doats in your discoteca, I suggest the classical
          version by the <i>Merry Macs</i> on Decca, in place of the unorthodox one by the King
          Sisters on Bluebird. It is also less painful to put up with Jerry Wald's relatively
          harmless playing of Poinciana on Decca than it is to attempt to un-Ravel David Rose's
          daffy and cloying paraphrase of the same piece on Victor. This and
          <i>Holiday for Strings</i> loom high on the list of sickly tendencies of the last year.<br />
          &nbsp;&nbsp;Victor offers an album of reissued Swing Classics garnered from the output of
          the last seven years, including Goodman's <i>Stompin' at the Savoy, Shaw's Begin the Beguine,</i>
          and Miller's <i>Tuxedo Junction</i>. The differences among the musical sounds made by these
          excellent bands are in general superficial, since they all agree upon the target.
        </div>
      </template>
      <template v-else>
        <div class="mt-10">
          <h2 class="">MAY&mdash;JUNE (1941), <i>MODERN MUSIC</i></h2>
        </div>
        <div class="my-10 text-justify">
          There exists a state of great confusion about the factors that differentiate the various
          forms of Mexican popular music, even in the minds of Mexican musicians.* The best a
          non-Mexican can do, outside of serious musicological research, is to record the confusion
          by stating what is known. No one has yet done the work which will enable future listeners
          to know they are hearing a <i>Son</i> and not a <i>Huapango</i>. The name “Son” has been
          applied to practically everything, even in the few recent musicological books brought out
          in Mexico, and terms are used loosely and with complete interchangeability. (There is also
          the custom of calling various dances in different regions by the names of the Spanish
          ancestors from which they may have in part developed: one hears <i>Fandango</i> used in
          connection with the playing of <i>Sones, Huapangos</i> are called
          <i>Rondeñas, Malagueñas,</i> and so on.)<br />
          &nbsp;&nbsp;Last year Chávez pointed out that this state of confusion must come to an end.
          The trouble is that the music may come to an end before the confusion does. The really
          fine Mexican music is naturally intensely regional. Talent scouts from Mexico City radio
          stations are fast destroying the local cultures by carrying away the best musicians from
          their villages. They teach them the monstrous bastard kitsch which now passes for music
          all over Central America (Cuba, Argentina, and Hollywood all in one dish) and then allow
          them, in their program of broadcast horrors, to perform one or two of their own already
          damaged native songs. This is true particularly of players of <i>Huapangos</i>, whose
          collective rhythmical devices are so delicate that Blas Galindo, the young Indian
          composer, assures me a week of radio work is sufficient to ruin a group forever.<br />
          &nbsp;&nbsp;There are two types of <i>Huapango</i>: the <i>Huasteco</i> and the
          <i>Veracruzano</i>. They are both in 3/4 or 6/8 and lack the frantic repetitiousness of
          most Mexican music. Both have in common an extremely successful exploitation of
          contretemps: the voices go along, seemingly unaware of each other or of the rhythmical
          variations in the accompanying bass. The <i>Huasteco</i> is the simpler of the two, the
          disparity in rhythm between the melody and accompaniment is less, and the melodies
          themselves are less involved and less soaring. Often the second chorus is in the
          supertonic instead of a related key, the choruses thereafter alternating between tonic and
          supertonic; doubtless this is a guitaristic device.<br />
          &nbsp;&nbsp;The <i>Veracruzano</i> probably has the distinction of being the most
          complicated folk music in the country. There is no doubt in my mind that certain ones I
          have heard have Negro influence, a thing made noticeable in the rhythms of the
          counterpoint invented particularly by the harpist. Certain Negroisms in the singers'
          intonations can be detected as well. The music however remains overwhelmingly Spanish, but
          not like any folk music one can hear in Spain today. The hands of the performers being
          occupied in playing their guitars and harp, the singers' feet often take over the job of
          making the rhythm more incisive, of emphasizing certain offbeats for the sake of variety,
          which the clapping hands do in Andalusia. Sometimes at the end of a chorus comes a
          <i>desplante</i> during which the dancers, if any, rest or sing falsetto allusions of a
          challenging or insulting nature regarding each other's defects. (This happens in the
          <i>Fandango</i> in Spain.) Along the Gulf Coast, yearly regional contests are held.
          Participants are usually fishermen, some of whom have attained an unbelievable proficiency
          not only in the pure technic of their instruments, but also in the art of melodic and
          rhythmical improvisation. In 1937, Gerónimo Baqueiro Fóster brought back from the region
          of Alvarado two such men to his home in Mexico City, where I heard them. Their
          improvisatory genius and their ability to sustain not alone interest but prolonged
          excitement in the listener was comparable only to that of the best swing men. There seemed
          to be no end to their contrapuntal inventions. Two voices, four hands, and four feet
          managed successfully to contrive more complications than one would have thought humanly
          possible.
        </div>
        <div class="my-10 text-justify">
          &nbsp;&nbsp;The <i>Son</i> (to be kept absolutely apart from the Cuban <i>Son</i>, of
          course) is still the most mysterious of the forms. One writer claims the Huapango is a
          variety of <i>Son</i>, another that the <i>Son</i> is part of the <i>Jarabe</i>; no one
          can give its particular characteristics. (Galindo is preparing a thesis on the
          <i>Son</i> proper, the first work of its kind.) Although Sones of a degenerate and
          indifferent sort can be heard pretty generally, actually good Sones are extremely rare,
          their point of origin being restricted to the region of Jalisco and Michoacan. The
          interest of the piece lies completely in its rhythmical complication; the more complex and
          varied the accompaniment, the purer the <i>Son</i>. The easiest distinguishing feature is
          the so-called alternate 6/8 and 3/4 meter, proper to the <i>Son</i> alone. Galindo prefers
          to consider the entire piece as being in 6/8, and gives me the following examples of
          rhythms from his native Jalisco. The lower notes represent the percussive section, as
          played by the guitarron and sometimes drum, the middle notes are the harmony section
          carried by guitars and jaranas—small guitars, from which the Yucatecan dance takes its
          name, also called vihuelas, depending upon the region—and the top line is that of the
          instrumental melody played by violins. The vocal line is sung above and apart from this
          fundamental accompaniment.<br />
          &nbsp;&nbsp;The tempo is far more frantic than that of the <i>Huapango</i>, and certainly
          the rhythms are much more indigenous, making the consequent general effect nearer the
          primitive side. <i>Sones</i> and the Mariachi orchestras that play them are inseparable.
          (Revueltas once told me that during Maximilian's time these little instrumental groups
          were called in to assist at weddings, which were then known, by a current snobbism, as
          <i>mariages</i>; but since the Mexicans' French pronunciation was far from perfect, the
          orchestras came to be known as Mariachis. It may be a legend.) There is no fixed recipe
          for the composition of a Mariachi. A fairly classical arrangement of instruments would be:
          violins, harp, jaranas, guitars, and guitarrones (enormous guitars played pizzicato on a
          single string). Vicente T. Mendoza, Mexico's foremost musicologist, gives the following
          list as comprising a typical group in Guerrero: two violins playing in thirds
          (participating only between choruses), two vihuelas, whose players sing as well in the
          form of responses to the principal singer or go along with him in thirds, and a drummer
          who plays a cylindrical-shaped instrument with two different sticks, one short and soft
          for the membrane and the other long and hard for the rim. The drummer is the principal
          singer. In cities a trumpet is often added and there are generally more of each kind of
          instrument.<br />
          &nbsp;&nbsp;Two forms whose interest lies principally in their lyrics are the
          <i>Canción Ranchera</i>, or Mexican <i>lied</i>, which comes in two varieties, amorous and
          zoological, and the <i>Corrido</i>, an endless saga, differing from the former in that its
          choruses are generally shorter and repeated practically forever or at least until the tale
          is told. The <i>Corrido</i> may be military, religious, criminological (these are called
          <i>Tragedias</i> in the north of Mexico) or may deal with the less heroic things of life,
          such as adultery, deception, jealousy, ridicule; or just important events like the
          installation of electricity in a town, or the inauguration of a new bus line. It is not a
          localized phenomenon, although the region richest in <i>Corridos</i>, as well as in a good
          many other musical manifestations both indigenous and transplanted, is the state of
          Michoacan. The meter is generally ternary, although like the <i>Canción Ranchera</i>, it
          may be binary. Occasional measures of 7/8 and 2/8 appear. A good deal of study has been
          done by Mendoza, tracing the development and metamorphosis of the old Spanish
          <i>Romance</i> and the <i>Corrido Andaluz</i> into the <i>Corrido</i>. It is certain that
          a great many of the songs are practically identical even after three centuries or so,
          although the tessitura of the <i>Corrido</i> is definitely greater. An interesting note is
          that practically 60 percent of all <i>Corridos</i> end on the mediant of the scale.
          <i>Corridos</i>, like <i>Sones</i>, are rendered by Mariachis or by anyone with a guitar
          who feels like singing about something in particular.<br />
          &nbsp;&nbsp;Mendoza has the following to say of the <i>Corrido</i>: “In cases where there
          exist irregularities of form, whether in the number of syllables which make up the line or
          in the number of lines which form the chorus, there frequently appear
          <i>estribillos”</i> (the <i>estribillo</i> is that part of any song which can be
          considered as a refrain—a recurrent theme, as in a rondo), “interspersed, perhaps as
          exclamations, as spoken words, or as phrases which break up the symmetry of the literary
          or musical forms. In some cases these <i>estribillos</i> develop in such a way that they
          are not simply one or two lines but constitute independent verses of four or more lines,
          sometimes having a different meter from the <i>Corrido</i> proper. The purpose is to
          achieve more rhythmical variety or greater emphasis, and it does give the form an
          extraordinary liberty. In this way, the Corrido acquires a wealth of forms, meters and
          rhythms, developing as time goes on into a true work of art.” He adds that if one will
          trace the history of one individual <i>Corrido</i> from its earliest rudimentary state up
          to its most complex form, he will at the same time have followed the historical
          development of Mexican music.<br />
          &nbsp;&nbsp;The <i>Jarabe</i> is primarily a dance form, and is usually a suite (rather
          like the classical suite) of short pieces played in rigorously fixed sequence, leaving a
          certain leeway at one point in the choice of a section (as between the
          <i>Sarabande</i> and the <i>Gigue</i>). There is no doubt that the
          <i>Jarabe</i> (originally <i>Sarao</i>) was brought over whole from Spain in the form of
          <i>Seguidillas, Zambras, Fandangos,</i> and <i>Jarabes Gitanos</i>. All these are
          <i>danzas zapateadas</i> (shoe or tap dances), which arrived in New Spain in their pure
          state but were gradually molded, sometimes even consciously, by means of straight
          ridicule, by those to whom they were brought, into something quite different. The melodies
          are lively, nearly always in major, with a good deal of changing of key, not only to the
          relative dominant and subdominant, but also to the related keys of these in turn. The
          meter may also change between sections, although it may remain one of 3/4 or 6/8 all the
          way through. The <i>Jarabe Tapatio</i> of Querétaro (which Saldívar suggests should be
          called the Official <i>Jarabe</i>) includes both binary and ternary meters. Another, more
          vulgar <i>Jarabe Tapatio</i>, the best-known outside Mexico, uses in turn sections in 6/8,
          3/4, 2/4, and 2/8.<br />
          &nbsp;&nbsp;All this music certainly started out Spanish and ended up Mexican, and the two
          sound very little alike. Most Mexican forms are Spanish melodytypes encased in indigenous
          rhythms, but that is not all that is different. Mexican music is insistent, childlike,
          impersonal, and lacks, except in rare cases, just those qualities of subtlety, hauteur,
          and brilliance which characterize the music of Spain. Listen any evening in the Plaza
          Garibaldi to the simultaneous playing of six or seven groups of ordinary Mariachis. The
          rhythms are unpredictable but earthbound. Nothing could be much farther from the hard,
          circumspect precisions of Andalusia or Asturias. But the great differences lie not
          primarily in the melodies, nor in the harmonic progressions, nor yet in the rhythms, but
          rather in a whole mass of innumerable details affecting all these things, details which
          when combined make a result distinct from the original music. What remains is as much a
          direct product, I think, of the climate and topography as of the civilization these have
          helped to engender. The voice and intonation of the Indian and mestizo are not the same as
          those of the Spaniard. Guitar technic is very different. The Indian taste for falsetto
          singing and whooping helps to carry the music in the opposite direction from Spain.<br />
          &nbsp;&nbsp;The interest for the foreign musician certainly does not lie in the music
          proper or its text, be it ever so authentic and touching, but rather in the special charm
          inherent in the playing of each kind of performing <i>conjunto</i>. The same piece
          rendered by a group of Mariachis in Guadalajara will sound very different in Cordoba, when
          given by a Veracruzano harpist and guitarrist (and will probably be unrecognizable if
          played by a rural Indian band anywhere.)<br />
          &nbsp;&nbsp;Here is a whole national music dying before it has been made known to the
          cultured world. Even the strictly indigenous music may survive longer than this popular
          mestizo, because it is more protected from degeneration through contact. There are no
          recordings available of good Mexican popular music. Men like Daniel Castañedas, Mendoza,
          Fóster, Luis Sandi, Ruben M. Campos, and Saldívar have initiated in the last ten years a
          study which should be carried on tenfold in the years to come if the musical heritage of
          four centuries is not to be lost.
        </div>
        <!-- <img src="@/assets/imgs/Mexico-Music-Note.png" class="w-auto h-auto" /> -->
      </template>
    </div>
  </div>
</template>
