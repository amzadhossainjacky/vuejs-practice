<script setup>
import { computed, ref } from "vue";

//without ref
/* let firstname = "Amzad Hossain";
let lastname = "Jacky";

function getName() {
  return firstname + ' ' + lastname;
}

setTimeout(() => {
  firstname = "Md. Amzad Hossain"
}, 3000); */

// with ref
/* let firstname = ref("Amzad Hossain");
let lastname = ref("Jacky") ;

function getName() {
  return firstname.value + ' ' + lastname.value;
}

setTimeout(() => {
  firstname.value = "Md. Amzad Hossain"
}, 3000);
 */

//computed property
let firstname = ref("Amzad Hossain");
let lastname = ref("Jacky") ;

let fullName = computed(() => {
  console.log("Getter");
  return firstname.value + " " + lastname.value;
});

setTimeout(() => {
  firstname.value = 'Md. Amzad Hossain'
}, 3000);
</script>

<template>
  <!-- <h1>Full Name: {{ getName() }}</h1> -->
  <!-- with ref -->
  <!-- <h1>Full Name: {{ getName() }}</h1> -->

  <!-- computed property -->
  <div>
    <h2>Full Name: {{ fullName }}</h2>
    <h2>Full Name: {{ fullName }}</h2>
  </div>
</template>
