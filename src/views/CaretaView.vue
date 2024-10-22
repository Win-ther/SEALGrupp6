<script setup>

import {onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import VueEasyLightbox from 'vue-easy-lightbox';


const visible = ref(false);
const currentIndex = ref(0);

const id = useRoute().params.id;

const validateForm = () => {
  let dateFrom = state.reservation.dateFrom.split("-");
  let dateTo = state.reservation.dateTo.split("-");
  let today = new Date();
  let dFrom = new Date(`${dateFrom[0]}/${dateFrom[1]}/${dateFrom[2]}`);
  let dTo = new Date(`${dateTo[0]}/${dateTo[1]}/${dateTo[2]}`);

  if (dateFrom[0] < today.getFullYear() ||
      (dateFrom[1] <= today.getMonth() && dateFrom[0] <= today.getFullYear()) ||
      (dateFrom[2] < today.getDate() && dateFrom[1] <= today.getMonth()+1 && dateFrom[0] <= today.getFullYear())) {
    alert("Date From cannot be set before todays date!");
    return false;
  }
  if (Math.round((dTo.getTime()-dFrom.getTime())/(24 * 60 * 60 * 1000)) > 14 ) {
    alert("You can only reserve a car for 14 days straight!");
    return false;
  }
  //return true;
}

const state = reactive({
  car: {},
  reservation: {
    name: '',
    phoneNumber: '',
    email: '',
    dateFrom: '',
    dateTo: '',
    carId: id
  },
  reservationNumber: ''
});

const reserveCar = async () => {
  if (validateForm()) {
    await fetch('http://localhost:8080/api/reservations', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(state.reservation)
    }).then(res => res.json())
        .then(function (data) {
          state.reservationNumber = data
        }).catch(error => console.log('Error adding reservation', error));
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
        <input v-model="state.reservation.name" class="rounded-md shadow-lg py-3 px-1" type="text" name="name"
               id="name">
        <label for="phonenumber">Enter your phonenumber:</label>
        <input v-model="state.reservation.phoneNumber" class="rounded-md shadow-lg py-3 px-1" type="text"
               name="phonenumber" id="phonenumber">
        <label for="email">Enter your email:</label>
        <input v-model="state.reservation.email" class="rounded-md shadow-lg py-3 px-1" type="text" name="email"
               id="email">
        <label for="datefrom">Date From:</label>
        <input v-model="state.reservation.dateFrom" class="rounded-md shadow-lg py-3 px-1" type="date" name="datefrom"
               id="dateFrom">
        <label for="dateto">Date To:</label>
        <input v-model="state.reservation.dateTo" class="rounded-md shadow-lg py-3 px-1" type="date" name="dateto"
               id="dateTo">
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