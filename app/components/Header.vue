<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  { label: "ПРО НАС", to: "#about" },
  { label: "ПОСЛУГИ", to: "#services" },
  { label: "НАШІ ГРУМЕРИ", to: "#team" },
  { label: "КОНТАКТИ", to: "#contacts" },
]);

const menuUi = {
  link: "group relative w-full flex items-center gap-1.5 uppercase !font-nunito tracking-widest text-lg font-sans !text-white hover:!text-white/70 transition-colors",
  linkLeadingIcon: "!text-white",
  active: "!text-white after:bg-white",
};
</script>

<template>
  <UHeader
    mode="slideover"
    :ui="{
      root: 'bg-brand-400 border-none shadow-xl z-50 mx-4 md:mx-8 rounded-full mt-4 transition-all ',
      container: 'px-6 py-3 min-h-[auto] flex items-center justify-between',
      header: 'bg-brand-400 border-b border-black/30',
      body: 'bg-brand-400 p-6',
      content: 'bg-brand-400',
    }"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center">
        <span
          class="text-brand-950 font-black text-2xl tracking-tighter uppercase leading-none"
        >
          The Zvir
        </span>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" :ui="menuUi" />

    <template #right>
      <UColorModeButton />

      <UButton
        label="Записатись"
        variant="solid"
        class="ml-2 hidden md:block bg-brand-700 hover:bg-brand-800"
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
