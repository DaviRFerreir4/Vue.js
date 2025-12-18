<template>
  <button @click="count++">Clicked {{ count }} times</button>
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

onBeforeMount(() => {
  console.log("obBeforeMount - ButtonCounter.vue")
})
onMounted(() => {
  console.log("onMounted - ButtonCounter.vue")
})
onBeforeUpdate(() => {
  console.log("onBeforeUpdate - ButtonCounter.vue")
})
onUpdated(() => {
  console.log("onUpdated - ButtonCounter.vue")
})
onBeforeUnmount(() => {
  console.log("onBeforeUnmount - ButtonCounter.vue")
})
onUnmounted(() => {
  console.log("onUnmounted - ButtonCounter.vue")
})

const count = ref(0)
</script>
