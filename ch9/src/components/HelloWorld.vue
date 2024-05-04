<script setup>
import { ref, reactive, computed } from "vue";

let employees = ref([
  {
    name: "Jacky",
    salary: 25000,
  },
  {
    name: "Mehedi",
    salary: 30000,
  },
]);
</script>

<template>
  <div
    v-for="(employee, i) in employees"
    :key="'employee_info_' + i"
    v-bind:id="'employee_info_' + i"
  >
      <h1>Name: {{ employee.name }}</h1>
      <h1>Salary: {{ employee.salary }}</h1>
  </div>
</template>
