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
  <section class="flex-col bg-old-black bg-opacity-35 text-center items-center h-[330] desktop:py-10 font-mono italic p-4 text-pretty">
    <h1 class="mb-4 text-xl desktop:mx-32">Experience the Charm of a Bygone Era with Our Vintage Car Rentals!</h1>
    <p class="desktop:mx-32">
      Add timeless elegance to your special moments with our exclusive vintage car collection.
      Whether it’s a road trip, wedding, photoshoot, or event, our beautifully restored classics will elevate any occasion.
      Choose from sleek retro rides and iconic models that bring adventure and nostalgia to life.
      Make your journey as memorable as the destination!
    </p>
  </section>
  <main class="pb-10 flex flex-col flex-grow">
    <h2 class="flex justify-center mt-4 text-3xl text-center py-5">
      <span>Our most popular <span class="font-logo font-extrabold">Caretas!</span></span>
    </h2>
    <section class="p-6 flex flex-col items-center gap-5 desktop:flex-row desktop:justify-evenly desktop:overflow-x-auto">
      <Car v-for="car in mostPopularThree" :key="car.id" :car="car"/>
    </section>
  </main>
</template>
