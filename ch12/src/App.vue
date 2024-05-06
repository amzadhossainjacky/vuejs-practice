<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, reactive, computed } from "vue";

/* let fullName = ref("Md. Amzad Hossain"); */

let firstName = ref("Naim")
let lastName = ref("Jacky")


setInterval(() => {
  firstName.value = 'khalid'
}, 3000);
</script>

<template>
  <!-- static props -->
  <!-- <HelloWorld  fullName="Md. Amzad Hossain Jacky"/> -->

  <!-- dynamic props with cabab case -->
  <!-- <HelloWorld :full-name="fullName" /> -->


  <HelloWorld :firstName="firstName" :lastName="lastName" />



</template>
