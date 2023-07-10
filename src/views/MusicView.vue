<template>
  <div class="">
    <div class="h-screen bg-background-light dark:bg-background-dark relative flex items-center">
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-50% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-8xl font-mono uppercase">Music</h1>
          <p class="md:w-1/2 text-primary text-3xl mt-5">
            This section contains the amazing musical compositions of Paul Bowles, encompassing a
            lot of genres.
          </p>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 mt-8 md:mt-16">
          <a
            href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-background-dark dark:border-white-shade hover:opacity-75"
          >
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img
        src="@/assets/imgs/imagehero-4.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <div class="p-5 lg:px-16 2xl:px-20 lg:text-2xl lg:py-20 mb-20">
      <a name="content" />
      Paul Bowles wrote music that encompassed a broad variety of genres, including scores for
      theater, opera, ballet, and chamber music; soundtracks for art films; piano compositions and
      experimental sound recordings, particularly those of a style often referred to as musique
      concrète.
    </div>
  </div>
</template>
