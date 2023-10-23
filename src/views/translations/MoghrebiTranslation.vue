<script lang="ts" setup>
import { onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme';

import { useHead } from '@unhead/vue'
useHead({ title: `Paul Bowles' Moghrebi Translations` })

const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

// const setError = function(val: string) {
//   useThemeStore().updateError(val)
// }

onMounted(() => {
  setLoading(false);
})
</script>
<template>
  <div class="">
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl md:text-6xl font-heading uppercase">
          the night before thinking
        </h1>
        <router-link to="/translation" class="hover:opacity-75 hover:-translate-x-5 transition-transform">
          <icon-back />
        </router-link>
      </div>
    </div>
    <div
      class="px-5 py-5 lg:px-16 2xl:px-20"
    >
      <div class="flex flex-col md:flex-row justify-between">
        <div class="text-2xl md:w-2/3">
          <b>Author:</b> Ahmed Yacoubi<br />
          <b>DATE:</b> 1960,1981<br />
          <b>PUBLISHER:</b> Evergreen Review, Black Sparrow Books<br />
          <b>PLACE OF PUBLICATION:</b> New York   City, Santa Barbara, California<br />
        </div>
        <img src="@/assets/imgs/Moghrebi.png" class="w-1/2 md:w-80 h-auto" />
      </div>
      <p class="my-10 text-2xl">
        Ahmed ben Driss el Yacoubi (1928-1985) was a Moroccan painter and storyteller. He is one of the writers included in Five Eyes, a collection of stories from five Moroccan storytellers that contains some of Bowles’s earliest translations. Bowles recounts how he came upon the young Moroccan in Fez in the late 1940s and encouraged him to paint. Later Bowles took him on trips to Sri Lanka [then Ceylon] and Istanbul.
      </p>
      <div class="text-2xl py-10 flex gap-10 flex-col md:flex-row justify-between items-start">
        <div class="md:w-1/3">
          Three men sat side by side. Three.One was called Hakim.One was called Faqir.And one was called Meskine.And the three of them were sitting there. And as they sat there a woman came by, and the woman’s name was Raqassa.Raqassa spoke to Hakim. Allah ya Hakim!Hakim said to her: Speak to Meskine.She said to Meskine: Allah ya Meskine!Meskine said to her: Speak to Faqir.She went to Faqir: Allah ya Faqir!Faqir spoke: What’s wrong?She only cried aloud and wailed.Ya Raqassa! What’s wrong?Ah, she said. I have a son. He’s twelve years old and one leg is longer than the other.
        </div>
        <div class="md:w-1/3">
          Hado thlatha kano galsine. Thlatha.Wahd smito Hakim, w wahd smito Faqir, w wahd smito Meskine.W homa bathlatha galsine.Homa ma zaline galsine, w wahd lamra khaltat âlihom. Mra smitha Raqassa.Jat Raqassa âand Hakim.Qalt lo:Allah ya Hakiiim!Ja Hakim gal lha:zid âand Meskine.Zadt âan Meskine,galt lo:Allah ya Meskine!Qal lha:zidi âand Faqir.Zadt âand Faqir, qalt lo:Allah ya Faqiiir!Qal lha:maaalk a Raqassa?Qalt lo:âandi wald. ando tnachar âam. Rjal kbar man rjal.
        </div>
        <div class="md:w-1/3 text-right">
          هَادُو ثْلاَثَة كانُوا گالْسِينْ. ثْلاَثَة.وَاحَدْ سْمِيتُو حَكِيمْ،وُوَاحَدْ سْمِيتُو فَقِيرْ،وُوَاحَدْ سْمِيتُو مَسْكِينْ.وُهُمَا بَثْلاَثَة گالْسِينْ.هُمَا مَا زَالِينْ گالْسِينْ، وُوَاحَدْ الَـمْرَا خَلْطَتْ علِيهُمْ.مْرَا أَسْمِيتْها رَقَّاصَة.جَاتْ رَقّاصة عَنْدْ حكيم.قالت لو: اللَّهْ يا حكيييم!جَا حكيم گالْ لها: زِيدْ عَنْدْ مَسْكِينْ.زَادَتْ عَنْ مَسكين، گالت لو: الله يا مسكييين!گَالْ لْهَا: زِيدِي عَنْد فَقِيرْ.زادتْ عن فقير، قالت لو: الله يا فقييير!قال لها: مَااالَكْ يا رقَّاصة؟قالت لُو: عَنْدِي وَلْدْ. عَنْدُو طْنَاشَرْ عَامْ. رْجَلْ كْبَرْ مَنْ رْجَلْ.
        </div>
      </div>
      <div class="flex items-center flex-col md:flex-row gap-10">
        <img src="@/assets/imgs/image10.png" class="w-2/3 md:w-1/3 h-auto" />
        <img src="@/assets/imgs/image11.png" class="w-2/3 md:w-1/3 h-auto" />
        <img src="@/assets/imgs/image12.png" class="w-2/3 md:w-1/3 h-auto" />
      </div>
    </div>
  </div>
</template>