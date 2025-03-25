<script setup>
import HelloWorld from './components/HelloWorld.vue'; 
import { reactive, ref, computed } from 'vue'

/* let first_name = ref("Amzad")
let last_name = ref("hossain")

let fullName = () => {
  return first_name.value + " " + last_name.value
}

setTimeout(() => {
  return last_name.value = "Jacky"
}, 2000);
 */


let first_name = ref("Amzad")
let last_name = ref("hossain")

/* let fullName = computed(() => {
  console.log("getter called")
  return first_name.value + " " + last_name.value
})

setTimeout(() => {
  console.log("settimeout called")
  return last_name.value = "Jacky"
}, 2000); */

/* writable computed */
const fullName = computed({
  // getter
  get() {
    return first_name.value + ' ' + last_name.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [first_name.value, last_name.value] = newValue.split(' ')
  }
})

setTimeout(() => {
  console.log("settimeout called")
  return fullName.value = "B chowdhury"
}, 2000);
</script>


<template>
  <div>
    <h1>Computed property</h1>
    <!-- <h2>Name: {{ fullName() }}</h2> -->

    <!-- computed example -->
     <h2> Name: {{ fullName }}</h2>
  </div>
</template>

<style scoped>

</style>

