<script setup>

</script>

<template>
    <div>
        <!-- <slot name="header"></slot>
        <slot name="main"></slot>
        <slot name="footer"></slot> -->

        <!-- default slot -->
        <!-- <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot> -->

        <slot name="header" hnm="jacky"></slot>
        <slot name="main" mnm="amzad"></slot>
        <slot name="footer" mnm="hossain"></slot>
    </div>
</template>

<style scoped> 
</style>
