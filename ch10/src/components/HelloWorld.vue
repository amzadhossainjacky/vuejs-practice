<script setup>
/*  Inline handler */
import { ref } from "vue";
let count = ref(0);

function increase(){
  return count.value++;
}

</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <!-- <button v-on:click="count++">Increase</button>
    <button @click="count--">Decrease</button> -->

    <!-- methods call -->
    <button @click="increase()">Increase by methods</button>


  </div>
</template>
