<script setup>
// const props = defineProps(['name'])
import {inject} from 'vue'

const user_name = inject('name', "rainy")
</script>

<template>
    <div>
        <!-- props pass -->
        <!-- <h1> Guest: {{props.name}}</h1> -->

        <!-- using inject -->
        <h1> Name: {{user_name}}</h1>
    </div>
</template>

<style scope>

</style>