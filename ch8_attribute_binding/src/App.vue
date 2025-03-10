<script setup>
import HelloWorld from './components/HelloWorld.vue'; ''
const myid = "myid1"
const myid2 = "myid2"
const url = "https://www.google.com/"
const isDisabled = true
</script>

<template>
  <div>
    <h1 v-bind:id="myid">Attribute Binding </h1>
    <h1 :id="myid2">Attribute Binding </h1>
    <a v-bind:href="url">Google </a>
    <br>
    <button v-bind:disabled="isDisabled"> click</button>
    <p>
      <HelloWorld />
    </p>
  </div>
</template>

<style scoped>

</style>

