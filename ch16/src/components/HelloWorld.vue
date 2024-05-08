<script setup>
  let greeting = "Hello Bangladesh"
  import { onBeforeMount,  onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref} from 'vue'

  
  onBeforeMount(()=>{
    console.log("onBeforeMount called - Child")
  })

  onMounted(()=>{
    console.log("onMounted called - Child")
  })

  onBeforeUpdate(()=>{
    console.log("onBeforeUpdate called - Child")
  })

  onUpdated(()=>{
    console.log("onUpdated called - Child")
  })

  onBeforeUnmount(()=>{
    console.log("onBeforeUnmount called - Child")
  })

  onUnmounted(()=>{
    console.log("onBeforeMount called - Child")
  })

</script>

<template>
  <h2>{{ greeting }}</h2>
</template>
