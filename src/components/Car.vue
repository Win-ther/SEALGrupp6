<script setup>
const props = defineProps({
  car: Object,
})
</script>

<template>
  <main class="bg-hardwood bg-opacity-60 flex flex-col items-center min-w-[350px] desktop:min-w-96 shadow-lg rounded-lg pb-5">
    <img :src="props.car.image"
         alt="Car Image"
         class="w-80 desktop:w-[340px] h-52 shadow-md rounded-lg mt-5"/>
    <span class="price text-lg text-white mt-5 z-0 relative bottom-[55px] left-28 bg-gray-600 bg-opacity-50 rounded-md">
      &nbsp;<i class="bi bi-currency-euro text-sm"></i>
      {{props.car.price}}<span class="text-sm">/day&nbsp;&nbsp;</span>
    </span>
    <h1 class="font-bold -mt-9 text-2xl">{{ props.car.model }}</h1>
    <section class="grid grid-cols-2 gap-y-2 gap-x-12 place-self-start self-center mt-3">
      <span class=""><i class="bi bi-arrow-counterclockwise"></i> {{ props.car.popularity }}</span>
      <span class=""><i class="bi bi-people-fill"></i> {{ props.car.seats }}</span>
      <span class=""><i class="bi bi-joystick"></i> {{ props.car.transmission }}</span>
      <span class=""><i class="bi bi-fuel-pump-fill"></i> {{ props.car.fuel }}</span>
    </section>
  </main>
</template>

<style scoped>
.price{
  text-shadow: 1px 1px 2px black;
}
</style>