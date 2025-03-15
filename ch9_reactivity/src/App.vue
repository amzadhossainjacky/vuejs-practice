<script setup>
import { reactive, ref } from 'vue'
/* without reactivity */
/* let num = {
  a : 10,
  b : 30
}

setTimeout(() => {
  console.log(num)
  num.a = 30

  console.log("a: ", num.a)
}, 2000) */

/* with reactivity */

/* let num = reactive({
  a : 10,
  b : 30
})

setTimeout(() => {
  // return as a proxy 
  console.log(num)
  num.a = 30

  console.log("a: ", num.a)
}, 2000) */

// ref with reactivity


let obj = ref({
  count: 5
})

setTimeout(() => {
  // return as a ref implementation 
  console.log(obj)
  console.log(obj.value)
  console.log(obj.value.count)
  obj.value.count++
  console.log(obj.value.count)
}, 2000)

</script>

<template>
  <div>
    <h1>Reactivity Example or ref example</h1>
    <!-- <h2>Sum: a + b = {{ num.a + num.b }}</h2> -->
     <h3>Count: {{ obj.count }}</h3>
  </div>
</template>

<style scoped>

</style>

