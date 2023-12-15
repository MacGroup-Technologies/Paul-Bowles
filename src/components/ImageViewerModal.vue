<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components'
import { ref, onMounted } from 'vue'
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'

const props = defineProps<{items:string[], active_index:number}>()

const image_displayed = ref("")
const active_index = ref(0)
function previousImage(){
  active_index.value -= 1;
  image_displayed.value = props.items[active_index.value % props.items.length]
}
function nextImage(){
  active_index.value += 1;
  image_displayed.value = props.items[active_index.value % props.items.length]
}

onMounted(() => {
  active_index.value = props.active_index;
  image_displayed.value = props.items[active_index.value];
})

</script>

<template>
  <div class="z-50 fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 flex justify-center items-center">
    <OnClickOutside @trigger="$emit('close')">
      <div
        class="overflow-y-auto mx-5 md:mx-0 h-[90vh] relative md:w-[60vw] bg-background-light dark:bg-background-dark rounded-xl">
        <div
          class="py-5 px-5 md:px-20 inline-flex items-center gap-3 text-black dark:text-white-shade hover:text-opacity-80 cursor-pointer"
          @click="$emit('close')">
          Close <span class="inline-block pt-[2px] w-10 bg-black dark:bg-white-shade" />
        </div>
        <div class="relative flex items-center justify-center">
          <VueMagnifier :src="image_displayed" width="500" class="max-h-[80vh]" />
        </div>
          <button @click="()=>previousImage()" class="text-6xl absolute left-0 inset-y-0 m-4">&larr;</button>
          <button @click="()=>nextImage()" class="text-6xl absolute right-0 inset-y-0 m-4">&rarr;</button>
      </div>
    </OnClickOutside>
  </div>
</template>
