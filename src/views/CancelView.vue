<script setup>
import {reactive} from "vue";

const form = reactive({
  reservationNumber: '',
  reservationCancelled: false,
});

const validateReservationNumber = () => {
  let validateReservationNumber = form.reservationNumber;
  if (validateReservationNumber.length < 9) {
    alert("Reservation number is too short, should be minimum 9 characters");
    return false;
  }
  if (!validateReservationNumber.match(/^[a-zA-Z0-9]+$/)) {
    alert("Reservation numbers can only contain letters and numbers, please enter a valid input.");
    return false;
  }
  return true;
}

const cancelReservation = async () => {
  if (validateReservationNumber()) {
    await fetch("http://localhost:8080/api/delete", {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form.reservationNumber),
    })
        .then(res => res.json())
        .then(function (data) {
          form.reservationCancelled = data;
          if (data === false) {
            alert("No reservation with this reservation number, please try again.")
          }

        }).catch(error => console.log('Error deleting data', error));
    form.reservationNumber = "";
  }
}
</script>

<template>
  <main
      class="bg-old-green bg-opacity-50 flex-col pt-5 pb-32
      desktop:border-amber-950 desktop:shadow-lg desktop:border desktop:my-32 desktop:w-[600px] desktop:h-[460px] desktop:rounded-xl desktop:m-auto">
    <h1 class="text-3xl text-center mt-16">Cancel your reservation</h1>

    <form class="flex-col mt-10">
      <label for="bookingnr" class="flex text-sm justify-center leading-6 mt-5 ">Reservation number:</label>
      <div class="flex justify-center">
        <input v-model="form.reservationNumber" required id="bookingnr" name="bookingnr" type="text"
               class="shadow-md rounded-lg p-1 px-7"/>
      </div>
      <article class="m-7">
        <p v-if="!form.reservationCancelled" class="text-zinc-800 text-balance text-center italic text-lg font-light">
          You can cancel your reservation no later than 48 hours before pick-up.
        </p>
        <p v-if="form.reservationCancelled" class="text-green-800 text-balance text-center text-xl">Your <span
            class="font-logo font-extrabold ">Careta</span> reservation is canceled!</p>
      </article>
      <div class="flex justify-center desktop:mt-10">
        <button type="submit"
                class="bg-hardwood bg-opacity-60 hover:bg-opacity-80 shadow-md rounded-lg p-1 px-6 mb-16 desktop:py-2 transform transition-transform active:scale-95"
                @click.prevent="cancelReservation">
          Submit Cancellation
        </button>
      </div>
    </form>
  </main>
</template>
