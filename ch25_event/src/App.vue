<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
import { ref } from 'vue'

let count = ref(0)

</script>

<template>
  <div>
    <h1>Event Handler</h1>
    <h1>Count: {{ count }}</h1>
    <!-- <button v-on:click="count++">Click</button> -->
    <button @click="count++">Click</button>
    <button @click="count--">Decrease</button>
  </div>
</template>

<style scoped>

</style>

