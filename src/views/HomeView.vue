<script setup>
import logo from '@/assets/CaretaLogo.png'
import {useRoute} from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <header
      class="bg-old-green grid grid-rows-1 desktop:flex desktop:gap-3 desktop:justify-start desktop:items-end desktop:pb-1 desktop:pt-3 desktop:pl-4">

      <img :src="logo" alt="Careta logo icon: Vintage old car" class="w-40 m-auto mt-2 mb-2 desktop:m-0"/>

    <nav class="bg-old-green grid grid-rows-3 items-stretch desktop:flex desktop:gap-1 desktop:justify-center">
      <RouterLink
          :class="[isActiveLink('/')?'underline underline-offset-8 bg-button-green':'', 'p-2', 'border-old-black', 'border-t', 'desktop:border-none', 'hover:bg-button-green', 'text-center' ]"
          to="/">Home
      </RouterLink>
      <RouterLink
          :class="[isActiveLink('/rentcars')?'underline underline-offset-8 bg-button-green':'', 'p-2', 'border-old-black', 'border-y', 'desktop:border-none', 'hover:bg-button-green', 'text-center']"
          to="/">Rent a Careta
      </RouterLink>
      <RouterLink
          :class="[isActiveLink('/cancelcar')?'underline underline-offset-8 bg-button-green':'', 'p-2 ', 'border-old-black', 'border-b', 'desktop:border-none', 'hover:bg-button-green', 'text-center']"
          to="/">Cancel Reservation
      </RouterLink>
    </nav>
  </header>
  <main class="bg-amber-50 p-6 flex flex-col gap-5 h-auto">
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum."</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum."</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum."</p>
  </main>
  <footer class="bg-old-black p-5 text-center ">
    <p>Careta © Grupp 6</p><br>
    <div class="flex gap-5 justify-center underline text-xs">
      <RouterLink class="border-black text-center " to="/">Home</RouterLink>
      <RouterLink class="border-black text-center" to="/">Rent a Careta</RouterLink>
      <RouterLink class="border-black text-center text-" to="/">Cancel Reservation</RouterLink>
      <a class="border-black text-center text-" href="https://www.youtube.com/watch?v=Eo-g3JkikFc">Full Careta</a>
    </div>
  </footer>
</template>
