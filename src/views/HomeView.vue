<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
  <header class="bg-old-green p-2 shadow-md flex items-center gap-3">
    <RouterLink to="/">
    <img :src="logo" alt="Careta logo icon: Vintage old car" class="w-[120px]"/>
    </RouterLink>
    <h1><span class="font-logo text-4xl">Careta - </span><span class="text-2xl">Rent it like you own it.. return it because you don't!</span> </h1>
  </header>
  <nav class="bg-old-green grid grid-rows-3 gap-0 font-bold items-stretch">
    <RouterLink class="border-black p-2 border-t text-center " to="/">Home</RouterLink>
    <RouterLink class="border-black p-2 border-y text-center" to="/">Rent Cars</RouterLink>
    <RouterLink class="border-black p-2 border-b text-center " to="/">Cancel Car</RouterLink>
  </nav>
  <main class="bg-amber-50 p-6 flex flex-col gap-5 h-auto">
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </main>
  <footer class="bg-old-black p-5 text-center " >
    <p>© Grupp 6</p><br>
    <div class="flex gap-5 justify-center underline text-xs">
    <RouterLink class="border-black text-center " to="/">Home</RouterLink>
    <RouterLink class="border-black text-center" to="/">Rent Cars</RouterLink>
    <RouterLink class="border-black text-center text-" to="/">Cancel Car</RouterLink>
    <a class="border-black text-center text-" href="https://www.youtube.com/watch?v=Eo-g3JkikFc">Full Careta</a>
    </div>
  </footer>
</template>
