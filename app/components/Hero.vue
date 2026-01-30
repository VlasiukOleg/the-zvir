<script setup lang="ts">
const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    class="relative min-h-125 md:min-h-150 flex items-center py-8 md:py-12 bg-beige"
  >
    <UContainer>
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div class="relative order-2 md:order-1 flex justify-center">
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-accent/10 rounded-full blur-3xl -z-10"
          ></div>

          <div
            class="relative w-[320px] h-[320px] md:w-100 md:h-100 rounded-full overflow-hidden border-[6px] border-accent/30 shadow-2xl shadow-accent/20 bg-white/50 backdrop-blur-sm z-10 lg:ml-10"
          >
            <video
              src="/video/zvir-hero.MOV"
              autoplay
              loop
              muted
              playsinline
              class="w-full h-full object-cover object-center"
            >
              Ваш браузер не підтримує відео.
            </video>
          </div>
        </div>

        <div class="order-3 text-center">
          <UButton
            label="ЗАПИСАТИСЯ"
            size="xl"
            class="bg-accent hover:bg-accent/50 md:hidden text-white px-12 py-4 font-bold text-xl shadow-xl shadow-[#c59d76]/30 cursor-pointer"
            to="https://w1245642.alteg.io"
            target="_blank"
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
            class="bg-accent hover:bg-accent/50 text-white px-12 py-4 font-bold text-xl shadow-xl shadow-[#c59d76]/30 cursor-pointer hidden md:block"
            to="https://w1361725.alteg.io"
            target="_blank"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
