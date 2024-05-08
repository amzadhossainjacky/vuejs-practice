<script setup>
  import HelloWorld from './components/HelloWorld.vue';
  import { onBeforeMount,  onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref} from 'vue'

  const count = ref(0)
  const showHideChildComponent = ref(true)

  onBeforeMount(()=>{
    console.log("onBeforeMount called - Parent")
  })

  onMounted(()=>{
    console.log("onMounted called - Parent")
  })

  onBeforeUpdate(()=>{
    console.log("onBeforeUpdate called - Parent")
  })

  onUpdated(()=>{
    console.log("onUpdated called - Parent")
  })

  onBeforeUnmount(()=>{
    console.log("onBeforeUnmount called - Parent")
  })

  onUnmounted(()=>{
    console.log("onBeforeMount called - Parent")
  })


</script>

<template>
  <h1>Count: {{ count }}</h1>
  <HelloWorld v-if="showHideChildComponent"/>
  <button @click="showHideChildComponent = !showHideChildComponent">Hide/Show</button>
  <button @click="count++">Increase Counter</button>
</template>
