<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import BaseLayout from "./components/BaseLayout.vue"
import { ref } from "vue";

let name = ref("Jacky");
</script>

<template>
  <!-- <HelloWorld name="Jacky"/> -->
  <!-- <HelloWorld><h1>{{ name }}</h1></HelloWorld>
  <HelloWorld><h2>{{ name }}</h2></HelloWorld> -->

  <BaseLayout>
    <template v-slot:header>
      <h1>This Header </h1>
    </template>

    <template v-slot:default>
      <p>This is main</p>
    </template>

    <template v-slot:footer>
      <p>This is footer</p>
    </template>

    <!-- <template #header>
      <h1>This Header </h1>
    </template>

    <template #default>
      <p>This is main</p>
    </template>

    <template #footer>
      <p>This is footer</p>
    </template> -->
  </BaseLayout>
</template>
