<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  name: "jacky",
  email: "",
  password: "",
  message: "",
  houseAllowance: false,
  driving: "yes",
  gender: "male",
  hobbies:[],
  jobPost:"",
  fees:""
});

function handleFormSubmit() {
  console.log("form submitted:", formData);
}
</script>

<template>
  <pre>{{ formData }}</pre>

  <form @submit.prevent="handleFormSubmit">
    <div class="mt">
      <label for="name">Full Name </label>
      <input type="text" id="name" v-model="formData.name" />
    </div>

    <div class="mt">
      <label for="email">Email </label>
      <input type="email" id="email" v-model="formData.email" />
    </div>

    <div class="mt">
      <label for="password">Password </label>
      <input type="password" id="password" v-model="formData.password" />
    </div>

    <div class="mt">
      <label for="houseAllowance"> House Allowance </label>
      <input
        type="checkbox"
        id="houseAllowance"
        v-model="formData.houseAllowance"
      />
    </div>

    <div class="mt">
      <label for="driving"> House Allowance </label>
      <input
        type="checkbox"
        id="driving"
        v-model="formData.driving"
        true-value="yes"
        false-value="no"
      />
    </div>

    <div class="mt">
      <label for="gender"> Gender </label>
      <input
        type="radio"
        id="male"
        v-model="formData.gender"
        value="male"
      />
      <input
        type="radio"
        id="female"
        v-model="formData.gender"
        value="female"
      />
    </div>

    <!-- multiple select -->
    <div class="mt">
      <span for="hobbies"> Hobbies</span>
      <br>

      <label for="cooking"> cooking</label>
      <input
        type="checkbox"
        id="cooking"
        v-model="formData.hobbies"
        value="cooking"
      />
      
      <label for="playing"> playing</label>
      <input
        type="checkbox"
        id="playing"
        v-model="formData.hobbies"
        value="playing"
      />
      
      <label for="reading"> reading</label>
      <input
        type="checkbox"
        id="reading"
        v-model="formData.hobbies"
        value="reading"
      />
    </div>

    <div class="mt">
      <label for="jobpost"> JobPost </label>
     <select v-model="formData.jobPost">
      <option  disabled="disabled"> Select one</option>
      <option  value="Laravel Developer"> Laravel Developer</option>
      <option  value="NodeJs Developer"> NodeJs Developer</option>
     </select>
    </div>

    <!-- modifier -->
    <div class="mt">
      <label for="fees"> Fees </label>
      <input
        type="number"
        id="fees"
        v-model.number="formData.fees"
      />
    </div>

    <div class="mt">
      <label for="whitespace">whitespace</label>
      <input type="text" id="whitespace" v-model.trim="formData.whitespace" />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
button {
  margin-top: 10px;
}
.mt {
  margin-top: 10px;
}
</style>
