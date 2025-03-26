<script setup>
import HelloWorld from './components/HelloWorld.vue'; 

import { ref, reactive } from 'vue'

const formData = reactive({
    fullname: "",
    password: "",
    checked: false,
    driving: "no",
    hobbies: [],
  gender: "Male",
    jobs: ""
    
})

function onSubmit() {
  console.log(formData)
}

</script>

<template>
  <div>
    <h1>Form</h1>
      <div>
        Name: {{formData  }}
      </div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="">Full name:</label>
        <input type="text" v-model.trim="formData.fullname">
      </div>
      <div>
        <label for="">Password:</label>
        <input type="password" v-model="formData.password">
      </div>
      <div>
        <label for="checkbox">Home Allowance: </label>
        <input type="checkbox" id="checkbox" v-model="formData.checked" /> {{ formData.checked }}
      </div>
      <div>
        <label for="checkbox">Driving: </label>
        <input type="checkbox" id="checkbox" true-value="yes" false-value="no" v-model="formData.driving" />
        {{ formData.driving }}
      </div>

      <div>
        <span>Hobbies: </span>
        <input type="checkbox" id="cooking" value="cooking" v-model="formData.hobbies" />

        <label for="cooking">Cooking</label>
        <input type="checkbox" id="gaming" value="gaming" v-model="formData.hobbies" />
        <label for="gaming">Gaming</label>
      </div>

      <div>
        <span>Gender:</span>

        <input type="radio" id="Male" value="Male" v-model="formData.gender" />
        <label for="Male">Male</label>

        <input type="radio" id="Female" value="Female" v-model="formData.gender" />
        <label for="Female">Male</label>

      </div><div>
        <span>Jobs:</span>
        <select v-model="formData.jobs">
          <option disabled value="">Please select one</option>
          <option>VueJs Developer</option>
          <option>Laravel Developer</option>
          <option>FullStack Developer</option>
        </select>
      </div>

      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>

