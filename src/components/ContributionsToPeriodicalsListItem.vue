<script lang="ts" setup>
import { ref } from 'vue';
defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }

})

const opened = ref(false);
</script>
<template>
  <div class="flex justify-between items-start mb-8 gap-10 overflow-hidden">
    <div class="w-[80vw] md:w-1/2 h-auto overflow-hidden cursor-pointer text-md" @click="opened = !opened">
      <div class="flex gap-4"><span>{{index+1}}.</span>
        <div>
          <div class="space-y-4">
            <h2>{{item.title}}</h2>
            <div class="space-y-2 text-lg">
              <p class="text-primary transition-all" v-if="opened">{{ item.date_of_publication }}</p>
              <p class="text-primary transition-all" v-if="opened">{{ item.place_of_publication }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <icon-plus class="w-8 aspect-square" :opened="opened" @click="opened = !opened" />
  </div>
</template>
