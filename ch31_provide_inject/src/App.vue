<script setup>
import User from './components/User.vue'; 
import {provide} from 'vue'

provide('name', "jacky")
</script>

<template>
  <div>
    <h1>App:</h1>
     <!--  <User name="Props pass from app vue"/> -->
     <User />
  </div>
</template>

<style scoped>

</style>

