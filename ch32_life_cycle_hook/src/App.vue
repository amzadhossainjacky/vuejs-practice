<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const showHelloComponent = ref(true)
const count = ref(0)

onBeforeMount(() => {
  console.log("onBeforeMount called - Parent")
})

onMounted(() => {
  console.log("onMounted called - Parent")
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate called - Parent")
})

onUpdated(() => {
  console.log("onUpdated called - Parent")
})

onBeforeUnmount(() => {
  console.log("onBeforeUnmount called - Parent")
})

onUnmounted(() => {
  console.log("onUnmounted called - Parent")
})

</script>

<template>
  <div>
    <h1>Count value: {{ count }}</h1>
    <h1>Parent component</h1>
    <p>
      <HelloWorld v-if="showHelloComponent"/>
      <button @click="showHelloComponent = !showHelloComponent">Hide/Show</button>
      <button @click="count++">Increase</button>
    </p>
  </div>
</template>

<style scoped>

</style>

