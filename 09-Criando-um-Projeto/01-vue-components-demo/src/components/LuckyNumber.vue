<template>
  <div>
    <button
      class="btn bg-dark text-light btn-outline-primary"
      @click="generateLuckyNumber"
    >
      <span v-if="luckyNumber === 0 || maxLuckyNumberChange"
        >Generate Lucky Number<br />
        Range 1-{{ maxLuckyNumber }}</span
      >
      <span v-else>
        Lucky Number: {{ luckyNumber }}<br />
        Click to generate new lucky number
      </span>
    </button>
  </div>
</template>
<script setup>
import { inject, ref, watch } from "vue"

const luckyNumber = ref(0)
let maxLuckyNumberChange = false
let maxLuckyNumber = inject("maxLuckyNumber")

function generateLuckyNumber() {
  maxLuckyNumberChange = false
  luckyNumber.value = Math.ceil(Math.random() * maxLuckyNumber.value)
}

watch(
  () => maxLuckyNumber.value,
  (newValue, oldValue) => {
    if (newValue != oldValue) {
      maxLuckyNumberChange = true
    }
  }
)
</script>
