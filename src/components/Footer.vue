<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bg-old-black p-5 text-center desktop:fixed desktop:bottom-0 w-full">
    <p class="font-logo text-xl">Careta © Grupp 6</p>
    <br>
    <div class="flex gap-5 justify-center underline text-xs">
      <RouterLink class="text-amber-50" to="/">Home</RouterLink>
      <RouterLink class="text-amber-50" to="/rentcareta">Rent a Careta</RouterLink>
      <RouterLink class="text-amber-50" to="/cancelcareta">Cancel Reservation</RouterLink>
      <a class="text-amber-50" href="https://www.youtube.com/watch?v=Eo-g3JkikFc">Full Careta</a>
    </div>
    </footer>
</template>

<style scoped>

</style>