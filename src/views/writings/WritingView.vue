<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { onMounted, reactive } from 'vue'
import { fetchMusicBookAlt } from '@/services/music'
import { useThemeStore } from '@/stores/theme'
import { getUrl } from '../../services/misc';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';

const router = useRoute()
const route = useRouter()
const writing = reactive({ next: "", previous: "", item: [] as any })

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const loadUrl = async function (url: string) {
  setLoading(true)
  try {
    const response = await getUrl(url)
    writing.item = response.data.results
    writing.next = response.data.next
    writing.previous = response.data.previous
    setLoading(false)
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error: any) {
    setError(error)
    console.log(error)
  }
}

const fetchWriting = async function () {
  setLoading(true)
  let params;
  switch (router.params.title) {
    case 'Travels':
      params = 'Travel';
      break;

    default:
      params = router.params.title;
      break;
  }
  try {
    const response = await fetchMusicBookAlt(params)
    writing.item = response.data.results
    writing.next = response.data.next
    writing.previous = response.data.previous
    setLoading(false)
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error: any) {
    setError(error)
    console.log(error)
  }
}

onMounted(async () => {
  await fetchWriting()
})

useHead({ title: `Paul Bowles ${router.params.title}` })
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl md:text-6xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link to="#back" @click.prevent="route.go(-1)"
          class="hover:opacity-75 scale-75 md:scale-100 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
      <div class="mt-16" v-if="router.params.title === 'Short Stories'">
        <h2 class="uppercase text-4xl">Introduction</h2>
        <p class="mt-5 text-justify">
          Of his first collection of stories, <i>The Delicate Prey (1950)</i>, Paul Bowles wrote:
          “All the tales are a variety of detective story in which the reader is the detective; the
          mystery is the motivation for the characters' behavior.” In 1989, in a preface to a
          selection of stories written over a period of forty years, he amplified: “Many are the
          result of nostalgia for places left behind; the composition of these began with an
          evocation of the <i>ambiance</i> of the locale, a general atmosphere out of which the
          protagonists were born.”
        </p>
      </div>
      <p class="mt-16 text-justify" v-else-if="router.params.title === 'Novels'">
        Paul Bowles wrote three novels set in North Africa: <i>The Sheltering Sky</i>,
        <i>Let it Come Down</i> and <i>The Spider's House</i>. Up Above the World is set in Central
        America, and <i>Too Far from Home</i>, a novella, in Mali.
      </p>
      <p class="mt-16 text-justify" v-else-if="router.params.title === 'Contributions to Periodicals'">
        By the time of his death in Tangier, Morocco, in 1999, Paul Bowles had become a legendary
        figure in modern literary culture. The range of his literary work includes poems, short
        stories, novels, travel writing, essays, music criticism, autobiography, and translations.
      </p>
      <p class="mt-16 text-justify" v-else-if="router.params.title === 'Autobiography'">
        In 1972 Bowles published <i>Without Stopping</i>, his book-length autobiography. In this
        section we present two pages of its typescript along with two short autobiographical texts.
        “Paul Bowles, His Life” could be called poetic as opposed to the more factual one written
        for the <i>Contemporary Authors Autobiographical Series</i> (Detroit, 1984).
      </p>
      <p class="mt-16 text-justify" v-else-if="router.params.title === 'Music Criticism'">
        From 1939 through early 1945, the only prose Paul Bowles published was music criticism. He
        served on the music reviewing staff of the New York Herald <i>Tribune</i>, where his friend
        and teacher Virgil Thomson was chief critic. During his three and a half years at the
        <i>Tribune</i>, Bowles wrote more than four hundred music reviews and columns, many of which
        focused on Latin American and North African music.
      </p>
      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10" v-if="router.params.title === 'Music Criticism'">
        <router-link :to="`music-criticism/${item.title}`" class="block rounded overflow-hidden"
          v-for="item in writing.item" :key="item.id">
          <img src="@/assets/imgs/writings-thumbnail.png" />
          <h3 class="underline mt-4">{{ item.title }}</h3>
        </router-link>
      </div>
      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10" v-else-if="router.params.title === 'Autobiography'">
        <router-link :to="`Autobiography/${item.title}`" class="block rounded overflow-hidden"
          v-for="item in writing.item" :key="item.id">
          <img src="@/assets/imgs/writings-thumbnail.png" />
          <h3 class="underline mt-4">{{ item.title }}</h3>
        </router-link>
      </div>
      <ol class="list-decimal mt-10 ml-10" v-else-if="router.params.title === 'Contributions to Periodicals'">
        <li v-for="item in writing.item" :key="item.id">
          <h3 class="mt-4">{{ item.title }}</h3>
        </li>
      </ol>
      <ol class="list-decimal mt-10 ml-10" v-else-if="router.params.title === 'Poetry'">
        <li v-for="item in writing.item" :key="item.id">
          <h3 class="mt-4">{{ item.title }}</h3>
        </li>
      </ol>
      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10" v-else>
        <div class="rounded overflow-hidden" v-for="item in writing.item" :key="item.id">
          <img src="@/assets/imgs/writings-thumbnail.png" />
          <h3 class="mt-4">{{ item.title }}</h3>
        </div>
      </div>
      <div class="flex justify-center mt-10" v-if="router.params.title !== 'Autobiography'">
        <el-button-group>
          <el-button type="primary" class="bg-primary" :icon="ArrowLeft" style="padding: 20px 25px"
            :disabled="writing.previous === ''" @click="loadUrl(writing.previous)">
            Previous Page
          </el-button>
          <el-button type="primary" class="bg-primary" style="padding: 20px 25px" :disabled="writing.next === ''"
            @click="loadUrl(writing.next)">
            Next Page
            <el-icon class="el-icon--right">
              <ArrowRight />
            </el-icon>
          </el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>
