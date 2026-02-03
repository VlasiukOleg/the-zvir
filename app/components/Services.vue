<script setup lang="ts">
const services = [
  {
    title: "Візит-Знайомство",
    icon: "i-lucide-heart",
    shortDesc: "Перший грумінг без страху для цуценят.",
    content: {
      subheading:
        "Уявіть перший грумінг без страху. Без тремтіння лапок і великих очей. Саме для цього ми ввели Візит-знайомство для цуценят.",
      list: [
        "До 60 хвилин знайомства з грумером",
        "Малюк вчиться торкатися водички",
        "Слухає звук фену без переляку",
        "Знайомиться з інструментами у формі гри",
        "Досліджує новий простір та людей",
      ],
      footer: "Без примусу. Тільки довіра, гра і спокій.",
    },
  },
  {
    title: "Повний комплекс",
    icon: "i-lucide-sparkles",
    shortDesc: "Стрижка, купання та догляд — усе включено.",
    content: {
      subheading:
        "Уявіть грумінг, після якого хвостик махає, а не ховається. Без стресу, поспіху та «потерпи ще трішки». Це час справжньої турботи.",
      list: [
        "Делікатне купання з преміальною косметикою",
        "Сушіння без різких звуків і перегріву",
        "Повний гігієнічний догляд",
        "Професійна стрижка за стандартом породи",
        "Обов'язкові паузи на відпочинок",
      ],
      footer: "", // Тут футера немає
    },
  },
  {
    title: "Гігієнічний догляд",
    icon: "i-lucide-droplets",
    shortDesc: "Базова турбота для комфорту щодня.",
    content: {
      subheading:
        "Догляд, який не лякає. Базова турбота, яка допомагає улюбленцю почуватися чисто та комфортно щодня.",
      list: [
        "Очищення вушок ніжними засобами",
        "Делікатний догляд за очима",
        "Купання та розчісування шерсті",
        "Акуратне підстригання кігтиків",
        "Гігієна лапок і делікатних зон",
      ],
      footer: "",
    },
  },
  {
    title: "Фарбування",
    icon: "i-lucide-palette",
    shortDesc: "М'який акцент і стиль. Pet-friendly.",
    content: {
      subheading:
        "Стиль та індивідуальність без шкоди для здоров'я. Ми використовуємо лише перевірені методики.",
      list: [
        "Легкі акценти та пастельні відтінки",
        "Креативні елементи за вашим бажанням",
        "Підбір кольору під тип шерсті",
        "Безпечні компоненти без різкого запаху",
      ],
      footer: "Ми використовуємо лише професійні, pet-friendly барвники.",
    },
  },
  {
    title: "SPA-догляд",
    icon: "i-lucide-flower-2",
    shortDesc: "Глибоке відновлення та релакс.",
    content: {
      subheading:
        "Додатковий ритуал краси для максимального відновлення шерсті та релаксації вашого улюбленця.",
      list: [
        "Глибоке очищення та детокс шкіри",
        "Живильні маски та обгортання",
        "Інтенсивне зволоження шерсті",
        "М'який розслабляючий масаж",
        "Спокійне сушіння у комфортному темпі",
      ],
      footer: "",
    },
  },
  {
    title: "Озонотерапія",
    icon: "i-lucide-wind",
    shortDesc: "Здоров'я шкіри та блиск шерсті.",
    content: {
      subheading:
        "Озонотерапія — це цілюща процедура, що м'яко діє на шкіру та покращує загальний стан шерсті.",
      list: [
        "Зменшення свербежу та подразнень",
        "Глибоке очищення пор шкіри",
        "Стимуляція росту та блиску шерсті",
        "Допомога у відновленні захисного бар'єру",
      ],
      footer: "Процедура проходить у форматі теплої ванни з бульбашками.",
    },
  },
];

const { data: serviceList } = await useFetch("/api/services");
</script>

<template>
  <section id="services" class="py-8 md:py-12 bg-beige dark:bg-gray-900">
    <UContainer>
      <div class="text-center mb-12 lg:mb-16">
        <h2
          class="text-3xl md:text-4xl font-black text-[#5d544f] dark:text-white uppercase tracking-tight"
        >
          Наші послуги
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(service, index) in serviceList"
          :key="index"
          class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center h-full"
        >
          <div
            class="w-20 h-20 rounded-2xl bg-light-accent dark:bg-brand-900 text-gray-600 dark:text-brand-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
          >
            <UIcon :name="service.icon" class="w-10 h-10" />
          </div>

          <h3
            class="text-xl font-bold font-montserrat text-gray-800 dark:text-white mb-3"
          >
            {{ service.title }}
          </h3>

          <p
            class="text-gray-500 dark:text-gray-400 text-sm font-wix mb-6 line-clamp-2"
          >
            {{ service.shortDesc }}
          </p>

          <div class="mt-auto">
            <USlideover :title="service.title" :ui="{ footer: 'justify-end' }">
              <span
                class="inline-flex items-center text-accent dark:text-brand-400 font-bold uppercase tracking-wider text-sm group-hover:underline decoration-2 underline-offset-4"
              >
                Дізнатися більше
                <UIcon name="i-lucide-arrow-right" class="ml-2 w-4 h-4" />
              </span>

              <template #body>
                <div class="space-y-6 py-2 font-wix">
                  <p
                    v-if="service.content.subheading"
                    class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
                  >
                    {{ service.content.subheading }}
                  </p>

                  <ul v-if="service.content.list.length" class="space-y-3">
                    <li
                      v-for="(item, i) in service.content.list"
                      :key="i"
                      class="flex items-start gap-3"
                    >
                      <UIcon
                        name="i-lucide-paw-print"
                        class="w-5 h-5 text-accent shrink-0 mt-0.5"
                      />
                      <span class="text-gray-600 dark:text-gray-300">{{
                        item
                      }}</span>
                    </li>
                  </ul>

                  <div
                    v-if="service.content.footer"
                    class="mt-6 p-4 bg-accent/5 rounded-xl border-l-4 border-accent italic text-accent"
                  >
                    {{ service.content.footer }}
                  </div>
                </div>
              </template>
              <template #footer="{ close }">
                <UButton
                  label="ЗАПИСАТИСЯ"
                  size="xl"
                  class="bg-accent hover:bg-accent/50 text-white cursor-pointer"
                  to="https://w1361725.alteg.io"
                  target="_blank"
                />
                <UButton
                  label="Закрити"
                  color="neutral"
                  size="xl"
                  variant="outline"
                  @click="close"
                />
              </template>
            </USlideover>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
