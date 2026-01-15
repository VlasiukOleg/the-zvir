<script setup lang="ts">
const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    class="relative min-h-125 md:min-h-150 flex items-center py-8 md:py-12"
  >
    <UContainer>
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div class="relative order-2 md:order-1">
          <img
            src="/images/hero-dog.png"
            alt="Cute dog"
            class="w-full h-auto object-contain max-h-125"
          />
        </div>

        <div class="order-3 text-center">
          <UButton
            label="ЗАПИСАТИСЯ"
            size="xl"
            class="bg-brand-700 hover:bg-brand-800 md:hidden text-white px-12 py-4 font-bold text-xl shadow-xl shadow-[#c59d76]/30 cursor-pointer"
            @click="scrollToBooking"
          />
        </div>

        <div
          class="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left md:space-y-8"
        >
          <h1
            class="text-4xl xl:text-5xl font-black text-[#5d544f] dark:text-gray-300 uppercase leading-[1.3] tracking-tight"
          >
            Ваш вірний супутник<br />
            у світі турботи<br />
            про вихованців
          </h1>

          <UButton
            label="ЗАПИСАТИСЯ"
            size="xl"
            class="bg-brand-700 hover:bg-brand-800 text-white px-12 py-4 font-bold text-xl shadow-xl shadow-[#c59d76]/30 cursor-pointer hidden md:block"
            @click="scrollToBooking"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
