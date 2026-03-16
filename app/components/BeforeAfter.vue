<script setup lang="ts">
const items = [
  "/images/InstagramPost1.webp",
  "/images/InstagramPost2.webp",
  "/images/InstagramPost3.webp",
  "/images/InstagramPost4.webp",
  "/images/InstagramPost5.webp",
  "/images/InstagramPost6.webp",
  "/images/InstagramPost7.webp",
  "/images/InstagramPost8.webp",
  "/images/InstagramPost9.webp",
  "/images/InstagramPost10.webp",
  "/images/InstagramPost11.webp",
  "/images/InstagramPost12.webp",
  "/images/InstagramPost13.webp",
  "/images/InstagramPost14.webp",
  "/images/InstagramPost15.webp",
  "/images/InstagramPost16.webp",
  "/images/InstagramPost17.webp",
  "/images/InstagramPost18.webp",
];
</script>

<template>
  <section id="results" class="py-8 md:py-12 bg-beige dark:bg-gray-900">
    <UContainer>
      <div class="text-center mb-10">
        <h2
          class="text-3xl md:text-4xl font-black text-[#5d544f] dark:text-white uppercase"
        >
          Наші Перевтілення
        </h2>
      </div>

      <UCarousel
        v-slot="{ item }"
        loop
        class-names
        arrows
        dots
        :autoplay="{ delay: 2000 }"
        :items="items"
        :ui="{
          item: 'basis-full sm:basis-[70%] sm:transition-opacity sm:[&:not(.is-snapped)]:opacity-30 lg:basis-1/3 lg:[&:not(.is-snapped)]:opacity-100',
           dots: '-bottom-12 md:-bottom-7',
           prev: 'bg-light-accent',
           next: 'bg-light-accent',
        }"
        class="max-w-sm sm:max-w-md mx-auto md:max-w-lg lg:max-w-4xl xl:max-w-6xl"
      >
        <img :src="item" class="rounded-lg" />
      </UCarousel>
      <div class="mt-12 text-center">
        <p class="text-gray-600 dark:text-gray-400 font-wix italic">
          * На фото продемонстровано реальні результати наших майстрів
        </p>
      </div>
    </UContainer>
  </section>
</template>
