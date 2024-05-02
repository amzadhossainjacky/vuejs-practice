<script setup>
import { ref, reactive } from "vue";

//ref implementation
let cl = ref('white');
let bg = ref('black');

//reactive implementation
let myStyle = reactive({
  color: "blue",
  backgroundColor: "yellow"
})
</script>

<template>
  <div>
    <!-- v binding by style -->
    <h1 v-bind:style="{ color: 'red', backgroundColor: 'green' }">
      Hello World
    </h1>
    <h1 :style="{ color: 'green', backgroundColor: 'red' }">Hello World</h1>

    <!-- v binding by style dynamic -->
    <h1 :style="{ color: cl, backgroundColor: bg }">
      Hello World
    </h1>
    <h1 :style="myStyle">Hello World</h1>
  </div>
</template>
