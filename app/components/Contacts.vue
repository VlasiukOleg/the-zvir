<template>
  <section id="contacts" class="py-8 md:py-12 bg-beige dark:bg-gray-900">
    <UContainer>
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-black font-montserrat text-[#5d544f] dark:text-white uppercase tracking-tight">
          Контакти
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div class="group bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-[2.5rem] border-2 border-transparent hover:border-accent/30 transition-all duration-300">
          <div class="flex flex-col h-full">
            <div class="mb-4">
              <div class="w-14 h-14 bg-light-accent dark:bg-brand-900 text-gray-600 dark:text-brand-300 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                <UIcon name="i-lucide-map-pin" class="w-8 h-8" />
              </div>
              <h3 class="text-xl xl:text-2xl font-black font-montserrat text-[#5d544f] dark:text-gray-300 uppercase mb-4">
                The Звір Приймаченко
              </h3>
              <p class="font-wix text-base md:text-lg text-gray-600 dark:text-gray-400">
                бульвар Марії Приймаченко, 6
              </p>
            </div>

            <div class="mt-auto space-y-4">
              <a 
                href="tel:+380688091742" 
                class="inline-flex items-center gap-4 text-lg md:text-xl font-bold font-wix text-[#5d544f] dark:text-white hover:text-accent transition-colors"
              >
                <UIcon name="i-lucide-phone" class="w-6 h-6 text-accent" />
                +38 (068) 809 17 42
              </a>
              
              <div class="pt-6">
                <UButton
                  label="ПРОКЛАСТИ МАРШРУТ"
                  variant="outline"
                  color="neutral"
                  size="lg"
                  block
                  class="rounded-xl font-bold font-montserrat border-2"
                  to="https://www.google.com/maps/search/?api=1&query=бульвар+Марії+Приймаченко,+6"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="group bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-[2.5rem] border-2 border-transparent hover:border-accent/30 transition-all duration-300">
          <div class="flex flex-col h-full">
            <div class="mb-4">
              <div class="w-14 h-14 bg-light-accent text-gray-600 dark:bg-brand-900 dark:text-brand-300 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                <UIcon name="i-lucide-map-pin" class="w-8 h-8" />
              </div>
              <h3 class="text-xl xl:text-2xl font-black font-montserrat text-[#5d544f] dark:text-gray-300 uppercase mb-4">
                The Звір Тютюнника
              </h3>
              <p class="font-wix text-base md:text-lg text-gray-600 dark:text-gray-400">
                вул. Василя Тютюнника, 56
              </p>
            </div>

            <div class="mt-auto space-y-4">
              <a 
                href="tel:+380933859331" 
                class="inline-flex items-center gap-4 text-lg md:text-xl font-bold font-wix text-[#5d544f] dark:text-white hover:text-accent transition-colors"
              >
                <UIcon name="i-lucide-phone" class="w-6 h-6 text-accent" />
                +38 (093) 385 93 31
              </a>

              <div class="pt-6">
                <UButton
                  label="ПРОКЛАСТИ МАРШРУТ"
                  variant="outline"
                  color="neutral"
                  size="lg"
                  block
                  class="rounded-xl font-bold font-montserrat border-2"
                  to="https://www.google.com/maps/search/?api=1&query=вул+Василя+Тютюнника+56"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>