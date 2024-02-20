<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Paul Bowles's Library` })
</script>
<template>
  <div class="">
    <div
      class="h-screen bg-background-light dark:bg-background-dark relative flex items-center bg-[url('@/assets/imgs/imagehero-5.png')]"
      style="background-size:cover;background-position:center,center;">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-white/80 dark:from-black/80 md:from-55% to-transparent flex flex-col justify-center items-start">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-8xl font-mono uppercase text-black dark:text-white-shade">Library</h1>
          <p class="md:w-1/2 text-primary text-3xl mt-5">
            Explore Paul Bowles's library of over 3,000 volumes collected during the five decades he
            lived in Tangier.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20">
          <a href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] text-black border-black dark:border-white-shade dark:text-white-shade hover:opacity-75">
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
    </div>
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 mb-10">
      <a name="content" />
      Paul Bowles's personal library includes over three thousand volumes that he collected during
      the five decades he lived in Tangier. The result of a recent major cataloging effort, his
      copious library is now available in digitized form for public consultation.
      <br />
      <div class="mt-5 md:mt-10">
        <router-link to="/library/list">
          <el-button type="primary" size="large" class="bg-primary" style="padding: 30px 35px;">Proceed to
            Library</el-button>
        </router-link>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-10 px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 mb-10">
      <div class="md:w-1/3 overflow-scroll md:overflow-hidden flex flex-row md:flex-col gap-5">
        <div class="w-2/3 flex-shrink-0 md:w-full md:mb-5">
          <div class="overflow-hidden rounded">
            <img src="@/assets/imgs/image4.png"
              class="my-0 mx-auto h-auto w-1/2 object-fill transition hover:scale-105 hover:transform hover:transition" />
          </div>
          <p class="text-[14px] md:text-[20px] text-primary mt-3">
            A seminal work that explores musical traditions in the United States, offering
            insights into its diverse origins and influential composers.
          </p>
        </div>
        <div class="w-2/3 flex-shrink-0 md:w-full md:mb-5">
          <div class="overflow-hidden rounded">
            <img src="@/assets/imgs/image4-1.png"
              class="my-0 mx-auto h-auto w-1/2 object-fill transition hover:scale-105 hover:transform hover:transition" />
          </div>
          <p class="text-[14px] md:text-[20px] text-primary mt-3">
            A collection of literary works exploring the cultural, historical, and medicinal significance of cannabis and
            its multifaceted aspects.
          </p>
        </div>
        <div class="w-2/3 flex-shrink-0 md:w-full md:mb-5">
          <div class="overflow-hidden rounded">
            <img src="@/assets/imgs/image4-2.png"
              class="my-0 mx-auto h-auto w-1/2 object-fill transition hover:scale-105 hover:transform hover:transition" />
          </div>
          <p class="text-[14px] md:text-[20px] text-primary mt-3">
            A sample of Bowles’s collection of books on North Africa, arguably a source for
            his book Points in Time (1985), “a lyrical history of Morocco.”
          </p>
        </div>
        <div class="w-2/3 flex-shrink-0 md:w-full md:mb-5">
          <div class="overflow-hidden rounded">
            <img src="@/assets/imgs/image4-3.png"
              class="my-0 mx-auto h-auto w-1/2 object-fill transition hover:scale-105 hover:transform hover:transition" />
          </div>
          <p class="text-[14px] md:text-[20px] text-primary mt-3">
            Augiéras was a French artist and writer known for his provocative works. La
            trajectoire recounts his nomadic and unconventional life.
          </p>
        </div>
        <div class="w-2/3 flex-shrink-0 md:w-full md:mb-5">
          <div class="overflow-hidden rounded">
            <img src="@/assets/imgs/image4-4.png"
              class="my-0 mx-auto h-auto w-1/2 object-fill transition hover:scale-105 hover:transform hover:transition" />
          </div>
          <p class="text-[14px] md:text-[20px] text-primary mt-3">
            A groundbreaking audio cut-up experiment which explores the possibilities of
            manipulating sound to create a disorienting and transformative experience.
          </p>
        </div>
        <div class="w-2/3 flex-shrink-0 md:w-full md:mb-5">
          <div class="overflow-hidden rounded">
            <img src="@/assets/imgs/image4-5.png"
              class="my-0 mx-auto h-auto w-1/2 object-fill transition hover:scale-105 hover:transform hover:transition" />
          </div>
          <p class="text-[14px] md:text-[20px] text-primary mt-3">
            The first number of Antaeus, the literary magazine founded by Paul Bowles and Daniel Halpern in Tangier in
            1970.
          </p>
        </div>
      </div>
      <div class="md:w-2/3">
        <h2 class="font-mono font-semibold uppercase text-3xl lg:text-4xl">about the library</h2>
        <p class="mt-5 text-justify text-xl">
          Paul Bowles’s personal library comprises more than three thousand volumes that the writer
          collected over his five decades living in Tangier. Little is known of the books he read
          before 1947, the year he moved to Morocco, although he did bring some with him. These
          include Orchestration by the English composer and musicologist Cecil Forsyth (dated 1944
          in New York in blue-inked, lowercase handwriting); and Salah and His American, a novel by
          Leland Hall that takes place in colonial Marrakesh, published in New York in 1934
          (annotated, also by hand and in New York, in the upper right-hand margin, in 1935). At
          that time Bowles was still dedicating almost all of his time to music, although he also
          wrote a number of stories and some poems during these years. It wasn’t until he arrived in
          Fez at the end of 1947 that he began writing The Sheltering Sky, his first novel. But it
          is thanks to these markings of time and place, together with other invaluable details
          offered by his library, that we can follow the trail of his reading and see the ways it
          weaves through his writing process.
          <br /><br />
          Bowles was an avid reader. He claimed he had learned to read all by himself by the age of
          four, and that he couldn’t remember a time during his childhood when he couldn’t associate
          printed words with their corresponding sounds. Unlike other writers, however, portraits of
          him rarely show him alongside his books. It was as if, for a nomad like him, literature
          was not inside but outside: in the landscape, the streets, in a furtive glance, and in
          conversations. His library, like his house, had an open door; he would receive whoever
          wanted to see him, whether guest or pilgrim, an attitude made evident by the library’s
          variety of languages, literary traditions, genres, and fields of knowledge. And gifts,
          too: the library contained an incredible amount of books given to him by friends and
          admirers, and Bowles treasured them all equally. Many of these gestures of affection can
          be read now in the dedications that have been photographed and transcribed in the digital
          catalogue. Thanks to these insights, we are able to reconstruct a series of
          relationships—between people, between books, between books and writing—that span the
          narrative of one of the central authors of the twentieth century.
          <br /><br />
          The library, which includes books in twenty languages, reflects Bowles’s polyglot
          education and the wide circulation his work enjoyed in translation. (Almost every edition
          of his texts, translated into fifteen languages, has been preserved.) While English titles
          predominate, we find a considerable number in French and Spanish, languages that Bowles
          not only spoke and wrote in—the multilingualism in his correspondence makes this
          evident—but also ones from which he translated. (His translation of Borges’s “Las ruinas
          circulares,” dating to 1946, was the first version of that story to appear in English.)
          Furthermore, toward the end of the 1950s, he began to record and translate Maghrebi oral
          storytellers, foremost among whom were Ahmed Yacoubi, Larbi Layachi, Mohammed Mrabet, and
          Mohamed Choukri—the latter of whom was the only one who knew how to write. Bowles also
          dedicated much of his time to his work as an editor, together with Daniel Halpern of the
          literary magazine Antaeus, which operated without interruption for twenty-five years (from
          1970 to 1994) and in which his significance was highlighted by the structure and support
          of the literary networks that bear his personal signature. It is also worth noting the
          marks of friendships and intellectual exchanges that Bowles had with other writers of his
          time, testified to by his library’s inclusion of books that were autographed and dedicated
          by the likes of Allen Ginsberg, William S. Burroughs, Virgil Thomson, Tennessee Williams,
          and Gore Vidal, all of whom visited Bowles in Tangier.
          <br /><br />
          Of the nearly three thousand surviving volumes, the majority are novels, short stories,
          and essays, but there are also many poetry collections, literary journals, and zines
          hailing from all over the world. From his favorite readings of his youth—such as
          Lautréamont, Gide, Proust, and the poems of García Lorca and John Ashbery—through to the
          thrillers of his beloved Patricia Highsmith and Islamic mysticism, the array of works
          collected in the library shows that Bowles’s literary selections were extremely broad and
          diverse when it came to eras, literary currents, and geographies. Nevertheless, Bowles was
          an inconspicuous reader. He did not underline or annotate his books; the only evidence he
          left of his progress through the pages are his handwritten name, date, and location. Three
          basic but essential pieces of information for anyone who is interested not just in
          Bowles’s literary influences but also in the confluences between the creative act and the
          literary context in which it was framed.
          <br /><br />

          Unfortunately, already a year or two before Bowles passed away, some visitors had begun to ransack his
          bookshelves.
          Among the absent volumes were works by renowned authors, with signatures and dedications. Noteworthy losses
          included
          “Fragments from a Work in Progress” (<i>Finnegans Wake</i>), signed by Joyce; various works by Tennessee
          Williams,
          William Burroughs, Allen Ginsberg, Patricia Highsmith, and other friends and collaborators of Bowles. Also
          missing
          were Émile Laoust’s <i>Contes berbères du Maroc</i>, and an old edition of Burton’s translation of <i>The Book
            of the
            Thousand Nights and a Night</i>.
          <br /><br />

          The online catalogue provides access for the first time to information and materials that
          were previously reserved for specialists. Every book is presented with its corresponding
          bibliographic information, and photographs accompany the entries for books that contain
          markings from Bowles’s reading, or that are dedicated to him. The arduous task of
          preparing the catalogue was based on the initiative of the literary agent Carmen Balcells,
          the artist Miquel Barceló and the librarian Cécile Franken. Many years later, this
          groundwork allowed the team of digital librarians, Israel Jorquera, Paula Arroyo, Camila
          González Adel, and Melina Luceri to transform the analogue original into a fully virtual
          catalogue. The work of Jean-Philippe Fournier of the Barceló atelier and photographer Émil
          Hernon was of vital importance in making the images of the books available, as well as
          that of Antiochus Omissi, who patiently reviewed all the information uploaded, so that it
          would be ready for use. This joint and collective effort aims to create a new space for
          interaction among Bowles’s readers in order to open his legacy up to new modes of use,
          study, and reading. 
        </p>
      </div>
    </div>
  </div>
</template>
