<script setup>
import { inject } from 'vue'
    const count = inject('key')
</script>

<template>
    <h1>{{ count }}</h1>
</template>
