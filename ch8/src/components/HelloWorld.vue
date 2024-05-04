<script setup>
import { ref } from "vue";

const isActive = ref(true);
const num = ref(6);
const type = ref("A");
</script>

<template>
  <div>
    <!-- if directive -->
    <!-- <h1 > isActive with if directive</h1>
    <h1 v-if="num > 5"> if directive if num ({{ num }}) is greater than 5</h1> -->

    <!-- v if v else if else -->
    <!-- <h1 v-if="type === 'A'"> A</h1>
    <h1 v-else-if="type === 'B'"> B</h1>
    <h1 v-else="type === 'C'"> C for else</h1> -->

    <!-- template exav-if="false"mple for unnecessary example remove -->

    <!-- <template v-if="isActive">
      <h1>Line 1</h1>
      <h1>Line 2</h1>
      <h1>Line 3</h1>
    </template> -->

    <!-- v show example by display none appear -->

    <h1 v-show="false">  V Show </h1>

    

  </div>
</template>
