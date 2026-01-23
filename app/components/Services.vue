<script setup lang="ts">
const services = [
  {
    title: "Візит-Знайомство",
    icon: "i-lucide-heart",
    shortDesc: "Перший грумінг без страху для цуценят.",
    description: `Уявіть перший грумінг без страху. Без тремтіння лапок і великих очей.
    Саме для цього ми ввели Візит-знайомство для цуценят.

    До 60 хвилин, де малюк просто вчиться довіряти:
    • торкається водички
    • слухає фен
    • знайомиться з інструментами
    • досліджує простір і людей

    Без примусу. Тільки довіра, гра і спокій.`,
  },
  {
    title: "Повний комплекс",
    icon: "i-lucide-sparkles",
    shortDesc: "Стрижка, купання та догляд — усе включено.",
    description: `Уявіть грумінг, після якого хвостик махає, а не ховається.
    Без стресу. Без поспіху. Без «потерпи ще трішки».

    Повний грумінг-комплекс — це не просто процедури. Це час турботи, уваги й комфорту.

    До комплексу входить:
    • делікатне купання з підібраною косметикою
    • сушіння без різких звуків і перегріву
    • гігієнічний догляд
    • стрижка або оформлення з урахуванням породи й характеру
    • паузи на відпочинок, якщо це потрібно`,
  },
  {
    title: "Гігієнічний догляд",
    icon: "i-lucide-droplets",
    shortDesc: "Базова турбота для комфорту щодня.",
    description: `Уявіть догляд, який не лякає. Без поспіху. Без різких рухів.

    Гігієнічний комплекс — це базова турбота, яка допомагає улюбленцю почуватися комфортно.

    До комплексу входить:
    • очищення вушок ніжними засобами
    • догляд за очима
    • делікатне купання
    • сушіння та розчісування
    • підстригання кігтиків
    • гігієна лапок і делікатних зон`,
  },
  {
    title: "Фарбування",
    icon: "i-lucide-palette",
    shortDesc: "М'який акцент і стиль. Pet-friendly.",
    description: `Без різкого запаху. Без шкоди для шерсті та шкіри.
    
    Окрашування у нашому салоні — це не про «яскраво». Це про стиль, індивідуальність і безпеку.

    • легкі акценти та пастельні відтінки
    • креативні елементи за бажанням
    • підбір кольору під тип шерсті й образ
    
    Ми використовуємо лише професійні, pet-friendly барвники.`,
  },
  {
    title: "SPA-догляд",
    icon: "i-lucide-flower-2", // Змінив на квітку, бо спа
    shortDesc: "Глибоке відновлення та релакс.",
    description: `SPA-догляд — це додаткова процедура для максимального комфорту.

    До SPA-ритуалу входить:
    • глибоке очищення та детокс шкіри
    • живильні маски та обгортання
    • зволоження й відновлення шерсті
    • м'який масаж
    • спокійне сушіння без стресу`,
  },
  {
    title: "Озонотерапія",
    icon: "i-lucide-wind",
    shortDesc: "Здоров'я шкіри та блиск шерсті.",
    description: `Озонотерапія — це процедура для підтримки здоров'я.

    Озон м'яко діє на шкіру:
    • допомагає зменшити свербіж і подразнення
    • підтримує чистоту шкіри
    • сприяє відновленню та зволоженню
    • покращує стан шерсті та її блиск

    Процедура проходить у форматі теплої ванни з бульбашками.`,
  },
];
</script>

<template>
  <section id="services" class="py-8 md:py-12 bg-light-beige dark:bg-gray-900">
    <UContainer>
      <div class="text-center mb-12 lg:mb-16">
        <h2
          class="text-3xl md:text-4xl font-black text-[#5d544f] dark:text-white uppercase tracking-tight"
        >
          Питання та відповіді
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(service, index) in services"
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
            <USlideover :title="service.title">
              <span
                class="inline-flex items-center text-accent dark:text-brand-400 font-bold uppercase tracking-wider text-sm group-hover:underline decoration-2 underline-offset-4"
              >
                Дізнатися більше
                <UIcon name="i-lucide-arrow-right" class="ml-2 w-4 h-4" />
              </span>

              <template #body>
                <Placeholder class="h-full" />
              </template>
            </USlideover>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
