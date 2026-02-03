<script setup lang="ts">
const { data: apiData } = await useFetch("/api/services");

const serviceList = ref(
  apiData.value?.map((service: any) => ({ ...service, isOpen: false })) || [],
);

watch(apiData, (newData) => {
  if (newData) {
    serviceList.value = newData.map((service: any) => ({
      ...service,
      isOpen: false,
    }));
  }
});
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
          @click="service.isOpen = true"
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
            <USlideover
              v-model:open="service.isOpen"
              :title="service.title"
              :ui="{ footer: 'justify-end' }"
            >
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
                      <span
                        class="text-gray-600 dark:text-gray-300 text-left"
                        >{{ item }}</span
                      >
                    </li>
                  </ul>

                  <div
                    v-if="service.content.footer"
                    class="mt-6 p-4 bg-accent/5 rounded-xl border-l-4 border-accent italic text-accent text-left"
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
