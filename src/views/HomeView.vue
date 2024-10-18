<script setup>
import Car from "@/components/Car.vue";
import {computed, onMounted, reactive} from "vue";

const state = reactive({
  cars: [],
});

const mostPopularThree = computed( () => {
  return state.cars.sort((a, b) => {
    if (a.popularity < b.popularity) return 1;
    if (a.popularity > b.popularity) return -1;
    return 0;
  }).slice(0,3);
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
    <h1 class="flex justify-center mt-4 text-4xl desktop:text-4xl text-center py-5"><span>Our most popular <span class="font-logo font-extrabold">Caretas!</span></span></h1>
    <section class="p-6 flex flex-col items-center gap-5 desktop:flex-row desktop:justify-evenly desktop:overflow-x-auto">
      <Car v-for="car in mostPopularThree" :key="car.id" :car="car"/>
    </section>
  </main>
</template>
