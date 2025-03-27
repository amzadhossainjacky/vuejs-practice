<script setup>
import HelloWorld from './components/HelloWorld.vue'; 

import { ref } from 'vue'

const fullName = ref('jacky')
</script>


<template>
  <div>
    <h1>Props</h1>
    <p>
      <!-- <HelloWorld fullName="jacky"/> -->

      <!-- dynamic props -->
      <HelloWorld :fullName="fullName"/>
    </p>
  </div>
</template>

<style scoped>

</style>

