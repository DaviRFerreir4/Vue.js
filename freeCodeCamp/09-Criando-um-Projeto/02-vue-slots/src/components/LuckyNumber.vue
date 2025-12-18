<template>
  <div>
    <button class="btn bg-danger text-black" @click="generateLuckyNumber">
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
import { ref, watch } from "vue"

const luckyNumber = ref(0)
let maxLuckyNumberChange = false
let maxLuckyNumber = ref(100)

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
