<script setup>
const msg = "Hello Bangladesh"

const props = defineProps(['fullName'])
</script>

<template>
    <div>
        <h1> {{ props.fullName}} </h1>
    </div>
</template>

<style scope>

</style>