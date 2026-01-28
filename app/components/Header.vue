<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  { label: "НАШІ МАЙСТРИ", to: "#groomers" },
  { label: "НАШІ ПОСЛУГИ", to: "#services" },
  { label: "ПИТАННЯ ТА ВІДПОВІДІ", to: "#faq" },
  { label: "КОНТАКТИ", to: "#contacts" },
]);

const menuUi = {
  link: "group relative w-full flex items-center gap-1.5 uppercase !font-nunito tracking-widest text-lg font-sans !text-accent hover:!text-accent/70 transition-colors",
  linkLeadingIcon: "!text-accent",
  active: "!text-accent after:bg-text-accent",
};
</script>

<template>
  <UHeader
    mode="slideover"
    :ui="{
      root: 'bg-light-accent dark:bg-gray-900 border-none shadow-xl z-50 mx-4 md:mx-8 rounded-full mt-4 transition-all ',
      container: 'px-6 py-3 min-h-[auto] flex items-center justify-between',
      header: 'bg-light-accent border-b border-black/30',
      body: 'bg-light-accent p-6',
      content: 'bg-light-accent',
    }"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/images/logo-black.png"
          alt="The Zvir Logo"
          class="h-10 md:h-12 w-auto object-contain"
        />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" :ui="menuUi" />

    <template #right>
      <UColorModeButton />

      <UButton
        label="Записатись"
        variant="solid"
        class="ml-2 hidden md:block bg-accent hover:bg-accent/50"
        to="https://w1245642.alteg.io"
        target="_blank"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
        :ui="menuUi"
      />
    </template>
  </UHeader>
</template>

<style scoped>
/* Хакаємо колір стандартної іконки бургера і хрестика, бо вони svg */
:deep(.lg\:hidden button) {
  color: white !important;
}
:deep(button[aria-label="Close menu"]) {
  color: white !important;
}
</style>
