<script setup>

import {ref} from 'vue'
const users = ref(['Jacky', 'Rainy'])
</script>

<template>
    <div>
        <h3 v-for="(user, index) in users" :key="index">
            {{ user }}
        </h3>
    </div>
</template>

<style scope>

</style>