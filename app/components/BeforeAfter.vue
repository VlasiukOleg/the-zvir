<script setup lang="ts">
const items = [
  "/images/InstagramPost1.jpg",
  "/images/InstagramPost2.jpg",
  "/images/InstagramPost3.jpg",
  "/images/InstagramPost4.jpg",
  "/images/InstagramPost5.jpg",
  "/images/InstagramPost6.jpg",
  "/images/InstagramPost7.jpg",
  "/images/InstagramPost8.jpg",
  "/images/InstagramPost9.jpg",
  "/images/InstagramPost10.jpg",
  "/images/InstagramPost11.jpg",
  "/images/InstagramPost12.jpg",
  "/images/InstagramPost13.jpg",
  "/images/InstagramPost14.jpg",
  "/images/InstagramPost15.jpg",
  "/images/InstagramPost16.jpg",
  "/images/InstagramPost17.jpg",
  "/images/InstagramPost18.jpg",
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
