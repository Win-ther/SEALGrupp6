<script setup>
import logo from "@/assets/CaretaLogo.png";
import {useRoute} from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <header class="bg-old-green grid grid-rows-1 desktop:flex desktop:gap-3 desktop:justify-start desktop:items-end desktop:pb-1 desktop:pt-3 desktop:pl-4">
    <img :src="logo" alt="Careta logo icon: Vintage old car" class="w-40 m-auto mt-2 mb-2 desktop:m-0"/>

    <nav class="bg-old-green grid grid-rows-3 items-stretch desktop:flex desktop:gap-1 desktop:justify-center">
      <RouterLink
          :class="[isActiveLink('/')?'underline underline-offset-8 bg-button-green':'', 'p-2', 'border-old-black', 'border-t', 'desktop:border-none', 'hover:bg-button-green', 'text-center' ]"
          to="/">Home
      </RouterLink>
      <RouterLink
          :class="[isActiveLink('/rentcareta')?'underline underline-offset-8 bg-button-green':'', 'p-2', 'border-old-black', 'border-y', 'desktop:border-none', 'hover:bg-button-green', 'text-center']"
          to="/rentcareta">Rent a <span class="font-logo font-extrabold ">Careta</span>
      </RouterLink>
      <RouterLink
          :class="[isActiveLink('/cancelcareta')?'underline underline-offset-8 bg-button-green':'', 'p-2 ', 'border-old-black', 'border-b', 'desktop:border-none', 'hover:bg-button-green', 'text-center']"
          to="/cancelcareta">Cancel Reservation
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>

</style>