<template>
  <div class="col-6 bg-white text-center p-4">
    <h4 class="text-success">Random Number Generator</h4>
    <hr />
    Max Range:
    <input
      type="number"
      name="maxNumber"
      id="maxNumber"
      v-model="maxLuckyNumber"
      class="rounded"
    /><br /><br />
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
const maxLuckyNumber = ref(100)

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
