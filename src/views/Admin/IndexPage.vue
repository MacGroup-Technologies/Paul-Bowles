<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { getData } from '@/services/dashboard'
import type { tab as tabInterface } from '@/interfaces/user';

const tab: tabInterface = ref('albums')
const page = ref(1)
const tabs = ['albums', 'books', 'photos', 'videos']
const tableData = ref([])

const fetchData = async function () {
  try {
    const response = await getData(tab.value, page.value)
    tableData.value = response.data.results
  } catch (error) {
    ElMessage.error(error);
    console.log(error)
  }
}

onMounted(() => {})

watch(tab, () => fetchData())
</script>
<template>
  <div class="">
    <div class="flex gap-5 justify-between">
      <div class="flex gap-5">
        <div
          class="py-3 px-5 rounded-3xl capitalize cursor-pointer"
          :class="tab === item ? 'bg-primary text-white shadow-md' : 'bg-gray-200 text-primary'"
          @click="tab = item"
          v-for="item in tabs"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="py-3 px-16 font-bold rounded-3xl capitalize cursor-pointer bg-primary text-white justify-self-end">
        Upload
      </div>
    </div>
    {{ tableData[0] }}
  </div>
</template>
