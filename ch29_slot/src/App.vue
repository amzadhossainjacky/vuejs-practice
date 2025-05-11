<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import BaseLayout from "./components/BaseLayout.vue";
</script>

<template>
  <div>
    <h1>Slot</h1>
    <!-- <p>
      <HelloWorld name="Jacky">
        <h1>Amzad Hossain</h1>
        <h3>Khalid Hasan</h3>
      </HelloWorld >
    </p> -->

    <!-- Name slot -->

    <!-- <BaseLayout>
      <template v-slot:header>
        <h1>This is header</h1>
      </template>  

      <template v-slot:main>
        <h1>This is main</h1>
      </template>  

      <template v-slot:footer>
        <h1>This is footer</h1>
      </template>  
    </BaseLayout> -->

    <!-- Name with short hand  -->
    <!-- <BaseLayout>
      <template #header>
        <h1>This is header</h1>
      </template>  

      <template #main>
        <h1>This is main</h1>
      </template>  

      <template #footer>
        <h1>This is footer</h1>
      </template>  
    </BaseLayout> -->

    <!-- <BaseLayout>
      <template #header>
        <h1>This is header</h1>
      </template>  

      <h1>This is main</h1>

      <template #footer>
        <h1>This is footer</h1>
      </template>  
    </BaseLayout> -->

    <!-- <HelloWorld v-slot="slotProps">
      <h1>Name: {{ slotProps.nm }}</h1>
      <h3>Age: {{ slotProps.age }}</h3>
    </HelloWorld> -->

    <!-- <HelloWorld>
      <template v-slot:header="slotProps">
        <h1>Name: {{ slotProps.nm }}</h1>
      <h3>Age: {{ slotProps.age }}</h3>
      </template>
    </HelloWorld> -->

    <BaseLayout>
      <template #header="headerSlotProps">
        <h1>This is header {{ headerSlotProps.hnm }}</h1>
      </template>  

      <template #main="mainSlotProps">
        <h1>This is main {{ mainSlotProps.mnm }}</h1>
      </template>

      <template #footer="footerSlotProps">
        <h1>This is footer {{ footerSlotProps.mnm }}</h1>
      </template>  
    </BaseLayout> 
  </div>
</template>

<style scoped>
</style>

