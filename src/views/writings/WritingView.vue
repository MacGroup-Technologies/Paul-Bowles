<script lang="ts" setup>
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import ContributionsListItem from '@/components/ContributionsToPeriodicalsListItem.vue'
import { useHead } from '@unhead/vue'
import { onMounted, reactive } from 'vue'
import { fetchMusicBookAlt } from '@/services/music'
import { useThemeStore } from '@/stores/theme'
import { getUrl } from '../../services/misc';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';

const route = useRoute()
const router = useRouter()
const pagination = reactive({
  next: null,
  previous: null,
  page: null,
});
const PAGE_URL = window.location.pathname;
const PAGE_QUERY = route.query.query;

function getNextPage() {
  return PAGE_URL + `?page=${Number(route.query.page || 1) + 1}&query=${route.query.query || ''}`;
}

function getPreviousPage() {
  return PAGE_URL + `?page=${Number(route.query.page) - 1 || 1}&query=${route.query.query || ''}`;
}

const filter = reactive({
  keyword: route.query.query || '',
  page: Number(route.query.page) || 1,
});

function clearFilters() {
  router.push({ path: PAGE_URL, query: { query: '' } });
}

async function fetchPageData() {
  setLoading(true);

  let params;
  switch (route.params.title) {
    case 'Travels':
      params = 'Travel';
      break;

    default:
      params = route.params.title;
      break;
  }
  try {
    const response = await fetchMusicBookAlt(params, filter.page)

    pagination.next = response.data.next;
    pagination.previous = response.data.previous;
    if (route.params.title === "Autobiography") {
      const temp = response.data.results.shift()
      response.data.results.push(temp)
    }
    console.log({ response })
    writing.item = response.data.results

    setLoading(false)

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error: any) {
    setError(error)
    console.log(error)
  }
}

onBeforeRouteUpdate((to, from) => {
  if (to !== from) {
    filter.page = Number(to.query.page) || 1;
    fetchPageData()
  }
})

const writing = reactive({ next: "", previous: "", item: [] as any })

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const fetchWriting = async function () {

}

onMounted(async () => {
  setLoading(true);
  try {
    fetchPageData();
  } catch (error: any) {
    console.log(error);
    setError(error);
  }
});



