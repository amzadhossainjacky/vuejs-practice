<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
import { reactive } from 'vue';

/* reactive object */

const styleObj = reactive({
  color: 'red',
  backgroundColor: 'yellow'
})
const myStyleObj = reactive({
  fontSize: "50px" 
})

</script>

<template>
  <div>
    <h1 style="color: red; background: black;">Style 1</h1>
    <h1 :style="{ color: 'white', backgroundColor: 'green'}">Style Binding 2</h1>
    <h1 :style="styleObj">Style Binding 3</h1>
    <h1 :style="[styleObj, myStyleObj]">Style Binding 4</h1>
  </div>
</template>

<style scoped>

</style>

