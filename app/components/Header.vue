<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  { label: "МАЙСТРИ", to: "#groomers" },
  { label: "ПОСЛУГИ", to: "#services" },
  { label: "ПИТАННЯ ТА ВІДПОВІДІ", to: "#faq" },
  { label: "ПЕРЕВТІЛЕННЯ", to: "#results" },
  { label: "КОНТАКТИ", to: "#contacts" },
]);

const menuUi = {
  link: "group relative w-full flex items-center gap-1.5 uppercase !font-nunito tracking-widest text-lg xl:text-base font-sans !text-accent hover:!text-accent/70 transition-colors",
  linkLeadingIcon: "!text-accent",
  active: "!text-accent after:bg-text-accent",
};
</script>

<template>
  <UHeader
    mode="slideover"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/images/logo-black.png"
          alt="The Zvir Logo"
          class="h-10 md:h-12 w-auto object-contain dark:hidden"
        />
        <img
          src="/images/logo-white.png"
          alt="The Zvir Logo"
          class="h-10 md:h-12 w-auto object-contain hidden dark:block"
        />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" :ui="menuUi" class="hidden xl:flex"/>

    <template #right>
      <UColorModeButton />

      <UButton
        label="Записатись"
        variant="solid"
        class="ml-2 hidden md:block bg-accent hover:bg-accent/50"
        to="https://w1361725.alteg.io"
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

<style scoped></style>
