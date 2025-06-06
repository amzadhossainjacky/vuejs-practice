<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
import { ref, onMounted, watchEffect } from 'vue'

const inputRef = ref(null)

/* onMounted(() => {
  // console.log(inputRef.value)
  inputRef.value.focus()
})
 */


//Watch effected called 
watchEffect(() => {
  console.log("watcheffected called")
  if (inputRef.value) {
    
    console.log(inputRef.value)
    inputRef.value.focus()
  } else {
    console.log("not mounted yet, or the element was unmounted (e.g. by v-if)")
  }
})

</script>

<template>
  <div>
    <h1>Template Ref</h1>
    <!-- <p>
      <HelloWorld />
    </p> -->

    <input type="text" ref="inputRef" >
  </div>
</template>

<style scoped>

</style>

