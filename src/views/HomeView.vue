<script setup>
import Car from "@/components/Car.vue";
</script>

<template>
  <main
      class="bg-amber-50">
    <section class="p-6 flex flex-col items-center gap-5 desktop:flex-row desktop:justify-evenly overflow-x-scroll">
      <Car/>
      <Car/>
      <Car/>
    </section>
  </main>
</template>
