<script setup>
//import User from './User.vue'
import UserLoading from './UserLoading.vue'
import {ref, defineAsyncComponent } from 'vue'

const msg = "HelloWorld Component"
// const AsyncUserComp = defineAsyncComponent(() =>
//   import("../components/User.vue")
// )
const AsyncUserComp = defineAsyncComponent({

  loader: () => import('../components/User.vue'),

  // A component to use while the async component is loading
  loadingComponent: UserLoading,
  // Delay before showing the loading component. Default: 200ms.
  //delay: 200,

  // A component to use if the load fails
  //errorComponent: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  //timeout: 3000
})


const showUserComponent = ref(false) 


</script>

<template>
    <div>
        <h1> {{ msg }} </h1>
        <!-- <User v-if="showUserComponent"/> -->
         <AsyncUserComp v-if="showUserComponent" />
        <button @click="showUserComponent = !showUserComponent">Hide/Show User</button>
    </div>
</template>

<style scope>

</style>