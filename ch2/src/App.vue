
<!-- text interpolation -->
<script setup>

const num = 20;
function disp() {
  return "Print display";
}
</script>

<template>
  <h1>Hello World</h1>
  <h1>{{ 20 + 2 }}</h1>
  <h1>{{ num }}</h1>
  <h1>{{ num +1 }}</h1>
  <h1>{{ disp() }}</h1>
</template>

  