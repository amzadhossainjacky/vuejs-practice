<script setup>
    import { reactive } from 'vue';

    // without reactivity
    /* let reactiveNum = {
        a:10,
        b:20
    };

    setTimeout(()=>{
        console.log("SetTimeout")
        console.log("Num:",reactiveNum)
        reactiveNum.a = 30
        console.log("a:",reactiveNum.a)
        console.log("Num Changes:",reactiveNum)
    }, 2000) */

    // with reactivity
    let reactiveNum = reactive({
        a:10,
        b:20
    });

    setTimeout(()=>{
        console.log("SetTimeout")
        console.log("Num:",reactiveNum)
        reactiveNum.a = 30
        console.log("a:",reactiveNum.a)
        console.log("Num Changes:",reactiveNum)
    }, 2000)
    
</script>

<template>
    <div> 
        <h1> Sum:{{reactiveNum.a + reactiveNum.b}} </h1>
    </div>
</template>
