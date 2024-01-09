<script lang="ts" setup>
import ChronologyList from '@/components/ChronologyListItem.vue'
import { useHead } from '@unhead/vue'
useHead({ title: `Paul Bowles's Chronology` })

const chronology = [
  {
    year: '1910',
    text: 'Paul Frederic Bowles is born on December 30 in Jamaica, Queens, New York City, the only child of Rena Winewisser and Claude Dietz Bowles.',
    highlight: null
  },
  {
    year: '1915-1918',
    text: 'Bowles learns to read by age four and keeps notebooks with drawings and stories, a habit that will continue throughout his childhood. Mother reads him stories of Hawthorne and Poe.',
    highlight: ` “I can’t remember a period when the printed word did not make its corresponding sound in my head as I looked at it. I still have a little notebook with stories about animals, invented by me and printed in pencil, each one carefully dated at the end, and the year is 1915, which means that I was four years old when I wrote them.” (Without Stopping, page 14)`
  },
  {
    year: '1919',
    text: 'After family buys piano, Bowles studies theory, sight-singing, and piano technique.',
    highlight: `Writes “Le Carré: An Opera in Nine Chapters.”`
  },
  {
    year: '1920-1921',
    text: `Keeps diary filled with imaginary events and made-up characters. Writes daily “newspaper.”`,
    highlight: `“Minnesota was erected. Bluey plans to come. Dolok Parosol stops her saying ‘Marry me don’t go.’ Bluey gets mad. Dolok Parosol tells her again to marry him. She knocks him down. Bluey gets her things packed and puts on a beautiful blue sash. Bluey sails for Wen Kroy and lands. Bluey loves it.” (from Bowles’s diary, age 9)`
  },
  {
    year: '1925-1926',
    text: `Writes crime stories with the recurring character “the Snake-Woman.” Reads English writer Arthur Machen.
          Is deeply impressed by a performance of Stravinsky’s The Firebird at Carnegie Hall.`,
    highlight: `“I would not have expected an orchestra to be able to make such sounds. I was electrified and on my way home I stopped at a phonograph [store] to see if Stravinsky’s The Firebird was available on records. Fortunately Victor had just issued two 12-inch discs. I bought them and played them constantly but very softly, on the portable phonograph I had in my room.” (Without Stopping, page 69)`
  },
  {
    year: '1928',
    text: `Publishes poem “Spire Song” and prose poem “Entity” in transition magazine.<br /><br />
          Enters University of Virginia.`,
    highlight: ` “I came into contact with my first group of intellectual snobs and understood that their principal interest was not in literature and art, but in talking about those things. However, I learned from them. That autumn I first read The Waste Land, first heard Gregorian chant and Prokofieff, first listened with pleasure to Duke Ellington and his band from the Cotton Club. And I bought my first blues records at secondhand furniture stores in the black quarter of Charlottesville.” (Without Stopping, page 76)
          Experiments with inhaling ether.`
  },
  {
    year: '1929',
    text: `After one semester at the University of Virginia, goes on his own to Paris; travels in Alps and on French Riviera. Works as a switchboard operator at the Herald Tribune.
      <br /><br />Back in New York, studies composition with Aaron Copland before returning to Virginia for a second semester.
      <br /><br />Publishes poems in English and French in the Paris-based magazines Tambour, This Quarter, and Anthologie du Groupe Moderne d’Art.`,
    highlight: null,
  },
  {
    year: '1930',
    text: `Decides to leave college after finishing out the term in June.
          <br /><br />Spends September and October with Copland at the Yaddo Arts Colony in Saratoga Springs, New York.
          <br /><br />Edits an issue of the University of Virginia magazine The Messenger, solicits submissions from William Carlos Williams, Gertrude Stein, and Eduard Roditi.
          <br /><br />Completes Aria, chorale and rondo (piano solo).`,
    highlight: null,
  },
  {
    year: '1931',
    text: `Sails for Europe. In Paris, looks up Gertrude Stein, with whom a friendship develops.
          <p class="text-primary my-5">
            “Soon Gertrude Stein appeared, looking just as she did in her photographs, except that the expression of her face was rather more pleasant. ‘What is it? Who are you?’ she said. I told her and heard for the first time her wonderfully hearty laugh. She opened the door so that I could go in. Then Alice Toklas came downstairs, and we sat in the big studio hung with Picassos. ‘I was sure from your letters that you were an elderly gentleman, at least seventy-five,’ Gertrude Stein told me. ‘A highly eccentric elderly gentleman,’ added Alice Toklas. ‘We were certain of it’.” (Without Stopping, page 106)
          </p>
          Meets Jean Cocteau, Virgil Thomson, Ezra Pound, and Pavel Tchelitchew. Goes to Berlin with Aaron Copland. Meets Jean Rhys, Stephen Spender, Christopher Isherwood and Kurt Schwitters.
          <br /><br />At Stein’s suggestion, travels to Morocco with Copland.
          <p class="text-primary my-5">
            “If I said that Tangier struck me as a dream city, I should mean it in the strict sense. Its topography was rich in prototypal dream scenes: covered streets like corridors with doors opening into rooms on each side, hidden terraces high above the sea, streets consisting only of steps, dark impasses, small squares built on sloping terrain so that they looked like ballet sets designed in false perspective, with alleys leading off in several directions; as well as the classical dream equipment of tunnels, ramparts, ruins, dungeons, and cliffs. The climate was both violent and languorous.” (Without Stopping, page 128)
          </p>
          Completes Sonata for oboe and clarinet and Tamanar (piano solo).`,
    highlight: null,
  },
  {
    year: '1932',
    text: `Leaves for Ghardaïa, a town in the northern Sahara, where he uses the harmonium in the town’s church to compose a cantata, using his own French text.
          <br /><br />Completes Sonata No. 1 for Flute and Piano, Scenes d’Anabase (based on texts by Saint-John Perse) and Five songs for tenor, oboe and piano.`,
    highlight: null
  },
  {
    year: '1933',
    text: `Travels around the Sahara and North Africa. Goes to Tangier, where he shares house with Charles Henri Ford and Djuna Barnes.
            <br /><br />Writes short story “A Proposition.”
            <br /><br />Writes song cycle Danger de Mort, Suite for Orchestra (pastorale, havanaise, divertissement), Sonatina No. 1 for piano, Cantata Par le Detroit (soprano, four male voices and harmonium), Impasse de Tomboctou (piano solo), La femme de Dakar (piano solo), Guayanilla (piano solo), and score for Harry Dunham’s film Bride of Samoa.
            <p class="text-primary my-5">
              “Gertrude Stein had said I was self-indulgent, but with all the displacements I had been able to finish writing the Flute Sonata, Scenes d’Anabase, the Piano Sonatina, and the cantata I had begun in Laghouat. This last was called Par le Detroit, a hermetic reference to my preoccupation in dreams with the Strait of Gibraltar. Perhaps the title Dream Cantata would have been more apposite, inasmuch as several sections of the work were composed in detail while I slept. On awakening I immediately wrote them out. Why this should have happened in the case of this one piece and at no other time, I have no idea. Since early childhood it had been a fantasy of mine to dream a thing in such detail that it would be possible to bring it across the frontier intact-the next best thing to being able to hang onto all those fistfuls of banknotes that must always remain behind when the eyes open.” (Without Stopping, pages 166-167)
            </p>
            Publishes “Watervariation” and “Message” in pamphlet Two Poems, his first separate publication.
            <br /><br />Founds music publishing company Editions de la Vipère and publishes Scenes from the Door, songs based on passages from Stein’s Useful Knowledge.`,
    highlight: null
  },
  {
    year: '1934',
    text: `Bowles is hired as a secretary by Charles Williams, director of The American Fondouk, a foundation in Morocco working for the prevention of cruelty to animals.
          <br /><br />Pays for Atlantic passage by working as a guide in Spain. Buys records of North African music.
          <br /><br />Travels to Colombia; smokes marijuana for the first time while at sea.
          <br /><br />Back in New York, publishes musical compositions in quarterly New Music.
          Composes Sonata for violin and piano and the film score Innocent Island.`,
    highlight: null,
  },
  {
    year: '1935',
    text: `Receives commission to write score for George Balanchine’s Yankee Clipper. Allows his records of North African music to be reproduced for Bela Bartok.
          <br /><br />Writes music for Dunham’s film Venus and Adonis. Scores two short films by Rudy Burkhardt and writes incidental music for Who Fights the Battle, a play by Joseph Losey. Composes Sonatina No. 2 for pianos, Nocturne (for two pianos), Fantasia for two pianos, Memnon (suite for voice and piano; lyrics by Jean Cocteau).
          <br /><br />Works as copyist for the Broadway composer Vernon Duke.`,
    highlight: null,
  },
  {
    year: '1936',
    text: `With the help of Virgil Thomson, receives commission to write music for Horse Eats Hat, Edwin Denby’s adaptation of a Eugene Labiche farce directed by John Houseman and Orson Welles. Helps to found the anti-Franco Committee on Republican Spain.
          <br /><br />Composes Trio for violin, cello and piano and two film scores: 145 W. 21 and Seeing the World.
          <br /><br />Learns orchestration and works on score for production of Marlowe’s Doctor Faustus directed by Welles.`,
    highlight: null,
  },
  {
    year: '1937',
    text: `Bowles is introduced to Jane Auer (b. 1917) by John Latouche. Sees Auer the following week at e. e. cummings’s apartment; when Bowles and Kristians Tonny propose a trip to Mexico, Auer asks to join them. Orders 15,000 anti-Trotsky stickers to distribute in Mexico.
          <br /><br />In Mexico, Bowles meets the composer Silvestre Revueltas and works on pieces influenced by Mexican folk music. Completes Mediodía (grupo de danzas mexicanas) (for flute, clarinet, trumpet, piano and string septet).
          <br /><br />At Kirstein’s request, returns to New York to orchestrate George Balanchine’s Yankee Clipper. Bowles begins writing music for the opera Denmark Vesey (now lost), with libretto by Charles Henri Ford.`,
    highlight: null,
  },
  {
    year: '1938',
    text: `Bowles marries Jane Auer. They honeymoon in Central America, then travel to Paris.
          <p class="my-5 text-primary">
            “Jane and I used to spin fancies about how amusing it would be to get married and horrify everyone, above all, our respective families. From fantasy to actuality is often a much shorter distance than one imagines; suddenly we were seriously discussing the possibility.” (Without Stopping, page 207)
          </p>
          Bowles is commissioned to write music for Houseman and Welles’ production of William Gillette’s Too Much Johnson; finishes score but when the production is canceled, transforms his music into the piece Music for a Farce (for clarinet, trumpet, piano and percussion). Composes Romantic Suite (for six winds and strings, piano and percussion) and the film scores Chelsea through the Magnifying Glass, How to become a Citizen of the US and The Sex Life of the Common Film.`,
    highlight: null,
  },
  {
    year: '1939',
    text: `Joins the American Communist Party.
          <p class="text-primary my-5">
            “Jane and I were assigned to a new members’ class for seven weeks. When I was asked under what name I wanted to join, I said: “How do you prefer it?” The man looked at me. “Oh, we’d rather you used your real name, of course.” “Fine.” So we went in as Paul and Jane Bowles. Then we were sent to a deadly class in Marxism-Leninism at the Workers’ School. “I don’t know what I’m reading,” Jane complained when she studied our textbook. I knew what I was reading, but that made it worse. We tried to compensate for our lack of devotion to Marxism-Leninism by seeing every Russian film that came to New York.” (Without Stopping, page 215)
          </p>
          Writes score for the Group Theater’s production of William Saroyan’s My Heart’s in the Highlands and uses the money to rent a farmhouse on Staten Island, where he works on the opera Denmark Vesey (libretto by Charles-Henri Ford).
          <br /><br />Composes Film Made to Music (film score), Huapango No. 1 and No. 2 (“El sol”) (piano solo), Suite (for two pianos), Tornado Blues (choral with piano), Johnny A. (ballet: piano).
          <br /><br />Writes short story “Tea on the Mountain.”`,
    highlight: null,
  },
  {
    year: '1940',
    text: `Bowles and Jane move into the Chelsea Hotel.
          <br /><br />Completes music for Saroyan’s Love’s Old Sweet Song. Writes music for Roots in the Soil, a film about soil conservation in New Mexico.
          <br /><br />Composes music for the Theatre Guild’s production of Twelfth Night. Bowles’s score is a critical success; he receives a second Theatre Guild commission for Philip Barry’s Liberty Jones, directed by Houseman. Writes music for Lillian Hellman’s Watch on the Rhine.`,
    highlight: `“He writes no brassy pit-music, no off-stage realistic sound-effects. He does what nearly every musician in the world would say, on principle, can’t be done.” (Virgil Thomson in Paul Bowles’s Music, Eos, pages 74-77)`
  },
  {
    year: '1941',
    text: `Attempts to quit Communist Party and is told that expulsion is the only means of leaving the organization.
          <br /><br />Composes Sonatina fragmentaria (piano solo), Dance (ballet: piano). Writes Pastorela, an opera-ballet based on Mexican themes, for American Ballet Caravan. Receives Guggenheim grant to compose an opera. At the request of Katharine Hepburn, writes music for the play Love Like Wildfire.
          <br /><br />Works on light opera The Wind Remains (zarzuela for piano and orchestra) based on García Lorca’s Así que pasen cinco años, in Mexico. Returns to United States and moves to apartment on 14th Street and Seventh Avenue and becomes acquainted with Marcel Duchamp, its previous occupant.`,
    highlight: null
  },
  {
    year: '1942',
    text: `Debuts as music critic for the New York Herald Tribune; will contribute reviews regularly until 1946.
          <p class="text-primary my-5">
            “For fifteen years music was my only occupation and I only returned to writing through music criticism.” (Conversations with Paul Bowles, ed. Gena Dagel Caponi (Jackson: University Press of Mississippi, 1993, page 7.)
          </p>
          Drafted for military service but dismissed after psychological examination.`,
    highlight: null,
  },
  {
    year: '1943',
    text: `Composes El bejuco (piano solo), El indio (piano solo) and incidental music for productions of John Ford’s ‘Tis Pity She’s a Whore. Writes theater music for a stage adaptation of James Michener’s Tales of the South Pacific.
          <br /><br />The Wind Remains premiers at the Museum of Modern Art.
          <p class="text-primary my-5">
            “The evening scheduling [of] my one-act opera The Wind Remains was dedicated to Federico Garcia Lorca. Oliver Smith designed one of his best sets. I gave Lenny Bernstein the score, as he had agreed to direct the orchestra. Merce Cunningham choreographed the opera and danced the part of the clown. The musicians had to perform under considerable difficulties, crouching in the concavities of Oliver’s set. Lenny conducted standing against the back wall of the auditorium, wholly invisible to the audience. He did more than anyone else could have done with my music.” (Without Stopping, page 243)
          </p>
          Bowles meets Peggy Guggenheim, who organizes a recording of five of his pieces. Meets Samuel Barber, Gian Carlo Menotti, and John Cage.`,
    highlight: null,
  },
  {
    year: '1944',
    text: `Writes music for Theatre Guild production of Franz Werfel’s Jacobowsky and the Colonel and for Congo, a film directed by Andre Cauvin with script by John Latouche.
          <br /><br />Composes music for ballet Colloque Sentimental, produced by the Ballet Russe de Monte Carlo with sets by Salvador Dalí, and incidental music for Williams’s The Glass Menagerie.`,
    highlight: null
  },
  {
    year: '1945',
    text: `Edits special issue of View on Central and South America and the Caribbean. Travels to Central America. Publishes “The Scorpion” (inspired by his reading of indigenous Mesoamerican myths). Translates Borges’s story “The Circular Ruins.”
          <p class="text-primary my-5">
            “One rainy Sunday I awoke late, put a thermos of coffee by my bedside, and began to write another of these myths. No one disturbed me, and I wrote on until I had finished it. I read it over, called it “The Scorpion,” and decided that it could be shown to others.” (Without Stopping, pages 261-262)
          </p>
          Writes Ondine (theater music).
          <br /><br />Works on translation of Sartre’s play Huis Clos. Publishes “By the Water” in View and “The Echo” in Harper’s Bazaar.`,
    highlight: null
  },
  {
    year: '1946',
    text: 'Completes music for Blue Mountain Ballads, with lyrics by Tennessee Williams. Completes Sonata for Two Pianos, piano pieces La cuelga, Orosí, Sayula, and the theater scores Cyrano de Bergerac, The Dancer, Land’s End, On Whitman Avenue, Twilight Bar.',
    highlight: null
  },
  {
    year: '1947',
    text: `Settles in Tangier.
          <p class="text-primary my-5">
            “One balmy night in May, asleep in my quiet bedroom, I had a dream. There was nothing extraordinary about that; I always dreamed, and sometimes I awoke and wrote the dreams down immediately without even turning on the light. This dream was distinctive because although short and with no anecdotal content beyond that of a changing succession of streets, after I awoke, it had left its essence with me in a state of enameled precision: a residue of ineffable sweetness and calm. In the late afternoon sunlight I walked slowly through complex and tunneled streets. As I reviewed it, lying there, sorry to have left the place behind, I realized with a jolt that the magic city really existed. It was Tangier.” (Without Stopping, page 274)
          </p>
          Partisan Review publishes “A Distant Episode.” Works on The Sheltering Sky.
	  <br /><br />Meets Moroccan artist Ahmed Yacoubi, who will become a close companion during the 1950s.
   	  <br /><br />Composes Prelude and Dance (winds, percussion, double bass and piano), Six Preludes for Piano, Carretera de Estepona (piano solo), Sonatina for Piano Solo,
          <br /><br />Iquitos (retitled Tierra Mojada) (piano solo), Folk Preludes for Piano Solo and Dreams that Money can Buy (film Score).
          <br /><br />Takes majoun for the first time, a jam made from cannabis; tries kif, which he will begin smoking regularly and in large quantities from the 1950s through the 1980s, when health problems force him to reduce his consumption to one cigarette a day.`,
    highlight: null,
  },
  {
    year: '1948',
    text: `Writes theater music for Williams's Summer and Smoke. Concerto for Two Pianos, Winds, and Percussion premieres in New York.
          <br /><br />Bowles becomes friends with Gore Vidal and meets Truman Capote.`,
    highlight: null
  },
  {
    year: '1949',
    text: `The Sheltering Sky, Bowles's most famous novel is published by John Lehmann in London.
          <br /><br />Bowles works on novel Almost All the Apples Are Gone which is never completed. Sails for Sri Lanka with Yacoubi and begins writing a new novel, Let It Come Down.`,
    highlight: null
  },
  {
    year: '1950',
    text: `The Sheltering Sky enters The New York Times bestseller list.
          <br /><br />Bowles spends several months in Sri Lanka and South India, working on Yerma, an opera for singer Libby Holman based on the García Lorca play. Composes The Tempest (theater music).
	  <br /><br />John Lehmann publishes A Little Stone, omitting “The Delicate Prey” and “Pages from Cold Point” because of censorship concerns. The American version, The Delicate Prey and Other Stories, includes the two stories and is published by Random House.`,
    highlight: null
  },
]
</script>
<template>
  <div class="relative">
    <div class="h-screen bg-background-light dark:bg-background-dark relative bg-[url('@/assets/imgs/chronology.png')]">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-white/80 dark:from-black/80 md:from-55% to-transparent flex flex-col justify-center items-start">
        <div class="p-5 mt-24 lg:px-16 2xl:px-20">
          <h1 class="text-5xl md:text-8xl font-mono uppercase text-black dark:text-white-shade">Chronology</h1>
          <p class="md:w-1/2 text-primary text-3xl mt-5">December 30, 1910 &mdash; November 18th, 1999</p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 mt-5">
          <a href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] text-black border-black dark:border-white-shade dark:text-white-shade hover:opacity-75">
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
    </div>
    <div
      class="fixed top-20 right-0 left-0 px-5 md:px-16 py-3 z-30 backdrop-blur-sm bg-background-light dark:bg-background-dark bg-opacity-30 dark:bg-opacity-30 transition-all flex overflow-auto md:flex-wrap gap-x-5 gap-y-3">
      <a :href="'#' + item.year" class="inline-block px-2 mr-5 flex-shrink-0 hover:text-primary"
        v-for="(item, i) in chronology" :key="i">
        {{ item.year }}
      </a>
    </div>
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 mb-10">
      <a name="content" />
      <chronology-list v-for="(item, i) in chronology" :key="i" :item="item" />
    </div>
  </div>
</template>
