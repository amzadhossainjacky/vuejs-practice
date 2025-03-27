<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
import { ref } from 'vue'

const count = ref(0)

function increaseCount() {
  console.log('increaseCount')
  count.value = count.value + 1
}
</script>

<template>
  <div>
    <h1>Component Event</h1>
    <h1>Count: {{ count }}</h1>
  <!-- <HelloWorld @countByEvent="count++"/> -->

  <HelloWorld @countByEvent="increaseCount"/>
  </div>
</template>

<style scoped>

</style>

