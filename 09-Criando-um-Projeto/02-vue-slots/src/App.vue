<template>
  <h1>Hello Vue</h1>
  <LuckyNumberParent>
    <template v-slot:default>
      <p class="pt-2">We have two versions for picking lucky number</p>
    </template>
    <template v-slot:moreInfo>
      <p>Click the button to toggle between the two versions</p>
    </template>
    <template v-slot:learnSlot>
      <hr />
      <button @click="showMessage">What will we learn</button>
      <h4 class="text-success">{{ message }}</h4>
    </template>
    <!-- <hr> -->
  </LuckyNumberParent>
</template>

<script setup>
import { ref } from "vue"
import LuckyNumberParent from "./components/LuckyNumberParent.vue"

const message = ref("")

function showMessage() {
  message.value = "We will learn how to use slots"
}
</script>
