<template>
  <button @click="increment">++</button>
  <span>&nbsp;{{ count }}&nbsp;</span>
  <button @click="decrement">--</button>
</template>

<script setup>
import { useCounter } from "./composibles/useCounter.js"

const { count, increment, decrement } = useCounter(100, 10)
</script>
