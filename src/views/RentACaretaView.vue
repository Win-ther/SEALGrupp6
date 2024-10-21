<script setup>

import Car from "@/components/Car.vue";
import {onMounted, reactive} from "vue";

const state = reactive({
  cars: [],
});

onMounted(async () => {
  await fetch('http://localhost:8080/api/cars')
      .then(res => res.json())
      .then(function (data) {
        state.cars = data;
      }).catch(error => console.log('Error fetching data', error));
});
</script>

<template>
  <main>
    <section class="p-6 flex flex-col items-center gap-5 desktop:flex-row desktop:flex-wrap desktop:justify-evenly gap-y-10 gap-x-1 my-10">
      <Car v-for="car in state.cars" :key="car.id" :car="car"/>
    </section>
    <h2 class="flex justify-center text-3xl text-center pb-10 italic">
      Rent it like you own it... return it because you don't!
    </h2>
  </main>
</template>
