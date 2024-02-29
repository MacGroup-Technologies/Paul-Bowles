<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { OnClickOutside } from '@vueuse/components'
import { ref } from 'vue'

import WithoutStopingImage from '@/assets/imgs/Without-Stopping-1.jpg';
import WithoutStopingImageTwo from '@/assets/imgs/Without-Stopping-2.jpg';

const router = useRoute()
const route = useRouter()
const active_item = ref<any>(null)

useHead({ title: `${router.params.title}` })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex md:items-center justify-between">
        <h1 class="text-2xl md:text-6xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link
          to="#back"
          @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform"
        >
          <icon-back />
        </router-link>
      </div>
      <template v-if="router.params.title === 'Paul Bowles: His Life'">
        <div class="mt-10 md:text-justify">
          By Paul Bowles
          <br /><br />
          The first sky he saw was the sky above New York. Winters it snowed. The school was dark.
          There was a song which went: "When you come back, if you do come back." It was addressed
          to the American soldiers in France. There was a day when the children paraded in the
          street. They sang Marching through Georgia, a song of victory from the Civil War. Now it
          celebrated a different victory. Kaiser Wilhelm would no longer haunt the children's
          dreams. Summer meant sunshine and lakes and crickets. The peaches dropped to the ground
          and were speared by the stubble. A day was invisible, had no hours. The dark brought the
          voices of the night insects. But school went on for many years. Discipline was strict. The
          idea of escape took root and grew. A night with thunder in the sky he packed his bag and
          left. The S.S. Rijndam was old and slow. This was its last voyage. Passengers for Boulogne
          went ashore in a dinghy, rocked by the waves. At dawn the empty streets of Paris were
          clean and shining. This was fifty-seven years ago. Things are different now. The
          excitements of Paris: Le Café du Dôme, La Mosquée Le Théâtre du Grand Guignol, le Bal
          Nègre de la Rue Blomet. He worked for forty francs a week, and sometimes was hungry. Then
          a girl he'd known from childhood came through Paris and saved him. He wandered on the Cote
          d'Azur, in Switzerland, And along the paths of the Schwarzwald. He was happy, and he wrote
          words which he imagined made poems. That winter in New York Aaron Copland told him: You
          should become a composer.
          <br /><br />
          It will be difficult, he thought, but why not try? Soon he was in Paris again. He admired
          Gertrude Stein. She told him he was not a poet, so he stopped trying to be one. This meant
          that he devoted himself only to music. Miss Stein did not like the music either. In
          Hannover he stayed with Kurt Schwitters. He went with him to the city dumping ground And
          they collected material for the Merzbau. In Berlin he wrote music, and people shouted;
          Fenster zu! In Paris they cried: Fermez la fenetre! In Tangier only Copland and the
          cicadas could hear him. In the Sahara he fell in love with the sky And knew that he would
          keep returning there. In the spring he was in Agadir, where the food was not clean. The
          doctors in Paris told him he had typhoid fever. He lay for a month in the hospital. His
          mother came from New York. When he was well they went to Spain and to Monte Carlo. Winter
          came. He wanted the desert. He took a house outside the oasis of Ghardaia. He went to
          Tunisia on the back of a camel. In Tunis he learned that he had no money. Franklin D.
          Roosevelt had closed the banks. The dollar was not negotiable. Friends in France wired him
          francs. He arrived in Tangier with his python skin and seventeen jackal pelts. He knew he
          must return to America, but first he sailed to Puerto Rico. That way he stayed outside the
          cage a little longer. In New York he thought only of Morocco. Like a convict planning a
          prison break he prepared his escape. And summer found him sailing toward the east. He
          stayed in Fez this time. And though his parents awaited him in New York He went to South
          America to see how it looked. The forests and the mountains delighted him, but he did not
          stay. He was in California writing music. He was in New York writing music. Orson Welles
          wanted music for two plays, and he provided it. Kristians Tonny and his wife arrived in
          New York. Jane Auer appeared on the scene, and the four set out for Mexico. The day after
          they arrived in Mexico City Jane disappeared. Much later they heard she had gone to
          Arizona. After a few months they went on to Guatemala. It was very fine. He hurried to New
          York to orchestrate his first ballet. He took Jane Auer to hear it played by the
          Philadelphia Orchestra. Soon Jane Auer became Jane Bowles. With too much luggage they
          boarded a Japanese ship and went southward. Then they were in Guanacaste with the monkeys
          and parrots And they carried a parrot with them from Costa Rica to Guatemala. They were on
          the Cote d'Azur when Chamberlain visited Munich. They were in New York when Hitler marched
          eastward. He was writing music for theater and film directors And Jane was writing a
          novel. They decided to go and live in Mexico. The hacienda was ten thousand feet up. When
          he had to fly to New York to work, Jane stayed behind. The rooming-house where they lived
          that winter was run by the poet Auden. At half past six each morning Jane met the poet in
          the dining room. Jane was a friend of Thomas Mann's daughter Erika. And Auden had married
          her. They had things to talk about. Soon they were back in Mexico. He was composing a
          zarzuela. And Jane was writing a novel. One day she came to the end of it. The next day
          the Japanese bombed Pearl Harbor.
          <br /><br />
          They went to Tehuantepec and listened to the marimbas. He was still working on the
          zarzuela. He was also writing a second ballet. They went to New York and he became a music
          critic. Jane's novel was published and Leonard Bernstein conducted the zarzuela. He went
          to Mexico and admired the new volcano Paricutin. The Belgian Government-in-Exile
          commissioned music for a film on the Congo. Collaborating with Salvador Dali, he wrote a
          third ballet. Then he began to write short stories, and grew tired of writing theater
          music. He went to Cuba and El Salvador. Jane was writing a play. He stopped being a music
          critic, but continued to write music for Broadway. One night he dreamed he was in Morocco.
          The dream made him very happy. A publisher commissioned him to write a novel. He decided
          to leave New York and go back to Morocco. In Fez he began to write The Sheltering Sky. He
          continued to write it as he moved here and there in the Sahara.
          <br /><br />
          He met Jane in Tangier and took her to Fez. A stream rushed by under their windows as they
          worked. He finished his novel. He had already written music for Tennessee Williams' first
          Broadway success. He was not surprised to learn that Tennessee wanted him for another
          play. He went to New York and wrote the score. After the opening he took Tennessee back to
          Morocco with him. The weather was bad, and Tennessee stayed less than a month. He and Jane
          were living at the Farhar in Tangier. Truman Capote arrived. For six weeks he amused them
          at mealtimes. There were many parties and picnics. Jane worked in her cottage, but he did
          not know what she was writing. He was chagrined to hear that the publishers did not want
          his book. We expected a novel, they said, and this is not a novel. So it was published
          first in London.
          <br /><br />
          They went to England and stayed a few weeks in Wiltshire. Jane wanted to spend the winter
          in Paris. He decided on Sri Lanka. On the ship he started a novel about Tangier. He went
          to stay on a tea plantation in the hills. Where leopards hid behind rocks and carried off
          the dogs. He took a boat across to Dhanushkodi in India. India was hotter than Sri Lanka.
          He worked on his novel. When he arrived in Paris, Jane was not ready to leave. He was
          making an opera out of Garcia Lorca's Yerma. This was for Libby Holman. They spent a month
          together in Andalusia. Autumn in Fez. Winter and spring in the Sahara. Jane wanted to
          return to Morocco. He drove to the French frontier and picked her up. But she liked Spain
          so much that they spent a month there. She finished her play and went to New York. He
          finished his novel and went to Bombay. The Indian railways had suffered in the past two
          years. In South India he was put into a screening camp. Along with twenty thousand Tamils
          caught while trying to escape to Sri Lanka. But although they were there for months and
          years He got out after two days, and went to Sri Lanka.
          <br /><br />
          In midsummer he was in Venice. He was in Madrid when a wire came from Ceylon. It was
          possible now to buy a small island off the coast of Sri Lanka. He bought it and went to
          New York to write music for Jane's play. In the summer he was in Rome, working on a film
          for Visconti. He did not know what he was doing, but he did it anyway. That winter in
          Tangier, while he had paratyphoid, William Burroughs came to see him.
          <br /><br />
          It was a year before they got to know one another. In the summer he started to write a
          third novel, this one about Fez. It was half finished when he and Jane sailed To pass the
          winter on Taprobane, the island off the coast of Sri Lanka. Jane was not well. She was not
          happy there. After two months she returned to Tangier. He finished his novel and took a
          cruise to Japan. Then he went back to Tangier and continued his work on the Garcia Lorca
          opera. His parents came to visit him. They enjoyed Morocco. He was surprised. He thought
          about his island, and decided to go to Sri Lanka and sell it. The Suez Canal was blocked.
          He had to go via Cape Town. He passed the winter at Taprobane and set sail for Mombasa.
          While he was in Kenya Jane suffered a stroke. He took her to England to be examined. The
          doctors could do nothing, and they returned to Tangier. Soon she became worse and had to
          go to London again. It was a bad time. In Madeira her health grew worse. She was obliged
          to go to New York. Tennessee, who loved her, came from Florida to meet her at the airport.
          The Garcia Lorca opera was produced. It was not a success. Libby Holman had worked very
          hard, but there was no director. He and Jane went back to Tangier. But then a telegram
          came from Tennessee Saying he needed music for a new play. He sent him the script for
          Sweet Bird of Youth. Part of the music was written in Tangier and part on the New
          York-bound ship. The Rockefeller Foundation gave him a grant to record music in Morocco.
          He spent six months taping music in the mountains, the desert and the city. The following
          year he began to tape Moroccan story-tellers. Jane seemed to be better, but she still
          could not see to work.
          <br /><br />
          He took Allen Ginsberg to Marrakesh. But they arrived the day the Medina burned. The smoke
          from the bazaars and souqs was heavy in the air. Jane's health was now less good. They
          went twice to America, saw their parents. Consulted doctors who might be of use. But no
          doctor could be of use. In Tangier on the Monte Viejo he wrote his fourth novel. He began
          to translate what Mohammed Mrabet recorded. A publisher asked him to write a book about
          Cairo. He did not want to do it, so he playfully suggested Bangkok. The publisher agreed.
          He went to Bangkok via Panama. He was appalled. You have arrived fifteen years too late,
          everyone told him. The trees were gone. The klongs had been filled in. The air was foul.
          After four months the Thai authorities forced him to leave. In Tangier he found that Jane
          needed to be hospitalized. He took her to Spain. Then he agreed to go to California to
          teach. He told his students that he was not a teacher and could not teach. They laughed,
          thinking he was eccentric. After the first semester he returned to Morocco. Jane begged to
          be taken back to Tangier. The doctors advised against it. Nevertheless he took her back
          with him because she was so unhappy. It was a disaster. She would not eat, and grew weak
          and thin. He admitted defeat and returned her to the hospital in Spain. She remained
          there. She died there. Her grave is unmarked. After that it seemed to him that nothing
          more happened. He went on living in Tangier, translating from Arabic, French and Spanish.
          He wrote many short stories, but no novels. There continued to be more and more people in
          the world. And there was nothing anyone could do about anything.
          <br /><br />
          This text was published in Travels: Collected Writings 1950-1993 (2010)
        </div>
      </template>
      <template
        v-else-if="
          router.params.title ===
          'Paul Bowles, Contemporary Authors Autobiographical Series, volume I, pp. 81-95'
        "
      >
        <div class="mt-10 md:text-justify">
          I think that my father would have preferred not to have been burdened with a child. Quite
          possibly my coming into existence was the result of an accident. He was nervous and
          hypochondriacal, having become a dentist only after his goal of a career as violinist had
          been thwarted by his parents. He was easily upset, as I learned very early; he did not let
          it be seen that anything ever pleased him. At the beginning of his practice he met my
          mother, who was teaching a subject called domestic science at a training school for
          student teachers. They married, and I was born three years later.
          <br /><br />
          The material of a piece of autobiographical writing ought to be restricted to that which
          the author remembers; everything else is hearsay. The documents state that I was born on
          December 30, 1910. My first shadowy memories date probably from 1913. I learned to read
          and print from a set of wooden blocks carved with the letters of the alphabet. There was
          nothing else to do, since I was shut in all day with my mother. I had an extraordinarily
          uneventful early childhood: only my imagination made it bearable, substituting fantasy for
          reality. Being entered in school changed the elements of reality, if not those of fantasy.
          <br /><br />
          This enforced isolation resulted in a total ignorance of the nature of children. I thought
          of myself as a small adult and assumed that other children were like me and that the
          inevitable concomitant of childhood was being obliged to sit motionless and silent in the
          presence of adults until given specific permission to move or speak. Therefore one never
          ran or made a noise. In school I discovered with amazement that children were neither
          silent nor motionless. Their world was chaotic, insane, without any relationship to the
          true - that is, the adult - world. The irrationality and violence of children have never
          ceased to fascinate and disturb me. (The same qualities evinced in the behavior of grown
          people, while far more reprehensible, are somehow less striking, because adults generally
          feel called upon to offer excuses for their behavior.)
          <br /><br />
          As I grew, it became clear to me that happiness, which was made up of freedom, adventure,
          and mystery, was to be found only in the country, where I was surrounded by inexplicable
          natural forces. True, I never spent a winter on a farm or in a cabin; my impressions were
          formed during the summers, when katydids and owls called outside the window. Each year the
          months of July and August brought forth the supreme pleasure of going to stay with my
          grandparents at a place called The Boat House, which was built into a cliff on Seneca
          Lake. Here there were motorboat rides and picnics, and I was allowed to go by myself in a
          rowboat to fetch the mail.
          <br /><br />
          Labor Day put an end to the magic of summer. Not only did I have to begin studying again,
          I also went twice a week for music lessons. These consisted of theory, solfeggio, and
          ear-training. This schedule continued for ten years, as did weekly visits to an
          orthodontist who was attempting to broaden my jaw. Living through those years seemed to
          take an endless length of time. In retrospect I can see that this was because there were
          so few diversions: everything had to do with reading and writing. The radio had not yet
          appeared, and although we had a phonograph for which I bought one record each week, I was
          not allowed to play the instrument if my father was in the house. It would be impossible
          to pretend that the years spent going to school were anything more than profoundly boring.
          I took the monotony for granted; discipline was the purpose of education. From 1917
          through 1927 when I finished high school, relaxation meant writing what I wanted to write.
          When I sat in my room working, I could impose my own discipline on a fictitious cosmos. In
          the seventh grade I wrote (and read to the other students) a chapter each day in an
          endless murder mystery. This was not a captive audience; the readings took place after
          class had been dismissed.
          <br /><br />
          As soon as I got into high school I began to buy books. I would find them remaindered at
          lending libraries, generally for less than a dollar. Knowing nothing about literature, I
          bought the books whose bindings and typography I thought the most attractive, and these
          were published by Knopf. (Borzoi books were exceptionally handsome in the twenties.) This
          meant that I read more British novels and translations than I did works by American
          writers. Indeed, when I was thirteen and fourteen my favorite writers were Francis Brett
          Young, Arthur Machen and Walter de la Mare. A year later I moved on to Mann and Gide. The
          point is that they were all published by Knopf. Surely if the Knopf list of authors had
          been different from what it was, my tastes would have varied correspondingly.
          <br /><br />
          High school was more enjoyable than grammar school. There was a monthly magazine in which
          I published continuously: stories, poems, book reviews, and even a department called
          Humor, which I edited. And then I headed a school literary society which met every Friday
          night; there were as many girls as there were boys. When they met at my house and my
          father came into the room for a minute, he would greet us by saying: “Good evening,
          kidlets.” I found this embarrassing and imagined the others saying afterward: “What'd he
          call us?”
          <br /><br />
          My four grandparents, each one born in a different New England state, had one
          characteristic in common: while they considered religion a good thing for those who needed
          it, personally they kept themselves clear of it. Thus I was spared all religious
          instruction. I understood that God was a mythical figure, and that some people chose to
          believe that it was a person who actually existed. Agnosticism may be deplorable, but it
          seems to me that anything is preferable to new, synthetic religions, or to attempts to
          revive failing orthodoxies. I must confess that as a child, although I kept quiet about it
          (“It's not nice to hurt people's feelings”), I felt superior to anyone who thought that
          God was alive and lived in the sky.
          <br /><br />
          My pleasantest memories of high school are of the small office I was allowed to use,
          ostensibly for the typing up of material for the school magazine, but which I used as well
          each day for writing my own verse. My discovery of the Paris review transition in 1927
          altered my style and increased my output, and the publication of a long poem in transition
          12 left me in a state of euphoria: I had reached what I considered the summit of
          distinction.
          <br /><br />
          After high school I enrolled at the School of Design and Liberal Arts, where I learned
          that I had no talent for painting. That autumn I started my freshman year at the
          University of Virginia. Now in retrospect I have the impression that it was at this point
          when existence began to move and gather impetus. There in Charlottesville I discovered
          that life could be a consistently pleasant experience once one was free from parental
          discipline. I developed an appetite, ate what I pleased, put on weight, and was suddenly
          persuaded that the future consisted of infinite possibilities. I had the unaccustomed
          sensation of taking part in living, which might sound absurd to someone who has not
          suffered from excessive restraint during childhood and adolescence. The future suddenly
          seemed close enough to touch, and I lost my head and tossed a coin to see whether I should
          take an overdose of sleeping pills or set out for Paris. (I doubt now that I should have
          taken the pills even if the coin had fallen the other side up.)
          <br /><br />
          I sent a telegram to a woman in New York who I thought would be willing to perjure herself
          to get me a passport. She agreed to swear to the authorities that she was my guardian
          (although my parents were not a mile distant). This woman was a follower of Gurdjieff with
          whom the Bowles family was on terms of permanent enmity; thus I knew that any action on
          her part would be motivated not by the desire to help me, but rather by the wish to vex my
          family. I got my illegally obtained passport and went confidently off to Paris with
          twenty-five dollars in my pocket. But along with the passport the woman had given me
          several letters of introduction, and through one of these I found work at the rue du
          Louvre office of the Herald-Tribune. Subsequently her daughter, who was amused by the
          members of my family and held no animus against them, suddenly gave me what seemed to me
          an enormous sum of money so that I could travel for a while around Europe.
          <br /><br />
          I went down to the Côte d'Azur and made walking tours in Switzerland and in the Black
          Forest. In Paris I was taken to dinner at Tristan Tzara's: he was the only literary
          celebrity I met in Europe that year. I did not have the courage to present myself at the
          office of transition, much as I wanted to. Before returning to New York (which I knew was
          inevitable but which I tried to put off as long as I could) I was taken by a friend of my
          father's to Saint Mortiz.
          <br /><br />
          After recriminations my father told me that I should work in New York as I had done in
          Paris. I found a job at Dutton's bookshop. It may have lasted two months. In the meantime
          I had met Aaron Copland. (I had been to some of the Copland-Sessions concerts).
          <br /><br />
          It was Copland's encouragement which made me decide to become a composer. To my parents I
          suggested that I return to Virginia and finish out my freshman year there. The spring term
          was a pleasure.
          <br /><br />
          During the autumn and winter I studied with Copland. When February came and he prepared to
          leave for Berlin, I saw that if my returning to Europe were presented as a means of
          continuing my studies with him, my parents would not oppose my going. There were reminders
          that I would not be “of age” until the following year, but I managed to take a freighter
          to Le Havre.
          <br /><br />
          In Paris this time I was less shy. I presented myself to Gertrude Stein at 27 rue de
          Fleurus, and was welcomed. Thus when Copland arrived in Paris, I was able to introduce
          them to one another. Both Stein and Toklas liked him, and they invited us both to visit
          them at Bilignin the coming summer.
          <br /><br />
          I did not feel at home in Berlin. I smelled chaos beneath the ordered surface of things.
          Everything seemed excessive: the display of wealth in the West End and the nightmarish
          poverty of the East End. There were little swastika stickers decorating walls and lamp
          posts, but no one paid them any attention.
          <br /><br />
          In July I went to visit Gertrude Stein at Bilignin in the country. After ten days Copland
          arrived from England. Somewhat later he and I sat out, not for Villefranche, where we had
          been bound, but for Tangier, because Stein and Toklas recommended it. As a result of this
          arbitrary action my life was permanently altered. If Morocco had been then as it is now, I
          should have spent the summer and gone away, probably not to return. But Morocco in 1931
          provided an inexhaustible succession of fantastic spectacles. The richness and diversity
          of the scenes were overwhelming; I had the feeling that no amount of time spent studying
          the phenomenon would suffice to provide the key to understanding it. (Westermarck's Ritual
          and Belief in Morocco was published in 1926, but I did not hear of it until much later.)
          <br /><br />
          At the end of summer Copland returned to Berlin and I moved around Morocco until Christmas
          time, when I went to London to hear a performance of the piece I had been writing in
          Tangier. By March I was back in Morocco. This time I went down the coast to Agadir, a
          jerry-built town which the French were just beginning to construct. (The city was entirely
          destroyed by earthquake thirty years later.) Sanitation was nonexistent and I contracted
          typhoid, not diagnosed as such until I got back to Paris. A month in the American hospital
          there got me over the fever, and I went down to a place near Grenoble to recuperate. My
          mother joined me to see for herself the state of my health. We went to Mallorca and ended
          the summer in Monte Carlo.
          <br /><br />
          When I was alone once more I took a ship across to Algiers and traveled south to the
          M'Zab, where I found a house in the desert just outside Ghardaia. I furnished it with mats
          and rugs and the barest kitchen necessities, but I was a neophyte in practical matters. It
          was an experiment which did not work. I spent the rest of the cold season (it freezes at
          night) at a hotel in Laghouat. Nearby was the chapel of the White Fathers, who kindly gave
          me permission to use the organ. Working conditions were ideal, the food at the hotel was
          excellent, and I wrote a cantata, Par le Detroit. The text, in French, I had written
          earlier.
          <br /><br />
          I returned later to Ghardaia, although not to stay in my house out in the reg. At the
          hotel, which was operated for the drivers of the produce trucks that came through, I met
          an American who was taking a year off from his courses at Northwestern in order to travel.
          He did not write or paint or photograph; he merely wanted to see the world. Together we
          took a trip by camel across the northern tip of the Grand Erg Oriental, out of Algeria
          into southern Tunisia. The camels had no saddles; we sat on the cartons that contained our
          food and water, their tops covered over with blankets. The motions of the camel's gait
          became well-nigh unendurable after a few hours. I found it better to walk most of the
          time, and mounted my beast only when I could no longer go on trudging through the sand.
          Nights we slept at bordjes established by the French military at roughly a day's journey
          apart. A bordj was a large courtyard enclosed by a high wall with stalls along its sides.
          In one of these open cubicles you were given a hot meal, and you could sleep on the sand
          rolled in your blankets, with your camels and your driver in the courtyard in front of
          you.
          <br /><br />
          The American and I arrived in Tunis the week that Franklin Roosevelt closed the banks. We
          had next to no francs and no one would accept American Express checks, so we spent what
          few francs remained sending urgent messages to friends in Europe. The college student went
          on to Italy; I was wired enough francs to pay for a railway ticket to Algiers, where I'd
          left a great amount of luggage. I collected it all, and being able by that time to cash
          some checks, set out for Morocco.
          <br /><br />
          That summer I was obliged to return to the United States. I never had enough money at my
          disposal, and I had exhausted the small legacy left me by an aunt. There was nothing for
          it but to go to New York. I discovered a roundabout way of going, however, which removed
          some of the sting. From Cadiz I took a ship to San Juan in Puerto Rico, and went up into
          the hills for a while before boarding another ship for New York.
          <br /><br />
          During the following winter, through friends in the A.S.P.C.A., I managed to get what
          seemed to me a very desirable job, working for the American Fondouk of Fez. This meant
          that when summer arrived I went once again to Morocco and took up residence in Fez, typing
          correspondence and writing anti-bullfight propaganda for a Casablanca newspaper. It was
          understood that my services would be required for only three months, after which I would
          be free. At that point I decided to take a peek at South America; I took passage to
          Barranquilla. I came down with a fever which left me only after I'd spent a week in the
          relative coolness of a coffee plantation in the mountains.
          <br /><br />
          When I got back to New York several months later, my father asked me why I moved around so
          much. What was I looking for? Nothing, I said, unless it was an opportunity to observe the
          differences between one place and another. “This, that, and the other thing,” he fumed.
          “What's it all supposed to be leading to?” But I noticed that when I was earning my living
          his complaints were more restrained. I discovered, too, that he was considerably mollified
          by my having spent a month with his brother in Hollywood and another month with a cousin
          of his in San Francisco on my way up the Pacific coast from South America.
          <br /><br />
          Eugene Berman, the Russian painter whom I had known in Paris, was now in New York, and he
          had an idea for a ballet. I had written about a third of the score before we both
          discovered that we had lost interest in the argument of the ballet. At the same time
          Lincoln Kirstein commissioned a different ballet score from me, to be produced by the
          Ballet Theatre. This was Yankee Clipper; it was first presented in Robin Hood Dell with
          the Philadelphia Orchestra.
          <br /><br />
          Now, Virgil Thomson, who always had given me sound musical advice when I showed him my
          work in Paris, suggested that I write a score for the Federal Theatre. It would contain an
          enormous amount of music, and the score had to be ready in two months. Parts of the
          abandoned material for the Berman ballet came in handy, and Thomson not only helped me
          orchestrate much of the music, but taught me exactly how a theater score should be
          conceived and correlated with the cue-sheet, and also how to have the necessary patience
          during the weeks of rehearsal, something I found difficult. The play was an adaptation by
          Orson Welles and Edwin Denby of Labiche's Un Chapeau de Paille d'Italie, whose title
          became Horse Eats Hat. This was one of the great services performed for me by Virgil
          Thomson: I became a composer of theater music and made my living at it for the next two
          decades. The same season I wrote another score for Welles: Marlow's Doctor Faustus.
          <br /><br />
          During my first trip to Tangier I met the Dutch surrealist painter Kristians Tonny;
          Gertrude Stein had mentioned his presence there. Now he arrived in New York with his wife
          Marie Claire, and wanted to go to Mexico. I had never been there and was curious about the
          country, so we decided to go together. At that point a girl named Jane Auer, whom I had
          only recently met, announced her desire to accompany us. This seemed like a good idea, but
          it wasn't, as Jane flew back to the States after three days in Mexico City. The remaining
          three of us traveled around Mexico, going down Chiapas, and finally to Guatemala. After
          four months I went back to New York, determined to pay another, longer visit to those
          parts at a later day.
          <br /><br />
          What happened next was that I began to see a good deal of Jane Auer, and the following
          winter we were married. I had not expected to see Latin America again quite so soon, but
          we took a Japanese ship to Panama, and later went on to a ranch in Costa Rica, and
          eventually to Guatemala. Then we thought it would be good to be back in Europe, which Jane
          liked as much as I. We went to Paris. Later we rented a house on the Côte d'Azur, but
          stayed in it only a month or so. A cable arrived from John Houseman, who with Orson Welles
          had founded the Mercury Theatre, asking me to return to New York to write a score. Jane
          and I had a stupendous amount of luggage with us, including two wardrobe trunks, but we
          got it all aboard the Europa and headed for New York.
          <br /><br />
          At the Hotel Chelsea I had no piano, and I needed one. The architect Kiesler provided me
          with a key to his flat: he and his wife were away in the country. After finishing the
          score and extracting the parts, I took it to Houseman, who sadly informed me that Welles
          had decided to produce a different play. This was very bad news, as it meant that I would
          get no down payment and no royalties. And I had no money. Fortunately the government was
          distributing large quantities of edibles free of charge. Each week Jane and I carried home
          great sacks of food. When my father learned of it he was incensed. “Good Americans are
          paying their taxes so that a lot of parasites like you can live without working. And you
          don't see anything wrong with accepting that food. What's happened to America's moral
          sense?”
          <br /><br />
          It's true that I saw nothing unethical about carrying home the food. I was only glad that
          this period of official largesse happened to coincide with my lean season. Being more or
          less in the milieu and having numerous acquaintances who were members of the Communist
          party, I made up my mind to join. I had always found the idea of adhering officially to
          any kind of organization repugnant, but the party at that time seemed strong enough to
          make trouble. I thought it would be interesting to see from the inside. I stayed long
          enough to see that it wasn't, and that the only trouble it made was for those who had been
          ingenious enough to join it using their true names.
          <br /><br />
          I had been in touch with William Saroyan, whose play My Heart's in the Highlands was to be
          produced by the Group Theatre. He came from California and I agreed to write the score.
          This time I had the keys to Clifford Odets' apartment, where there was a Hammond organ.
          When the play had opened, Jane and I went out to a remote section of Staten Island and
          lived in an old farmhouse. I had joined the Federal Music Project as composer and
          delivered a batch of music once a week to headquarters in Manhattan. This came to an
          abrupt end when a Relief investigator paid a visit to my parent's house, and pronounced me
          “Not in Present Need.”
          <br /><br />
          On Staten Island Jane was drinking too much because the generous girl who had given me
          money ten years before in Paris so I could travel had arrived from England to stay with
          us. Life became unsupportable, and I took a room in Brooklyn Heights overlooking the
          harbor. I had no piano and wrote no music, but I did write the first short story of my
          adult years, Tea on the Mountain. It was not followed by others.
          <br /><br />
          In the winter Jane and I were back at the Chelsea. The Theatre Guild asked me to provide
          music for Saroyan's Love's Old Sweet Song. Then the U.S. Department of Agriculture
          suggested that I go to New Mexico and write a score for a documentary film on the Rio
          Grande Valley. When that was done, the natural move seemed to be for us to go down from
          Albuquerque to El Paso and across the border. There was trouble brewing between the rival
          candidates in the coming election for the Mexican presidency, and I was in a hurry to get
          down there before there were events which might hold us up on the way. The shooting began
          only two days after our arrival in Mexico City. When the atmosphere had cleared and
          General Almazan's threatened march from the Pacific had failed to materialize, we found a
          hacienda high up in the mountains above Mexico City, across the valley from the Volcano of
          Toluca, and settled into it as well as we could.
          <br /><br />
          I soon found that the prolonged sojourn at eleven thousand feet disagreed violently with
          the functioning of my liver. We went down to Acapulco and stayed there for two months. The
          town was fairly empty in 1940 and Jane wanted to be where there were people. So she
          decided we must move to Taxco, an arty town full of Americans. Before we did, a young man
          called at our door introducing himself as Tennessee Williams, and presenting a letter from
          the Theatre Guild. He left in a day or so, but I was impressed to hear that Miriam Hopkins
          was to play the lead in his play Battle of Angels. (I never saw the play, because it
          closed in Boston.)
          <br /><br />
          Within two weeks I had to fly to New York to write music for Helen Hayes's Twelfth Night.
          (In those days I did not mind taking planes.) That winter I was kept busy. The Theatre
          Guild asked for an elaborate score for Philip Barry's Liberty Jones, Lincoln Kirstein
          commissioned a new ballet, Pastorelas, and Lillian Hellman needed some music for Watch on
          the Rhine.
          <br /><br />
          Jane came from Mexico, and we moved into a strange house in Brooklyn Heights, a kind of
          artists' commune. The poet Auden managed it. Oliver Smith lived there, as did Benjamin
          Britten. Since all expenses were shared, living costs were very low. The food was good and
          I got a lot of work done. At that moment I received a Guggenheim Fellowship to write an
          opera.
          <br /><br />
          Before leaving Taxco, Jane had taken a house. In the spring we went back there and
          furnished it. Katherine Hepburn's brother had written a play with songs, and wanted music.
          I finished that by summer, and we went down to Acapulco. This was a mistake, for I fell
          ill with jaundice and had to be taken to the British hospital in Mexico City. Later I
          recuperated for six weeks in a Cuernavaca sanitorium. While I was there two things
          happened: Jane completed Two Serious Ladies and Pearl Harbor was attacked.
          <br /><br />
          I worked hard on the Guggenheim project. Originally Saroyan was to be the librettist; he
          sent me his text, which I felt I could not possibly use. Then I decided to make a zarzuela
          out of García Lorca's Así que pasen cinco años, using only sections of it. For a while I
          had a house in Tehuantepec, and then I went to Lake Chapala.
          <br /><br />
          My grandmother had died, leaving me a modest bequest; my Aunt Mary also had died, leaving
          her house, Holden Hall, to my father. It was Jane's idea that we should spend the summer
          and autumn in Holden Hall. While I was still in Mexico, she and Helvetia Perkins, a friend
          we had known in Taxco, found a cook in New York and transported her to Watkins Glen, where
          they installed themselves and her at Holden Hall. It was the summer of 1942, and Americans
          seemed to be in the grip of war hysteria. There were frequent blackouts, and vigilantes
          wandered over the grounds with flashlights, crying: “Put out those lights!” (It's not easy
          to observe a complete blackout in a big house that has no electricity, and where the only
          person who can manage oil lamps is the cook, who has retired for the night.)
          <br /><br />
          The following winter I completed the zarzuela. Leonard Bernstein conducted it at the
          Museum of Modern Art in New York, with Merce Cunningham as solo dancer. In the meantime
          Virgil Thomson, then music editor of the New York Herald-Tribune, had come up with the
          suggestion that I join the staff of the newspaper as a music critic. It was a constructive
          step, inasmuch as it obliged me to remain in New York for the next several years, and thus
          to lead a life which was largely musical.
          <br /><br />
          At the outset I was dubious about my ability to function as a musical reporter. I feared
          that the maximum of forty-five minutes was too little time in which to turn out a literate
          review. For a few weeks I suffered; then, like most things, it became merely a matter of
          habituation. During the years I worked on the paper I was continuously engaged in writing
          incidental music for Broadway plays. My only excursions outside New York occurred when I
          accompanied the shows on the road, and in the summers when I would fly to Latin America
          for a few weeks of vacation.
          <br /><br />
          The Marquis de Cuevas was organizing a ballet company. He had the peculiar idea of
          commissioning Dalí to devise a ballet using Verlaine's famous poem Colloque Sentimental as
          its subject. Then he had an equally peculiar idea of asking me to write the music. The
          prospect of collaboration with Dalí attracted me. I should have realized, however, that
          the very concept of collaboration was anathema to him. He provided the set, the costumes,
          and the onstage devices which he seemed to have invented solely to interfere with the
          choreography. The dancers had underarm hair which reached to the floor and got in the way
          of their foot-work; they also had to beware of bicyclists riding across the stage in both
          directions at inopportune moments. An additional hazard was provided by a large mechanical
          tortoise whose course was unpredictable. It circled, backed up, and ran straight at the
          dancers' feet, the lights in its shell flashing on and off. Hisses and catcalls were more
          or less constant on opening night; I was unable to hear the orchestra, and left the
          theater in a bad mood. The Marquis was pleased that the work had enjoyed a succés de
          scandale.
          <br /><br />
          That year I wrote a score for a film produced by the Belgian government-in-exile; it was
          called Congo, and was meant as a justification of the Belgian presence in that part of
          Africa. I was surprised that Paul Roberson agreed to be the commentator. I expected him to
          refuse, considering his alignment with the Left. Perhaps, like me, he felt that a job is a
          job.
          <br /><br />
          During these years while I was confined to New York I managed, in the middle of all the
          music I was writing, to slip quietly into writing words. Jean-Paul Sartre was in the
          United States. With Oliver Smith, who wanted to produce the play, we worked out an
          agreement whereby my translation of Huis Clos as No Exit should be the standard version
          for American performances in English.
          <br /><br />
          After Sartre returned to Paris, our friendship was soured by the insistence of John
          Huston, who directed the play, upon altering its meaning here and there, in such a manner
          that its purely existential argument occasionally became a political one. I was not in a
          position to do more than voice my personal discontent. Sartre considered that I had
          betrayed him. Possibly in France a translator's opinion carries some weight.
          <br /><br />
          I had not a single specific idea in my head with regard to writing fiction, nevertheless I
          yearned for the experience of losing myself in a fictional world at the moment of creating
          it. Back in 1942, when Jane and I had gone over the manuscript of Two Serious Ladies prior
          to its publication, I had felt a strong urge to write some fiction myself. I suspected,
          first of all, that I had nothing to write about; furthermore, I had a fear that I had lost
          the power to translate thought into words. The practice involved in turning out daily
          reviews for the newspaper, however, had given me more confidence in my ability to manage
          the language.
          <br /><br />
          I had been doing translations from the French and Spanish for View, a surrealist review
          published in New York; thus it was natural that View should have printed the first stories
          I wrote at the time. At the end of 1945 I resigned my post as a music critic. Since I was
          continuing to provide theater scores, sometimes writing two simultaneously, I no longer
          had the time for reviewing. The stories kept coming, and they were published in fashion
          magazines. But the people who I hoped would see them rarely read Mademoiselle and Harper's
          Bazaar; they read Partisan Review. I considered it a triumph when Partisan published my
          tale “A Distant Episode.”
          <br /><br />
          I had enough stories to make up a volume. I put them together and took them to a
          publisher, hoping somehow to bypass the unwritten law which makes it impossible for a
          writer to publish a book of short stories until after he has published a novel. Of course
          I did not succeed, but the publisher sent my stories to an agent, who lost no time in
          getting Doubleday to commission a novel. Thanks to the extraordinary vividness of a dream,
          I realized that I wanted to return to Tangier. I left within a month after signing the
          contract with Doubleday. I had a vague idea of what I wanted to write about, but I was not
          at all sure that I was capable of constructing a novel.
          <br /><br />
          On the Norwegian freighter taking me to Casablanca I wrote a fairly long tale, “Pages from
          Cold Point.” (My sojourn in Jamaica the previous winter suggested the locale.) From then
          on I turned out no more stories until I had completed The Sheltering Sky.
          <br /><br />
          In Fez, to the sound of the stream rushing by under my window, I began to write. I had no
          plan, made no notes. I intended to take three Americans across the Sahara, but the events
          had to appear of their own accord as I accompanied them from oasis to oasis. I went to
          Tangier and worked for several months. I also bought a little house at the top of the
          Medina. Then with my parrot I began a long voyage into the Algerian desert, traveling by
          produce truck. When I came to a place I liked I stayed a week or two, and then continued.
          The novel made progress. A letter from Jane was forwarded to me, saying that she was about
          to leave for Tangier. This meant that she was already there. I flew from Adrar to Bechar,
          and from there to Algiers, but it took me a long time to get to Tangier.
          <br /><br />
          Jane was there, accompanied by a friend with her leg in a cast. This made things
          difficult, as I was in a hurry to get back to Fez and finish the novel. We did go, but the
          alleys of the Medina were muddy, and the friend was on crutches, so we spent most of our
          time inside the Palais Jamai. When the friend had returned to New York, we both got down
          to work. Jane finished Camp Cataract and I finished The Sheltering Sky, eight months after
          I had begun it. (Doubleday rejected it, asserting that it was not a novel. I had to return
          the advance they had given me.)
          <br /><br />
          I went to New York and wrote a score for Tennessee Williams's Summer and Smoke. When the
          show had opened, Tennessee decided to accompany me to Tangier. It was a rainy winter, and
          he was busy much of the time trying to make out his federal income tax; I recall being
          appalled when I saw that he was having to pay $111,000 in taxes that year. “Baby, they
          take everything,” he said.
          <br /><br />
          Jane and I traveled around the Algerian Sahara after he had left; then I made a hurried
          trip to Paris to hear a performance of my Concerto for Two Pianos, Winds and Percussion.
          Truman Capote spent the summer in Tangier at the Farhar, where we lived; we did not lack
          entertainment at mealtimes.
          <br /><br />
          John Lehmann had published The Sheltering Sky in London. Jane and I went there, she with
          the intention of spending the winter there and in Paris, and I with the project of
          continuing to anywhere in Asia, depending upon what transportation was available. Ceylon
          came up first, so I set out for Colombo. On the trip eastward I started a new novel and
          worked steadily at it as I traveled around Ceylon and South India. (The British had great
          fun with the place-names in Ceylon, just as they did in India. First they changed the
          pronunciation, and then they changed the spelling. So Sri Lanka became Ceylon, Kurunagala
          became Kornegalle, Tiruchirappalli became Trichinopoly, and so on, the Sinhalese and
          Tamils responded by pronouncing Ceylon as Sloan.)
          <br /><br />
          I joined Jane in Paris in the late spring, and then, since she wanted to stay on there, I
          left her and met Libby Holman in Málaga for a month in Andalucía while we discussed a
          project for an opera using Garcia Lorca's Yerma as text. (She had visited Morocco two
          years earlier, and I had already translated the play and written some of the music.)
          During all these years the pattern of my work-life was rather like that of a periodic
          dipsomaniac: intense preoccupation with music for a few weeks or months, and then a shift
          into the world of words for a while.
          <br /><br />
          I spent most of the winter in the Sahara, and in the spring drove up to the French border
          to pick up Jane. By now the little house in the Medina which I'd bought several years
          earlier had been made liveable, so we moved into it for a while. But soon Jane had to go
          to the States for a production of her play with Miriam Hopkins in Ann Arbor.
          <br /><br />
          As soon as I had finished Let It Come Down, the novel I had been at work on, I became
          curious to see more of India. A ship took me from Gibraltar to Bombay. I spent a few
          months going from place to place there, and went on down to Sri Lanka until the southwest
          monsoons arrived. In the summer I went to Italy: the Lago di Orta in the north for a month
          and then to visit Peggy Guggenheim in Venice. I was in Madrid when I received a wire from
          Sri Lanka telling me that I could buy a little island called Taprobane, off the southern
          coast of Ceylon, at an advantageous price. (I had already examined the place.) I wired the
          money to Colombo the same day.
          <br /><br />
          Now I was forced to go to New York to write a score for Jane's play, In the Summer House,
          about to be produced on Broadway. This constant moving around was not a hindrance to work,
          and in retrospect that rather surprises me. Travel took a great deal of time and energy,
          but it also stimulated my imagination. It never became monotonous, which any recounting of
          it must necessarily be. I was addicted to movement; freedom meant the freedom to travel.
          My life consists of the places where I have lived and the work I have accomplished in
          those places.
          <br /><br />
          The duo-pianists Gold and Fizdale had commissioned me to write a cantata on a text of the
          poet James Schuyler. I returned to Tangier and composed the work. Then at Tennessee
          Williams' suggestion, I went to Rome to work with Lucchino Visconti on a film called
          Senso. I was a neophyte. I scarcely knew what I was doing. Nevertheless I was well paid
          and shared screen credits with Tennessee.
          <br /><br />
          I had to go to Istanbul at that point, to do an article for Holiday, a travel magazine to
          which I contributed with some regularity. When I got back to Rome, Tennessee said he
          thought he'd drive to Tangier, too, so we set off in two identical Jaguars, through Italy
          and France and Spain. It took us a long time: we traveled only during the afternoons.
          Tennessee would spend each morning in his hotel room writing.
          <br /><br />
          Now that I had my island in Sri Lanka, I was in a hurry to go there. I managed to persuade
          Jane to come along and see it; she was not eager to leave Tangier. The experiment was not
          successful. After two months she insisted on going back to Morocco. In spite of Peggy
          Guggenheim, who came to visit and who bubbled with enthusiasm over the beauty of the
          place, Jane did not agree. I finished writing my novel The Spider's House and sent it off
          to the publisher. Then, because I did not want to get back to Tangier before the summer, I
          took a ship that went to places I'd never been: Penang, Singapore, Hong Kong, Kobe, The
          Inland Sea. There seemed to be people everywhere in Japan, but here this ubiquitous
          humanity did not give me the feeling of claustrophobia that I got in India.
          <br /><br />
          Morocco was in the throes of its war for independence. As despised Nazarenes, Jane and I
          found the atmosphere of our strictly Moslem neighborhood suddenly unfriendly. Jane went to
          California to visit Oliver Smith, and I spent an entire year in Tangier (although not in
          the Medina house) working on the opera Yerma, which I had recently been neglecting, in
          spite of Libby Holman's repeated pleas for a finished piano score. In the midst of my
          work, my parents appeared for a six-week visit. At the same time Jane arrived with
          Tennessee Williams.
          <br /><br />
          I knew I should never be able to entice Jane back to Sri Lanka. A man in Bombay had
          offered to buy the island, and I decided to sell it. So, after sending Libby Holman her
          completed piano score, at the beginning of winter I set out on my last voyage to
          Taprobane. The Suez Canal was blocked; I had to go via South Africa.
          <br /><br />
          I had several weeks of complex negotiations with the Ceylon Finance Control in Colombo
          before it was agreed that the rupees I should receive for the island could be converted
          into dollars and remitted to me after my departure. (The Sinhalese did not keep their
          word: twenty-six years have passed since I sold the island, and I have yet to see a penny
          of the proceeds.)
          <br /><br />
          Now I took a ship to Mombasa, to see the wildlife in Kenya. Later I got a ship going via
          Zanzibar and Moçambique to Cape Town. Upon my arrival at Las Palmas I was handed a
          telegram from Tangier, stating that Jane had suffered a “slight stroke.”
          <br /><br />
          The “slight stroke” had resulted in the definitive impairment of Jane's sight; her field
          of vision was now divided into four stripes: sight, darkness, sight, darkness. She
          suffered as well from acute aphasia, which people in Tangier found amusing, although it
          depressed and terrified her, for she felt that she was no longer in command of her brain.
          A series of visits to hospitals began; she had to go twice to London that summer.
          <br /><br />
          Allen Ginsberg came to visit William Burroughs. Jane never forgave him for describing the
          effects of William Carlos Williams's stroke, and then suggesting that she learn braille.
          <br /><br />
          When I went again to England to fetch Jane from the hospital in Nottingham, I came down
          with pneumonia and spent a month hospitalized in London. We returned to Tangier, where
          Jane seemed to be in slightly better health. This proved to be ephemeral, for when we got
          to Madeira in March she fell into a serious depression. She had never been epileptic, but
          now pressure on the cortex of the brain was causing frequent seizures. We returned to
          Lisbon, where the American Embassy refused to renew her expired passport after having
          communicated with the FBI. She was given a slip of paper and shipped to New York;
          Tennessee met her at the airport. Her mother was not to know that she was in the United
          States.
          <br /><br />
          I was still in Portugal when Libby Holman telephoned saying I was needed immediately for
          Yerma, which she was about to produce. By that time I had the opera orchestrated and was
          able to carry the score with me. Rehearsals already had started when I arrived. We tried
          it out for two weeks in Denver, and then in Ithaca, New York, and that was the end of it.
          <br /><br />
          Shortly after getting back to New York I was summoned to Hollywood to write a score for
          José Ferrer. I had provided music several seasons earlier for his Cyrano de Bergerac,
          which enjoyed a great success. The new play, however, was a flop when it came in to New
          York.
          <br /><br />
          I took Jane out of the hospital and we set sail for Tangier. We had scarcely arrived when
          I heard from Tennessee, who wanted me in New York the following month to set Sweet Bird of
          Youth. With the script before me, I composed most of the music before I left Tangier,
          finishing it up and orchestrating it in the ship's ballroom late each night. Kazan was
          rehearsing in Philadelphia. I went directly there. He persuaded me to have the music
          recorded, rather than having musicians playing backstage. I had always held out against
          this procedure, but I was pleasantly surprised by the results.
          <br /><br />
          While I was in New York that season I received a Rockefeller Grant to record Moroccan
          music for the Library of Congress. This was something I had been hoping for many years to
          accomplish. Upon my arrival in Tangier, I found that Jane's condition had improved
          somewhat. Although she could not read or write, she seemed to be able to carry on with her
          social life, so I did not hesitate to leave her again. We kept in touch by telephone, and
          I visited Tangier every six or seven weeks. At the end of the year I deposited the tapes
          at the American Embassy in Rabat, and they were sent to Washington. I was more than
          satisfied with the results of the taping sessions. Records were to be pressed, but because
          of the growing trouble in Southeast Asia, thirteen years went by before sufficient funds
          for this were made available.
          <br /><br />
          The following year I remained in Morocco, making recording trips of my own into the
          Pre-Sahara and the Djebel Bani, regions I had not been able to visit on the Rockefeller
          field trips. I was obsessed by what I felt was the necessity of getting the folk music on
          tape while it was still extant. Visitors arrived in Tangier: Allen Ginsberg, Gregory
          Corso, and Tennessee. Afternoons Allen, Gregory, and Bill Burroughs could be found in the
          garden of Narayan and Sonya Kamalakar having nasturtium sandwiches and discussing the
          facets of mysticism; Tennessee and Jane spent their days at the beach. I generally stayed
          home, working.
          <br /><br />
          It seemed to be about time for Jane and me to go to the States to see our respective
          parents, who were clamoring for a glimpse of us, so we went to New York. Jane never wanted
          to be with her mother for longer than was necessary, and since Tennessee needed an
          incidental score for The Milk Train Doesn't Stop Here Any More, I put her on a ship for
          Tangier and wrote the music in Virgil Thomson's empty apartment. After the show had tried
          out on the road, I came home to Tangier.
          <br /><br />
          Earlier I had been working on a translation from the Moghrebi of a novel spoken onto tape
          by Larbi Layachi. Being anxious about possible official reactions to the book, he used an
          assumed name. He called the novel Al Aicha Medloula, which I translated as A Life Full of
          Holes. This was the first of more than a dozen books I eventually translated from spoken
          texts. I took a six-months' lease on a house by the ocean in Asilah, where I could work in
          complete quiet. Jane came for weekends, but she preferred to live in her flat in Tangier.
          <br /><br />
          I had started a novel, and I spent the next winter and summer writing it. Again I took a
          house for six months, this one on the Monte Viejo outside Tangier, at the edge of a cliff
          above the sea. Random House, the publishers of my previous four books, rejected it. I sold
          it to Simon and Schuster. It was my last attempt at writing a novel; I called it Up Above
          the World. Tennessee came again as I was finishing it; he was in a depressed state, and
          went away after two weeks or so.
          <br /><br />
          With the novel out of the way, I was able to concentrate on writing short stories. This
          activity always provided a welcome relaxation after the rigors of writing a novel.
          <br /><br />
          In the spring we went once more to America to see our parents. We did not remain there for
          more than two months. The time she had spent with her mother had made Jane extremely
          nervous, and the anguish she had experienced during the first two years after her initial
          stroke seemed to have started up again, ever before we got to Morocco. When Little, Brown
          suggested that I write a book on Cairo, I somewhat frivolously suggested Bangkok instead,
          certain that this would not meet with their approval. When they accepted, I realized that
          Jane was apprehensive about being left alone for the eight or nine months I should be
          away. I saw that given the state she was in it would be out of the question to go away
          leaving her in Tangier. She wanted to go to Bangkok with me, but I remembered the fiasco
          in the heat of Ceylon, and refused even to consider it. In the end it was agreed that she
          would stay with friends in New York, making visits to her mother, who now lived in Miami.
          I took her to New York and continued to Bangkok.
          <br /><br />
          Thailand was not at all as I'd expected it to be. I was sorry I had suggested writing
          about Bangkok. Jane's regular letters stopped arriving. Then letters from friends in
          Tangier informed me that she had left the States and returned alone to Tangier, which was
          the very thing I had not wanted. I had been working only about four months when I received
          word from Dr. Roux saying that Jane was ill and advising me to return to Tangier.
          <br /><br />
          I found Jane in a state of apathy. The doctors recommended hospitalization. I took her to
          Spain, where she spent several months. The routine of hospital life, plus the proper
          medication there, helped her considerably, so that she was in a different state when I
          brought her back to Tangier. Soon I was offered a teaching stint in California. Once again
          there arose the question of how Jane could be cared for in my absence. She had four
          Moroccans and a Spanish woman looking after her, but none of these could be relied upon to
          see that she got the correct dosages of her various medicines. This could be done only in
          a hospital, said Dr. Roux. It was arranged that she would go into a hospital in Málaga
          where she would be free to come and go, and that her mother and stepfather would come and
          spend two months in a hotel there, so that they could be together each day. (Jane did not
          seem to mind being with her mother as long as they were not living in the same house
          together.)
          <br /><br />
          I spent only one semester teaching in California, and returned to Morocco. When I saw Jane
          she begged to be taken back home to Tangier. Dr. Roux warned me not to remove her from the
          hospital, but in the end I found it impossible to refuse her pleas. I took her to Tangier;
          it was not the right thing to have done. Very quickly she fell into a profound depression,
          and since she refused to eat, she became alarmingly thin and feeble. After four months I
          returned her to the hospital in Málaga; after that she never came back to Tangier.
          <br /><br />
          During the latter years of Jane's illness I had discovered that it was impossible for me
          to write fiction. The periods which I had to myself were of very short duration: fifteen
          or twenty minutes, instead of several hours. Frequent interruptions destroyed inventive
          impetus. Still, I had to work each day at something, and luckily I found that the act of
          translating did not suffer in any way from being stopped at short intervals. I translated
          several books by Mohammed Mrabet in those years, and went on to find other Moroccan
          tale-spinners. Certain critics, particularly in English, have affected to confuse these
          translations with my own tales about Morocco. But not all critics read.
          <br /><br />
          One day in 1970 when Daniel Halpern was living in Tangier, I remarked to him that it had
          always been a desire of mine to publish a literary magazine. I said that if I had a review
          I'd call it Antaeus, and publish it in Tangier, where the legendary giant is said to be
          buried. Halpern was enthusiastic, and thought I should do it. He made inquiries at
          printers and we began to take the matter seriously. We found that it would cost no more to
          have the printing and binding done in England than it would here in Morocco. I furnished
          the money for the first issue, which I assumed would also be the last, since I could not
          pay for any more.
          <br /><br />
          Both Halpern and I wrote to our friends asking for contributions. He sent off a great many
          letters to poets he knew. Gore Vidal happened to be staying at a hotel only three blocks
          away, so Halpern went to him for an interview. It was not a very impressive issue, but it
          did exist. I asked Halpern to be the editor, he could accept whatever critical praise or
          blame accompanied the venture. It was fortunate that he had the magazine, for when he went
          back to the States he was able to raise money for a second issue. It has appeared
          regularly ever since.
          <br /><br />
          I stayed on here in Tangier, writing an autobiography commissioned by Putnam, and going to
          Spain to see Jane every month or six weeks. The making of the book of memoirs was a
          nightmarish task. After a full year of work, I still had not written a word. I had no
          documents to consult, no letters, no diaries or journals. In order to remember my life in
          any detail I was obliged to construct an accurate chronology listing the events of each
          month of every year. Even so, I had to hurry through the latter part of the book to meet
          the deadline. I was greatly relieved when I'd finished it, and consoled by the reflection
          that never would I need to repeat the experience. It seems to me that deadlines are all
          too likely to produce dead books.
          <br /><br />
          Jane suffered more strokes, and was confined to bed. Each time I saw her she seemed to be
          a little farther away. One day when I arrived at the hospital the nurses told me she could
          no longer see. In spite of being partially paralyzed, she could still speak. Eventually
          even that faculty left her, and she merely lay without stirring.
          <br /><br />
          In the spring Jane died; I had arrived at the hospital only a few hours earlier. She had
          been in a coma for several days. The nurses assured me that she had asked to be accepted
          into the Catholic church; accordingly she was buried the following day at the Cementerio
          San Miguel in Málaga. I have not been out of Morocco in the ten years that have passed
          since that day.
          <br /><br />
          Slowly I began to get back into the habit of writing fiction. Between 1974 and 1980 I
          wrote nineteen stories, which for me was a good many. One day a set of application forms
          arrived in the mail from the National Endowment for the Arts, an organization of which I
          had never heard. It appeared that they distributed grants of money, and that by filling
          out the forms I might possibly be the recipient of such a gift. There seemed to be no
          reason for not taking a chance. I was lucky: I got a grant. A year later I was given a
          further, larger grant called a Senior Fellowship Award. Since I was no longer earning any
          money, these sums were more than welcome; they also raised my flagging morale.
          <br /><br />
          Sometimes I marvel at the absurdity of my present situation, one of my own making if not
          of my own choosing. Certainly I never expected that I would end my life holed up in a
          place like Tangier, a possibility which grows increasingly more likely. From the thirties
          through the sixties living in Tangier was predicated upon the ease with which one could
          sail to any part of the world. The precipitate disappearance of ships a decade ago meant
          that I would probably not go anywhere again, since I no longer enjoy flying. All accounts
          of present-day air travel make it sound much more like an ordeal than a joy. Boarding a
          ship, on the contrary, meant leaving all preoccupations behind one. The regular hours and
          prolonged periods of relaxation during the days or weeks one remained aboard made of
          travel an ideal rest-cure. It's a matter of continuous astonishment to me that the human
          race should care so little for comfort and pleasure that it willingly exchanges a valid
          mode of travel for an unacceptable arrangement more suited to the transportation of
          animals. But I suspect that man, being the most adaptable animal of all, will reconcile
          himself to any situation as long as it is presented as something inevitable; he will even
          agree to the definitive extinction of all life on his planet.
        </div>
      </template>
      <template v-else>
        <div class="flex gap-5 justify-center mt-36">
          <img :src="WithoutStopingImage" class="-rotate-90 w-1/3 cursor-pointer" alt="Transcript WITHOUT STOPPING. AN AUTOBIOGRAPHY 1" @click="active_item = WithoutStopingImage" />
          <img :src="WithoutStopingImageTwo" class="-rotate-90 w-1/3 cursor-pointer" alt="Transcript WITHOUT STOPPING. AN AUTOBIOGRAPHY 2" @click="active_item = WithoutStopingImageTwo" />
        </div>
      </template>
    </div>
    <div
      class="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center text-center z-50"
      v-if="active_item !== null"
    >
      <OnClickOutside
        @trigger="active_item = null"
        class="text-center px-10 md:px-0 md:w-1/2 cursor-pointer text-white"
      >
        <img :src="active_item" class="w-full h-auto rounded-xl cursor-default -rotate-90" />
      </OnClickOutside>
    </div>
  </div>
</template>
