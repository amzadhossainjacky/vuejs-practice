<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
import { ref } from 'vue'

let isActive = ref(true)
let num = ref(5)
let type = ref("A")
</script>

<template>
    <div>
      <h1>Conditional</h1>
      <h1 v-if="isActive"> active is true</h1>
      <!-- <h1 v-if="num === 6"> if number is 5</h1>
      <h1 v-else> if number is not 5</h1> -->
      <h1> v show active</h1> 
    </div>


</template>

<style scoped>

</style>

