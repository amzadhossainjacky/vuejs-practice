<script setup>
import User from "./components/User.vue";
import { ref, provide } from 'vue'

const count = ref(0)
provide('key', count)

</script>

<template>
  <User />
</template>
