<script setup>

import {onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import VueEasyLightbox from 'vue-easy-lightbox';

const state = reactive({
  car: Object,
  reservation: {
    name: String,
    phoneNumber: String,
    email: String,
    dateFrom: Date,
    dateTo: Date,
    carId: Number
  }
});

const visible = ref(false);
const currentIndex = ref(0);

const id = useRoute().params.id;

const validateForm = () =>{

}

const reserveCar = async () => {
  if(validateForm()){
    await fetch('http://localhost:8080/api/reservations', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({})
    })
  }
}

onMounted(async () => {
  await fetch(`http://localhost:8080/api/cars/${id}`)
      .then(res => res.json())
      .then(function (data) {
        state.car = data;
      }).catch(error => console.log('Error fetching data', error));
});
</script>

<template>
  <main class="flex flex-col pb-14 desktop:flex-row desktop:mt-5">
    <section class="flex flex-col items-center text-center mt-10 desktop:w-[800px] desktop:m-auto desktop:mt-10">
      <img :src="state.car.image"
           alt="Car Image"
           class="w-80 desktop:w-[500px] desktop:h-[350px] shadow-md rounded-lg border-2 border-black"/>
      <h1 class="text-2xl italic mt-3">{{ state.car.model }}</h1>
      <span class="price text-lg text-white mt-5 z-0 bg-gray-600 bg-opacity-50 rounded-md">
      &nbsp;<i class="bi bi-currency-euro text-sm"></i>
      {{ state.car.price }}<span class="text-sm">/day&nbsp;&nbsp;</span>
    </span>
      <section class="grid grid-cols-2 gap-y-2 gap-x-12 place-self-start self-center mt-3">
        <span class=""><i class="bi bi-arrow-counterclockwise"></i> {{ state.car.popularity }}</span>
        <span class=""><i class="bi bi-people-fill"></i> {{ state.car.seats }}</span>
        <span class=""><i class="bi bi-joystick"></i> {{ state.car.transmission }}</span>
        <span class=""><i class="bi bi-fuel-pump-fill"></i> {{ state.car.fuel }}</span>
      </section>
      <span class="mt-5 mb-5 mx-2 text-pretty desktop:text-lg italic"> {{ state.car.about }}</span>
    </section>
    <section class="w-full desktop:w-[600px] desktop:mt-5 desktop:m-auto">
      <form class="flex flex-col gap-2 bg-old-black bg-opacity-35 rounded-md p-5 shadow-lg  text-xl">
        <label for="name">Enter your name:</label>
        <input v-bind=""class="rounded-md shadow-lg py-3 px-1" type="text" name="name" id="name">
        <label for="phonenumber">Enter your phonenumber:</label>
        <input class="rounded-md shadow-lg py-3 px-1" type="text" name="phonenumber" id="phonenumber">
        <label for="email">Enter your email:</label>
        <input class="rounded-md shadow-lg py-3 px-1" type="text" name="email" id="email">
        <label for="datefrom">Date From:</label>
        <input class="rounded-md shadow-lg py-3 px-1" type="date" name="datefrom" id="name">
        <label for="dateto">Date To:</label>
        <input class="rounded-md shadow-lg py-3 px-1" type="date" name="dateto" id="name">
        <button type="submit"
                class="bg-hardwood bg-opacity-60 hover:bg-opacity-80 shadow-md rounded-lg py-3 mt-5 desktop:py-2 transform transition-transform active:scale-95 desktop:mt-10"
                @click.prevent="reserveCar">
          Reserve <span class="font-logo font-extrabold">Careta</span>
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>

</style>