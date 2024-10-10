<script setup>

</script>
<template>
  <main
      class="bg-amber-100 flex-col pt-5 pb-32
      desktop:border-double desktop:border-amber-950 desktop:shadow-lg desktop:border-4 desktop:my-32 desktop:w-[600px] desktop:h-[460px] desktop:rounded-xl desktop:m-auto">
    <h1 class="text-3xl text-center mt-16">Cancel your reservation</h1>

    <form class="flex-col mt-10">
      <label for="bookingnr" class="flex text-sm justify-center leading-6 mt-5 ">Reservation number:</label>
      <div class="flex justify-center">
        <input id="bookingnr" name="bookingnr" type="text" class="shadow-md rounded-lg p-1 px-7"/>
      </div>
      <article class="m-7">
        <p class="text-zinc-400 text-balance text-center italic text-lg font-light">
          The reservation number consists of 8 characters.
          You can cancel your reservation no later than 48 hours before pick-up.
        </p>
      </article>
      <div class="flex justify-center desktop:mt-10">
        <button type="button"
                class="bg-old-green hover:bg-button-green shadow-md rounded-lg p-1 px-6 mb-16 desktop:py-2 transform transition-transform active:scale-95">
          Submit Cancellation
        </button>
      </div>
    </form>
  </main>
</template>

<style>

</style>
