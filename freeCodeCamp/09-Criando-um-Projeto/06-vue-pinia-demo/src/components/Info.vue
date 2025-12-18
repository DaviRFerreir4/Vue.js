<template>
  <div class="d-grid w-50 mx-auto">
    <h1 class="text-center">Information</h1>
    <p class="text-center">This is the Info Page</p>
    <p>
      This is a simple game where you can increment, decrement or randomize the
      score. The score starts at 20 and you can win by reaching
      {{ gameStore.getMaxHealth }}.
    </p>

    <label for="maxHealth" class="d-block mb-1">Set Initial Score:</label>
    <input
      class="mb-3"
      type="text"
      name="maxHealth"
      id="maxHealth"
      v-model.number="gameStore.initial_score"
    />
    <label for="maxHealth" class="d-block mb-1">Set Max Health:</label>
    <input
      class="mb-3"
      type="text"
      name="maxHealth"
      id="maxHealth"
      v-model.number="gameStore.max_health"
    />
    <label for="maxHealth" class="d-block mb-1">Set Max Attack:</label>
    <input
      class="mb-3"
      type="text"
      name="maxHealth"
      id="maxHealth"
      v-model.number="gameStore.max_attack"
    />
    <label for="maxHealth" class="d-block mb-1">Set Max Defense:</label>
    <input
      class="mb-3"
      type="text"
      name="maxHealth"
      id="maxHealth"
      v-model.number="gameStore.max_defense"
    />
  </div>
</template>

<script setup>
import { useGameStore } from "@/store/gameStore"
const gameStore = useGameStore()
</script>
