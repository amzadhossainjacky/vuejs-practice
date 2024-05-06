<script setup></script>

<template>
  <div>
    <!-- <button @click="$emit('increaseCounter')">Increase</button> -->
    <button @click="$emit('increaseCounter', 11)">Increase</button>
  </div>
</template>
