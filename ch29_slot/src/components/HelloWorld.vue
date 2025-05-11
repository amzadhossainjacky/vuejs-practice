<script setup>
const msg = "Hello Bangladesh"
const props = defineProps(['name'])
</script>

<template>
    <div>
        <!-- props call -->
        <!-- <h1> {{ name }} </h1> -->
         <!-- <slot name="header"></slot> -->
         <!-- <slot nm="jacky" age="29"></slot> -->
         <slot name="header" nm="jacky" age="29"></slot>
    </div>
</template>

<style scope>

</style>