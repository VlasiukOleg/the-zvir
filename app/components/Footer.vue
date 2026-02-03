<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Політика конфіденційності",
    to: "/",
    target: "_blank",
  },
];

const colorMode = useColorMode();

const colorModeLogoPath = computed(() => colorMode.value === 'light' ? '/images/logo-black.png' : '/images/logo-white.png')
</script>

<template>
  <UFooter
    :ui="{
      root: 'border-t border-gray-200 dark:border-gray-500 bg-light-beige dark:bg-gray-900',
      bottom: 'sm: py-4',
    }"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center">
        <img
          :src="colorModeLogoPath"
          alt="The Zvir Logo"
          class="h-10 md:h-12 w-auto object-contain"
        />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" />
    <template #right>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>
  </UFooter>
</template>
