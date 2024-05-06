<script setup>
import { ref, reactive, computed } from "vue";

//static props
/* let props = defineProps(['fullName']) */
//dynamic props
/* let props = defineProps(['fullName']) */

//computed property

let props = defineProps([
  'firstName', 'lastName'
])

const data = computed(() => props.firstName)

</script>

<template>
  <!-- static props -->
  <!-- <h1>Static Props Name: {{ fullName }}</h1> -->

  <!-- dynamic props -->
  <!-- <h1>Dynamic Props Name: {{ fullName }}</h1> -->
  <h1>Full Name: {{ data }} {{ props.lastName }}</h1>


</template>
