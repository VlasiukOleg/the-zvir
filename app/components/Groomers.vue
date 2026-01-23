<script setup>
const features = [
  {
    icon: "i-lucide-heart",
    title: "Професійний підхід",
    description:
      "У нашому салоні немає «випадкових рук». Кожен дотик — усвідомлений. Кожен рух — з досвідом і любов'ю.",
  },
  {
    icon: "i-lucide-users",
    title: "Різні категорії майстрів",
    description:
      "У нас працюють грумери різних категорій, щоб для кожного улюбленця був свій ідеальний майстер.",
  },
  {
    icon: "i-lucide-award",
    title: "Єдині стандарти",
    description:
      "Усі майстри працюють за єдиними стандартами салону. З любов'ю до тварин. З повагою до їхніх меж. Під контролем якості та з постійним навчанням.",
  },
  {
    icon: "i-lucide-shield-check",
    title: "Безпека та комфорт",
    description:
      "Ви завжди можете обрати категорію майстра — а ми подбаємо, щоб ваш улюбленець був у надійних руках.",
  },
];
</script>

<template>
  <section id="groomers" class="bg-light-beige py-8 md:py-12">
    <UContainer>
      <div class="text-center mb-8 md:mb-12">
        <h2
          class="text-3xl md:text-4xl font-black text-[#5d544f] dark:text-white uppercase tracking-tight"
        >
          Наші майстри
        </h2>
        <p
          class="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Кожен грумер у нашому салоні — це професіонал, який працює з любов'ю
          та повагою до вашого улюбленця
        </p>
      </div>

      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group relative bg-white border-2 border-accent rounded-3xl p-6 hover:border-accent/70 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
        >
          <div
            :class="'inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-light-accent mb-6 group-hover:scale-110 transition-transform duration-300'"
          >
            <UIcon
              :name="feature.icon"
              class="w-8 h-8 lg:w-10 lg:h-10 text-gray-600"
            />
          </div>

          <h3 class="text-lg lg:text-xl font-bold text-gray-800 mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 text-sm lg:text-base leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped></style>
