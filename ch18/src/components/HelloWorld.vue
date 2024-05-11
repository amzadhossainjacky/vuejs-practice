<script setup>
let greeting = "Hello World";

import { inject } from 'vue'

const website = inject('website')
</script>

<template>
  <div>
    <h1>{{ greeting }}</h1>
    
    <!-- provide and inject -->
    <h1>Website Name: {{ website }}</h1>
    <user />


  </div>
</template>
