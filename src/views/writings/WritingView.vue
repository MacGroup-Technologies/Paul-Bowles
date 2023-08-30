<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { onMounted, reactive, watch } from 'vue'
import { fetchMusicBookAlt } from '@/services/music'
import { useThemeStore } from '@/stores/theme'

const router = useRoute()
const route = useRouter()
const writing = reactive({ item: [] })

const setLoading = function (val: boolean) {
  useThemeStore().updateLoading(val)
}

const setError = function (val: string) {
  useThemeStore().updateError(val)
}

const fetchWriting = async function () {
  setLoading(true)
  try {
    const response = await fetchMusicBookAlt(router.params.title)
    writing.item = response.data.results
    setLoading(false)
  } catch (error) {
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
        <h1 class="text-5xl md:text-6xl font-heading uppercase">{{ router.params.title }}</h1>
        <router-link
          to="#back"
          @click.prevent="route.go(-1)"
          class="hover:opacity-75 hover:-translate-x-5 transition-transform"
        >
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
          evocation of the ambiance of the locale, a general atmosphere out of which the
          protagonists were born.”
        </p>
      </div>
      <p class="mt-16" v-else-if="router.params.title === 'Novels'">
        Paul Bowles wrote three novels set in North Africa: The Sheltering Sky, Let it Come Down and
        The Spider’s House. Up Above the World is set in Central America, and Too Far from Home, a
        novella, in Mali.
      </p>
      <p class="mt-16" v-else-if="router.params.title === 'Contributions to Periodicals'">
        By the time of his death in Tangier, Morocco, in 1999, Paul Bowles had become a legendary
        figure in modern literary culture. The range of his literary work includes poems, short
        stories, novels, travel writing, essays, music criticism, autobiography, and translations.
      </p>
      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div class="rounded overflow-hidden" v-for="item in writing.item" :key="item.id">
          <img :src="`https://res.cloudinary.com/dbrvleydy/${item.image[0].image}`" class="" />
          <h3 class="underline mt-4">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
