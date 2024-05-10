<script setup>

let url = "https://jsonplaceholder.typicode.com/todos/1"
import { useFetch } from '@/composables/fetch.js';
const { data, error } = useFetch(url)

</script>

<template>

 <div>
    <div v-if="error">Ops: {{ error }}</div>
    <div v-else-if="data">
        <pre>{{ data }}</pre>
    </div>
    <div v-else > Loading...</div>
   
 </div>
  
</template>
