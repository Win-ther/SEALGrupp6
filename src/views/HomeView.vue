<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
  <header class="bg-old-green p-2 shadow-md flex items-center">
    <img :src="logo" alt="Careta logo icon: Vintage old car" class="size-20"/>
    <h1 class="font-bold text-4xl">CARETA</h1>
  </header>
  <nav class="bg-old-green grid grid-rows-3 gap-0 items-center font-bold">
    <RouterLink class="border-black border-t  text-center p-2" to="/">Home</RouterLink>
    <RouterLink class="border-black border-y text-center p-2" to="/">Rent Cars</RouterLink>
    <RouterLink class="border-black border-b text-center p-2" to="/">Cancel Car</RouterLink>
  </nav>
  <main class="bg-amber-50 p-6 flex flex-col gap-5 ">
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
</main>
  <footer class="bg-old-black p-5 text-center" >
    <p>© Grupp 6</p>
  </footer>
</template>
