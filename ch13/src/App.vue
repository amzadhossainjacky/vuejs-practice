<script setup>
  import HelloWorld from './components/HelloWorld.vue';
  import { ref } from 'vue';
  
  let count = ref(0)

  function increaseCounter(){
    return count.value++ 
  }

</script>

<template>
  <h1>Count: {{ count }}</h1>
  
  <!-- <button @click="count++"> Increase</button> -->
  <!-- <HelloWorld @increaseCounter="count++" /> -->
  <!-- <HelloWorld @increaseCounter="increaseCounter" /> -->

  <!-- increase by 11 -->
  <HelloWorld @increaseCounter="(n)=>(count = count+n)" />
</template>
