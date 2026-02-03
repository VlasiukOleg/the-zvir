<template>
  <section class="py-8 md:py-16 bg-white dark:bg-gray-900 min-h-screen">
    <UContainer>
      <UBreadcrumb
        :links="[
          { label: 'Головна', to: '/' },
          { label: 'Політика конфіденційності' },
        ]"
        class="mb-8"
      />

      <div class="max-w-4xl mx-auto prose dark:prose-invert font-wix">
        <h1
          class="text-accent text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-tight"
        >
          ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ
        </h1>

        <div class="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Управління сайтом
            <NuxtLink to="/" class="text-accent underline"
              >https://thezvir.com.ua/</NuxtLink
            >
            здійснюється адміністратором сайту (далі за текстом разом іменуються
            – Виконавець). Ця Політика конфіденційності та захисту персональних
            даних (надалі – «Політика») є невід’ємною частиною публічного
            договору.
          </p>

          <h2
            class="text-accent text-xl font-bold uppercase tracking-wide mt-8"
          >
            Збір та використання персональних даних
          </h2>
          <p>
            Власником та розпорядником персональних даних Замовників
            (користувачів) Сайту є адміністратор сайту.
          </p>

          <h2
            class="text-accent text-xl font-bold uppercase tracking-wide mt-8"
          >
            Які дані отримує Виконавець
          </h2>
          <p>Виконавець отримуватиме у Замовника наступні персональні дані:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>1. Прізвище, ім’я, по-батькові;</li>
            <li>2. Адреса електронної пошти;</li>
            <li>3. Номер телефону;</li>
            <li>4. Файли cookie;</li>
            <li>5. IP-адреси.</li>
          </ul>

          <h2
            class="text-accent text-xl font-bold uppercase tracking-wide mt-8"
          >
            Використання файлів cookie
          </h2>
          <p>
            Cookie – це текстовий файл або файли, що містять невеликий обсяг
            інформації, які надсилаються веб-браузеру і зберігаються на пристрої
            користувача.
          </p>

          <h2
            class="text-accent text-xl font-bold uppercase tracking-wide mt-8"
          >
            Захист персональних даних
          </h2>
          <p>
            Виконавець використовує загальноприйняті стандарти технологічного та
            операційного захисту інформації від втрати, неправильного
            використання, зміни або знищення.
          </p>

          <h2
            class="text-accent text-xl font-bold uppercase tracking-wide mt-8"
          >
            Контакти
          </h2>
          <p>
            З питань обробки персональних даних ви можете звернутися за адресою:
            <strong class="text-accent">thezvir@gmail.com</strong>
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Додаємо мета-теги для SEO
useHead({
  title: "Політика конфіденційності | The Zvir",
  meta: [
    {
      name: "description",
      content:
        "Політика конфіденційності та захисту персональних даних студії грумінгу The Zvir",
    },
  ],
});
</script>
