<script setup>
const msg = "Hello Child Component"

import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

onBeforeMount(() => {
  console.log("onBeforeMount called - child")
})

onMounted(() => {
  console.log("onMounted called - child")
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate called - child")
})

onUpdated(() => {
  console.log("onUpdated called - child")
})

onBeforeUnmount(() => {
  console.log("onBeforeUnmount called - child")
})

onUnmounted(() => {
  console.log("onUnmounted called - child")
})

</script>

<template>
    <div>
        <h1> {{ msg }} </h1>
    </div>
</template>

<style scope>

</style>