<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme";
import { computed, ref } from "vue";

const error = useThemeStore().error;

const setLoading = function(val: boolean) {
  useThemeStore().updateLoading(val)
}

const slow = ref(false)

const animateLogo = computed(() => {
  return error ?? true
})

setTimeout(() => {
  slow.value = true
}, 10000);

</script>
<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 bg-background-light dark:bg-background-dark z-[99] flex justify-center items-center">
    <div class="text-center">
      <icon-logo class="h-10 inline" :class="animateLogo ? 'animate-ping' : ''" />
      <p class="mt-20 text-xl text-background-dark dark:text-background-light" v-if="error">
        An error occured: <i class="text-red-600">{{ error }}</i>
      </p>
      <p class="mt-20 text-yellow-500 text-xl" v-else-if="slow">
        Your network connection is slow, please wait...
      </p>
    </div>
  </div>
</template>