
<script setup>
const attribute_id = "jack";
const url = "https://youtube.com";
const target = "blank";

//dynamic object binding
const dynamic_atrribute = {
    href: "https://youtube.com",
    target: "blank",
}

//dymanic attribute
const dynamicArgumentName = "href";

//boolean attribute
const isDisabled = true;

//dynamic argument
</script>

<template>
    <div>
        <h1>{{ attribute_id }}</h1>
        <h2 id="jack">Id</h2>
        <h3 v-bind:id="attribute_id">Id</h3>
        <h4 :id="attribute_id">Id</h4>
        <a :href="url" :target="target">Visit 1</a>

        <!-- dynamic binding object -->
        <a v-bind="dynamic_atrribute"> dynamic_atribute</a>
        <br>

        <!-- dynamic argument -->
        <a :[dynamicArgumentName]="url" :target="target"> DynamicArgument</a>
        <br>
        
        <!-- boolean attribute -->
        <a :disabled="isDisabled" :href="url" :target="target"> visit(boolean attribute) </a>
    </div>
</template>