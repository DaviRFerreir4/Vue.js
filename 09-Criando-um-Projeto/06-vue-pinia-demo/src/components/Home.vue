<template>
  <div class="text-center">
    <p>Let's play the game</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
    <span class="text-primary d-block pb-3"
      >Max Healt: {{ gameStore.getMaxHealth }}</span
    >
    <div
      v-if="gameStore.score >= gameStore.max_health"
      class="d-grid justify-content-center"
    >
      <span class="text-success pb-3 h3">You Won!</span>
      <button
        class="form-control btn btn-primary p-4"
        @click="gameStore.resetScore()"
      >
        Reset Game
      </button>
    </div>
    <div v-else-if="gameStore.score <= 0" class="d-grid justify-content-center">
      <span class="text-danger pb-3 h3">You Lost...</span>
      <button
        class="form-control btn btn-primary p-4"
        @click="gameStore.resetScore()"
      >
        Reset Game
      </button>
    </div>
    <div class="row d-flex justify-content-center" v-else>
      <div class="col-5">
        <button class="form-control btn btn-success p-4" @click="increment">
          Increment
        </button>
      </div>
      <div class="col-5">
        <button class="form-control btn btn-danger p-4" @click="decrement">
          Decrement
        </button>
      </div>
      <div class="col-6 mt-4">
        <button class="form-control btn btn-warning p-4" @click="random">
          Random
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from "@/store/gameStore"

function increment() {
  gameStore.setNextAttack()
}
function decrement() {
  gameStore.setNextDefense()
}
function random() {
  Math.random() > 0.5 ? gameStore.setNextAttack() : gameStore.setNextDefense()
}
const gameStore = useGameStore()
</script>
