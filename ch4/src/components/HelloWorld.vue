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
    /* let reactiveNum = reactive({
        a:10,
        b:20
    });



    setTimeout(()=>{
        console.log("SetTimeout")
        console.log("Num:",reactiveNum)
        reactiveNum.a = 30
        console.log("a:",reactiveNum.a)
        console.log("Num Changes:",reactiveNum)
    }, 2000) */

    //another example for without reactive
    /* let num = {
        count: 0
    }
    setTimeout(()=>{
        console.log("count: ", num.count)
        num.count = 40;
        
        console.log("SetTimeout")
        console.log("count: ", num.count)

    }, 3000); */

    
    // another example for without reactivity
    /* let num = reactive({
        count: 0
    })
    setTimeout(()=>{
        console.log("count: ", num.count)
        console.log(num)
        num.count = 40;
        
        console.log("SetTimeout")
        console.log("count: ", num.count)

    }, 3000); */

    //deeply reactive
    let obj = reactive({
       num: {
        count: 0
       },
       users: [
        'Jacky',
        'Rainy'
       ]
    });

    setTimeout(() => {
        console.log(obj)
        console.log("count: ", obj.num)
        console.log("count: ", obj.num.count)
        obj.num.count = 0;
        
        console.log("SetTimeout")
        console.log("count: ", obj.num.count)

        //array
        console.log("array: ", obj.users)
        obj.users.push('Shakib')
        console.log("array: ", obj.users)
    }, 3000);
    
</script>

<template>
    <div> 
        <!-- <h1> Sum:{{reactiveNum.a + reactiveNum.b}} </h1> -->

        <!-- another example -->
        <!--  <h1> Count:{{num.count}} </h1> -->

       <!-- deeply reactive -->
        <h1> Count:{{obj.num.count}} </h1>
        <h1> Count:{{obj.users}} </h1>
    </div>
</template>
