<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, reactive, watch } from "vue";

// const heartRate = ref(85)
// watch(heartRate, (newHeartRateValue, oldHeartRateValue) => {
//   console.log("newHeartRateValue: ", newHeartRateValue)
//   console.log("oldHeartRateValue: ", oldHeartRateValue)

//   if (newHeartRateValue > oldHeartRateValue && newHeartRateValue>=120) {
//       alert("Clam, take a breath, breath in.. breath out..")
//   }
// })

const state = reactive({
  heartRate: 85,
});

watch(
  () => {
    return state.heartRate;
  },
  (newHeartRateValue, oldHeartRateValue) => {
    console.log("newHeartRateValue: ", newHeartRateValue);
    console.log("oldHeartRateValue: ", oldHeartRateValue);
    if (newHeartRateValue > oldHeartRateValue && newHeartRateValue >= 120) {
      alert("Clam, take a breath, breath in.. breath out..");
    }
  }
);

//immediate
const count = ref(0);

watch(count, async (newValue, oldValue) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}, {
  immediate: true,
});
</script>

<template>
  <div>
    <h1>Heart rate tracking system</h1>
    <!-- using ref -->
    <!-- <h1 v-if="heartRate > 0">Heart  bit per minutes: {{ heartRate }}</h1>
    <h1 v-if="heartRate <= 0">Sorry you are dead</h1> -->

    <!-- <p>
      <HelloWorld />
    </p> -->
    <!-- using reactive -->
    <!-- <h1 v-if="state.heartRate > 0">
      Heart bit per minutes: {{ state.heartRate }}
    </h1>
    <h1 v-if="state.heartRate <= 0">Sorry you are dead</h1>

    <button @click="state.heartRate += 5">Increase</button>
    <button @click="state.heartRate -= 5">Decrease</button> -->

    <button @click="count += 5">Increase</button>
  </div>
</template>

<style scoped>
</style>

