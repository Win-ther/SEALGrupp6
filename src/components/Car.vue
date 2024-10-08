<script setup>

</script>

<template>
  <main class="bg-old-peach flex flex-col items-center min-w-96 shadow-lg rounded-lg pb-5">
    <img src="https://driveshare.com/files/car_images/8550/1682265181_php6445545d87fb2.jpg.full.jpg?t=1682360775"
         alt="Car Image"
         class="w-80 shadow-md rounded-lg mt-5"/>
    <span class="price text-lg text-white mt-5 z-0 relative bottom-[55px] left-28 bg-gray-600 bg-opacity-50 rounded-md">
      &nbsp;<i class="bi bi-currency-euro text-sm"></i>400<span class="text-sm">/day&nbsp;&nbsp;</span>
    </span>
    <h1 class="font-bold -mt-9 text-2xl">1967 Ford Mustang</h1>
    <section class="grid grid-cols-2 gap-y-2 gap-x-12 place-self-start self-center mt-3">
      <span class=""><i class="bi bi-arrow-counterclockwise"></i> 500 Rentals</span>
      <span class=""><i class="bi bi-people-fill"></i> 4 Seats</span>
      <span class=""><i class="bi bi-joystick"></i> Automat</span>
      <span class=""><i class="bi bi-fuel-pump-fill"></i> 95 Gasoline</span>
    </section>
  </main>
</template>

<style scoped>
.price{
  text-shadow: 1px 1px 2px black;
}
</style>