useHead({ title: `Paul Bowles ${route.params.title}` })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl md:text-6xl font-heading uppercase">{{ route.params.title }}</h1>
        <router-link to="#back" @click.prevent="router.go(-1)"
          class="hover:opacity-75 scale-75 md:scale-100 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div class="mt-16" v-if="route.params.title === 'Short Stories'">
        <h2 class="uppercase text-4xl">Introduction</h2>
        <p class="mt-5 ">
          Of his first collection of stories, <i>The Delicate Prey (1950)</i>, Paul Bowles wrote:
          “All the tales are a variety of detective story in which the reader is the detective; the
          mystery is the motivation for the characters' behavior.” In 1989, in a preface to a
          selection of stories written over a period of forty years, he amplified: “Many are the
          result of nostalgia for places left behind; the composition of these began with an
          evocation of the <i>ambiance</i> of the locale, a general atmosphere out of which the
          protagonists were born.”
        </p>
      </div>
      <p class="mt-16 " v-else-if="route.params.title === 'Novels'">
        Paul Bowles wrote three novels set in North Africa: <i>The Sheltering Sky</i>,
        <i>Let it Come Down</i> and <i>The Spider's House</i>. Up Above the World is set in Central
        America, and <i>Too Far from Home</i>, a novella, in Mali.
      </p>
      <p class="mt-16 " v-else-if="route.params.title === 'Contributions to Periodicals'">
        By the time of his death in Tangier, Morocco, in 1999, Paul Bowles had become a legendary
        figure in modern literary culture. The range of his literary work includes poems, short
        stories, novels, travel writing, essays, music criticism, autobiography, and translations.
      </p>
      <p class="mt-16 " v-else-if="route.params.title === 'Autobiography'">
        In 1972 Bowles published <i>Without Stopping</i>, his book-length autobiography. In this
        section we present two pages of its typescript along with two short autobiographical texts.
        “Paul Bowles, His Life” could be called poetic as opposed to the more factual one written
        for the <i>Contemporary Authors Autobiographical Series</i> (Detroit, 1984).
      </p>
      <div class="mt-16 " v-else-if="route.params.title === 'Music Criticism'">
        <p>
          From 1939 through early 1945, the only prose Paul Bowles published was music criticism. He
          served on the music reviewing staff of the New York Herald <i>Tribune</i>, where his friend
          and teacher Virgil Thomson was chief critic. During his three and a half years at the
          <i>Tribune</i>, Bowles wrote more than four hundred music reviews and columns, many of which
          focused on Latin American and North African music.
        </p>
        <p>Below is a selection of Paul Bowles’s music criticism :</p>
      </div>
      <div class="mt-10" v-if="route.params.title === 'Music Criticism'">
        <ol class="list-decimal mt-10 ml-10">
          <li v-for="item in writing.item" :key="item.id">
            <router-link :to="`music-criticism/${item.title}`" class="block rounded overflow-hidden" :key="item.id">
              <h3 class="underline mt-4">{{ item.title }}</h3>
            </router-link>
          </li>
        </ol>
      </div>

      <div class="mt-10" v-else-if="route.params.title === 'Autobiography'">
        <ol class="list-decimal mt-10 ml-10">
          <li v-for="item in writing.item" :key="item.id">
            <router-link :to="`autobiography/${item.title}`" class="block rounded overflow-hidden" :key="item.id">
              <h3 class="underline mt-4">{{ item.title }}</h3>
            </router-link>
          </li>
        </ol>
      </div>

      <ol class="list-decimal- mt-10 ml-10" v-else-if="route.params.title === 'Contributions to Periodicals'">
        <li v-for="(item, index) in writing.item" :key="item.id">
          <contributions-list-item :index="index" :item="item"></contributions-list-item>
        </li>
      </ol>
      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16" v-else>
        <div class="rounded flex flex-col items-center overflow-hidden" v-for="item in writing.item" :key="item.id">
          <div v-if="item.image_urls !== 'N/A'" class="relative overflow-hidden">
            <img src="@/assets/imgs/writings-thumbnail.png" class="opacity-0" />
            <div class="absolute inset-0 grid place-items-center">
              <img :src="item.image_urls" class="absolute inset-0 blur scale-[200%]" />
              <img :src="item.image_urls" class="relative p-2" />
            </div>
          </div>
          <img v-else src="@/assets/imgs/writings-thumbnail.png" />
          <h3 class="text-center mt-4">{{ item.title }}</h3>
          <div class="flex justify-between items-center mt-2">
            <a v-if="item.library_url" :href="item.library_url" target="_blank"><el-button type="primary" class="bg-primary">Read in Library</el-button></a>
            <a v-if="item.purchase_url" :href="item.purchase_url" target="_blank"><el-button type="primary" class="bg-primary">Purchase Writing</el-button></a>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-10" v-if="route.params.title.toLowerCase() === 'contributions to periodicals'">
        <el-button-group>
          <router-link v-if="pagination.previous" :to="getPreviousPage()"
            class="el-button--primary el-button--large el-button">
            <el-icon class="el-icon--left">
              <ArrowLeft />
            </el-icon>
            Prev
          </router-link>
          <p v-else class="is-disabled el-button--primary el-button--large el-button">
            <el-icon class="el-icon--left">
              <ArrowLeft />
            </el-icon>
            Prev
          </p>

          <router-link v-if="pagination.next" :to="getNextPage()" class="el-button--primary el-button--large el-button">
            Next
            <el-icon class="el-icon--right">
              <ArrowRight />
            </el-icon>
          </router-link>
          <p v-else class="is-disabled el-button--primary el-button--large el-button">
            Next
            <el-icon class="el-icon--right">
              <ArrowRight />
            </el-icon>
          </p>

        </el-button-group>

      </div>
    </div>
  </div>
</template>
