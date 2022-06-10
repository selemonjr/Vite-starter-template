<script setup>
import { useStore } from "../store/index.js";
const store = useStore();
</script>
<template>
<div class="grid place-items-center">
      <p class="font-bold mt-10 text-xl">{{store.counter}}</p>
  <div class="flex justify-center items-center">
     <button @click="store.increment" class="btn bg-green-500">Increment</button>
      <button @click="store.decrement" class="btn bg-red-500">Decrement</button>
       <button @click="store.reset" class="btn bg-red-500">Reset</button>
  </div>
</div>
</template>