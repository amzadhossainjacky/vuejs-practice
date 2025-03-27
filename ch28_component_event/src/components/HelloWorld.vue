<script setup>
const msg = "Hello Bangladesh"
</script>

<template>
    <div>
        <h1> {{ msg }} </h1>

    <button @click="$emit('countByEvent')">Click Me</button>
    </div>
</template>

<style scope>

</style>