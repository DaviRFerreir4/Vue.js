<template>
  <h1>{{ message }} - Lifecicle</h1>
  <button @click="showMessage">Show Message</button><br />
  <button @click="counter++">Clicked {{ counter }} times in parent</button
  ><br />
  <ButtonCounter v-if="counter === 1"></ButtonCounter>
  <br />
  <hr />
  <h1>Composible</h1>
  <IncrementAndDecrement></IncrementAndDecrement>
  <IncrementAndDecrementTen></IncrementAndDecrementTen>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue"
import ButtonCounter from "./ButtonCounter.vue"
import IncrementAndDecrement from "./IncrementAndDecrement.vue"
import IncrementAndDecrementTen from "./IncrementAndDecrementTen.vue"

const message = ref("Hello Vue")

function showMessage() {
  message.value = "Hello Vue from function"
}

const counter = ref(0)

// Métodos são assincronos
onBeforeMount(() => {
  console.log("obBeforeMount - App.vue")
})
onMounted(() => {
  console.log("onMounted - App.vue")
})
onBeforeUpdate(() => {
  console.log("onBeforeUpdate - App.vue")
})
onUpdated(() => {
  console.log("onUpdated - App.vue")
})
onBeforeUnmount(() => {
  console.log("onBeforeUnmount - App.vue")
})
onUnmounted(() => {
  console.log("onUnmounted - App.vue")
})
</script>
