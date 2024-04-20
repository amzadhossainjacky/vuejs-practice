<script setup>
  import { ref } from 'vue';

  //let count = ref()
  // setTimeout(() => {
  //   count.value = 30
  // }, 3000);

  // with ref
  /* let result = {
    count: ref(5)
  }

  setTimeout(() => {
    console.log(result.count.value)
  }, 300); */

  //
  let result = {
    count: ref(5)
  };

  let { count } = result;

  setTimeout(() => {
    console.log(count)

   // count.value = count.value + 3;
   result.count.value = result.count.value + 3;
    
    console.log(count)
  }, 3000);



</script>

<template>
  <!-- <h1> Count:{{  count }}</h1> -->
  <h1> Count:{{ count }}</h1>
</template>
