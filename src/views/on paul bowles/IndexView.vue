<script lang="ts" setup></script>
<template>
  <div class="">
    <div class="h-screen bg-background-light dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-50% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 mt-24 lg:px-16 2xl:px-20">
          <h1 class="text-5xl md:text-8xl font-mono uppercase">on paul bowles</h1>
          <p class="md:w-2/3 text-primary text-3xl mt-5">
            Highsmith, Williams, Ginsberg, Burroughs, Purdy, Vidal and Rey Rosa on Paul Bowles.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 mt-5">
          <a
            href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75"
          >
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img
        src="@/assets/imgs/paul-bowles.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <a name="content" />
    <div class="px-5 py-10 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <router-link to="/paul-bowles/patricia-highsmith" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/Patricia-Highsmith.png" class="w-full h-auto" alt="Patricia Highsmith" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">a north african encounter - Patricia Highsmith</h3>
      </router-link>
      <router-link to="/paul-bowles/tennessee-williams" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/Tennessee-Williams.png" class="w-full h-auto" alt="Tennessee Williams" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">
          an allegory of man and his sahara - Tennessee Williams
        </h3>
      </router-link>
      <router-link to="/paul-bowles/william-burroughs" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/William-Burroughs.png" class="w-full h-auto" alt="William S. Burroughs" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">
          William S. Burroughs
        </h3>
      </router-link>
      <router-link to="/paul-bowles/gore-vidal" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/Gore-Vidal.png" class="w-full h-auto" alt="Gore Vidal" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">
          Gore Vidal
        </h3>
      </router-link>
      <router-link to="/paul-bowles/allen-ginsberg" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/Allen-Ginsberg.png" class="w-full h-auto" alt="Allen Ginsberg" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">
          Allen Ginsberg
        </h3>
      </router-link>
      <router-link to="/paul-bowles/james-purdy" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/James-Purdy.png" class="w-full h-auto" alt="James Purdy" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">
          James Purdy
        </h3>
      </router-link>
      <router-link to="/paul-bowles/rey-rosa" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/Rey-Rosa.png" class="w-full h-auto" alt="Rodrigo Rey Rosa" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">
          Bowles and i - Rodrigo Rey Rosa
        </h3>
      </router-link>
      <router-link to="/paul-bowles/the-economist-obituary" class="rounded-3xl bg-white dark:bg-[#17142B] p-2">
        <img src="@/assets/imgs/Paul-Bowles-obituary.png" class="w-full h-auto" alt="Paul Bowles obituary via The Economist" />
        <h3 class="capitalize text-3xl font-mono text-background-dark dark:text-background-light p-5">
          the economist - obituary
        </h3>
      </router-link>
    </div>
  </div>
</template>